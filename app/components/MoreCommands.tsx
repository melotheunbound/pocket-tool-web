"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const commandCards = [
  {
    command: "/translate",
    label: "Language",
    copy: "Translate text - or an existing message - without leaving Discord.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5s-1.2 6.1-3.4 8.5c-2.2-2.4-3.4-5.4-3.4-8.5s1.2-6.1 3.4-8.5Z" />
      </svg>
    ),
  },
  {
    command: "/avatar",
    label: "Profiles",
    copy: "Open global and server avatars in the format you need.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8.5" r="3.3" />
        <path d="M5.5 19.5c1.3-3.2 3.9-4.8 6.5-4.8s5.2 1.6 6.5 4.8" />
      </svg>
    ),
  },
  {
    command: "/gif",
    label: "Media",
    copy: "Turn an uploaded image into a shareable GIF in a few seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" />
        <path d="M3.5 15.5 8.5 11l3.5 3 2.5-2.5 4 4" />
        <circle cx="9" cy="9.2" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    command: "/role",
    label: "Lookups",
    copy: "Inspect role age, colours, position and permissions at a glance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.3 15.3 20 20" />
      </svg>
    ),
  },
  {
    command: "/timezone",
    label: "Time",
    copy: "Check the current time anywhere with quick autocomplete.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    command: "Speech to Text",
    label: "Audio",
    copy: "Transcribe a voice message from its message menu.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3.5" width="6" height="10.5" rx="3" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5" />
      </svg>
    ),
  },
];

const filters = ["All", ...Array.from(new Set(commandCards.map((card) => card.label)))];

export function MoreCommands() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);

  const visibleCards = useMemo(
    () => (activeFilter === "All" ? commandCards : commandCards.filter((card) => card.label === activeFilter)),
    [activeFilter],
  );

  function handleCopy(event: React.MouseEvent, command: string) {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard?.writeText(command).then(() => {
      setCopied(command);
      window.setTimeout(() => setCopied((current) => (current === command ? null : current)), 1600);
    }).catch(() => {});
  }

  return (
    <>
      <div className="command-filters" role="group" aria-label="Filter commands by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeFilter ? "is-active" : ""}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={filter === activeFilter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="command-card-grid">
        {visibleCards.map((card, index) => (
          <article className="mini-command-card" key={card.command} data-reveal style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}>
            <div>
              <span className="mini-command-card__icon" aria-hidden="true">{card.icon}</span>
              <i>{String(index + 1).padStart(2, "0")}</i>
            </div>
            <code>{card.command}</code>
            <p>{card.copy}</p>
            <div className="mini-command-card__actions">
              <Link href="/docs#commands" aria-label={`Read about ${card.command}`}>Explore</Link>
              <button
                type="button"
                className="mini-command-card__copy"
                onClick={(event) => handleCopy(event, card.command)}
                aria-label={`Copy ${card.command} to clipboard`}
              >
                {copied === card.command ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17.5 19 6.5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5.5 15H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5h8.5A1.5 1.5 0 0 1 15 5v.5" />
                  </svg>
                )}
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
