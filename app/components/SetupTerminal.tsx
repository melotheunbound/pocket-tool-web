"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "git clone https://github.com/melotheunbound/pocket-tool",
  "cd pocket-tool",
  "bun install",
  "cp .env.example .env",
  "bun run start",
];

const SUCCESS_LINE = "✓ Pocket Tool is ready!";
const FULL_SCRIPT = LINES.join("\n");
const TYPE_DELAY_MS = 14;
const LINE_PAUSE_MS = 200;

export function SetupTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotionRef = useRef(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  function play() {
    setVisibleLines(0);
    setTypedChars(0);
    setShowSuccess(false);
    setHasPlayed(true);
  }

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasPlayed || showSuccess) return;
    const reduced = reducedMotionRef.current;

    if (visibleLines >= LINES.length) {
      const timer = window.setTimeout(() => setShowSuccess(true), reduced ? 0 : 260);
      return () => window.clearTimeout(timer);
    }

    const currentLine = LINES[visibleLines];
    if (!reduced && typedChars < currentLine.length) {
      const timer = window.setTimeout(() => setTypedChars((c) => c + 1), TYPE_DELAY_MS + Math.random() * 16);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setVisibleLines((n) => n + 1);
      setTypedChars(0);
    }, reduced ? 0 : LINE_PAUSE_MS);
    return () => window.clearTimeout(timer);
  }, [hasPlayed, visibleLines, typedChars, showSuccess]);

  function handleCopy() {
    navigator.clipboard?.writeText(FULL_SCRIPT).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }).catch(() => {});
  }

  const finished = hasPlayed && showSuccess;

  return (
    <div className="terminal" data-reveal ref={containerRef}>
      <div className="terminal__bar">
        <span><i></i><i></i><i></i></span>
        <small>pocket-tool - setup</small>
        <button type="button" className="terminal__copy" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>
          {LINES.map((line, index) => {
            if (index > visibleLines) return null;
            const isTyping = index === visibleLines && !showSuccess;
            const text = isTyping ? line.slice(0, typedChars) : line;
            return (
              <span className="terminal-line" key={line}>
                <i>$</i> {text}
                {isTyping && <span className="terminal-cursor" aria-hidden="true" />}
              </span>
            );
          })}
          {showSuccess && <span className="terminal-line terminal-line--success">{SUCCESS_LINE}</span>}
        </code>
      </pre>
      {finished && (
        <button type="button" className="terminal__replay" onClick={play} aria-label="Replay setup animation">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12a8 8 0 1 1 2.6 5.9" />
            <path d="M4 17v-5h5" />
          </svg>
          Replay
        </button>
      )}
    </div>
  );
}
