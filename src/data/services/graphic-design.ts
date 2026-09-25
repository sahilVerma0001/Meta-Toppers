import { Shapes } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "graphic-design",
  variant: "creative",
  icon: Shapes,
  label: "Engine 05",
  title: "Brand & Graphic Design",
  shortDescription: "Premium visual identities and marketing collateral that position your brand as the undisputed leader in your market.",
  problem: "You provide a premium service, but your branding looks outdated, inconsistent, or cheap. When high-ticket clients look at your pitch deck or marketing materials, they subconsciously doubt your quality because your visuals don't match your expertise.",
  agitation: "People judge books by their covers. If your visual identity looks cheap, clients will expect your services to be cheap. You are constantly fighting to justify your pricing because your brand looks like a start-up rather than an established market leader.",
  solution: [
    "Complete brand identity systems (logos, typography, colors)",
    "High-converting marketing materials and pitch decks",
    "Custom illustrations and 3D assets"
  ],
  stat: "2.5×",
  statLabel: "higher perceived brand value",
  accent: "from-amber-500 to-orange-600",
  benefits: [
    { title: "Cohesive Identity", desc: "Every touchpoint—from your website to your business cards—looks perfectly unified." },
    { title: "Psychological Color Theory", desc: "We use colors engineered to evoke trust, urgency, or calm based on your goals." },
    { title: "Scalable Systems", desc: "We deliver full component libraries so your internal team can stay on-brand." }
  ],
  caseStudies: [
    { name: "Urban Architecture", result: "Rebrand led to a 40% increase in enterprise contract closures." },
    { name: "Nova Health", result: "Redesigned patient intake materials, reducing onboarding friction by 60%." }
  ],
  heroHeadline: "Look as premium as the service you offer.",
  heroSubheadline: "We design high-end visual identities that immediately communicate trust, authority, and exclusivity before your client ever reads a single word.",
  deliverables: [
    { title: "Brand Identity Systems", description: "We don't just design a logo. We build a complete visual language including typography pairings, color psychology, and usage guidelines so your brand scales beautifully." },
    { title: "Sales & Pitch Decks", description: "We turn your boring, text-heavy PowerPoint into a highly persuasive, visually stunning pitch deck that commands attention and justifies premium pricing." },
    { title: "Marketing Collateral", description: "From premium business cards and brochures to digital ad creatives. Every touchpoint your client interacts with will feel cohesive and expensive." },
    { title: "UI & Digital Assets", description: "Custom iconography, 3D assets, and web graphics that elevate your digital presence above generic stock-photo competitors." }
  ],
  processSteps: [
    { num: "01", title: "Brand Archaeology", description: "We dig deep into your company's core values, your target demographic, and your competitive landscape to find a unique visual positioning." },
    { num: "02", title: "Moodboarding & Concepts", description: "We present initial visual directions using moodboards to ensure we are completely aligned on the aesthetic before we start designing the final assets." },
    { num: "03", title: "Design & Refinement", description: "We build out the core assets. We work collaboratively with you through revision rounds until the identity perfectly captures your vision." },
    { num: "04", title: "The Brand Handover", description: "We deliver a comprehensive brand guidelines document and a neatly organized folder of every asset in every format you will ever need (SVG, PNG, EPS)." }
  ],
  founderNote: {
    name: "Kartik Sharma",
    role: "Founder, Meta Toppers",
    quote: "Design is the silent ambassador of your brand. In a split second, a potential client decides if they trust you based entirely on how you look. We make sure that when they look at your brand, they instantly know you are the best at what you do."
  },
  faqs: [
    { question: "What do I get at the end of the project?", answer: "You receive a complete, organized Google Drive/Dropbox folder containing all your assets in vector formats (SVG/EPS) for printing and raster formats (PNG/JPG) for digital use, along with a PDF Brand Guidelines book." },
    { question: "Do you just design logos?", answer: "No. A logo is just one piece of a brand. We design comprehensive visual identity systems. If you just want a quick $50 logo, we aren't the right fit. If you want a brand identity that allows you to double your prices, we are." },
    { question: "How many revisions do we get?", answer: "Our standard brand identity packages include up to three rounds of revisions. Because our discovery phase is so thorough, we rarely need more than two." },
    { question: "Can you design my physical packaging?", answer: "Yes. We have extensive experience in packaging design, ensuring that your physical products stand out on shelves and provide a premium unboxing experience." }
  ]
};

export default service;
