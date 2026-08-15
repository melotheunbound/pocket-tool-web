import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <div className="shell legal-layout">
          <aside><p>LEGAL</p><h1>Terms of Service</h1><span>Last updated 15 August 2026</span></aside>
          <article>
            <p className="legal-intro">These terms apply when you install or use Pocket Tool. By using the service, you agree to them.</p>

            <h2>1. The service</h2>
            <p>Pocket Tool provides utility commands and message tools through Discord. Features may be changed, suspended or removed as the project develops. The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without a guarantee of uninterrupted availability.</p>

            <h2>2. Acceptable use</h2>
            <p>You must not use Pocket Tool unlawfully, harass others, distribute malicious content, interfere with the service, attempt unauthorized access, spam commands or place unreasonable load on its infrastructure. You are responsible for the content you submit and how you use generated results.</p>

            <h2>3. Discord and third-party services</h2>
            <p>You must also follow Discord&apos;s Terms of Service and Community Guidelines. Some features depend on Discord or other service providers; their availability, content and actions are outside Pocket Tool&apos;s control.</p>

            <h2>4. Privacy</h2>
            <p>Pocket Tool processes limited information needed to deliver commands, secure the service and maintain reliability. Details are provided in the <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Notice</Link>.</p>

            <h2>5. Suspension and termination</h2>
            <p>Access may be limited or terminated when reasonably necessary to protect the service or its users, comply with law, respond to Discord action or address a violation of these terms. You may stop using Pocket Tool and remove it through Discord at any time.</p>

            <h2>6. Liability</h2>
            <p>To the extent permitted by law, Pocket Tool&apos;s maintainers are not liable for indirect or consequential loss, lost data, service interruptions, third-party outages, moderation actions or misuse of the service. Nothing in these terms excludes liability that cannot legally be excluded.</p>

            <h2>7. Changes and contact</h2>
            <p>These terms may be updated when the service or applicable requirements change. Continued use after an update means the revised terms apply. Questions can be sent through the <a href="https://discord.gg/Y67yNmsPuf" target="_blank" rel="noreferrer">support server</a> or to <strong>@mloetta</strong> on Discord.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
