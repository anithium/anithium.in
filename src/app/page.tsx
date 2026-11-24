import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

const capabilities = [
  { number: "01", title: "Websites & Applications", description: "Digital experiences designed to move businesses and ideas forward." },
  { number: "02", title: "AI & Automation", description: "Intelligent workflows that make complex work feel effortless." },
  { number: "03", title: "Custom Software", description: "Purpose-built systems shaped around real operational needs." },
  { number: "04", title: "Startup Solutions", description: "From first prototype to products ready for the world." },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="container relative z-20 flex h-20 items-center justify-between border-b border-white/10">
        <a href="#" aria-label="ANITHIUM home" className="flex items-center gap-3">
          <Image src="/images/anithium-symbol-white.svg" alt="" width={34} height={34} priority />
          <span className="text-[15px] font-semibold tracking-[.24em]">ANITHIUM</span>
        </a>
        <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[.16em] text-white/65 md:flex">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#capabilities">Capabilities</a>
          <a className="transition hover:text-white" href="#ventures">Ventures</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="outline-button hidden items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-[.16em] md:flex">
          Start a conversation <ArrowUpRight size={14} />
        </a>
        
      </header>

      <section className="relative flex min-h-[690px] items-center border-b border-white/10">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="container relative z-10 grid items-center gap-12 py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow mb-8">Independent technology & innovation company</p>
            <h1 className="display-font max-w-[760px] text-6xl font-medium leading-[.98] sm:text-7xl lg:text-[90px]">
              We build what&apos;s <span className="text-white/45">next.</span>
            </h1>
            <p className="mt-8 max-w-[510px] text-base leading-8 text-white/55">
              We turn ambitious ideas into meaningful digital experiences, intelligent systems, and ventures built for the future.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#capabilities" className="solid-button inline-flex items-center gap-5 px-6 py-4 text-[11px] font-semibold uppercase tracking-[.13em]">
                Explore what we do <ArrowUpRight size={15} />
              </a>
              <a href="#about" className="outline-button inline-flex items-center gap-4 px-6 py-4 text-[11px] uppercase tracking-[.13em]">
                Discover ANITHIUM <ArrowDownRight size={15} />
              </a>
            </div>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center">
            <div className="absolute inset-[8%] rounded-full border border-white/10" />
            <div className="absolute inset-[19%] rounded-full border border-white/[.07]" />
            <div className="absolute inset-[30%] rounded-full border border-white/[.05]" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(210,215,220,.14),transparent_66%)] blur-2xl" />
            <Image
              src="/images/anithium-symbol-white.svg"
              alt="ANITHIUM angular A symbol"
              width={330}
              height={330}
              priority
              className="relative z-10 h-[62%] w-[62%] object-contain drop-shadow-[0_0_55px_rgba(220,225,230,.16)]"
            />
            <span className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[.35em] text-white/35">TECHNOLOGY &amp; INNOVATION</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/35 md:flex">
          Scroll to explore <span className="h-8 w-px bg-white/25" />
        </div>
      </section>

      <section id="about" className="container grid gap-12 py-28 md:grid-cols-[.7fr_1.3fr] md:py-36">
        <div><p className="eyebrow">01 / Who we are</p></div>
        <div>
          <h2 className="display-font max-w-[850px] text-4xl leading-tight sm:text-5xl">
            One vision. Multiple possibilities. <span className="text-white/40">Technology that creates momentum.</span>
          </h2>
          <p className="mt-8 max-w-[680px] text-sm leading-8 text-white/55">
            ANITHIUM is an independent technology and innovation company. We partner with people and businesses to create digital solutions, while exploring and building products of our own.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section-rule">
        <div className="container py-24 md:py-32">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow mb-5">02 / What we do</p><h2 className="display-font text-5xl sm:text-6xl">Ideas into impact.</h2></div>
            <p className="max-w-[310px] text-sm leading-7 text-white/45">We bring strategy, engineering, and thoughtful design together to solve meaningful problems.</p>
          </div>
          <div className="grid border-t border-white/15 md:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.number} className="group border-b border-white/15 py-8 md:px-8 md:first:pl-0 md:nth-[2n+1]:border-r md:nth-[2n+1]:pr-10 md:nth-[2n]:pl-10">
                <div className="mb-9 flex items-center justify-between text-xs text-white/35"><span>{item.number}</span><ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" size={17} /></div>
                <h3 className="text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-[390px] text-sm leading-7 text-white/45">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="section-rule">
        <div className="container grid gap-10 py-24 md:grid-cols-2 md:py-32">
          <div><p className="eyebrow mb-5">03 / Products & ventures</p><h2 className="display-font text-5xl leading-tight sm:text-6xl">Building beyond the brief.</h2></div>
          <div className="flex flex-col justify-end">
            <p className="max-w-[520px] text-sm leading-8 text-white/55">Our work doesn&apos;t stop at client projects. We explore opportunities, experiment with emerging technology, and develop independent products designed to solve problems at scale.</p>
            <p className="mt-8 text-[10px] uppercase tracking-[.2em] text-white/35">A growing portfolio of ideas in motion</p>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="container py-24 md:py-32">
          <p className="eyebrow mb-6">04 / How we think</p>
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <h2 className="display-font text-5xl leading-tight sm:text-6xl">Curiosity drives us. <span className="text-white/40">Precision defines us.</span></h2>
            <p className="max-w-[500px] self-end text-sm leading-8 text-white/55">We believe the best outcomes come from asking better questions, understanding the real challenge, and engineering solutions with care. Every detail has a purpose. Every decision moves the work forward.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-rule">
        <div className="container py-24 text-center md:py-32">
          <p className="eyebrow mb-6">Have an idea in mind?</p>
          <h2 className="display-font mx-auto max-w-[800px] text-5xl leading-tight sm:text-7xl">Let&apos;s make something <span className="text-white/40">matter.</span></h2>
          <a href="#about" className="solid-button mt-10 inline-flex items-center gap-5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[.15em]">Discover ANITHIUM <ArrowRight size={16} /></a>
        </div>
      </section>

      <footer className="section-rule">
        <div className="container flex flex-col justify-between gap-6 py-8 text-[10px] uppercase tracking-[.16em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} ANITHIUM. All rights reserved.</span>
          <span>Technology & Innovation</span>
          <a href="#" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
