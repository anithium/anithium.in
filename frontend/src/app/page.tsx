import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MobileNav from "@/components/layout/mobile-nav";
import ScrollEffects from "@/components/motion/scroll-effects";

const principles = [
  { number: "01", title: "Think independently", text: "Question assumptions. Look beyond the obvious. Make room for ideas that challenge convention." },
  { number: "02", title: "Build with intention", text: "Technology matters most when it serves a clear purpose. Thoughtful decisions shape meaningful outcomes." },
  { number: "03", title: "Stay curious", text: "Keep exploring, keep learning, and remain open to what has not been imagined yet." },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" className="site-shell">
        <ScrollEffects />
        <header className="site-header">
          <div className="container header-inner">
            <a href="#" aria-label="ANITHIUM home" className="brand-lockup">
              <Image src="/images/anithium-symbol-white.svg" alt="" width={29} height={29} priority />
              <span>ANITHIUM</span>
            </a>
            <nav aria-label="Main navigation" className="desktop-nav">
              <a href="#about">About</a>
              <a href="#perspective">Perspective</a>
              <a href="#principles">Principles</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="header-contact">Start a conversation <ArrowUpRight size={14} /></a>
            <MobileNav />
          </div>
        </header>

        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-meta" data-reveal="up">
              <span className="eyebrow">Independent by design</span>
              <span className="meta-rule" />
              <span className="meta-index">EST. / AN OPEN FUTURE</span>
            </div>
            <div className="hero-main" data-reveal="up">
              <p className="hero-kicker">Technology &amp; innovation company</p>
              <h1 className="hero-title">
                A different<br />
                way to <span>think.</span>
                <span className="hero-title-last">About what comes next.</span>
              </h1>
              <div className="hero-bottom">
                <p className="hero-description">An independent company driven by curiosity, guided by intent, and focused on the possibilities of technology.</p>
                <div className="hero-actions">
                  <a href="#about" className="text-link">Discover ANITHIUM <ArrowDown size={15} /></a>
                  <a href="#contact" className="text-link text-link-muted">Get in touch <ArrowUpRight size={15} /></a>
                </div>
              </div>
            </div>
            <div className="hero-mark" data-reveal="scale" aria-label="ANITHIUM symbol">
              <div className="mark-frame">
                <Image src="/images/anithium-symbol-white.svg" alt="ANITHIUM" width={220} height={220} priority />
              </div>
              <span className="mark-caption">A / ANITHIUM</span>
              <span className="mark-vertical">INDEPENDENT TECHNOLOGY &amp; INNOVATION</span>
            </div>
            <div className="hero-foot">
              <span>01 — A point of view</span>
              <span>Scroll to explore <span className="scroll-line" /></span>
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="container section-layout">
            <div className="section-aside" data-reveal="up">
              <span className="section-number">01</span>
              <span className="eyebrow">About ANITHIUM</span>
            </div>
            <div className="section-content" data-reveal="up">
              <h2>Not defined by one idea. <span>Driven by the space between imagination and possibility.</span></h2>
              <div className="body-columns">
                <p>ANITHIUM is an independent technology and innovation company. We are building a place for ideas, exploration, and original thinking—where technology is a starting point for what could be possible next.</p>
                <p className="quiet-note">We believe progress begins with the courage to look at familiar things differently.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="perspective" className="perspective-section">
          <div className="container perspective-layout">
            <div className="section-aside" data-reveal="up">
              <span className="section-number">02</span>
              <span className="eyebrow">Our perspective</span>
            </div>
            <div className="perspective-content" data-reveal="up">
              <span className="perspective-label">A way of seeing things</span>
              <h2>Technology is the medium.<br /><em>Possibility is the point.</em></h2>
              <div className="perspective-bottom">
                <span className="thin-index">THINK / QUESTION / EXPLORE</span>
                <p>We look at the world with an open mind—connecting ideas, questioning the familiar, and staying attentive to the changes shaping tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="content-section principles-section">
          <div className="container">
            <div className="principles-heading" data-reveal="up">
              <div className="section-aside"><span className="section-number">03</span><span className="eyebrow">What guides us</span></div>
              <h2>A mindset,<br /><span>not a formula.</span></h2>
            </div>
            <div className="principle-list">
              {principles.map((item) => (
                <article key={item.number} className="principle-row" data-reveal="up">
                  <span className="principle-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="principle-mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout" data-reveal="up">
            <div className="section-aside"><span className="section-number">04</span><span className="eyebrow">Connect</span></div>
            <div className="contact-main">
              <p className="contact-overline">Have something on your mind?</p>
              <h2>Good things<br />begin with <em>a conversation.</em></h2>
              <a href="mailto:anithium.in@gmail.com" className="contact-link">anithium.in@gmail.com <ArrowUpRight size={19} /></a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <a href="#" className="brand-lockup footer-brand">
              <Image src="/images/anithium-symbol-white.svg" alt="" width={23} height={23} />
              <span>ANITHIUM</span>
            </a>
            <span>© {new Date().getFullYear()} ANITHIUM. All rights reserved.</span>
            <span>Technology &amp; Innovation</span>
            <a href="#" className="back-top">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
