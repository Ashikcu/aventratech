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
  { icon: icons.check, title: "Payment Policy", desc: "25% advance to initiate work, 75% after final delivery. Monthly support plans are billed in advance. Payment is accepted via bank transfer, bKash, and Nagad." },
  { icon: icons.spark, title: "Revision Policy", desc: "Up to 5 rounds of revisions are included per deliverable. Additional revisions may be billed separately after approval of the final scope." },
  { icon: icons.shield, title: "Warranty Policy", desc: "6-month warranty on custom software and bug fixes for approved deliverables. Hardware installations include warranty support as per manufacturer terms." },
  { icon: icons.server, title: "Data Privacy", desc: "Client data is handled confidentially and is never shared with third parties without consent. NDA agreements are available on request." },
  { icon: icons.bot, title: "Support Channels", desc: "Support is available via email, phone, WhatsApp, and dedicated channels for enterprise clients. SLA tracking is available for AMC customers." },
  { icon: icons.globe, title: "Working Hours", desc: "Saturday–Thursday: 10:00 AM – 7:00 PM. Emergency support is available for AMC clients, with scheduled weekend maintenance when required." },
];

function Policies() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Policies & Support</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Transparent policies. Reliable support.</h1>
            <p className="mt-4 text-lg opacity-90">Clear terms so you always know where your project stand.</p>
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
