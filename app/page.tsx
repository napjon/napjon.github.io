import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react';

const email = 'mailto:napitupulu.jon@gmail.com';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top">jon<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#services">Work with me</a><a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
      </header>
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-topline"><p className="eyebrow">Jonathan Napitupulu / Data & AI engineer</p><p className="location">Jakarta, working globally</p></div>
          <h1>Less firefighting.<br />More <span>forward.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I help teams fix unreliable pipelines, connect scattered data, and put AI to work on a real problem.</p>
            <div className="hero-action-group"><a className="button primary" href="#services">Find your starting point <ArrowUpRight size={19} /></a><a className="inline-link" href="#work">A look at the work <ArrowDown size={16} /></a></div>
          </div>
          <div className="credentials"><span>10+ years building data systems</span><span>5 years working US Pacific hours</span><span>Projects & senior roles</span></div>
        </section>
        <section className="featured wrap" aria-labelledby="featured-title">
          <div className="featured-copy"><p className="eyebrow">A result to start with / Metadata</p><h2 id="featured-title">From putting out fires<br />to trusting the numbers.</h2><p>I owned six Airflow pipelines across a 10TB analytics platform. The work covered ingestion, transformations, backfills, and data quality.</p><a className="inline-link" href="#work">Inside the work <ArrowUpRight size={17} /></a></div>
          <div className="result-chart"><p className="chart-title">Monthly data incidents</p><div className="chart-row"><span>Before</span><div className="bar-track"><div className="bar before" /></div><strong>30</strong></div><div className="chart-row"><span>After</span><div className="bar-track"><div className="bar after" /></div><strong>2</strong></div><p className="chart-note"><strong>93% fewer incidents.</strong> More room for product work.</p></div>
        </section>
        <section className="section wrap" id="services" aria-labelledby="services-title">
          <div className="section-title"><div><p className="eyebrow">Work with me / Scoped projects</p><h2 id="services-title">Start with the problem<br />costing you time.</h2></div><p>One clear scope, an agreed definition of done, and something your team can keep using after the handoff.</p></div>
          <div className="offer-grid">
            <article className="offer"><p className="offer-index">01 / RELIABILITY</p><h3>Stop fixing the same pipeline.</h3><p className="offer-problem">For teams whose reports arrive late, fail silently, or need another manual rerun.</p><ul><li><Check size={16} />Root-cause review of one pipeline</li><li><Check size={16} />Agreed repairs and data quality checks</li><li><Check size={16} />Recovery steps and a handover runbook</li></ul><p className="offer-start"><strong>Start with one troublesome workflow.</strong>Send its symptoms, stack, and current runtime. We’ll agree on the failure or performance baseline before changing it.</p><a className="inline-link" href={`${email}?subject=Pipeline%20repair%20project`}>Discuss a pipeline <ArrowUpRight size={17} /></a></article>
            <article className="offer"><p className="offer-index">02 / INTEGRATION</p><h3>Get your systems telling the same story.</h3><p className="offer-problem">For teams reconciling CRM, advertising, and product numbers in spreadsheets.</p><ul><li><Check size={16} />One source connected to your data stack</li><li><Check size={16} />Shared metric definitions and backfill</li><li><Check size={16} />Validated data ready for reporting</li></ul><p className="offer-start"><strong>Start with one unanswered question.</strong>We’ll map the sources, agree what the numbers mean, and scope the path from API to a usable reporting dataset.</p><a className="inline-link" href={`${email}?subject=Data%20integration%20project`}>Discuss an integration <ArrowUpRight size={17} /></a></article>
            <article className="offer"><p className="offer-index">03 / APPLIED AI</p><h3>Turn a pile of documents into useful answers.</h3><p className="offer-problem">For teams searching the same internal documents to answer recurring questions.</p><ul><li><Check size={16} />A pilot using one document collection</li><li><Check size={16} />Answers linked to their source material</li><li><Check size={16} />Evaluation against your real questions</li></ul><p className="offer-start"><strong>Start with a focused pilot.</strong>Choose the documents and questions that matter. Get a working assistant, test results, and clear limits before expanding.</p><a className="inline-link" href={`${email}?subject=Document%20AI%20pilot`}>Discuss an AI pilot <ArrowUpRight size={17} /></a></article>
          </div>
          <p className="engagement-note"><Plus size={16} />After an initial review, I’ll propose the scope, deliverables, timeline, and fee for you to approve before work begins.</p>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title"><div className="section wrap">
          <div className="section-title"><div><p className="eyebrow">Selected work</p><h2 id="work-title">The work behind<br />the offer.</h2></div><p>From the reporting a team relies on every morning to the systems behind a new product feature.</p></div>
          <article className="case"><div className="case-meta"><strong>Metadata</strong><span>2022–2026 / Data engineering</span></div><div><h3>Make reporting dependable at 10TB scale.</h3><p>I owned six Airflow pipelines and worked across ingestion, backfills, quality checks, and bronze-to-gold transformations over 80 tables.</p><details><summary>What the work involved</summary><p>Python, PySpark, Databricks, and Airflow formed the reporting foundation. My work included repairing data flows and optimizing Salesforce aggregation, alongside ongoing operation of the analytics platform.</p></details></div><div className="case-result"><strong>8h → 2h</strong><span>Salesforce aggregation time</span><p>Monthly data incidents also fell from 30 to 2 across the platform.</p></div></article>
          <article className="case"><div className="case-meta"><strong>Metadata</strong><span>Product analytics integration</span></div><div><h3>Take a new ad format all the way to reporting.</h3><p>I delivered LinkedIn Conversation Ads analytics across extraction, storage, transformations, backend aggregation, and frontend reporting.</p><details><summary>What made it challenging</summary><p>The ad format used branching message trees. I mapped them into a reporting model with consistent funnel outcomes, backfilled historical data, and preserved compatibility with five existing channels.</p></details></div><div className="case-result"><strong>6 repos</strong><span>One integration, source to interface</span><p>Data modeling and product delivery handled together.</p></div></article>
          <article className="case"><div className="case-meta"><strong>Stealth startup / cerdai</strong><span>2026–present / Applied AI</span></div><div><h3>Build the workflow around the AI.</h3><p>As Member of Technical Staff, I build across AI, analytics, and product systems: cited retrieval, tool use, evaluation, and the interfaces people use to do the work.</p><details><summary>What I build with</summary><p>TypeScript, React, Python, and PostgreSQL across four integrated SaaS platforms. The work spans document assistants, analytics, reconciliation, and customer operations.</p></details></div><div className="case-result"><strong>End to end</strong><span>Retrieval, evaluation, and product UI</span><p>From the underlying data to a usable application.</p></div></article>
        </div></section>
        <section className="section wrap about" id="about" aria-labelledby="about-title">
          <div className="about-copy"><p className="eyebrow">A little about me</p><h2 id="about-title">Hi, I’m Jon.<br />I like getting the<br />whole thing working.</h2><p>I’m a data and AI engineer based in Jakarta. Over the past decade, I’ve worked on advertising platforms, telecom data, analytics, and AI products.</p><p>I’m comfortable going beyond the pipeline: tracing an API, untangling a data model, working through the reporting logic, and getting the result into a product.</p><p>I’ve spent five years working US Pacific hours with a remote team. I’m open to remote work and relocation to Europe.</p><a className="inline-link" href="https://github.com/napjon" target="_blank" rel="noreferrer">Explore my code on GitHub <ArrowUpRight size={17} /></a></div>
          <div><div className="timeline">
            <article className="career-item"><span className="period">JUN 2026–PRESENT</span><h3>Member of Technical Staff</h3><p className="company">Stealth startup / cerdai</p><p>Applied AI, analytics, and full-stack product development.</p></article>
            <article className="career-item"><span className="period">FEB 2022–JUN 2026</span><h3>Senior Data / Analytics Engineer</h3><p className="company">Metadata</p><p>Data platform reliability, experimentation, and marketing analytics.</p></article>
            <article className="career-item"><span className="period">2015–2022 / EARLIER EXPERIENCE</span><h3>Data engineering, machine learning & team leadership</h3><p className="company">Annex · Ewaysindo · Indosat / Eureka · ADSKOM</p><p>Led a seven-engineer team at Ewaysindo. Worked with telecom data spanning 80 million subscribers at Indosat / Eureka.</p></article>
          </div><aside className="hiring-note"><h3>Looking for this experience on your team?</h3><p>I’m interested in senior data engineering and applied AI roles with ownership across systems and delivery.</p><a className="inline-link" href={`${email}?subject=Senior%20engineering%20opportunity`}>Let’s discuss the role <ArrowUpRight size={16} /></a></aside></div>
        </section>
        <section className="contact" id="contact" aria-labelledby="contact-title"><div className="wrap contact-inner"><div><p className="eyebrow">Let’s work together</p><h2 id="contact-title">What’s slowing<br />your team down?</h2></div><div className="contact-copy"><p>Send me a short description of the problem, your current stack, and what a good outcome looks like. I’ll help turn that into a clear first step.</p><a className="button" href={`${email}?subject=Let%E2%80%99s%20work%20together`}>Tell me about your project <ArrowUpRight size={19} /></a><a className="contact-email" href={email}>napitupulu.jon@gmail.com</a></div></div></section>
      </main>
      <footer className="wrap footer"><a className="wordmark" href="#top">jon<span>.</span></a><p>Jonathan Napitupulu · Jakarta, Indonesia</p><a href="https://github.com/napjon" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/napitupulu-jon" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></footer>
    </>
  );
}
