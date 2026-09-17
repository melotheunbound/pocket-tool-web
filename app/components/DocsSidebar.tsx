"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "getting-started", label: "Getting Started", group: "Start here" },
  { id: "install-anywhere", label: "Installation", group: "Start here" },
  { id: "featured", label: "Featured Workflows", group: "Using Pocket Tool" },
  { id: "commands", label: "Command Reference", group: "Using Pocket Tool" },
  { id: "self-host", label: "Self-Hosting", group: "For developers" },
  { id: "data", label: "Data & Privacy", group: "For developers" },
];

const GROUPS = Array.from(new Set(SECTIONS.map((s) => s.group)));

export function DocsSidebar() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          const [topId] = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
          setActiveId(topId);
        }
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav aria-label="Documentation sections">
      {GROUPS.map((group) => (
        <div key={group} className="docs-sidebar__group">
          <p>{group}</p>
          {SECTIONS.filter((s) => s.group === group).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeId === section.id ? "is-active" : ""}
              aria-current={activeId === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}
