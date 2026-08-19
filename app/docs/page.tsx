import type { Metadata } from "next";
import { CommandReference } from "../components/CommandReference";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { discordInstallUrl } from "../lib/discord";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Pocket Tool command reference, quick-start guide and self-hosting documentation.",
};

export default function DocsPage() {
  return (
    <>
      <SiteHeader active="docs" />
      <main id="main-content" className="docs-page">
        <section className="docs-hero">
          <div className="shell docs-hero__inner">
            <div>
              <p className="eyebrow">Documentation</p>
              <h1>Use Pocket Tool <span>without the guesswork.</span></h1>
              <p>Commands, practical examples and everything you need to run the open-source bot yourself.</p>
            </div>
          </div>
        </section>

        <div className="shell docs-layout">
          <aside className="docs-sidebar">
            <nav aria-label="Documentation sections">
              <p>Start here</p>
              <a href="#getting-started">Getting Started</a>
              <a href="#install-anywhere">Installation</a>
              <p>Using Pocket Tool</p>
              <a href="#featured">Featured Workflows</a>
              <a href="#commands">Command Reference</a>
              <p>For developers</p>
              <a href="#self-host">Self-Hosting</a>
              <a href="#data">Data & Privacy</a>
            </nav>
            <div className="sidebar-help">
              <span aria-hidden="true">?</span>
              <p><strong>Need a hand?</strong>Ask in the support server.</p>
              <a href="https://discord.gg/Y67yNmsPuf" target="_blank" rel="noreferrer">Open Discord</a>
            </div>
          </aside>

          <article className="docs-content">
            <section id="getting-started" className="docs-section docs-intro">
              <p className="docs-kicker">01 - GETTING STARTED</p>
              <h2>Useful in about thirty seconds.</h2>
              <p className="docs-lede">Pocket Tool can be installed directly to your Discord server as a bot or to your Discord account as a user app. Add it once, then use its commands wherever they’re available - including servers, direct messages and private channels.</p>
              <div className="docs-steps">
                <article><span>1</span><div><h3>Add Pocket Tool</h3><p>Use Discord's authorization screen to install Pocket Tool.</p></div></article>
                <article><span>2</span><div><h3>Type a command</h3><p>Start with <code>/help</code>, or jump straight to something useful like <code>/timestamp</code>.</p></div></article>
                <article><span>3</span><div><h3>Try message tools</h3><p>Open a message’s Apps menu to quote, translate, transcribe or turn content into a GIF.</p></div></article>
              </div>
              <a className="button button--primary" href={discordInstallUrl}>Add Pocket Tool</a>
            </section>

            <section id="install-anywhere" className="docs-section">
              <p className="docs-kicker">02 - INSTALLATION</p>
              <h2>Install once. Use it across Discord.</h2>
              <p>Pocket Tool can be added directly to your Discord server as a bot or installed to your Discord account as a user app. Once installed, you can use it in DMs, private channels, and servers where user-installed apps are allowed. Commands that depend on server data — such as <code>/role</code> — only appear in compatible server contexts.</p>
              <div className="info-grid">
                <article><span>INSTALL</span><h3>Add it to your account</h3><p>Pocket Tool follows your Discord account instead of being installed to one server.</p></article>
                <article><span>USE</span><h3>Bring it into any conversation</h3><p>Call its commands in DMs, private channels and servers that allow user-installed apps.</p></article>
              </div>
              <div className="note"><strong>Good to know</strong><p>Exact command availability still depends on the context, Discord permissions and whether Pocket Tool has a required third-party service configured.</p></div>
            </section>

            <section id="featured" className="docs-section">
              <p className="docs-kicker">03 - FEATURED WORKFLOWS</p>
              <h2>Four commands worth knowing first.</h2>

              <div className="workflow-docs">
                <article id="quote">
                  <div className="workflow-docs__index">A</div>
                  <div><p className="eyebrow">Message Context Command</p><h3>Quote This Message</h3><p>Open the target message&rsquo;s menu, choose <strong>Apps</strong>, then <strong>Quote This Message</strong>. Pocket Tool builds a quote card and lets you refine its font, fit, colour and effects before posting.</p><code>Message -&gt; Apps -&gt; Quote This Message</code></div>
                </article>
                <article id="time">
                  <div className="workflow-docs__index">B</div>
                  <div><p className="eyebrow">Slash Command</p><h3>/timestamp</h3><p>Give Pocket Tool a natural phrase such as &ldquo;tomorrow at 2pm&rdquo;. Add an IANA timezone when the date is not UTC, choose one of Discord&rsquo;s timestamp styles and optionally make the response ephemeral.</p><code>/timestamp time: tomorrow at 2pm timezone: Europe/London style: Relative Time</code></div>
                </article>
                <article id="tts">
                  <div className="workflow-docs__index">C</div>
                  <div><p className="eyebrow">Slash Command</p><h3>/tts</h3><p>Enter up to 500 characters, optionally choose a language and select Male, Female or Neutral voice styling. The result arrives as a native Discord voice message.</p><code>/tts text: Welcome aboard voice: Neutral language: English</code></div>
                </article>
                <article id="tweet">
                  <div className="workflow-docs__index">D</div>
                  <div><p className="eyebrow">Slash Command</p><h3>/tweet</h3><p>Paste an X post URL or ID to build a rich preview. Set a language when you also want its text translated for the conversation.</p><code>/tweet url: https://x.com/… language: Portuguese</code></div>
                </article>
              </div>
            </section>

            <section id="commands" className="docs-section command-reference-section">
              <p className="docs-kicker">04 - COMMAND REFERENCE</p>
              <h2>Find the right thing quickly.</h2>
              <p>Search the current public commands and context-menu actions. Syntax examples show the available inputs, not required values.</p>
              <CommandReference />
            </section>

            <section id="self-host" className="docs-section">
              <p className="docs-kicker">05 - SELF-HOSTING</p>
              <h2>Run your own Pocket Tool.</h2>
              <p>Self-hosting is intended for developers comfortable with Discord applications. You need Bun and a Discord bot token.</p>
              <div className="requirements">
                <span><b>01</b>Bun</span><span><b>02</b>Discord</span>
              </div>
              <div className="code-block">
                <div className="code-block__bar"><span>Terminal</span><small>bash</small></div>
                <pre><code><span># Clone and install</span>{"\n"}git clone https://github.com/mloetta/pocket-tool{"\n"}cd pocket-tool{"\n"}bun install{"\n\n"}<span># Create and edit local configuration</span>{"\n"}cp .env.example .env{"\n\n"}<span># Start the app</span>{"\n"}bun run start</code></pre>
              </div>

              <h3 className="docs-subheading">Environment variables</h3>
              <div className="env-table" role="table" aria-label="Pocket Tool environment variables">
                <div role="row"><code>token</code><span>Discord app token</span><b>Required</b></div>
                <div role="row"><code>dev_ids</code><span>Developer user IDs</span><em>Optional</em></div>
                <div role="row"><code>register_commands</code><span>Register commands on startup</span><em>Optional</em></div>
                <div role="row"><code>supabase_*</code><span>Supabase connection credentials</span><em>Feature dependent</em></div>
                <div role="row"><code>redis_*</code><span>Redis connection credentials</span><em>Feature dependent</em></div>
                <div role="row"><code>eleven_labs_api_key</code><span>Enables text-to-speech</span><em>Feature dependent</em></div>
                <div role="row"><code>tolgchu_twitter_api_key</code><span>Enables tweet previews</span><em>Feature dependent</em></div>
              </div>
            </section>

            <section id="data" className="docs-section">
              <p className="docs-kicker">06 - DATA & PRIVACY</p>
              <h2>Only what keeps Pocket Tool working.</h2>
              <p>The project privacy policy states that Pocket Tool may store interaction trigger logs and command usage analytics. It does not sell, rent or trade user data. Third-party providers can process limited data when a command needs them.</p>
              <div className="policy-links">
                <a href="/privacy"><span>Privacy Policy</span><b>Read Policy</b></a>
                <a href="/terms"><span>Terms of Service</span><b>Read Terms</b></a>
              </div>
              <div className="source-note">Documentation reflects the public repository as of August 2026. The source code remains the authority for implementation details.</div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
