import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { values, icons } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Aventra Tech" },
      { name: "description", content: "Meet the vision, mission and values behind Aventra Tech — a technology partner for institutions." },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">About Aventra Tech</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Built on integrity. Driven by innovation.</h1>
            <p className="mt-4 text-lg opacity-90">A cross-disciplinary team of engineers, designers and strategists — helping institutions thrive in a digital-first world.</p>
          </div>
        </div>
      </section>

      {/* Founder's message */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square w-full max-w-xs rounded-3xl bg-gradient-hero p-1 shadow-elegant">
                <div className="grid h-full w-full place-items-center rounded-[calc(1.5rem-4px)] bg-card">
                  <div className="text-center">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-hero text-4xl font-bold text-primary-foreground">AI</div>
                    <div className="mt-4 font-semibold">Ashik Iqbal</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Founder's Message</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">A note from Ashik Iqbal</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>When we started Aventra Tech, we asked a simple question: why should institutions in Bangladesh settle for anything less than world-class technology?</p>
              <p>Today we serve hospitals, schools, and corporates that trust us not just to deliver code and campaigns — but to be accountable partners in their transformation.</p>
              <p>Every project we take on is a promise: to be honest about what's possible, disciplined about how we build it, and relentless about the outcomes it produces.</p>
              <p className="font-semibold text-foreground">Thank you for considering us as your partner.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-gradient-soft">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
              <icons.globe className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">To become the most trusted technology partner for institutions across South Asia — recognized for the outcomes we create, not just the products we ship.</p>
          </Card>
          <Card>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
              <icons.spark className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">To design, build and support technology that lets hospitals heal better, schools teach better, and businesses grow smarter — with integrity at every step.</p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader eyebrow="Core Values" title="What we stand for" description="Five principles that shape every engagement." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <Card key={v.title}>
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <icons.check className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose */}
      <Section className="bg-gradient-soft">
        <SectionHeader eyebrow="Why Choose Aventra Tech" title="Purpose-built for institutions" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: icons.shield, title: "Enterprise-grade Security", desc: "Firewalls, audits, and data policies that meet regulated environments." },
            { icon: icons.spark, title: "Full-stack Capability", desc: "From cabling to AI — one accountable partner for the entire stack." },
            { icon: icons.check, title: "Bilingual Delivery", desc: "Bangla and English teams that speak your users' language." },
            { icon: icons.server, title: "SLA-backed AMC", desc: "Predictable maintenance costs with measurable uptime." },
            { icon: icons.bot, title: "AI-first Mindset", desc: "Automation woven into every solution, not bolted on." },
            { icon: icons.heart, title: "Long-term Partnership", desc: "80% of our clients are with us for 3+ years." },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
