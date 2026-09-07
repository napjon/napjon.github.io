import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const proof = [
  {
    index: '01',
    label: 'Data reliability',
    title: 'From recurring incidents to a dependable reporting layer.',
    result: '30 → 2',
    resultLabel: 'data incidents / month',
    description:
      'At Metadata, I owned six Airflow pipelines across a 10TB, 80-table analytics platform. I worked across ingestion, backfills, quality checks, and bronze-to-gold transformations.',
    tags: ['Airflow', 'PySpark', 'Databricks', 'Python'],
  },
  {
    index: '02',
    label: 'Cross-repo systems',
    title: 'A branching ad format, modeled into one coherent funnel.',
    result: '6 repos',
    resultLabel: 'from API to product UI',
    description:
      'I delivered LinkedIn Conversation Ads analytics end to end: extraction, schema, transforms, aggregation, reports, and frontend views. The branching message tree became comparable with five existing channels.',
    tags: ['Data modeling', 'APIs', 'Analytics', 'Product delivery'],
  },
  {
    index: '03',
    label: 'Applied AI',
    title: 'AI products designed around the workflow, not the demo.',
    result: '4',
    resultLabel: 'integrated SaaS platforms shipped',
    description:
      'At cerdai, I build end to end across TypeScript, React, Python, PostgreSQL, and LLM systems. The work spans cited retrieval, tool use, evaluation, reconciliation, and customer operations.',
    tags: ['RAG', 'LLM evals', 'React', 'PostgreSQL'],
  },
];

const capabilities = [
  ['Data engineering', 'Pipelines, ingestion, backfills, quality, and reporting foundations.'],
  ['Applied AI', 'RAG systems, agent workflows, evaluation, and production integrations.'],
  ['Product systems', 'The connective work from API and data model to a usable product surface.'],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Jonathan Napitupulu home">
          <span className="wordmark-mark">J</span>
          <span>Jonathan Napitupulu</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:napitupulu.jon@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Senior data + AI engineer</p>
          <h1>
            I build the systems that make ambitious products <em>reliable.</em>
          </h1>
          <p className="hero-lede">
            Ten years across data engineering, analytics, machine learning, and applied AI. I turn messy inputs into systems teams can trust and customers can use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See the proof <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="mailto:napitupulu.jon@gmail.com">Start a conversation <Mail size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> Jakarta, Indonesia</span>
            <span className="meta-separator" />
            <span>Open to remote + EU relocation</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Current focus">
          <div className="hero-card-top">
            <span className="status-pill"><span /> Available for focused work</span>
            <span className="card-index">2026 / 01</span>
          </div>
          <div className="orbit-wrap">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="orbit-core"><Sparkles size={22} /></div>
            <span className="orbit-label orbit-label-one">DATA</span>
            <span className="orbit-label orbit-label-two">AI</span>
            <span className="orbit-label orbit-label-three">PRODUCT</span>
          </div>
          <div className="hero-card-footer">
            <div><strong>01</strong><span>focus: durable systems</span></div>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      <section className="proof-strip shell" aria-label="Selected proof points">
        <div><strong>10+</strong><span>years building</span></div>
        <div><strong>10TB</strong><span>analytics platform</span></div>
        <div><strong>80M</strong><span>customer data scale</span></div>
        <div><strong>235</strong><span>GitHub stars</span></div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work / 2022—2026</p>
            <h2>Proof over promises.</h2>
          </div>
          <p className="section-intro">A few problems I&apos;ve taken from ambiguity to a measurable result.</p>
        </div>
        <div className="proof-grid">
          {proof.map((item) => (
            <article className="proof-card" key={item.index}>
              <div className="proof-card-head"><span>{item.index}</span><span>{item.label}</span></div>
              <h3>{item.title}</h3>
              <div className="proof-result"><strong>{item.result}</strong><span>{item.resultLabel}</span></div>
              <p>{item.description}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="about">
        <div className="shell approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">How I work</p>
            <h2>Make the complicated part legible.</h2>
            <p className="dark-lede">The best systems work is part architecture, part translation. I make the data model, tradeoffs, and next decision clear enough for the whole team to move.</p>
            <a className="text-link text-link-light" href="https://github.com/napjon" target="_blank" rel="noreferrer">See the open-source trail <ArrowUpRight size={16} /></a>
          </div>
          <div className="capability-list">
            {capabilities.map(([title, text], index) => (
              <div className="capability" key={title}>
                <span className="capability-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Check size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell career-section">
        <div className="section-heading">
          <div><p className="eyebrow">Experience / selected chapters</p><h2>Built across the stack.</h2></div>
          <p className="section-intro">From 300-node clusters and customer analytics to AI-native products.</p>
        </div>
        <div className="career-list">
          <div className="career-row"><span>2026—now</span><strong>Member of Technical Staff</strong><span>Stealth startup / cerdai</span><span>4 SaaS platforms, LLM + product systems</span></div>
          <div className="career-row"><span>2022—2026</span><strong>Senior Data / Analytics Engineer</strong><span>Metadata.io</span><span>Experimentation, pipelines, attribution</span></div>
          <div className="career-row"><span>2015—2022</span><strong>AI + data leadership</strong><span>Annex / Ewaysindo / Indosat / ADSKOM</span><span>ML, NLP, telecom, healthcare, marketing</span></div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-inner">
          <div><p className="eyebrow">Have a hard systems problem?</p><h2>Let&apos;s make the next version <em>work.</em></h2></div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:napitupulu.jon@gmail.com">Email Jonathan <Mail size={17} /></a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/napitupulu-jon" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
              <a href="https://github.com/napjon" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell"><span>Jonathan Napitupulu / Jakarta</span><span>Data, AI, and the connective tissue between them.</span></footer>
    </main>
  );
}

