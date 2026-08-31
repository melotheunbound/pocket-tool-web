"use client";

import { useMemo, useState } from "react";
import type { Command } from "../lib/commands";

export function CommandReference({ commands }: { commands: Command[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return commands;
    return commands.filter((command) =>
      [command.name, command.description, command.category, command.syntax].some((field) => field.toLowerCase().includes(value)),
    );
  }, [commands, query]);

  const groups = useMemo(() => {
    return filtered.reduce<Record<string, Command[]>>((acc, command) => {
      (acc[command.category] ??= []).push(command);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <div className="command-reference">
      <label className="command-search">
        <span className="sr-only">Search commands</span>
        <span aria-hidden="true">/</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands or capabilities…" />
        <kbd>{filtered.length}</kbd>
      </label>

      {Object.keys(groups).length ? Object.entries(groups).map(([category, items]) => (
        <section className="command-group" key={category}>
          <div className="command-group__heading">
            <h3>{category}</h3>
            <span>{items.length} {items.length === 1 ? "command" : "commands"}</span>
          </div>
          <div className="command-list">
            {items.map((command) => (
              <article className="command-card" key={`${category}-${command.name}`}>
                <div className="command-card__top">
                  <code>{command.name}</code>
                  {command.context && <span>{command.context}</span>}
                </div>
                <p>{command.description}</p>
                <pre><code>{command.syntax}</code></pre>
              </article>
            ))}
          </div>
        </section>
      )) : (
        <div className="empty-state">
          <p>No commands match &ldquo;{query}&rdquo;.</p>
          <button type="button" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </div>
  );
}
