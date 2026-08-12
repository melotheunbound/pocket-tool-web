import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <div className="shell legal-layout">
          <aside>
            <p>LEGAL</p>
            <h1>Terms of Service</h1>
            <span>Last updated 12 August 2026</span>
          </aside>

          <article>
            <p className="legal-intro">
              Welcome to <strong>Pocket Tool</strong>. By using this app, you
              agree to these Terms of Service.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the app, you confirm that you have read,
              understood, and agreed to these Terms.
            </p>
            <p>
              If you do not agree with these Terms, you must stop using the
              service immediately.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Pocket Tool provides automated features, commands, and
              integrations through Discord.
            </p>
            <p>
              Features and functionality may change, be modified, or be
              removed at any time without prior notice.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the app for illegal activities</li>
              <li>Abuse, exploit, or harass other users</li>
              <li>
                Attempt to reverse engineer or disrupt the service
              </li>
              <li>Spam commands or overload the infrastructure</li>
              <li>
                Use the app to distribute malicious content
              </li>
            </ul>
            <p>
              You are fully responsible for how you use the service.
            </p>

            <h2>4. Data Collection</h2>
            <p>
              Pocket Tool may collect and store the following information:
            </p>
            <ul>
              <li>
                OAuth2 login credentials, such as access tokens, refresh
                tokens and user IDs
              </li>
              <li>
                Interaction trigger logs, such as command and component
                interactions
              </li>
              <li>
                Command usage analytics, including command names, command IDs,
                and usage counts
              </li>
            </ul>
            <p>
              We only collect data necessary for operating and improving the
              service.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              The app may rely on third-party APIs and services, including AI
              providers, hosting providers, and Discord services.
            </p>
            <p>
              We are not responsible for outages, interruptions, data loss, or
              issues caused by third-party services.
            </p>

            <h2>6. Availability</h2>
            <p>
              The service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind.
            </p>
            <p>We do not guarantee:</p>
            <ul>
              <li>Uptime</li>
              <li>Reliability</li>
              <li>Accuracy</li>
              <li>Uninterrupted availability</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, the
              developers of Pocket Tool shall not be liable for:
            </p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Data loss</li>
              <li>Service interruptions</li>
              <li>Bans or moderation actions</li>
              <li>User-generated content</li>
              <li>Misuse of the service</li>
            </ul>
            <p>Use the service at your own risk.</p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the app
              at any time, with or without notice, for violations of these
              Terms.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              These Terms may be updated or modified at any time.
            </p>
            <p>
              Continued use of the app after changes become effective
              constitutes acceptance of the revised Terms.
            </p>

            <h2>10. Contact</h2>
            <p>For support or legal inquiries:</p>
            <ul>
              <li>
                Support Server:{" "}
                <a
                  href="https://discord.gg/Y67yNmsPuf"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://discord.gg/Y67yNmsPuf
                </a>
              </li>
              <li>
                Discord: <strong>@mloetta</strong>
              </li>
            </ul>

            <h2>11. Platform Compliance</h2>
            <p>
              Users must also comply with Discord&apos;s Terms of Service and
              Community Guidelines.
            </p>
            <p>
              Failure to comply with Discord&apos;s policies may result in
              restricted or terminated access to the app.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
