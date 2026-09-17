"use client";

import { useRef } from "react";

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    const applyTheme = () => {
      document.documentElement.dataset.theme = next;
      localStorage.setItem("pocket-tool-theme", next);
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = typeof document.startViewTransition === "function" && !prefersReducedMotion;

    if (!canAnimate || !buttonRef.current) {
      applyTheme();
      return;
    }

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-toggle-x", `${x}px`);
    root.style.setProperty("--theme-toggle-y", `${y}px`);
    root.style.setProperty("--theme-toggle-r", `${radius}px`);

    const transition = document.startViewTransition(applyTheme);
    transition.finished.catch(() => {});
  }

  return (
    <button
      ref={buttonRef}
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light or dark mode"
      title="Toggle light or dark mode"
    >
      <svg
        className="theme-icon theme-icon--sun"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
      </svg>
      <svg
        className="theme-icon theme-icon--moon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.2 14.4a8.6 8.6 0 1 1-10.6-10.6 7 7 0 0 0 10.6 10.6Z" />
      </svg>
    </button>
  );
}
