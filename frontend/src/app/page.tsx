import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Code2, Globe2, Layers3 } from "lucide-react";
import MobileNav from "@/components/layout/mobile-nav";
import Reveal from "@/components/motion/reveal";

const services = [
  { number: "01", icon: Globe2, title: "Websites & digital experiences", text: "Brand websites, business platforms, dashboards and web applications designed around the people who use them." },
  { number: "02", icon: Bot, title: "AI agents & automation", text: "Practical AI workflows, intelligent agents and automations that reduce repetitive work and help teams move faster." },
  { number: "03", icon: Code2, title: "Custom software & applications", text: "Purpose-built software, internal tools, APIs and applications shaped around a real business need." },
  { number: "04", icon: Layers3, title: "Product & startup engineering", text: "From an early concept to a working first release, we help turn a clear idea into a considered digital product." },
];

const steps = [
  { number: "01", title: "Tell us what you have in mind", text: "Share the problem, opportunity or idea. It does not need to be a perfect brief." },
  { number: "02", title: "We shape the scope", text: "We discuss goals, users, priorities, timelines and a practical way forward." },
  { number: "03", title: "We design and build", text: "The work moves through clear milestones, with decisions and progress kept visible." },
  { number: "04", title: "Launch and improve", text: "We help get the work ready for real use and identify what should happen next." },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" className="site-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#" aria-label="ANITHIUM home" className="brand-lockup">
              <Image src="/images/anithium-symbol-white.svg" alt="" width={30} height={30} priority />
              <span>ANITHIUM</span>
            </a>
            <nav aria-label="Main navigation" className="desktop-nav">
              <a href="#services">What we do</a>
              <a href="#approach">How we work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="header-contact">Start a project <ArrowUpRight size={15} /></a>
            <MobileNav />
          </div>
        </header>

        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <Reveal className="hero-kicker"><span className="hero-kicker-dot" /> Independent technology company · Working worldwide</Reveal>
              <Reveal delay={0.08}>
                <h1>We turn ambitious ideas into <span>useful technology.</span></h1>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="hero-summary">
                  <p>ANITHIUM works with people and businesses to design and build websites, applications, custom software and AI-powered solutions.</p>
                  <a href="#services" className="hero-discover">Explore what we do <ArrowDownRight size={18} /></a>
                </div>
              </Reveal>
              <div className="hero-proof"><span>For individuals</span><i /> <span>Startups</span><i /> <span>Businesses</span></div>
            </div>
            <div className="hero-art" aria-label="ANITHIUM brand mark">
              <div className="hero-art-orbit orbit-a" />
              <div className="hero-art-orbit orbit-b" />
              <div className="hero-art-disc">
                <Image src="/images/anithium-symbol-white.svg" alt="ANITHIUM symbol" width={270} height={270} priority />
              </div>
              <span className="hero-art-caption">Ideas into technology</span>
            </div>
            <div className="hero-bottom-line"><span>01 / INTRODUCTION</span><span>Scroll to explore <span className="scroll-indicator" /></span></div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <Reveal className="section-heading">
              <div><span className="section-index">01 — WHAT WE DO</span><h2>Technology built around <em>your next move.</em></h2></div>
              <p>From a first website to a custom digital product, we bring design, engineering and practical problem-solving together.</p>
            </Reveal>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.number} className="service-card">
                    <div className="service-card-top"><span>{service.number}</span><Icon size={23} strokeWidth={1.5} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href="#contact" aria-label={`Discuss ${service.title}`} className="service-link">Discuss a project <ArrowUpRight size={16} /></a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="container approach-layout">
            <Reveal className="approach-intro">
              <span className="section-index">02 — HOW WE WORK</span>
              <h2>Clear thinking.<br /><em>Careful execution.</em></h2>
              <p>Good work starts with understanding the problem—not rushing into a solution. We keep the process collaborative, focused and transparent.</p>
              <a href="#contact" className="dark-action">Talk through your idea <ArrowUpRight size={17} /></a>
            </Reveal>
            <div className="process-list">
              {steps.map((step) => (
                <Reveal key={step.number} className="process-step">
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  <ArrowUpRight className="process-arrow" size={17} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <Reveal className="about-label"><span className="section-index">03 — ABOUT ANITHIUM</span><div className="about-symbol"><Image src="/images/anithium-symbol-white.svg" alt="" width={64} height={64} /></div></Reveal>
            <Reveal className="about-copy">
              <h2>An independent technology company with room to <em>think bigger.</em></h2>
              <p>ANITHIUM brings together digital problem-solving, engineering and original ideas under one independent company. We work with individuals, founders and established businesses on the technology they need today, while continuing to explore ideas of our own.</p>
              <p>Our focus is straightforward: understand what matters, make thoughtful decisions and create technology that earns its place.</p>
            </Reveal>
          </div>
        </section>

        <section className="fit-section">
          <div className="container fit-inner">
            <Reveal><span className="section-index">WHO WE WORK WITH</span><h2>Have a challenge worth solving?</h2><p>Whether you are an individual with an idea, a startup finding its first product, or a business improving how it works—we are open to a conversation.</p></Reveal>
            <Reveal className="fit-tags"><span>Individuals</span><span>Founders &amp; startups</span><span>Growing businesses</span><span>Established teams</span></Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <Reveal className="contact-copy">
              <span className="section-index">04 — START A PROJECT</span>
              <h2>Tell us what<br />you want to <em>make possible.</em></h2>
              <p>Send us a short note about your idea, what you are trying to solve and where you are in the process. We will take it from there.</p>
              <a className="contact-email" href="mailto:anithium.in@gmail.com?subject=Project%20enquiry%20-%20ANITHIUM">anithium.in@gmail.com <ArrowUpRight size={19} /></a>
            </Reveal>
            <Reveal className="contact-brief">
              <span>TO HELP US UNDERSTAND YOUR PROJECT</span>
              <ul>
                <li>What are you looking to build?</li>
                <li>Who is it for?</li>
                <li>What would a successful outcome look like?</li>
                <li>Do you have a target timeline or budget?</li>
              </ul>
              <a href="mailto:anithium.in@gmail.com?subject=Project%20enquiry%20-%20ANITHIUM&body=What%20I%20want%20to%20build%3A%0A%0AWho%20it%20is%20for%3A%0A%0AWhat%20success%20looks%20like%3A%0A%0ATimeline%20and%20budget%3A%0A">Prepare a project enquiry <ArrowRight size={16} /></a>
            </Reveal>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <a href="#" className="brand-lockup footer-brand"><Image src="/images/anithium-symbol-white.svg" alt="" width={24} height={24} /><span>ANITHIUM</span></a>
            <span>© {new Date().getFullYear()} ANITHIUM. All rights reserved.</span>
            <span>Independent technology company</span>
            <a href="#" className="back-top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
