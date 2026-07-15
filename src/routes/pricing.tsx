import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/ui-primitives";
import { packages, icons } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Aventra Tech" },
      { name: "description", content: "Transparent monthly packages for startups, businesses, corporates, hospitals and educational institutions." },
    ],
  }),
});

function Pricing() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Packages & Pricing</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Plans that scale with you.</h1>
            <p className="mt-4 text-lg opacity-90">Transparent monthly pricing. No hidden fees. Custom plans on request.</p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Choose Your Plan" title="Built for every stage" description="From lean startups to multi-branch enterprises." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift ${
                p.highlight
                  ? "border-primary bg-gradient-hero text-primary-foreground"
                  : "border-border bg-gradient-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-elegant">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold ${p.highlight ? "" : "text-foreground"}`}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <ul className={`mt-6 space-y-3 flex-1 ${p.highlight ? "" : "text-foreground"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <div className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.highlight ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                      <icons.check className="h-3.5 w-3.5" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-white text-primary shadow-lift"
                    : "bg-gradient-hero text-primary-foreground shadow-elegant"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom? <Link to="/contact" className="text-primary font-semibold hover:underline">Talk to our team →</Link>
        </p>
      </Section>
    </>
  );
}
