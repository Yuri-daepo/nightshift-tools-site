import Image from "next/image";
import Link from "next/link";

const localeRows = [
  ["Menu.Start", "Start Game", "Commencer", "게임 시작"],
  ["Menu.Options", "Options", "Options", "옵션"],
  ["Game.Welcome", "Welcome, {playerName}!", "Bienvenue !", "환영합니다!"],
  ["Menu.Quit", "Quit", "Quitter", "종료"],
];

const features = [
  {
    number: "01",
    title: "Edit together",
    copy: "Work across every locale in one spreadsheet-style view, with search, missing-value filters, and safe inline edits.",
    tag: "Tables",
  },
  {
    number: "02",
    title: "Review every change",
    copy: "Round-trip through CSV with stable IDs and a complete diff. Nothing touches your tables until you approve it.",
    tag: "CSV",
  },
  {
    number: "03",
    title: "Find issues early",
    copy: "Audit coverage, missing translations, duplicate values, placeholder mismatches, and unlocalized scene text.",
    tag: "Audit",
  },
  {
    number: "04",
    title: "Stress-test the UI",
    copy: "Generate accented, expanded pseudo-locales while preserving placeholders and rich-text tags.",
    tag: "Pseudo",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nightshift Tools home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>Nightshift Tools</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#locflow">LocFlow</a>
          <a href="#principles">About</a>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Focused Unity editor tools</p>
          <h1>Less busywork.<br /><em>Safer workflows.</em></h1>
          <p className="hero-lede">
            Nightshift Tools builds practical editor extensions that turn repetitive,
            error-prone production work into clear and reviewable workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#locflow">Explore LocFlow</a>
            <Link className="button button-secondary" href="/support">Get support</Link>
          </div>
          <div className="hero-proof" aria-label="Product principles">
            <span>Editor-only</span><span>No external services</span><span>Built for teams</span>
          </div>
        </div>

        <div className="product-stage" aria-label="LocFlow product preview">
          <div className="stage-glow" />
          <div className="studio-window">
            <div className="window-bar">
              <span className="window-brand">LocFlow</span>
              <span className="window-status">UI Text</span>
              <span className="window-version">v0.9</span>
            </div>
            <div className="window-tabs">
              <span className="active">Tables</span><span>CSV</span><span>Audit</span><span>Pseudo</span>
            </div>
            <div className="window-toolbar">
              <span className="search">Search keys and translations</span>
              <span className="filter">Missing only</span>
            </div>
            <div className="locale-table" role="table" aria-label="Localized strings preview">
              <div className="table-row table-head" role="row">
                <span>Key</span><span>English</span><span>French</span><span>Korean</span>
              </div>
              {localeRows.map((row, index) => (
                <div className={`table-row${index === 2 ? " flagged" : ""}`} role="row" key={row[0]}>
                  {row.map((cell, cellIndex) => <span role="cell" key={`${index}-${cellIndex}`}>{cell}</span>)}
                </div>
              ))}
            </div>
            <div className="window-footer">
              <span><b>4</b> keys</span>
              <span className="healthy"><i /> 3 locales connected</span>
            </div>
          </div>
          <div className="floating-card audit-card">
            <span className="float-label">Coverage audit</span>
            <strong>92%</strong>
            <div className="progress"><i /></div>
          </div>
          <div className="floating-card review-card">
            <span className="review-check">✓</span>
            <span><b>Review first</b><small>Nothing changes silently</small></span>
          </div>
        </div>
      </section>

      <section className="product-intro" id="locflow">
        <div className="section-heading">
          <p className="section-kicker">01 / First release</p>
          <h2>Localization work,<br /><span>finally in one place.</span></h2>
        </div>
        <div className="intro-copy">
          <p className="product-name">LocFlow</p>
          <p>
            A localization workflow studio for Unity&apos;s official Localization package.
            Edit tables, review CSV changes, audit project health, and generate pseudo-locales
            without sending project data to an external service.
          </p>
          <div className="compatibility-line">
            <span>Unity 2022.3+</span><span>Localization 1.4+</span><span>Editor extension</span>
          </div>
        </div>
      </section>

      <section className="feature-grid" aria-label="LocFlow features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div className="feature-top"><span>{feature.number}</span><b>{feature.tag}</b></div>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="review-story">
        <div className="review-copy">
          <p className="section-kicker">Designed around trust</p>
          <h2>See the change<br />before it lands.</h2>
          <p>
            Localization data is easy to damage and expensive to recover. LocFlow turns imports
            into a review queue: additions, edits, and removals are visible before one approved
            change set is applied with Undo support.
          </p>
        </div>
        <div className="diff-panel" aria-label="CSV review preview">
          <div className="diff-head"><span>CSV import review</span><b>2 changes</b></div>
          <div className="diff-item">
            <span className="diff-tag add">ADD</span>
            <span><b>Menu.Quit</b><small>New key · 3 locale values</small></span>
            <i>✓</i>
          </div>
          <div className="diff-item">
            <span className="diff-tag change">CHANGE</span>
            <span><b>Menu.Options · fr</b><small>“Options” → “Paramètres”</small></span>
            <i>✓</i>
          </div>
          <div className="diff-item muted-diff">
            <span className="diff-tag remove">REMOVE</span>
            <span><b>Legacy.Title</b><small>Removals start unapproved</small></span>
            <i>—</i>
          </div>
          <button type="button" disabled>Apply approved changes</button>
        </div>
      </section>

      <section className="principles" id="principles">
        <div>
          <p className="section-kicker">Built after hours. Ready for production.</p>
          <h2>Small tools should<br />earn their place.</h2>
        </div>
        <div className="principle-list">
          <article><span>01</span><div><h3>Focused</h3><p>Each tool solves a concrete production problem without adding a new platform to manage.</p></div></article>
          <article><span>02</span><div><h3>Transparent</h3><p>Potentially destructive work is previewed, explained, and kept undoable wherever possible.</p></div></article>
          <article><span>03</span><div><h3>Maintainable</h3><p>Documented Unity APIs, no runtime payload, and no unnecessary third-party dependencies.</p></div></article>
        </div>
      </section>

      <figure className="brand-banner">
        <Image
          src="/nightshift-tools-promo.png"
          width={1792}
          height={896}
          alt="Nightshift Tools — Less busywork. Safer workflows."
        />
      </figure>

      <section className="support-cta">
        <p className="section-kicker">Need help with LocFlow?</p>
        <h2>Talk to the person<br />who built it.</h2>
        <p>Setup questions, bug reports, and workflow feedback are welcome.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/support">Visit support</Link>
          <a className="button button-secondary" href="mailto:nightshifttools@proton.me">Email Nightshift Tools</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">N</span><span>Nightshift Tools</span></a>
        <div className="footer-links"><a href="#locflow">LocFlow</a><Link href="/support">Support</Link><a href="mailto:nightshifttools@proton.me">Contact</a></div>
        <span>© 2026 Nightshift Tools</span>
      </footer>
    </main>
  );
}
