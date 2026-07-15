import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/ui-primitives";
import { process } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  component: Process,
  head: () => ({
    meta: [
      { title: "Service Delivery Process — Aventra Tech" },
      { name: "description", content: "How we deliver: from requirement analysis to training and support." },
    ],
  }),
});

function Process() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Delivery Process</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">A disciplined path from idea to impact.</h1>
            <p className="mt-4 text-lg opacity-90">Eight steps that keep your project transparent, on-time, and outcome-focused.</p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="How We Work" title="Our 8-step delivery framework" />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:-translate-x-1/2" />
          <div className="space-y-8">
            {process.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div key={step.step} className={`relative grid gap-4 sm:grid-cols-2 sm:gap-8 items-center`}>
                  <div className={`pl-12 sm:pl-0 ${left ? "sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
                    <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary">Step {step.step}</div>
                      <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-hero text-xs font-bold text-primary-foreground shadow-elegant ring-4 ring-background">
                      {step.step}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
