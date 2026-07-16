import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { services, industries, values, icons } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aventra Tech" },
      { name: "description", content: "Empowering Institutions Through Innovation" },
    ],
  }),
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero hero-bg isolate">
        {/* Static painted glow layer — replaces 3 blur-3xl filter orbs (heavy paint) */}
        <div aria-hidden className="absolute inset-0 hero-glow" />
        {/* Grid — static, masked, single paint */}
        <div aria-hidden className="absolute inset-0 opacity-[0.15] [background:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        {/* Single lightweight animated accent, GPU-composited */}
        <div aria-hidden className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-2xl transform-gpu will-change-transform motion-safe:animate-float motion-reduce:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* Left: copy */}
            <div className="text-primary-foreground motion-safe:animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Aventra Tech · Bangladesh
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] tracking-tight">
                Empowering Institutions{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                    Through Innovation
                  </span>
                </span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl font-medium opacity-95">
                উদ্ভাবনের মাধ্যমে প্রতিষ্ঠানকে এগিয়ে নেওয়া
              </p>
              <p className="mt-6 text-base sm:text-lg text-primary-foreground/85 max-w-xl">
                Empowering healthcare, education, and modern enterprises with enterprise-grade IT, software, creative, and AI solutions to innovate, grow, and lead with confidence.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Get a Proposal
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <icons.shield className="h-4 w-4" />
                  <span>ISO-aligned</span>
                </div>
                <div className="h-3 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <icons.check className="h-4 w-4" />
                  <span>SLA-backed AMC</span>
                </div>
                <div className="h-3 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <icons.spark className="h-4 w-4" />
                  <span>20+ institutions</span>
                </div>
              </div>
            </div>

            {/* Right: floating glass card cluster (desktop only; skipped from paint on mobile) */}
            <div className="relative hidden lg:block h-[520px] motion-safe:animate-fade-in [content-visibility:auto] [contain-intrinsic-size:520px]" aria-hidden>
              {/* Main card */}
              <div className="absolute right-0 top-8 w-80 rounded-2xl border border-white/25 bg-white/15 p-6 shadow-2xl transform-gpu will-change-transform motion-safe:animate-float">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-primary shadow-lg">
                    <icons.bot className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70">AI Assistant</div>
                    <div className="text-sm font-bold text-white">Automation live</div>
                  </div>
                  <div className="ml-auto flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px] shadow-green-400" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-4/5 rounded-full bg-white" />
                  </div>
                  <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-3/5 rounded-full bg-white/80" />
                  </div>
                  <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-white/60" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-xs text-white/70">Workflow efficiency</span>
                  <span className="text-lg font-bold text-white">+84%</span>
                </div>
              </div>

              {/* Secondary card */}
              <div className="absolute left-0 top-48 w-72 rounded-2xl border border-white/25 bg-white/15 p-5 shadow-2xl transform-gpu will-change-transform motion-safe:animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Uptime</div>
                  <div className="flex gap-1">
                    {[6, 10, 8, 14, 11, 16, 20].map((h, i) => (
                      <div key={i} className="w-1.5 rounded-full bg-white/80" style={{ height: `${h * 2}px` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-3xl font-bold text-white">99.98<span className="text-lg opacity-70">%</span></div>
                <div className="mt-1 text-xs text-white/70">Last 90 days across managed infra</div>
              </div>

              {/* Tertiary card */}
              <div className="absolute right-6 bottom-4 w-64 rounded-2xl border border-white/25 bg-white/15 p-5 shadow-2xl transform-gpu will-change-transform motion-safe:animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <icons.server className="h-4 w-4 text-white" />
                  <span className="text-xs font-semibold text-white">Managed Infrastructure</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["24/7", "AMC", "SLA"].map((t) => (
                    <div key={t} className="rounded-lg bg-white/15 py-2 text-center text-xs font-bold text-white">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:grid-cols-4">
            {[
              { n: "20+", l: "Institutions" },
              { n: "5+", l: "Industries" },
              { n: "99.9%", l: "Uptime" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="bg-white/[0.03] px-6 py-5 text-primary-foreground">
                <div className="text-2xl sm:text-3xl font-bold">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background/40" />
      </section>


      {/* Intro */}
      <Section className="bg-gradient-soft">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              A trusted technology partner for healthcare, education, and modern enterprises.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Aventra Tech delivers IT infrastructure, custom software, creative solutions, and AI automation under one roof—helping organizations operate smarter, grow faster, and focus on what matters most.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["End-to-end project delivery", "Enterprise-grade security", "Bilingual support (Bangla & English)", "SLA-backed AMC & maintenance"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <icons.check className="h-4 w-4" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.slice(0, 4).map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                  <icons.spark className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Solutions built for institutions that lead"
          description="Six focused practices. One accountable partner."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card key={s.key} className="animate-fade-in-up" >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <Link to="/services" hash={s.key} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn More →
                </Link>
                <span className="sr-only">{i}</span>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-gradient-soft">
        <SectionHeader eyebrow="Industries" title="Trusted across key sectors" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift hover:border-primary/40">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-14 text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to transform your institution with technology?</h2>
              <p className="mt-3 opacity-90 max-w-xl">Talk to our consultants about your goals—we’ll design the right IT, software, and AI solutions to help your organization grow with confidence.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lift transition-transform hover:scale-105">
                Get a Proposal
              </Link>
              <Link to="/pricing" className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
