import type { ReactNode } from "react";

type IconProps = { className?: string };

const Svg = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

export const icons = {
  server: ({ className }: IconProps) => (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" />
    </Svg>
  ),
  code: ({ className }: IconProps) => (
    <Svg className={className}><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" /></Svg>
  ),
  megaphone: ({ className }: IconProps) => (
    <Svg className={className}><path d="M3 11v2a2 2 0 0 0 2 2h2l7 4V5L7 9H5a2 2 0 0 0-2 2Z" /><path d="M18 8a4 4 0 0 1 0 8" /></Svg>
  ),
  palette: ({ className }: IconProps) => (
    <Svg className={className}><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 22a10 10 0 1 1 10-10c0 2-1 3-3 3h-2c-2 0-3 1-3 3v1c0 2-1 3-2 3Z" /></Svg>
  ),
  film: ({ className }: IconProps) => (
    <Svg className={className}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v18M17 3v18M3 12h18M3 7.5h4M3 16.5h4M17 7.5h4M17 16.5h4" /></Svg>
  ),
  bot: ({ className }: IconProps) => (
    <Svg className={className}><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" /></Svg>
  ),
  hospital: ({ className }: IconProps) => (
    <Svg className={className}><path d="M4 21V7l8-4 8 4v14" /><path d="M12 9v6M9 12h6M9 21v-4h6v4" /></Svg>
  ),
  school: ({ className }: IconProps) => (
    <Svg className={className}><path d="M2 10 12 5l10 5-10 5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></Svg>
  ),
  building: ({ className }: IconProps) => (
    <Svg className={className}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 22v-4h4v4" /></Svg>
  ),
  store: ({ className }: IconProps) => (
    <Svg className={className}><path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" /><path d="M3 9h18l-1 12H4Z" /><path d="M9 13h6" /></Svg>
  ),
  heart: ({ className }: IconProps) => (
    <Svg className={className}><path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-10 11Z" /></Svg>
  ),
  globe: ({ className }: IconProps) => (
    <Svg className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></Svg>
  ),
  check: ({ className }: IconProps) => (
    <Svg className={className}><path d="m5 12 5 5 9-11" /></Svg>
  ),
  spark: ({ className }: IconProps) => (
    <Svg className={className}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></Svg>
  ),
  shield: ({ className }: IconProps) => (
    <Svg className={className}><path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6Z" /></Svg>
  ),
};

export const services = [
  {
    key: "it",
    icon: icons.server,
    title: "IT Infrastructure Solutions",
    short: "Secure networking, servers, cloud, IT project management and IT support for hospitals, universities and enterproses.",
    details: [
      "Computer setup & configuration",
      "Network design & Wi-Fi deployment",
      "Server installation & maintenance",
      "Firewall & cybersecurity",
      "Remote & on-site support",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
  {
    key: "software",
    icon: icons.code,
    title: "Website, Software & App Development",
    short: "Custom websites, ERP, POS, hospital management systems and mobile applications.",
    details: [
      "Corporate & company websites",
      "Hospital management websites",
      "School & college portals",
      "ERP systems",
      "POS solutions",
      "iOS & Android mobile apps",
    ],
  },
  {
    key: "marketing",
    icon: icons.megaphone,
    title: "Digital Marketing",
    short: "Data-driven social media campaigns that generate visibility, engagement, and qualified leads.",
    details: [
      "Facebook Ads management",
      "Google Ads & display",
      "Search Engine Optimization (SEO)",
      "YouTube marketing",
      "Lead generation funnels",
      "Analytics & reporting",
    ],
  },
  {
    key: "branding",
    icon: icons.palette,
    title: "Branding & Creative Design",
    short: "Professional brand identity, social media creatives, corporate profiles, and marketing materials.",
    details: [
      "Logo & identity design",
      "Company profile design",
      "Brochure & print collateral",
      "Social media creatives",
      "Style guides",
      "Packaging design",
    ],
  },
  {
    key: "video",
    icon: icons.film,
    title: "Video Production",
    short: "Corporate videos, promotional campaigns, institutional documentaries, and event coverage.",
    details: [
      "Corporate videos",
      "Promotional & product videos",
      "Documentaries",
      "2D & 3D animation",
      "Event coverage",
      "Post-production & editing",
    ],
  },
  {
    key: "ai",
    icon: icons.bot,
    title: "AI & Automation Solutions",
    short: "AI assistants, workflow automation, chatbot solutions and intelligent business operations.",
    details: [
      "AI chatbots",
      "WhatsApp automation",
      "Appointment booking systems",
      "Workflow automation",
      "Custom AI integrations",
      "Data intelligence",
    ],
  },
];

export const industries = [
  { icon: icons.hospital, title: "Healthcare", desc: "Hospitals, clinics & diagnostic centers" },
  { icon: icons.school, title: "Education", desc: "Schools, colleges & universities" },
  { icon: icons.building, title: "Corporate", desc: "Enterprises & holding groups" },
  { icon: icons.store, title: "SME", desc: "Small & medium businesses" },
  { icon: icons.heart, title: "NGO", desc: "Non-profits & foundations" },
  { icon: icons.globe, title: "International", desc: "Clients across borders" },
];

export const values = [
  { title: "Integrity", desc: "Transparent communication and trusted partnerships.\n" },
  { title: "Quality", desc: "Solutions built for performance and long-term reliability.\n\n" },
  { title: "Commitment", desc: "On-time delivery with dedicated client support." },
  { title: "Innovation", desc: "Leveraging AI and modern technologies for smarter operations.\n\n" },
  { title: "Client Success", desc: "Your growth is our benchmark." },
];

export const packages = [
  { name: "Startup Basic", price: "৳15,000", period: "/month", features: ["Basic IT support", "Landing page or 3-page website", "Social media setup", "Email support"], highlight: false },
  { name: "Business Professional", price: "৳30,000", period: "/month", features: ["Priority IT support", "Business website + CMS", "Social media management", "SEO basics", "Monthly reports"], highlight: false },
  { name: "Corporate Premium", price: "৳60,000", period: "/month", features: ["Dedicated support", "Custom web platform", "Full digital marketing", "Branding refresh", "Advanced SEO"], highlight: true },
  { name: "Hospital Digital", price: "৳75,000", period: "/month", features: ["Hospital website + portal", "Appointment automation", "Doctor & patient modules", "WhatsApp integration", "24/7 support"], highlight: false },
  { name: "School & College", price: "৳60,000", period: "/month", features: ["Institution website", "Student & result portal", "Admission automation", "Notice board & LMS", "Training included"], highlight: false },
  { name: "Corporate Enterprise", price: "৳100,000", period: "/month", features: ["Enterprise ERP/CRM", "Multi-branch IT support", "Full creative team", "AI automation suite", "SLA & AMC"], highlight: false },
];

export const process = [
  { step: "01", title: "Requirement Analysis", desc: "We understand your business goals and pain points in depth." },
  { step: "02", title: "Consultation", desc: "Expert advisory to align technology with strategy." },
  { step: "03", title: "Proposal", desc: "Tailored solution architecture and scope definition." },
  { step: "04", title: "Quotation", desc: "Transparent pricing with milestones." },
  { step: "05", title: "Agreement", desc: "Formal contract and kickoff." },
  { step: "06", title: "Development", desc: "Agile delivery with weekly check-ins." },
  { step: "07", title: "Delivery", desc: "Deployment, QA and go-live." },
  { step: "08", title: "Training & Support", desc: "Onboarding, documentation, and ongoing support." },
];
