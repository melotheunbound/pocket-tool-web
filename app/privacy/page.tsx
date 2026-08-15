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
          <aside><p>LEGAL</p><h1>Privacy Policy</h1><span>Last updated 15 August 2026</span></aside>
          <article>
            <p className="legal-intro">This policy explains what personal data Pocket Tool processes, why it is needed and the choices available to you.</p>

            <h2>1. Information we process</h2>
            <p>When you use Pocket Tool in Discord, the service may process your Discord user ID, command inputs, interaction details, usage counts and technical error information needed to provide and maintain its features.</p>

            <h2>2. How information is used</h2>
            <p>Information is used to provide requested commands, maintain your authorization, prevent abuse, diagnose faults and understand aggregate feature usage. Pocket Tool does not sell, rent or trade personal data, and does not use it for advertising or cross-site tracking.</p>

            <h2>3. Service providers</h2>
            <p>Limited information may be processed by Discord and the hosting, database or specialist API providers needed for a requested feature. Each provider processes information under its own terms and privacy practices. Information may also be disclosed when required by law or necessary to protect the service and its users.</p>

            <h2>4. Storage and retention</h2>
            <p>Operational and security records are retained only as long as reasonably necessary for their purpose. Data may be deleted or anonymised when it is no longer required.</p>

            <h2>5. Security</h2>
            <p>Server credentials are kept outside the public website and access to operational data is restricted. No online service can guarantee absolute security, but reasonable technical and organisational safeguards are used.</p>

            <h2>6. Your rights</h2>
            <p>Depending on where you live, you may request access to, correction of or deletion of your personal data, or object to or restrict certain processing. You can remove Pocket Tool from your Discord account through Discord&apos;s settings. You may also have the right to complain to your local data-protection authority. Identity may need to be verified before a request is completed.</p>

            <h2>7. Children</h2>
            <p>Pocket Tool is not intended for anyone below the minimum age required to use Discord in their country.</p>

            <h2>8. Changes and contact</h2>
            <p>This policy may be updated when the service or applicable requirements change. The date above identifies the latest version. Privacy questions and data requests can be sent through the <a href="https://discord.gg/Y67yNmsPuf" target="_blank" rel="noreferrer">support server</a> or to <strong>@mloetta</strong> on Discord. For browser storage information, read the <Link href="/cookies">Cookie Notice</Link>.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
