import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <div className="shell legal-layout">
          <aside>
            <p>LEGAL</p>
            <h1>Privacy Policy</h1>
            <span>Last updated 12 August 2026</span>
          </aside>

          <article>
            <p className="legal-intro">
              This Privacy Policy explains how <strong>Pocket Tool</strong>{" "}
              collects, uses, stores, and protects user data.
            </p>

            <p>
              By using Pocket Tool, you agree to the practices described in
              this Privacy Policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>Pocket Tool may collect and store the following information:</p>
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

            <h2>2. How We Use Information</h2>
            <p>Collected information may be used to:</p>
            <ul>
              <li>Provide app functionality</li>
              <li>Process commands and components</li>
              <li>Improve performance and reliability</li>
              <li>Prevent abuse and malicious activity</li>
              <li>Monitor errors and diagnose issues</li>
              <li>
                Analyze command usage for improving the service
              </li>
            </ul>

            <h2>3. Third-Party Services</h2>
            <p>
              Pocket Tool may use third-party providers and APIs, including:
            </p>
            <ul>
              <li>Discord services</li>
              <li>Hosting providers</li>
              <li>AI providers</li>
              <li>Database providers</li>
            </ul>
            <p>
              These services may process limited data required for
              functionality.
            </p>
            <p>
              We are not responsible for the privacy practices of third-party
              services.
            </p>

            <h2>4. Data Sharing</h2>
            <p>We do not sell, rent, or trade user data.</p>
            <p>Data may only be shared:</p>
            <ul>
              <li>When required by law</li>
              <li>To prevent abuse or security threats</li>
              <li>
                With infrastructure providers necessary to operate the
                service
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              Data is retained only for as long as necessary to operate the
              service and maintain functionality.
            </p>
            <p>Users may request deletion of their stored data.</p>

            <h2>6. Data Security</h2>
            <p>
              We implement reasonable security measures intended to protect
              stored information from unauthorized access, loss, misuse, or
              disclosure.
            </p>
            <p>
              However, no method of electronic storage or transmission is
              completely secure.
            </p>

            <h2>7. User Rights</h2>
            <p>Users may request:</p>
            <ul>
              <li>Access to stored data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of stored data</li>
            </ul>
            <p>
              Requests can be made through the contact methods listed below.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Pocket Tool is not intended for users under the minimum age
              required by Discord&apos;s Terms of Service.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated at any time.
            </p>
            <p>
              Continued use of the service after changes become effective
              constitutes acceptance of the revised policy.
            </p>

            <h2>10. Contact</h2>
            <p>For privacy-related questions or requests:</p>
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
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
