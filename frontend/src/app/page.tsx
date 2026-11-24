import { ArrowDownRight, ArrowUpRight, Bot, Braces, CircuitBoard, Database, ShieldCheck, Workflow } from "lucide-react";
import MobileNav from "@/components/layout/mobile-nav";
import Reveal from "@/components/motion/reveal";

const capabilities = [
  { icon: Braces, code: "01 / PRODUCT ENGINEERING", title: "Web platforms & applications", text: "Customer-facing products, internal platforms and operational dashboards—with clear architecture, deliberate interfaces and maintainable code." },
  { icon: Bot, code: "02 / APPLIED AI", title: "AI systems that do more than generate text", text: "Retrieval-grounded assistants, tool-using agents and workflow automation designed around context, permissions and measurable task outcomes." },
  { icon: Workflow, code: "03 / SYSTEMS INTEGRATION", title: "Software that works with your stack", text: "APIs, data flows and integrations that connect existing tools, remove manual hand-offs and make business processes easier to operate." },
  { icon: Database, code: "04 / ENGINEERING FOUNDATIONS", title: "Backend, data & infrastructure", text: "The application logic, data models, authentication and deployment foundations that keep digital products dependable as they evolve." },
];

const principles = [
  { id: "A", title: "Architecture before acceleration", text: "Start with the problem, constraints and system boundaries. Choose the simplest architecture that can support the product's real requirements." },
  { id: "B", title: "AI with verification built in", text: "Ground outputs in relevant data, define evaluations, constrain tool access and keep human approval where the impact calls for it." },
  { id: "C", title: "Production is the actual finish line", text: "Consider security, observability, failure paths, operating cost and maintainability before calling a system ready." },
];

const delivery = [
  ["01", "Discover", "Understand the users, existing systems, constraints and the outcome that matters."],
  ["02", "Define", "Agree on scope, architecture, milestones and what success will be measured against."],
  ["03", "Engineer", "Design, implement and test in reviewable increments. Keep decisions and trade-offs visible."],
  ["04", "Operate & improve", "Prepare for release, observe real usage and improve the system based on evidence."],
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" className="site-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#" className="brand-lockup" aria-label="ANITHIUM Labs home">
              <Image src="/images/anithium-symbol-white.svg" alt="" width={32} height={32} priority />
              <span>ANITHIUM <b>LABS</b></span>
            </a>
            <nav className="desktop-nav" aria-label="Main navigation">
              <a href="#capabilities">Capabilities</a><a href="#engineering">Engineering</a><a href="#process">Approach</a><a href="#about">About</a>
            </nav>
            <a href="#contact" className="header-cta">Discuss a project <ArrowUpRight size={15}/></a>
            <MobileNav />
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <Reveal><p className="eyebrow"><span className="status-dot"/> INDEPENDENT SOFTWARE &amp; AI ENGINEERING</p></Reveal>
              <Reveal delay={.08}><h1>Make the hard<br/>parts <em>work.</em></h1></Reveal>
              <Reveal delay={.16}><p className="hero-lede">ANITHIUM Labs designs and engineers software systems, digital products and applied AI for teams with real problems to solve.</p></Reveal>
              <Reveal delay={.22} className="hero-actions">
                <a className="button-primary" href="#contact">Bring us a problem <ArrowUpRight size={17}/></a>
                <a className="button-text" href="#capabilities">Explore capabilities <ArrowDownRight size={17}/></a>
              </Reveal>
              <div className="hero-audience"><span>PRODUCT TEAMS</span><span>FOUNDERS</span><span>OPERATIONS</span><span>BUSINESSES</span></div>
            </div>
            <Reveal className="system-visual" delay={.12}>
                            <div className="system-map" aria-label="Illustrative software system architecture">
                <div className="system-node node-input"><span>01</span><strong>Problem</strong><small>Context · Constraints</small></div>
                <div className="system-connector connector-one"><i/></div>
                <div className="system-node node-core"><span>02 / ENGINEERING</span><strong>ANITHIUM</strong><small>Design · Logic · Systems</small></div>
                <div className="system-connector connector-two"><i/></div>
                <div className="system-output">
                  <div><span>03A</span><strong>Software</strong></div>
                  <div><span>03B</span><strong>Applied AI</strong></div>
                  <div><span>03C</span><strong>Integration</strong></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="capabilities-section">
          <div className="container">
            <Reveal className="section-intro">
              <div><h2>From the interface<br/>to the <em>underlying system.</em></h2></div>
              <p>We work across the layers that make a digital product useful: the experience people touch, the logic behind it, the data it depends on and the automation that connects it all.</p>
            </Reveal>
            <div className="capability-list">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return <Reveal key={item.code} className="capability-row">
                  <span className="capability-code">{item.code}</span>
                  <div className="capability-title"><Icon size={22} strokeWidth={1.5}/><h3>{item.title}</h3></div>
                  <p>{item.text}</p>
                  <a href="#contact" aria-label={`Discuss ${item.title}`}><ArrowUpRight size={19}/></a>
                </Reveal>;
              })}
            </div>
          </div>
        </section>

        <section className="market-section">
          <div className="container market-layout">
            <Reveal className="market-heading">
                            <h2>AI made the first draft cheaper.<br/><em>It did not make correctness optional.</em></h2>
              <p>We think the next advantage comes from engineering discipline: systems that can be evaluated, constrained, observed and improved—not simply generated.</p>
            </Reveal>
            <Reveal className="market-evidence">
              <div className="evidence-source">STACK OVERFLOW · 2025 DEVELOPER SURVEY</div>
              <div className="evidence-stats">
                <div><strong>84%</strong><span>use or plan to use AI tools in development</span></div>
                <div><strong>46%</strong><span>actively distrust the accuracy of AI output</span></div>
              </div>
              <p className="evidence-note">Adoption is rising. Trust still has to be earned. That gap is where thoughtful engineering matters.</p>
              <a href="https://survey.stackoverflow.co/2025/ai" target="_blank" rel="noreferrer">Read the developer survey <ArrowUpRight size={14}/></a>
            </Reveal>
          </div>
        </section>

        <section id="engineering" className="engineering-section">
          <div className="container">
            <Reveal className="section-intro engineering-intro">
              <div><h2>Useful software is<br/><em>earned, not generated.</em></h2></div>
              <p>Modern tools can accelerate implementation. They cannot replace product judgment, system design or responsibility for what ships.</p>
            </Reveal>
            <div className="engineering-principles">
              {principles.map((item) => <Reveal className="engineering-principle" key={item.id}>
                <span>{item.id}</span><div><h3>{item.title}</h3><p>{item.text}</p></div>
              </Reveal>)}
            </div>
            <div className="engineering-footnote"><ShieldCheck size={17}/><p>For AI-enabled systems, that means thinking about evaluation, data boundaries, access control, human review and operating cost from the start—not adding them after a demo works.</p></div>
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="container process-layout">
            <Reveal className="process-heading">
              <h2>A clear path<br/>from <em>problem to production.</em></h2>
              <p>Every engagement starts with a conversation about what needs to change. We define the work together before committing to a build.</p>
              <a href="#contact" className="button-dark">Start a conversation <ArrowUpRight size={16}/></a>
            </Reveal>
            <div className="process-steps">
              {delivery.map(([number,title,description]) => <Reveal key={number} className="process-step">
                <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
              </Reveal>)}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <Reveal className="about-copy">
              <h2>ANITHIUM Labs is an independent technology practice built around <em>curiosity and engineering.</em></h2>
              <p>We work with founders, individuals and businesses to turn requirements into considered digital systems. Our work spans product engineering, custom software, integrations and applied AI.</p>
              <p>Alongside client work, the lab is a space to explore ideas and develop independent products. We prefer clear problem statements, honest technical trade-offs and software that remains understandable after launch.</p>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <Reveal className="contact-copy">
              <h2>What are you<br/>trying to <em>make work?</em></h2>
              <p>Tell us what you are building, what is getting in the way, or which process needs to work better. A concise brief is enough to start.</p>
              <a className="contact-email" href="mailto:anithium.in@gmail.com?subject=Project%20discussion%20-%20ANITHIUM%20Labs">anithium.in@gmail.com <ArrowUpRight size={18}/></a>
            </Reveal>
            <Reveal className="contact-brief">
              <div className="brief-title"><span>PROJECT NOTE / 001</span><span>OPTIONAL STARTING POINT</span></div>
              <a href="mailto:anithium.in@gmail.com?subject=Project%20discussion%20-%20ANITHIUM%20Labs&body=The%20problem%20I%20am%20trying%20to%20solve%3A%0A%0AWho%20will%20use%20it%3A%0A%0AWhat%20exists%20today%3A%0A%0AConstraints%20(timeline%2C%20budget%2C%20systems)%3A%0A">Open project brief <ArrowUpRight size={17}/></a>
              <p>You do not need a finished specification. We can work through the unknowns together.</p>
            </Reveal>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <a href="#" className="brand-lockup footer-brand"><Image src="/images/anithium-symbol-white.svg" alt="" width={24} height={24}/><span>ANITHIUM <b>LABS</b></span></a>
            <span>Independent technology practice</span>
            <span>© {new Date().getFullYear()} ANITHIUM Labs</span>
            <a href="#" className="back-top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
