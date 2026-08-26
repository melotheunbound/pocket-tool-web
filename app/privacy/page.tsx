import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <div className="shell legal-layout">
          <aside><p>LEGAL</p><h1>Privacy Policy</h1><span>Last updated 26 August 2026</span></aside>
          <article>
            <p className="legal-intro">This policy explains what personal data Pocket Tool processes, why it is needed and the choices available to you.</p>

            <h2>1. Information we process</h2>
            <p>Pocket Tool may process publicly available details from your Discord account, command inputs, selected message content or attachments, usage data, and technical information necessary to provide and maintain its features.</p>

            <h2>2. How information is used</h2>
            <p>We use information to provide requested features, enforce usage limits, prevent abuse, troubleshoot errors, and measure aggregate feature usage. Pocket Tool does not sell, rent, trade, or use personal data for advertising or cross-site tracking.</p>

            <h2>3. Service providers</h2>
            <p>Limited information may be processed by Discord, our hosting and database providers, and specialist API providers required for requested features. These providers operate under their own terms and privacy policies. Information may also be disclosed when required by law or necessary to protect the service and its users.</p>

            <h2>4. Storage and retention</h2>
            <p>Operational and security records are kept only as long as reasonably necessary for their intended purpose, after which they may be deleted.</p>

            <h2>5. Security</h2>
            <p>Server credentials are kept separate from the public website, and access to operational data is restricted. Although no online service can guarantee absolute security, we use reasonable technical and organisational safeguards to protect information.</p>

            <h2>6. Your rights</h2>
            <p>Depending on your location, you may request access to, correction or deletion of your personal data, or object to or restrict certain processing. You can remove Pocket Tool through your Discord settings and may also contact your local data-protection authority. We may verify your identity before completing a request.</p>

            <h2>7. Children</h2>
            <p>Pocket Tool is not intended for anyone under the minimum age required to use Discord in their country.</p>

            <h2>8. Changes and contact</h2>
            <p>This policy may be updated when the service or applicable requirements change. The date above indicates the latest version. Privacy questions and data requests can be sent through the <a href="https://discord.gg/Y67yNmsPuf" target="_blank" rel="noreferrer">support server</a> or directly to <strong>@melotheunbound</strong> on Discord. For information about browser storage, see the <Link href="/cookies">Cookie Notice</Link>.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
