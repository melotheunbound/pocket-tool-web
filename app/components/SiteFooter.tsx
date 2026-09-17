import Image from "next/image";
import Link from "next/link";
import { discordInstallUrl } from "../lib/discord";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand__mark brand-icon brand-icon--primary" aria-hidden="true"></span>
            <span className="brand__name">Pocket Tool</span>
          </Link>
          <p>Small utilities. Right where you need them.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/docs">Documentation</Link>
          <a href={discordInstallUrl}>Add Pocket Tool</a>
          <a href="https://github.com/melotheunbound/pocket-tool" target="_blank" rel="noreferrer">Source Code</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Project</p>
          <a href="https://discord.gg/Y67yNmsPuf" target="_blank" rel="noreferrer">Support Server</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <div className="site-footer__legal">
          <span>Open-source and built for Discord.</span>
          <span>Not affiliated with Discord Inc.</span>
        </div>
        <div className="site-footer__credit">
          <span>Website made with</span>
          <svg className="site-footer__heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21.1s-7.05-4.35-9.75-8.6C.6 9.35 1.35 5.55 4.5 4.1c2.35-1.05 5-.25 6.55 1.85L12 7.2l.95-1.25c1.55-2.1 4.2-2.9 6.55-1.85 3.15 1.45 3.9 5.25 2.25 8.4-2.7 4.25-9.75 8.6-9.75 8.6Z" />
          </svg>
          <span>by</span>
          <a className="site-footer__credit-person" href="https://clawb1t.com" target="_blank" rel="noreferrer">
            <Image
              className="site-footer__credit-avatar"
              src="/clawbit-avatar.jpg"
              alt=""
              width={20}
              height={20}
            />
            ClawB1t
          </a>
          <span>and</span>
          <a className="site-footer__credit-person" href="https://github.com/h0gt/" target="_blank" rel="noreferrer">
            <Image
              className="site-footer__credit-avatar"
              src="/h0gt-avatar.png"
              alt=""
              width={20}
              height={20}
            />
            h0gt
          </a>
        </div>
      </div>
    </footer>
  );
}
