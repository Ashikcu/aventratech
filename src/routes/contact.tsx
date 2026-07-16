import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/ui-primitives";
import { icons } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Aventra Tech" },
      { name: "description", content: "Get in touch with Aventra Tech. Head office in Dhaka, Bangladesh. Email info@aventratech.net." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Get in Touch</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">Let’s build the future of your institution.</h1>
            <p className="mt-4 text-lg opacity-90">Tell us about your organization and goals—our team will respond within one business day with the right next steps.</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: icons.building, title: "Head Office", value: "114, Kazi Nazrul Islam Avenue, Rupayan Trade Centre, Banglamotor, Dhaka, Bangladesh" },
              { icon: icons.globe, title: "Email", value: "info@aventratech.net", href: "mailto:info@aventratech.net" },
              { icon: icons.spark, title: "Website", value: "www.aventratech.net", href: "https://www.aventratech.net" },
              { icon: icons.megaphone, title: "Phone", value: "+880 1570-265298", href: "tel:+8801570265298" },
              { icon: icons.bot, title: "WhatsApp", value: "+880 1570-265298", href: "https://wa.me/8801570265298" },
            ].map((c) => {
              const Icon = c.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift hover:border-primary/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    <div className="mt-1 font-semibold break-words">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="block">{content}</a>
              ) : (
                <div key={c.title}>{content}</div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We'll respond within 1 business day.</p>
              {sent ? (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                    <icons.check className="h-6 w-6" />
                  </div>
                  <div className="mt-3 font-semibold">Thanks — your message is on its way.</div>
                  <p className="mt-1 text-sm text-muted-foreground">Our team will reach out shortly.</p>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" name="phone" />
                    <Field label="Organization" name="org" />
                  </div>
                  <Field label="Subject" name="subject" />
                  <div>
                    <label className="text-sm font-semibold">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
