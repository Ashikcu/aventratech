import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { services, industries, values, icons } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aventra Tech — Empowering Institutions Through Innovation" },
      { name: "description", content: "Enterprise IT, software, marketing, and AI automation solutions for hospitals, schools, and corporates." },
    ],
  }),
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl text-primary-foreground animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Aventra Tech · Bangladesh
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Empowering Institutions <br className="hidden sm:block" />Through Innovation
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium opacity-90">
              উদ্ভাবনের মাধ্যমে প্রতিষ্ঠানকে এগিয়ে নেওয়া
            </p>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/85 max-w-2xl">
              We build enterprise-grade IT, software, creative and AI solutions that help hospitals, universities and corporates lead with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lift transition-transform hover:scale-105">
                Get a Proposal
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Contact Us
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "150+", l: "Clients" },
                { n: "12+", l: "Industries" },
                { n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-bold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section className="bg-gradient-soft">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              A trusted technology partner for forward-thinking institutions.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Aventra Tech unites IT infrastructure, custom software, creative design, and AI automation under one roof — so your teams focus on what they do best while we handle the technology.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["End-to-end delivery", "Enterprise-grade security", "Bilingual support", "SLA-backed AMC"].map((f) => (
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
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
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
        <SectionHeader eyebrow="Industries" title="Trusted across sectors" />
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
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to transform your institution?</h2>
              <p className="mt-3 opacity-90 max-w-xl">Talk to our consultants about the outcomes you want — we'll design the technology that gets you there.</p>
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
