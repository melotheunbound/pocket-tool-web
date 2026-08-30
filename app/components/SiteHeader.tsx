import Link from "next/link";
import { discordInstallUrl } from "../lib/discord";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ active }: { active?: "home" | "docs" }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-header__inner shell">
        <Link className="brand" href="/" aria-label="Pocket Tool home">
          <span className="brand__mark brand-icon brand-icon--primary" aria-hidden="true"></span>
          <span className="brand__name">Pocket Tool</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link className={active === "home" ? "is-active" : ""} href="/">Home</Link>
          <Link className={active === "docs" ? "is-active" : ""} href="/docs">Docs</Link>
          <a href="https://github.com/melotheunbound/pocket-tool" target="_blank" rel="noreferrer">GitHub</a>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <a className="button button--small button--primary header-invite" href={discordInstallUrl}>
            Add to Discord
          </a>
        </div>
      </div>
    </header>
  );
}
