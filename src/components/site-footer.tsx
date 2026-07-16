import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-hero text-primary-foreground font-bold shadow-elegant">
                AT
              </div>
              <span className="font-display text-lg font-bold">
                Aventra <span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Empowering hospitals, universities, and businesses through enterprise-grade IT, software, creative, and AI solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
              <li><Link to="/process" className="hover:text-primary">Process</Link></li>
              <li><Link to="/policies" className="hover:text-primary">Policies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website & Software</li>
              <li>AI & Automation</li>
              <li>IT Infrastructure</li>
              <li>Branding & Design</li>
              <li>Digital Marketing</li>
              <li>Video Production</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>114, Kazi Nazrul Islam Avenue, Rupayan Trade Centre, Banglamotor, Dhaka-1000, Bangladesh</li>
              <li><a href="mailto:info@aventratech.net" className="hover:text-primary">info@aventratech.net</a></li>
              <li><a href="https://www.aventratech.net" className="hover:text-primary">www.aventratech.net</a></li>
            </ul>
            <div className="mt-4 flex gap-3">
              {["Facebook", "LinkedIn", "YouTube", "X"].map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <span className="text-xs font-semibold">{s === "Facebook" ? "F" : s[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 Aventra Tech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
