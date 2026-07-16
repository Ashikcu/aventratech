import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  component: Industries,
  head: () => ({
    meta: [
      { title: "Industries We Serve — Aventra Tech" },
      { name: "description", content: "Healthcare, education, corporate, SME, NGO and international clients trust Aventra Tech." },
    ],
  }),
});

function Industries() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Industries</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Tailored technology solutions for fast-growing sectors.</h1>
            <p className="mt-4 text-lg opacity-90">Deep domain expertise across healthcare, education, corporate, and development sectors.</p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Who We Serve" title={<>Tailored IT, Software & AI for <b>diverse industries.</b></>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Card key={ind.title}>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
