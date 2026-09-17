import Image from "next/image";
import Link from "next/link";
import { CommandShowcase } from "./components/CommandShowcase";
import { GithubStars } from "./components/GithubStars";
import { MoreCommands } from "./components/MoreCommands";
import { SetupTerminal } from "./components/SetupTerminal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { discordInstallUrl } from "./lib/discord";

const REPO = "melotheunbound/pocket-tool";

async function getStarCount(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

const essentials = [
  {
    command: "/timestamp",
    title: "Time without the maths",
    copy: "Natural-language timestamp lookups that display correctly for everyone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    command: "/tts",
    title: "Text to speech",
    copy: "Speak your messages with ease.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10v4h3.5L12 17.5v-11L7.5 10H4Z" />
        <path d="M16.2 8.8a5 5 0 0 1 0 6.4M18.8 6.2a8.5 8.5 0 0 1 0 11.6" />
      </svg>
    ),
  },
  {
    command: "/translate",
    title: "Translation in context",
    copy: "Translate typed text, existing messages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5s-1.2 6.1-3.4 8.5c-2.2-2.4-3.4-5.4-3.4-8.5s1.2-6.1 3.4-8.5Z" />
      </svg>
    ),
  },
  {
    command: "/user",
    title: "Useful stuff on users",
    copy: "Inspect profiles, avatars, banners, roles, and other cool things.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8.5" r="3.3" />
        <path d="M5.5 19.5c1.3-3.2 3.9-4.8 6.5-4.8s5.2 1.6 6.5 4.8" />
      </svg>
    ),
  },
];

export default async function Home() {
  const stars = await getStarCount();

  return (
    <>
      <SiteHeader active="home" />
      <main id="main-content">
        <section className="hero">
          <div className="shell">
            <div className="hero-banner">
              <Image
                src="/hero-command-preview.png"
                alt=""
                fill
                priority
                className="hero-banner__image"
                sizes="(max-width: 900px) 100vw, 1160px"
              />
              <div className="hero-banner__scrim" aria-hidden="true"></div>
              <div className="hero-banner__content">
                <h1>The small Discord tools you keep reaching for.</h1>
                <p className="hero__lede">Quotes, timestamps, translation, TTS and the other useful little jobs - handled without pulling you out of the conversation.</p>
                <div className="hero__actions">
                  <a className="button button--primary" href={discordInstallUrl}>Add to Discord</a>
                  <Link className="button button--secondary" href="/docs">Browse the Docs</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section essentials-section" aria-label="Why Pocket Tool">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Why Pocket Tool</p>
              <h2 className="section-title">Everything lives in the conversation</h2>
              <p>Install Pocket Tool once, then reach for it wherever Discord lets you work - without a dashboard, setup maze or second tab.</p>
            </div>
            <div className="utility-grid">
              {essentials.map((item, index) => (
                <Link
                  className="utility-card"
                  href="/docs#commands"
                  key={item.command}
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
                >
                  <span className="utility-card__icon" aria-hidden="true">{item.icon}</span>
                  <code>{item.command}</code>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="utility-card__arrow" aria-hidden="true">Read the docs →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section command-showcase-section" id="commands">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Inside the pocket</p>
              <h2 className="section-title">Real tools, inside Discord</h2>
              <p>Real Pocket Tool flows, captured in Discord. Pick a command to see how it works.</p>
            </div>
            <CommandShowcase />
          </div>
        </section>

        <section className="section section--tinted">
          <div className="shell">
            <div className="section-heading section-heading--row" data-reveal>
              <div>
                <p className="eyebrow">And plenty more</p>
                <h2 className="section-title">More utility, no extra workspace</h2>
              </div>
              <Link className="button button--secondary" href="/docs#commands">View every command</Link>
            </div>
            <MoreCommands />
          </div>
        </section>

        <section className="section open-source-section">
          <div className="shell open-source-grid">
            <div className="open-source-copy" data-reveal>
              <p className="eyebrow">Yours to run</p>
              <h2 className="section-title">Open source, end to end</h2>
              <p>Pocket Tool is built in TypeScript on Bun. Inspect every command, suggest an improvement, or run your own instance with the services you choose.</p>
              <div className="open-source-links">
                <a className="button button--primary" href={`https://github.com/${REPO}`} target="_blank" rel="noreferrer">View the repository</a>
                <Link className="text-link" href="/docs#self-host">Self-hosting guide</Link>
                <GithubStars stars={stars} />
              </div>
            </div>
            <SetupTerminal />
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-band__inner" data-reveal>
            <div>
              <p className="eyebrow">Ready when you are</p>
              <h2>Put the useful tools in reach.</h2>
              <p>Add Pocket Tool to your account and use it anytime, anywhere.</p>
            </div>
            <div className="cta-band__actions">
              <a className="button button--on-dark" href={discordInstallUrl}>Add Pocket Tool</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
