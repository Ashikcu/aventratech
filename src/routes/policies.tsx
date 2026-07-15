import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Card } from "@/components/ui-primitives";
import { icons } from "@/lib/site-data";

export const Route = createFileRoute("/policies")({
  component: Policies,
  head: () => ({
    meta: [
      { title: "Policies & Support — Aventra Tech" },
      { name: "description", content: "Payment, revision, warranty, and data privacy policies plus support channels and working hours." },
    ],
  }),
});

const policies = [
  { icon: icons.check, title: "Payment Policy", desc: "50% advance to initiate work, 50% before final delivery. Monthly plans are billed in advance. All payments via bank transfer, bKash, or Nagad." },
  { icon: icons.spark, title: "Revision Policy", desc: "Up to 3 rounds of revisions included per deliverable. Additional revisions billed at standard hourly rates. Scope changes documented and approved before work begins." },
  { icon: icons.shield, title: "Warranty Policy", desc: "6-month warranty on all custom software. 1-year warranty on hardware installations. Bug fixes and critical patches covered under warranty." },
  { icon: icons.server, title: "Data Privacy", desc: "GDPR-aligned data handling. Client data is never shared with third parties. NDAs signed on request. End-to-end encryption for sensitive transfers." },
  { icon: icons.bot, title: "Support Channels", desc: "Email, WhatsApp, phone hotline, and dedicated Slack channel for enterprise clients. Ticketing system for AMC clients with SLA tracking." },
  { icon: icons.globe, title: "Working Hours", desc: "Sunday–Thursday: 9:00 AM – 6:00 PM. Emergency support available 24/7 for AMC clients. Weekend maintenance windows by appointment." },
];

function Policies() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Policies & Support</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Transparent policies. Reliable support.</h1>
            <p className="mt-4 text-lg opacity-90">Clear terms so you always know where you stand.</p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Our Commitments" title="What you can expect from us" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
