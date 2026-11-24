import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MobileNav from "@/components/layout/mobile-nav";
import ScrollEffects from "@/components/motion/scroll-effects";
import AmbientWorld from "@/components/motion/ambient-world";

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
      <AmbientWorld />
      <header className="container relative z-30 flex h-16 items-center justify-between border-b border-white/10 sm:h-20 site-header">
        <a href="#" aria-label="ANITHIUM home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image src="/images/anithium-symbol-white.svg" alt="" width={30} height={30} priority />
          <span className="text-[13px] font-semibold tracking-[.18em] sm:text-[15px] sm:tracking-[.24em]">ANITHIUM</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[11px] uppercase tracking-[.16em] text-white/65 md:flex">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#perspective">Perspective</a>
          <a className="transition hover:text-white" href="#principles">Principles</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="outline-button hidden items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-[.16em] md:flex">
          Get in touch <ArrowUpRight size={14} />
        </a>
        <MobileNav />
      </header>

      <section className="hero-section relative flex min-h-[690px] items-center overflow-hidden border-b border-white/10 py-16 sm:min-h-[760px] lg:min-h-[calc(100svh-80px)] lg:py-20">
        
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="hero-grain pointer-events-none absolute inset-0" />
        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="hero-copy" data-reveal="up">
            <p className="eyebrow mb-6 max-w-[34rem] text-[9px] leading-5 sm:mb-8 sm:text-[11px]">Independent technology &amp; innovation company</p>
            <h1 className="display-font max-w-[760px] text-[clamp(2.7rem,8vw,5.8rem)] font-medium leading-[1.04]">
              A different way <span className="text-white/40">to think about</span> what&apos;s next.
            </h1>
            <p className="mt-6 max-w-[490px] text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8">
              An independent company driven by curiosity, guided by intent, and focused on the possibilities of technology.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">
              <a href="#about" className="solid-button inline-flex min-h-12 items-center justify-center gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.13em] sm:text-[11px]">
                Get to know us <ArrowDown size={15} />
              </a>
              <a href="#contact" className="outline-button inline-flex min-h-12 items-center justify-center gap-4 px-6 py-4 text-[10px] uppercase tracking-[.13em] sm:text-[11px]">
                Start a conversation <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="hero-emblem mx-auto flex aspect-square w-full max-w-[min(82vw,470px)] items-center justify-center" role="img" aria-label="ANITHIUM angular symbol surrounded by subtle orbital rings" data-reveal="scale">
            <div className="emblem-aura" />
            <div className="emblem-orbit emblem-orbit-one"><span /></div>
            <div className="emblem-orbit emblem-orbit-two"><span /></div>
            <div className="emblem-orbit emblem-orbit-three" />
            <div className="emblem-core">
              <Image src="/images/anithium-symbol-white.svg" alt="ANITHIUM angular A symbol" width={330} height={330} priority className="h-[62%] w-[62%] object-contain" />
            </div>
            <span className="emblem-caption">INDEPENDENT BY DESIGN</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/35 md:flex">
          Scroll to explore <span className="h-8 w-px bg-white/25" />
        </div>
      </section>

      <section id="about" className="container grid gap-8 py-20 sm:gap-12 sm:py-28 md:grid-cols-[.7fr_1.3fr] md:py-36">
        <div data-reveal="up"><p className="eyebrow">01 / About ANITHIUM</p></div>
        <div data-reveal="up" className="reveal-delay-1">
          <h2 className="display-font max-w-[850px] text-[clamp(2rem,6vw,3.5rem)] leading-[1.18]">
            Not defined by one idea. <span className="text-white/40">Driven by the space between imagination and possibility.</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-sm leading-7 text-white/55 sm:mt-8 sm:leading-8">
            ANITHIUM is an independent technology and innovation company. We are building a place for ideas, exploration, and original thinking—where technology is a starting point for what could be possible next.
          </p>
        </div>
      </section>

      <section id="perspective" className="section-rule relative overflow-hidden">
        <div className="perspective-glow pointer-events-none absolute inset-0" />
        <div className="container relative grid gap-10 py-20 sm:py-24 md:grid-cols-[.8fr_1.2fr] md:py-32">
          <div data-reveal="up"><p className="eyebrow mb-5">02 / Our perspective</p><p className="max-w-[250px] text-xs leading-6 text-white/35">The future is not a fixed destination. It is a space we keep exploring.</p></div>
          <div data-reveal="up" className="reveal-delay-1">
            <h2 className="display-font max-w-[800px] text-[clamp(2.35rem,7vw,4.4rem)] leading-[1.12]">Technology is the medium. <span className="text-white/40">Possibility is the point.</span></h2>
            <p className="mt-7 max-w-[600px] text-sm leading-8 text-white/55">We look at the world with an open mind—connecting ideas, questioning the familiar, and staying attentive to the changes shaping tomorrow.</p>
          </div>
        </div>
      </section>

      <section id="principles" className="section-rule">
        <div className="container py-20 sm:py-24 md:py-32">
          <div className="mb-10 max-w-[650px] sm:mb-14" data-reveal="up">
            <p className="eyebrow mb-5">03 / What guides us</p>
            <h2 className="display-font text-[clamp(2.4rem,7vw,4rem)] leading-tight">A mindset, not a formula.</h2>
          </div>
          <div className="principle-list border-t border-white/15">
            {principles.map((item) => (
              <article key={item.number} className="principle-row grid gap-4 border-b border-white/15 py-7 sm:py-9 md:grid-cols-[70px_1fr_1.1fr] md:items-start md:gap-8" data-reveal="up">
                <span className="text-xs text-white/35">{item.number}</span>
                <h3 className="text-xl tracking-tight sm:text-2xl">{item.title}</h3>
                <p className="max-w-[440px] text-sm leading-7 text-white/45">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-rule">
        <div className="container py-20 text-center sm:py-24 md:py-32" data-reveal="up">
          <p className="eyebrow mb-6">04 / Connect</p>
          <h2 className="display-font mx-auto max-w-[850px] text-[clamp(2.5rem,8vw,4.8rem)] leading-tight">The next idea starts with <span className="text-white/40">a conversation.</span></h2>
          <p className="mx-auto mt-6 max-w-[480px] text-sm leading-7 text-white/50">Have a thought, a question, or a perspective to share? We would be glad to hear from you.</p>
          <a href="mailto:anithium.in@gmail.com" className="solid-button mt-8 inline-flex min-h-12 items-center justify-center gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.13em] sm:mt-10 sm:px-7 sm:text-[11px]">Email ANITHIUM <ArrowUpRight size={16} /></a>
          <a href="mailto:anithium.in@gmail.com" className="mt-4 block text-sm text-white/50 transition hover:text-white">anithium.in@gmail.com</a>
        </div>
      </section>

      <footer className="section-rule" data-reveal="up">
        <div className="container flex flex-col justify-between gap-4 py-7 text-[9px] uppercase tracking-[.12em] text-white/40 sm:flex-row sm:gap-6 sm:py-8 sm:text-[10px] sm:tracking-[.16em]">
          <span>© {new Date().getFullYear()} ANITHIUM. All rights reserved.</span>
          <span>Technology &amp; Innovation</span>
          <a href="#" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </footer>
      </main>
    </>
  );
}
