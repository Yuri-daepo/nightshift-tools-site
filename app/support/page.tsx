import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Nightshift Tools",
  description: "Support and contact information for LocFlow by Nightshift Tools.",
  openGraph: {
    title: "Support | Nightshift Tools",
    description: "Support and contact information for LocFlow by Nightshift Tools.",
    images: [],
  },
  twitter: {
    title: "Support | Nightshift Tools",
    description: "Support and contact information for LocFlow by Nightshift Tools.",
    images: [],
  },
};

export default function SupportPage() {
  return (
    <main className="support-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Nightshift Tools home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>Nightshift Tools</span>
        </Link>
        <nav aria-label="Support navigation"><Link href="/">Back to home</Link></nav>
      </header>

      <section className="support-hero">
        <p className="eyebrow"><span /> LocFlow support</p>
        <h1>Support without<br /><em>the runaround.</em></h1>
        <p>Questions, reproducible bugs, and honest workflow feedback all go to the person building LocFlow.</p>
      </section>

      <section className="contact-layout">
        <article className="contact-card">
          <p className="section-kicker">Email support</p>
          <h2>nightshifttools<br />@proton.me</h2>
          <p>Include these details so the issue can be reproduced quickly:</p>
          <ol>
            <li><span>01</span>Your Unity Editor version</li>
            <li><span>02</span>Your LocFlow version</li>
            <li><span>03</span>Your Localization package version</li>
            <li><span>04</span>The full Console message and reproduction steps</li>
          </ol>
          <a className="button button-primary" href="mailto:nightshifttools@proton.me?subject=LocFlow%20Support">Open email</a>
        </article>

        <div className="quick-answers">
          <p className="section-kicker">Quick answers</p>
          <article><h3>What does LocFlow support?</h3><p>Unity 2022.3 LTS or newer with the official Localization package 1.4 or newer.</p></article>
          <article><h3>Does it add runtime code?</h3><p>No. LocFlow is an editor-only assembly and adds nothing to player builds.</p></article>
          <article><h3>Does it upload project data?</h3><p>No. The current version has no external services, network calls, or third-party libraries.</p></article>
          <article><h3>Where is the documentation?</h3><p>The package includes an offline user guide with setup, feature, and troubleshooting instructions.</p></article>
        </div>
      </section>

      <section className="support-note">
        <span>Privacy note</span>
        <p>This website does not collect project data. Information sent by email is used only to answer the support request.</p>
      </section>

      <footer>
        <Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>Nightshift Tools</span></Link>
        <div className="footer-links"><Link href="/">Home</Link><a href="mailto:nightshifttools@proton.me">Contact</a></div>
        <span>© 2026 Nightshift Tools</span>
      </footer>
    </main>
  );
}
