import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { services, icons } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Aventra Tech" },
      { name: "description", content: "IT infrastructure, software, digital marketing, branding, video and AI automation services." },
    ],
  }),
});

function Services() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Our Services</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Six practices. One partner.</h1>
            <p className="mt-4 text-lg opacity-90">Deep expertise across the technologies your institution needs to lead.</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.key}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <a href={`#${s.key}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn More →
                </a>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Service details */}
      <Section className="bg-gradient-soft">
        <SectionHeader eyebrow="Service Details" title="What's included in each practice" />
        <div className="space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <div key={s.key} id={s.key} className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card">
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-2xl sm:text-3xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.short}</p>
                    <Link to="/contact" className="mt-6 inline-flex items-center rounded-lg bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105">
                      Discuss this service
                    </Link>
                  </div>
                  <div className="rounded-2xl bg-gradient-soft p-6 border border-border">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Included</div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                            <icons.check className="h-3.5 w-3.5" />
                          </div>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
