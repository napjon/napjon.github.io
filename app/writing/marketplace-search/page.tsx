import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search and recommendation for a modern two-sided marketplace | Jonathan Napitupulu',
  description: 'A modern design for two-sided marketplace search and recommendation, worked through with a food delivery example: routing, typed slots, hybrid retrieval, debiased ranking, a relevance-versus-merchant-value blend, and an evaluation loop.',
};

const sources: [string, string][] = [
  ['trivago: Behind Smart AI Search (2024)', 'https://tech.trivago.com/post/2024-12-17-behind-trivagos-ai-search-from-concept-to-reality'],
  ['trivago: Explore-exploit dilemma in the ranking model (2022)', 'https://tech.trivago.com/post/2022-11-04-explore-exploit-dilemma-in-ranking-model'],
  ['trivago: Accelerating experimentation through simulations (2023)', 'https://tech.trivago.com/post/2023-11-20-accelerating-experimentations-through-simulations'],
  ['NevIR: negation in neural information retrieval (ACL 2023)', 'https://arxiv.org/abs/2305.07614'],
  ['Airbnb: embedding-based retrieval for search (2025)', 'https://airbnb.tech/ai-ml/embedding-based-retrieval-for-airbnb-search/'],
  ['Airbnb: CASTLE, cold-start natural-language search (CIKM 2026)', 'https://arxiv.org/abs/2605.21812'],
  ['Bing: LLMs can accurately predict searcher preferences (SIGIR 2024)', 'https://arxiv.org/abs/2309.10621'],
  ['Amazon: HotelQuEST (2026)', 'https://arxiv.org/abs/2602.23949'],
  ['Instacart: building the intent engine (2025)', 'https://www.instacart.com/company/tech-innovation/building-the-intent-engine-how-instacart-is-revamping-query-understanding-with-llms'],
  ['ACCC v trivago penalty (2022)', 'https://piperalderman.com.au/insight/trivago-to-pay-44-7-million-in-penalties-for-misleading-consumers-over-hotel-room-rates/'],
];

/* A labelled box: x, y, width, height, title, subtitle, variant */
function Box({ x, y, w, h, t, s, v = 'step' }: { x: number; y: number; w: number; h: number; t: string; s?: string; v?: string }) {
  return (
    <g className={`d-box d-${v}`}>
      <rect x={x} y={y} width={w} height={h} rx={8} />
      <text className="d-h" x={x + w / 2} y={y + (s ? h / 2 - 4 : h / 2 + 6)} textAnchor="middle">{t}</text>
      {s && <text className="d-s" x={x + w / 2} y={y + h / 2 + 16} textAnchor="middle">{s}</text>}
    </g>
  );
}
function Badge({ x, y, n, c }: { x: number; y: number; n: string; c: string }) {
  return <g className="d-badge"><circle cx={x} cy={y} r={12} style={{ fill: c }} /><text x={x} y={y + 4} textAnchor="middle">{n}</text></g>;
}
function Deep({ x, y, n }: { x: number; y: number; n: string }) {
  return <g className="d-deep"><circle cx={x} cy={y} r={15} /><text x={x} y={y + 5} textAnchor="middle">{n}</text></g>;
}
function Note({ x, y, w, h, c, title, lines }: { x: number; y: number; w: number; h: number; c: string; title: string; lines: string[] }) {
  return (
    <g className={`d-note ${c}`}>
      <rect x={x} y={y} width={w} height={h} rx={4} />
      <text className="d-h" x={x + 16} y={y + 28}>{title}</text>
      {lines.map((l, i) => <text key={l} className="d-t" x={x + 16} y={y + 54 + i * 22}>{l}</text>)}
    </g>
  );
}
const Defs = ({ id }: { id: string }) => (
  <defs>
    <marker id={`${id}-a`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" className="d-arrowhead" /></marker>
    <marker id={`${id}-r`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" className="d-arrowhead-red" /></marker>
  </defs>
);

function Fail({ x, y, w, h, title, lines }: { x: number; y: number; w: number; h: number; title: string; lines: string[] }) {
  return (
    <g className="d-fail">
      <rect x={x} y={y} width={w} height={h} rx={6} />
      <text className="d-h" x={x + w / 2} y={y + 26} textAnchor="middle">{title}</text>
      {lines.map((l, i) => <text key={l} className="d-s" x={x + w / 2} y={y + 50 + i * 18} textAnchor="middle">{l}</text>)}
    </g>
  );
}

function TypicalPipeline() {
  const A = 'url(#tp-a)';
  return (
    <svg viewBox="0 0 1000 350" role="img" aria-labelledby="tp-title" className="diagram">
      <title id="tp-title">The three stages of food delivery search and where each one fails</title>
      <Defs id="tp" />
      <Box x={10} y={60} w={120} h={70} t="Query" s="&quot;nasgor pedes&quot;" v="io" />
      <Box x={180} y={50} w={200} h={90} t="1. Understand" s="what does the user want?" v="stage" />
      <Box x={430} y={50} w={200} h={90} t="2. Retrieve" s="which dishes could fit?" v="stage" />
      <Box x={680} y={50} w={200} h={90} t="3. Rank" s="which order to show?" v="stage" />
      <Box x={920} y={60} w={74} h={70} t="Results" v="io" />
      {[[130, 180], [380, 430], [630, 680], [880, 920]].map(([a, b]) => <path key={a} className="d-wire" d={`M${a} 95 L${b - 2} 95`} markerEnd={A} />)}
      {[280, 530, 780].map(x => <path key={x} className="d-wire dash red" d={`M${x} 142 L${x} 176`} markerEnd="url(#tp-r)" />)}
      <Fail x={165} y={180} w={230} h={160} title="Where it fails" lines={['synonyms: es teh vs iced tea', 'typos: ayam geprk', 'shorthand: nasgor, mie ayam bks', 'language mix: sego, chicken rice', 'ambiguity: Padang the cuisine', 'or Padang the city']} />
      <Fail x={415} y={180} w={230} h={160} title="Where it fails" lines={['the long tail: sate klathak', 'one dish, ten menu names', 'new merchants with no clicks yet', 'nothing matches, so zero results']} />
      <Fail x={665} y={180} w={230} h={160} title="Where it fails" lines={['broken constraints:', 'tanpa babi, halal, under 30k,', 'open now, delivery under 30 min', 'popularity wins over what', 'the user actually asked for']} />
    </svg>
  );
}

function FullDesign() {
  const A = 'url(#fd-a)', R = 'url(#fd-r)';
  const xs = [15, 185, 355, 525, 695, 865, 1035];
  const W = 155;
  return (
    <svg viewBox="0 0 1210 900" role="img" aria-labelledby="fd-title" className="diagram">
      <title id="fd-title">Complete design for free-text search in a food delivery app</title>
      <Defs id="fd" />
      <Note x={10} y={10} w={380} h={176} c="yellow" title="The real problem" lines={['improve live search in a delivery app', 'Bahasa, English and regional mix', 'millions of dishes, merchants daily', 'complaints: dietary needs ignored,', 'slang and typos, new merchants unseen']} />
      <Note x={10} y={196} w={380} h={128} c="pink" title="Query classes (assumed)" lines={['dish or cuisine: 55%', 'merchant name: 25%', 'dish + constraints: 15%', 'vague or complex: 5%']} />
      <Note x={900} y={10} w={300} h={176} c="blue" title="Constraints" lines={['results in a few 100 ms', 'LLM calls: tail only', 'no judged relevance set', 'positions logged, no random', 'you own QU + ranking']} />
      <g className="d-tree">
        <text className="d-h" x={645} y={34} textAnchor="middle">orders / search session</text>
        <text className="d-s" x={645} y={52} textAnchor="middle">north star</text>
        <path className="d-wire" d="M645 58 L645 76" />
        <text className="d-h" x={645} y={98} textAnchor="middle">search conversion</text>
        <text className="d-s" x={645} y={116} textAnchor="middle">primary</text>
        <path className="d-wire" d="M645 122 L470 146 M645 122 L590 146 M645 122 L705 146 M645 122 L820 146" />
        <text className="d-s" x={470} y={162} textAnchor="middle">constraint breaks</text>
        <text className="d-s" x={590} y={162} textAnchor="middle">merchant mix</text>
        <text className="d-s" x={705} y={162} textAnchor="middle">p95 latency, ETA</text>
        <text className="d-s" x={820} y={162} textAnchor="middle">cost / query</text>
        <text className="d-s" x={645} y={182} textAnchor="middle">guardrails</text>
      </g>
      <Box x={420} y={225} w={290} h={60} t="Agentic path" s="complex queries, capped budget" v="llm" />
      <Box x={770} y={225} w={260} h={60} t="LLM provider" s="external, tail only" v="ext" />
      <Badge x={1030} y={225} n="4" c="#d97a2b" />
      <rect className="d-bound" x={5} y={330} width={1200} height={290} rx={10} />
      <text className="d-lbl" x={14} y={350}>online path</text>
      {[['App', 'Bahasa + English', 'step'], ['Router', 'class, lang, difficulty', 'step'], ['Understand', 'intent, NER, slots', 'llm'], ['Candidates', 'filters + hybrid', 'step'], ['Rank', 'LTR + personal', 'step'], ['Blend', 'relevance + promos', 'step'], ['Explain', 'optional, grounded', 'llm']].map(([t, s, v], i) => <Box key={t} x={xs[i]} y={400} w={W} h={70} t={t} s={s} v={v} />)}
      {xs.slice(0, 6).map(x => <path key={x} className="d-wire" d={`M${x + W} 435 L${x + W + 13} 435`} markerEnd={A} />)}
      {[['Session', '+ user profile', 'store'], ['Event log', 'positions, features', 'store'], ['Vocab', 'dishes, cuisines, diets', 'store'], ['Dish index', 'lexical + vectors', 'store'], ['Features', 'promo, surge, stock', 'store'], ['Ads + promos', 'other team', 'ext'], ['Merchant ops', 'open, ETA, menu', 'store']].map(([t, s, v], i) => <Box key={t} x={xs[i]} y={530} w={W} h={70} t={t} s={s} v={v} />)}
      <path className="d-wire dash" d={`M${xs[0] + W - 20} 530 L${xs[1] + 30} 472`} markerEnd={A} />
      <path className="d-wire" d={`M${xs[1] + 50} 470 L${xs[1] + 50} 528`} markerEnd={A} />
      {[2, 3, 4, 5].map(i => <path key={i} className="d-wire" d={`M${xs[i] + W / 2} 530 L${xs[i] + W / 2} 472`} markerEnd={A} />)}
      <path className="d-wire" d={`M${xs[6]} 565 L${xs[5] + W + 2} 565`} markerEnd={A} />
      <path className="d-wire dash blue" d={`M${xs[1] + 110} 400 L520 287`} markerEnd={A} />
      <path className="d-wire dash blue" d="M820 285 L470 398" markerEnd={A} />
      <path className="d-wire dash blue" d="M960 285 L1080 398" markerEnd={A} />
      <path className="d-wire dash red" d={`M${xs[1] + 120} 472 C 300 515, 560 515, 590 474`} markerEnd={R} />
      <text className="d-red" x={420} y={505}>fallback</text>
      <Badge x={405} y={500} n="5" c="#c4432f" />
      <text className="d-red" x={398} y={392}>slots: type, polarity, must / nice</text>
      <Badge x={385} y={388} n="1" c="#4f7fcf" />
      <Badge x={xs[0] + W - 6} y={530} n="2" c="#3e8a5c" />
      <Badge x={xs[6] + W - 6} y={530} n="3" c="#c8951f" />
      <Badge x={xs[1] + W - 6} y={530} n="6" c="#7e5bc4" />
      <Badge x={xs[1] + W - 6} y={400} n="7" c="#2f74c9" />
      <Badge x={xs[6] + W - 6} y={400} n="8" c="#23918e" />
      <Deep x={xs[2] + W - 4} y={470} n="D1" />
      <Deep x={xs[3] + W - 4} y={400} n="D2" />
      <Deep x={xs[5] + W - 4} y={470} n="D3" />
      <text className="d-lbl" x={14} y={650}>offline</text>
      <path className="d-wire" d={`M${xs[1] + 60} 600 C ${xs[1] + 60} 640, 210 640, 210 668`} markerEnd={A} />
      <Box x={10} y={670} w={380} h={80} t="Labels + debiasing" s="order > add to cart > click; propensities" />
      <Box x={415} y={670} w={380} h={80} t="LLM teacher → students" s="labels queries; distilled encoders" />
      <Box x={820} y={670} w={380} h={80} t="Evaluation" s="judged set, cold start; user-level A/B" />
      <Deep x={1196} y={670} n="D4" />
      <path className="d-wire dash" d={`M640 670 C 640 640, ${xs[2] + 100} 640, ${xs[2] + 100} 602`} markerEnd={A} />
      <rect className="d-closing" x={10} y={790} width={1190} height={56} rx={8} />
      <text className="d-t" x={30} y={824}>Keep today&apos;s search as one channel; own the slots and features first; agree contracts with the promotions and merchant teams early.</text>
    </svg>
  );
}

export default function MarketplaceSearch() {
  return (
    <>
      <header className="site-header wrap">
        <a className="wordmark" href="/">jon<span>.</span></a>
        <nav aria-label="Main navigation"><a href="/#work">Work</a><a href="/#about">About</a></nav>
        <a className="header-contact" href="mailto:napitupulu.jon@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
      </header>
      <main id="main" className="article wrap">
        <a className="inline-link back" href="/"><ArrowLeft size={16} /> Back to home</a>
        <p className="eyebrow">Writing / Search and ranking / October 2026</p>
        <h1 className="article-title">Search and recommendation for a modern two-sided marketplace</h1>
        <p className="article-lede">Revisiting the matching problems I worked on years ago with today&apos;s tools, using a food delivery app as the example.</p>

        <div className="article-note">
          <p>This is a design I worked through, not a system running in production. Assumed numbers and other people&apos;s published results are labelled as such, with references at the end.</p>
        </div>

        <p>Years ago I worked on ad targeting at an ad exchange in Jakarta. It was a two-sided marketplace: advertisers wanted their products in front of the right readers, and news publishers wanted to sell the space on their pages. Most of my work was matching the two sides, which meant finding readers likely to care about a product, recommending content, and serving those matches fast enough for a live auction.</p>
        <p>The ideas behind that work still hold, but the tools have changed a lot. Back then we matched people with topic models and collaborative filtering in nightly batch jobs. Today, language models can read a messy query directly, embeddings can match meaning across languages, and teams evaluate search with judged sets and carefully run experiments. I wanted to see what the same kind of system would look like if I built it now.</p>
        <p>This article is that exercise. It works through search and recommendation for a two-sided marketplace, using a food delivery app as the example, because food search puts nearly every hard problem into one search bar: slang and mixed languages, strict dietary rules, new merchants every day, and the need to keep both users and merchants happy. The examples come from Indonesia, where I live and know the language.</p>

        <h2>The Problem</h2>
        <p>Type &quot;nasgor pedes tanpa babi&quot; into a food delivery app and look at what comes back. A good result is a list of spicy fried rice from nearby restaurants that don&apos;t serve pork. A bad result ignores the &quot;no pork&quot; part, or shows nothing at all because the app never learned that &quot;nasgor&quot; means nasi goreng.</p>
        <p>Every search request goes through three stages. First, the system tries to understand what the user wants. Then it retrieves a set of dishes that could match. Finally, it ranks those dishes and decides which ones to show first.</p>
        <p>See the diagram below:</p>
        <figure className="figure wide">
          <div className="diagram-scroll"><TypicalPipeline /></div>
          <figcaption>The three stages of food search, with the failures each stage is most exposed to.</figcaption>
        </figure>
        <p>Most of the trouble starts in the first stage, where the words a user types and the words on a menu fail to line up. Some common cases:</p>
        <ul>
          <li><strong>Synonyms:</strong> &quot;Es teh manis&quot; and &quot;iced sweet tea&quot; are the same drink, but a keyword index treats them as unrelated words.</li>
          <li><strong>Typos:</strong> Someone typing quickly on a phone writes &quot;ayam geprk&quot;, and the system should still return ayam geprek.</li>
          <li><strong>Shorthand:</strong> &quot;Nasgor&quot; means nasi goreng, and &quot;mie ayam bks&quot; means chicken noodles with bakso. Neither abbreviation appears on most menus.</li>
          <li><strong>Language mix:</strong> &quot;Sego&quot; is the Javanese word for rice, and many users switch between Bahasa Indonesia and English in the same query, so &quot;chicken rice&quot; and &quot;nasi ayam&quot; need to land on the same dishes.</li>
          <li><strong>Ambiguity:</strong> &quot;Padang&quot; usually refers to the cuisine, but it is also a city and part of many restaurant names, so the system has to use context to decide.</li>
        </ul>
        <p>The second and third stages bring two harder problems.</p>
        <ul>
          <li><strong>The long tail:</strong> A regional dish like sate klathak gets very few searches, so any model trained on past orders has little to learn from. The same dish also appears under different names on different menus, and a merchant who opened yesterday has no order history at all. When none of the dishes match, the user sees an empty page and usually leaves.</li>
          <li><strong>Broken constraints:</strong> A query like &quot;tanpa babi, under 30 thousand rupiah&quot; contains rules the results must follow. A ranking model trained mostly on popularity can still put a famous restaurant at the top even if it breaks one of those rules, because its score looks good on everything else. Dietary needs, price limits, opening hours and delivery time all fall into this group.</li>
        </ul>
        <p>Each of these is a moment where the app loses a customer who knew exactly what they wanted.</p>

        <h2>The Complete Design</h2>
        <p>The full system keeps the same three stages but adds the pieces that free-text search and a two-sided marketplace need. A router decides how much computing power each query deserves. A parser turns the query into structured slots. Hard filters enforce the user&apos;s rules before anything is ranked. A blending step balances what the user wants against what is good for merchants. And an offline loop keeps the models honest over time.</p>
        <p>See the diagram below:</p>
        <figure className="figure wide">
          <div className="diagram-scroll"><FullDesign /></div>
          <figcaption>Blue boxes use a language model, green boxes are data stores, and dashed boxes belong to another team or vendor. The numbered badges mark what to check at each stage, and D1 to D4 mark the four areas covered in most depth.</figcaption>
        </figure>
        <p>We will walk through it from the top, then follow a request from left to right.</p>

        <h2>Goals and Metrics</h2>
        <p>Before designing anything, it helps to agree on what success looks like. The top-level goal (the north star) is orders per search session, because that is what search contributes to the business. The main metric we would try to move is search conversion, the share of searches that end in an order.</p>
        <p>A change that improves conversion but hurts something else is not a win, so the design also tracks guardrails:</p>
        <ul>
          <li><strong>Constraint breaks:</strong> the share of results that violate something the user asked for, such as showing a pork dish after &quot;tanpa babi&quot;.</li>
          <li><strong>Merchant mix:</strong> whether a small group of large merchants starts taking all the traffic.</li>
          <li><strong>Latency and delivery time:</strong> how long results take to appear (measured at the 95th percentile) and how long the food takes to arrive.</li>
          <li><strong>Cost per query:</strong> mainly the cost of any language model calls.</li>
        </ul>
        <p>The constraint-break rate deserves special attention, because it turns a vague complaint (&quot;the app ignores what I ask for&quot;) into a number a team can work to reduce.</p>
        <p>The query mix on the left of the diagram is an assumption: about 55% dish or cuisine searches, 25% merchant names, 15% dishes with constraints, and 5% vague or complex requests. The first real task would be to label a sample of actual queries and replace these numbers, since the mix decides where the expensive parts of the system are worth using.</p>

        <h2>The Router</h2>
        <p>Most food searches are short and simple: a dish, a cuisine or a restaurant name. A small language model (an encoder that turns text into numbers) can handle these in a few milliseconds. Only a small share of queries, perhaps 5%, are complicated enough to need a large language model. An example is &quot;something warm and not too spicy for a sick kid&quot;.</p>
        <p>The router&apos;s job is to send each query down the right path. It looks at the type of query, the language and how difficult it seems. Simple queries take the fast path. Hard ones go to a large language model, and the most open-ended requests go to an agentic path (where the model can take several steps, such as asking a follow-up question) with a fixed budget and a rule for when to stop.</p>
        <p>Routing matters because large models are slow and expensive. A 2026 benchmark from Amazon called HotelQuEST found that agents answered complex travel queries more accurately than plain search, but at a much higher cost, and that a well-tuned router beat every agent on cost. The router also reads the user&apos;s session and profile, and every request is written to an event log along with the positions of the results shown.</p>

        <h2>Understanding the Query</h2>
        <p>The understanding step turns free text into structured information the rest of the system can use. In technical terms, this is intent classification (what kind of request is this?) plus slot filling (which words describe the dish, the price, the diet and so on?).</p>
        <p>Consider the query &quot;nasgor pedes tanpa babi under 30rb&quot;. The parser splits it into four slots:</p>
        <ul>
          <li>&quot;nasgor&quot; is a dish slot, normalised to the canonical dish &quot;nasi goreng&quot;.</li>
          <li>&quot;pedes&quot; is a taste slot meaning spicy. It is a preference, so it affects ranking but does not remove anything.</li>
          <li>&quot;tanpa babi&quot; is a diet slot with negative polarity, meaning &quot;exclude pork&quot;. It becomes a hard filter.</li>
          <li>&quot;under 30rb&quot; is a price slot with a maximum of 30,000 rupiah, also a hard filter.</li>
        </ul>
        <p>Each slot is linked to an entry in a controlled vocabulary of dishes, cuisines and diets. The model can suggest which words belong to which slot, but the vocabulary decides the final labels, so the system never invents a dish category that the rest of the pipeline does not recognise. This is also where shorthand, typos and Javanese words get mapped to standard names.</p>
        <p>Negation is handled here on purpose. A 2023 study called NevIR found that most neural search models ranked documents containing a negation (&quot;no pork&quot;) about as well as random guessing. Turning &quot;tanpa babi&quot; into a filter is far more reliable than hoping an embedding captures it. If the parser fails, a fallback path skips straight to keyword search plus filters, so the user still gets results.</p>

        <h2>Finding Candidates</h2>
        <p>Candidate retrieval collects a few hundred dishes that could match, out of millions on the platform. The hard filters run first: the restaurant must be open now, within delivery range, have the dish in stock, and pass every exclusion from the parser.</p>
        <p>After filtering, several retrieval channels run in parallel and their results are combined:</p>
        <ul>
          <li><strong>Keyword search</strong> handles restaurant names and exact dish names well.</li>
          <li><strong>Semantic search</strong> matches meaning, so &quot;iced sweet tea&quot; can find &quot;es teh manis&quot;.</li>
          <li><strong>A two-tower model</strong> (one neural network encodes the query, another encodes each dish, and matching dishes end up close together) adds personalised candidates. The dish side is computed once a day offline, so only the query needs encoding at request time.</li>
        </ul>
        <p>For the long tail, the system can also expand from the query to dishes that other users ordered after similar searches, and from one dish to similar dishes. This is how a merchant who opened yesterday can start getting impressions.</p>
        <p>Every extra channel adds some delay, so recall (how many good dishes we find) is always weighed against latency. For example, if a new channel finds 8% more good dishes in the top 200 but adds 80 milliseconds for the slowest users, the final decision comes from an A/B test that measures both effects together.</p>

        <h2>Ranking and Blending</h2>
        <p>The ranking model orders the candidates. It learns from past behaviour, with different weights for different actions: an order counts more than adding to cart, which counts more than a click. It also uses features that change by the minute in food delivery, such as promotions, surge pricing, stock levels and estimated delivery time, plus personal signals from the current session and the user&apos;s order history.</p>
        <p>New dishes need help to get noticed, since they have no history. One published approach from the travel industry is to rank an item by its estimated performance plus a bonus for uncertainty, so items with little data get a fair chance to prove themselves.</p>
        <p>Blending is where the marketplace side comes in. A delivery app serves both users and merchants, and promotions and ads are usually owned by a different team. The blending step combines the chance that a user orders a dish with the value of that order, and a single weight controls the balance between the two. Testing different weights offline shows the trade-off between relevance and merchant value clearly, and the team can pick a point on that curve deliberately. Merchant quality and variety act as guardrails, and data from merchant operations (opening hours, menus and delivery estimates) makes sure a closed or slow restaurant never wins just because it is running a promotion.</p>
        <p>If the app explains why it shows a result, the explanation should be grounded in real data. A language model should never write a price, and words like &quot;cheapest&quot; should only appear when the system has actually checked. A travel marketplace was fined A$44.7 million in Australia over how it presented its &quot;top offer&quot;, which shows how costly a misleading label can be.</p>

        <h2>The Offline Loop</h2>
        <p>The bottom row of the diagram runs in the background and keeps everything above it accurate.</p>
        <p><strong>Labels and debiasing.</strong> Training data comes from the event log, with orders weighted above add-to-cart actions and clicks. There is a catch: users click the first results more often simply because they are at the top (position bias). To correct for this, the team estimates how much each position inflates clicks, either from a small randomised experiment or from past A/B tests that changed the ranking, and then adjusts the training data accordingly.</p>
        <p><strong>Teacher and student models.</strong> A large language model labels a sample of real queries, including slang, typos and Javanese, and people check a portion of its work. A small, fast model is then trained on those labels to serve live traffic. Instacart reported that this kind of setup let a smaller model match its teacher&apos;s accuracy while running in under 300 milliseconds. The same large model can also tag dish attributes and dietary labels across menus.</p>
        <p><strong>Evaluation.</strong> To test whether search got better, the team needs a set of queries with known good answers (a judged set). Since none exists at the start, we would build one: sample queries across types and languages, collect candidate results from several systems, and use a language model to label them. The labelling prompt is chosen by checking which version agrees best with careful human labels, an approach Microsoft&apos;s Bing team published in 2024. For a new city or cuisine with no traffic yet, synthetic queries can fill the gap, as Airbnb described in its CASTLE work, with the caveat that generated queries tend to be longer than real ones.</p>
        <p>Finally, any change goes through an A/B test that assigns users randomly, checks that the split between groups matches the plan before reading results, and is sized in advance. Detecting a 2% relative improvement on a 10% conversion rate needs roughly 356,000 users in each group.</p>
        

        <h2>Conclusion</h2>
        <p>Food delivery is a demanding test for two-sided marketplace search, because slang, mixed languages, dietary rules, a constant stream of new merchants and two sides of a marketplace all show up in the same search bar.</p>
        <p>The design in this article rests on three ideas:</p>
        <ul>
          <li><strong>Turn rules into filters.</strong> Constraints like &quot;tanpa babi&quot; and price limits are parsed into structured slots and enforced before ranking, instead of being left to a similarity score.</li>
          <li><strong>Use large models where they pay off.</strong> A router keeps most queries on a fast, cheap path, and large language models handle the hard tail and the offline labelling work.</li>
          <li><strong>Measure before trusting.</strong> A judged set, corrected training labels and carefully run A/B tests are what show whether a change actually helped users and merchants.</li>
        </ul>

        <h2>Sources</h2>
        <ol className="article-sources">
          {sources.map(([label, url]) => <li key={url}><a className="inline-link" href={url} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={14} /></a></li>)}
        </ol>
      </main>
      <footer className="wrap footer"><a className="wordmark" href="/">jon<span>.</span></a><p>Jonathan Napitupulu · Jakarta, Indonesia</p><a href="https://github.com/napjon" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/napitupulu-jon" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></footer>
    </>
  );
}
