import { PanelsTopLeft, Orbit, Sparkles, Share2, PenTool, Smartphone, Database, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceData = {
  slug: string;
  icon: LucideIcon;
  label: string;
  title: string;
  shortDescription: string;
  problem: string;
  agitation: string;
  solution: string[];
  stat: string;
  statLabel: string;
  accent: string;
  benefits: { title: string; desc: string }[];
  caseStudies: { name: string; result: string }[];

  // Expanded Human-Centric Content
  heroHeadline: string;
  heroSubheadline: string;
  deliverables: { title: string; description: string }[];
  processSteps: { num: string; title: string; description: string }[];
  founderNote: { name: string; role: string; quote: string };
  faqs: { question: string; answer: string }[];
};

export const servicesData: ServiceData[] = [
  {
    slug: "lead-generation",
    icon: Sparkles,
    label: "Engine 01",
    title: "Lead Generation",
    shortDescription: "Automated funnels and targeted campaigns that deliver qualified leads to your calendar, every single day.",
    problem: "You're chasing leads manually. You rely on referrals, cold outreach, or networking events. You have no predictable system, meaning your revenue fluctuates wildly month-to-month.",
    agitation: "When you have to manually hunt for every deal, you become the biggest bottleneck in your own business. You can't scale a business if you're stuck doing the prospecting. Your competitors who have automated their lead flow are scaling faster and with less effort.",
    solution: [
      "Automated funnels that qualify and deliver leads 24/7",
      "Social ad campaigns targeting buyers ready to act",
      "CRM integration so no lead ever falls through the cracks",
    ],
    stat: "42",
    statLabel: "qualified leads/week (avg. client)",
    accent: "from-violet-600 to-violet-700",
    benefits: [
      { title: "Automated Qualification", desc: "Stop talking to tire-kickers. Our systems filter out bad leads before they reach you." },
      { title: "Omnichannel Funnels", desc: "Capture leads across Meta, LinkedIn, and Google simultaneously." },
      { title: "Seamless CRM Sync", desc: "Every lead drops directly into your CRM with their full context and history." }
    ],
    caseStudies: [
      { name: "Apex Financial", result: "Generated 120 qualified consultations in the first 30 days." },
      { name: "Horizon Tech", result: "Built an automated webinar funnel yielding a 400% ROI." }
    ],
    heroHeadline: "Predictable pipeline, delivered daily.",
    heroSubheadline: "We build automated funnels that work 24/7 to capture, qualify, and deliver high-ticket leads directly to your calendar.",
    deliverables: [
      { title: "Automated Sales Funnels", description: "We build multi-step funnels designed specifically for high-ticket services. We turn cold traffic into warm, booked appointments." },
      { title: "Lead Qualification Systems", description: "Stop wasting time on tire-kickers. We build friction into the funnel with dynamic questionnaires so you only speak to people who have the budget and intent." },
      { title: "Omnichannel Retargeting", description: "96% of visitors won't convert on the first visit. We build retargeting nets across Meta, LinkedIn, and Google to bring them back when they are ready." },
      { title: "CRM & Automation Sync", description: "Every lead drops directly into your CRM. They instantly receive an automated SMS and email sequence, completely removing manual follow-up from your plate." }
    ],
    processSteps: [
      { num: "01", title: "The Avatar Deep-Dive", description: "We don't build a funnel until we know exactly who we are targeting. We map out your dream client's pain points, desires, and objections." },
      { num: "02", title: "Funnel Architecture & Copy", description: "We design the landing pages and write the psychological copy required to get a stranger to hand over their contact information." },
      { num: "03", title: "System Integration", description: "We connect the funnel to your calendar, your CRM, and set up the automated SMS/email sequences." },
      { num: "04", title: "Traffic & Optimization", description: "We turn on the ads. As the leads flow in, we analyze the conversion rates and optimize the funnel to lower your Cost Per Acquisition." }
    ],
    founderNote: {
      name: "Kartik Sharma",
      role: "Founder, Meta Toppers",
      quote: "The biggest lie in business is that you need to work 80 hours a week to scale. You don't. You just need a system that prospects for you while you sleep. Our lead generation funnels are designed to give you your time back so you can focus on what you do best: closing deals and serving clients."
    },
    faqs: [
      { question: "What constitutes a 'qualified' lead?", answer: "A qualified lead is someone who has actively engaged with our funnel, answered specific qualifying questions (like budget and timeline), and voluntarily booked a call on your calendar. We don't buy email lists; we generate real intent." },
      { question: "Do I need to handle the follow-up?", answer: "No. The system we build includes automated email and SMS follow-ups to ensure the lead shows up to the meeting. All you have to do is show up to the Zoom call and close the deal." },
      { question: "What if the leads are bad?", answer: "If a lead slips through that isn't a fit, we want to know immediately. We use that feedback loop to tighten the targeting on the ads and add more strict qualifying questions to the funnel." },
      { question: "Which platforms do you use to get traffic?", answer: "We are platform agnostic. We go where your audience is. For B2B, it's heavily LinkedIn and Google. For B2C, it's Meta (Facebook/Instagram), TikTok, and Google. We test multiple channels to find the lowest Cost Per Qualified Lead." }
    ]
  },
  {
    slug: "web-design",
    icon: PanelsTopLeft,
    label: "Engine 02",
    title: "Website Design & Development",
    shortDescription: "Premium, conversion-focused websites built to attract high-value clients and turn traffic into revenue.",
    problem: "You know your service is the best in the market. But when potential clients visit your website, they don't see the market leader—they see a generic template that looks exactly like your cheapest competitor.",
    agitation: "Every day you stick with an outdated, slow, or confusing website, you are literally handing high-ticket clients to competitors who offer worse services but have better digital storefronts. You aren't losing because of your service; you're losing because of your packaging.",
    solution: [
      "Custom-designed for your specific audience & brand",
      "Conversion-optimized from the first pixel to the last CTA",
      "Mobile-first, blazing fast, SEO-ready out of the box",
    ],
    stat: "+250%",
    statLabel: "avg. lead increase after launch",
    accent: "from-[#0b6fa8] to-[#085c8b]",
    benefits: [
      { title: "Psychology-Driven Layouts", desc: "We map user journeys to guide visitors naturally toward booking a call." },
      { title: "Lightning Fast Load Times", desc: "Built on Next.js to ensure zero drop-off from slow loading pages." },
      { title: "Premium Aesthetic", desc: "Position your brand as the expensive, premium choice in your market." }
    ],
    caseStudies: [
      { name: "Elevate Luxury Realty", result: "Increased high-net-worth lead volume by 60% in 8 weeks." },
      { name: "Paramount Developments", result: "Sold out Phase 1 of a $50M development purely through digital traffic." }
    ],
    heroHeadline: "We don't build digital brochures. We engineer revenue machines.",
    heroSubheadline: "Your website should be your hardest-working salesperson. We design premium, psychology-driven websites that force your ideal clients to stop scrolling and start booking.",
    deliverables: [
      { title: "UI/UX Strategy & Wireframing", description: "We don't guess. We map out the exact psychological journey your user needs to take to convert before we draw a single pixel." },
      { title: "Custom Premium Design", description: "Forget templates. We build bespoke, high-end interfaces that immediately position you as the premium, expensive choice in your industry." },
      { title: "Next.js Development", description: "We code your site using the same technology powering the world's fastest apps. Lightning-fast load times mean zero drop-off." },
      { title: "On-Page SEO Foundation", description: "Your site isn't just pretty—it's built to be read by Google. Proper tagging, schema markup, and speed optimization come standard." }
    ],
    processSteps: [
      { num: "01", title: "Discovery & Strategy", description: "We sit down with you to understand your exact business model, your best clients, and your biggest competitors. We diagnose before we prescribe." },
      { num: "02", title: "Wireframing & Copy", description: "We sketch the layout and structure the messaging. The words sell; the design just proves the words are true." },
      { num: "03", title: "High-Fidelity Design", description: "We bring the wireframes to life with your brand colors, premium typography, and custom animations that create a 'wow' factor." },
      { num: "04", title: "Development & Launch", description: "We write clean, scalable code. After rigorous mobile and speed testing, we push your new revenue engine live." }
    ],
    founderNote: {
      name: "Kartik Sharma",
      role: "Founder, Meta Toppers",
      quote: "I've seen too many brilliant business owners lose to inferior competitors simply because their website looked cheap. My promise to you is simple: We will not stop iterating until your website looks like the undisputed leader in your industry. When someone lands on your page, I want them to think, 'Wow, these guys are the real deal.' That's what we deliver."
    },
    faqs: [
      { question: "How much does a custom website cost?", answer: "We don't do cookie-cutter pricing because we don't do cookie-cutter websites. Most of our custom builds range depending on complexity, but we always provide a fixed-price quote after our discovery call. No hidden fees. No hourly billing." },
      { question: "How long does it take to launch?", answer: "For a standard conversion-focused website, our typical turnaround is 21 to 30 days from kickoff to going live. We move fast because we have a dedicated, unified team." },
      { question: "Do you use templates like WordPress or Wix?", answer: "Absolutely not. We design custom interfaces in Figma and code them from scratch using Next.js and React. This guarantees your site is blazing fast, unhackable, and 100% unique to your brand." },
      { question: "Will I be able to update the content myself?", answer: "Yes. We can integrate a headless CMS that gives you a beautiful, foolproof dashboard to update text, add team members, or post blogs without writing a single line of code." }
    ]
  },
  {
    slug: "seo",
    icon: Orbit,
    label: "Engine 03",
    title: "SEO & Digital Advertising",
    shortDescription: "Data-driven search optimization and paid campaigns that put your brand directly in front of ready-to-buy clients.",
    problem: "You're pouring money into Google Ads and SEO, but all you're getting are monthly reports filled with jargon like 'impressions' and 'click-through rates'. Meanwhile, your actual revenue hasn't moved an inch.",
    agitation: "Traffic is a vanity metric if it doesn't convert. Every dollar you spend on broad keywords or generic SEO is literally subsidizing Google, while your competitors capture the high-intent buyers who are ready to pull out their credit cards today.",
    solution: [
      "Data-driven SEO that builds compounding organic traffic",
      "Paid campaigns connected to real revenue, not vanity clicks",
      "Full ROI dashboard — know exactly what every rupee earns",
    ],
    stat: "3×",
    statLabel: "avg. organic traffic increase",
    accent: "from-emerald-600 to-emerald-700",
    benefits: [
      { title: "Local SEO Dominance", desc: "Capture high-intent searches in your specific city and region." },
      { title: "Content That Ranks", desc: "We build authority through strategic content clusters and backlinks." },
      { title: "High-ROI Paid Ads", desc: "Stop bleeding money on broad keywords. We target the exact buyers you want." }
    ],
    caseStudies: [
      { name: "Chen & Associates", result: "Doubled organic seller leads within 90 days." },
      { name: "Vertex Consulting", result: "Decreased Cost-Per-Acquisition by 45% on Google Ads." }
    ],
    heroHeadline: "Stop paying for clicks. Start paying for clients.",
    heroSubheadline: "We build organic compounding traffic and run hyper-targeted paid campaigns that actually generate revenue, not just vanity metrics.",
    deliverables: [
      { title: "Technical SEO Audit & Fixes", description: "We fix the foundational errors holding your site back. If Google can't crawl your site efficiently, nothing else matters." },
      { title: "High-Intent Keyword Strategy", description: "We ignore 'broad' terms and target 'bottom-of-the-funnel' keywords where the searcher is already looking to buy your exact service." },
      { title: "Content Silos & Backlinks", description: "We build your domain authority through structured, high-quality content hubs and ethical outreach, positioning you as the market leader." },
      { title: "Hyper-Targeted Paid Campaigns", description: "We run Google & Meta ads that don't bleed money. We rigorously test copy, creative, and audiences to find the lowest Cost-Per-Acquisition." }
    ],
    processSteps: [
      { num: "01", title: "The Audit & Revenue Math", description: "We don't start spending until we know the math works. We audit your current accounts, find the leaks, and establish a baseline Cost-Per-Lead target." },
      { num: "02", title: "Foundation & Tracking", description: "We fix technical SEO issues and set up airtight conversion tracking. If we can't measure the exact ROI of a campaign, we don't run it." },
      { num: "03", title: "Campaign Launch & Organic Push", description: "We launch highly targeted paid ads for immediate cash flow while simultaneously publishing SEO clusters for long-term, compounding growth." },
      { num: "04", title: "Ruthless Optimization", description: "We analyze the data weekly, killing losing ads and scaling winners. We don't 'set and forget'." }
    ],
    founderNote: {
      name: "The Growth Team",
      role: "Meta Toppers",
      quote: "Marketing agencies love to hide behind impressions and clicks because they are easy to get. We refuse to operate that way. If our campaigns aren't directly putting more money into your bank account than you are paying us, we haven't done our job. Period."
    },
    faqs: [
      { question: "How long does SEO take to work?", answer: "SEO is a long-term investment. You will typically start seeing significant movement in rankings between months 3 and 6. However, we offset this waiting period by running highly targeted Paid Ads to generate immediate leads while the organic foundation builds." },
      { question: "Do you guarantee page 1 on Google?", answer: "No honest agency guarantees the #1 spot because Google's algorithm is entirely out of human control. What we guarantee is a rigorous, proven methodology that historically dominates search results in competitive niches." },
      { question: "What is a 'good' ad budget to start with?", answer: "It depends entirely on your industry and competition. We recommend a minimum ad spend that allows for enough data collection to optimize effectively—usually starting around $1,500/month (separate from our management fee). We will calculate the exact math on our discovery call." },
      { question: "Am I locked into a long-term contract?", answer: "We don't lock you in. We operate on month-to-month agreements after an initial 90-day setup phase. We want you to stay with us because you are making money, not because a piece of paper forces you to." }
    ]
  },
  {
    slug: "social-media",
    icon: Share2,
    label: "Engine 04",
    title: "Social Media Marketing",
    shortDescription: "Strategic content and community management that builds brand authority and converts followers into paying clients.",
    problem: "You are posting consistently, but getting zero engagement. It feels like shouting into the void. Your feed looks like a generic corporate billboard, and nobody interacts with it except your own employees.",
    agitation: "Without a clear strategy, social media is just a massive time sink that drains your team's energy. If your audience doesn't care about what you're posting, the algorithm buries you. You are losing the battle for attention to competitors who understand how to entertain and educate.",
    solution: [
      "Data-driven content strategy tailored to your exact audience",
      "High-end visual asset creation (video & graphics)",
      "Active community management and engagement growth"
    ],
    stat: "120%",
    statLabel: "avg. engagement rate increase",
    accent: "from-pink-600 to-rose-700",
    benefits: [
      { title: "Brand Authority", desc: "Position your company as the thought leader in your specific industry." },
      { title: "Viral Potential", desc: "We craft shareable content engineered to reach beyond your immediate audience." },
      { title: "Consistent Presence", desc: "Never worry about 'what to post today' ever again." }
    ],
    caseStudies: [
      { name: "Lumina Beauty", result: "Grew organic Instagram following by 15k targeted users in 4 months." },
      { name: "TechFlow SaaS", result: "Increased LinkedIn inbound leads by 85% through executive ghostwriting." }
    ],
    heroHeadline: "Stop shouting into the void. Build a cult following.",
    heroSubheadline: "We craft highly engaging, shareable content that doesn't just get 'likes'—it positions you as the absolute authority in your industry and builds a community of loyal buyers.",
    deliverables: [
      { title: "Audience & Platform Strategy", description: "We don't post blindly. We determine exactly which platforms your buyers live on and reverse-engineer the type of content they naturally consume." },
      { title: "High-End Asset Production", description: "From short-form TikTok/Reels to premium carousel graphics. We produce assets that look expensive and are algorithmically optimized to capture attention in the first 3 seconds." },
      { title: "Executive Ghostwriting", description: "For B2B founders, we take over your LinkedIn. We interview you, extract your expertise, and write viral, thought-leadership posts under your name." },
      { title: "Community Management", description: "We don't just post and ghost. We actively reply to comments, engage with industry peers, and foster a real community around your brand." }
    ],
    processSteps: [
      { num: "01", title: "The Voice Extraction", description: "We interview your team to capture your brand's unique tone, values, and industry hot-takes. We want to sound exactly like you, just amplified." },
      { num: "02", title: "The 30-Day Content Calendar", description: "We map out an entire month of content in advance, categorized by educational, entertaining, and promotional pillars. You review and approve everything." },
      { num: "03", title: "Production & Scheduling", description: "Our designers, video editors, and copywriters build the assets. We schedule everything for optimal posting times." },
      { num: "04", title: "Analytics & Iteration", description: "At the end of the month, we review what hit and what missed. We double down on winning formats and kill the losers." }
    ],
    founderNote: {
      name: "The Creative Team",
      role: "Meta Toppers",
      quote: "People don't log onto social media to be sold to. They log on to be entertained, educated, or inspired. The moment you stop treating your feed like a sales brochure and start treating it like a media channel, your growth will explode."
    },
    faqs: [
      { question: "Do I need to record videos myself?", answer: "It depends on the strategy, but generally, yes. Personal brands perform exponentially better when the founder is on camera. We provide the scripts, the hooks, and editing—you just need your smartphone and 30 minutes a week." },
      { question: "Will you reply to comments and DMs?", answer: "Yes. Our community management team monitors your accounts daily to reply to comments, foster engagement, and flag high-intent DMs directly to your sales team." },
      { question: "How do you measure success on social media?", answer: "While we track follower growth and engagement rates (saves, shares, comments), our ultimate North Star metric is how much inbound traffic and how many qualified leads are being generated from your social profiles." },
      { question: "What happens if we don't have good photos/videos?", answer: "No problem. For local clients, we can arrange quarterly production shoots. For remote clients, we provide exact frameworks for how to shoot raw footage on your phone, and our editors turn it into high-end content." }
    ]
  },
  {
    slug: "graphic-design",
    icon: PenTool,
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
  },
  {
    slug: "app-development",
    icon: Smartphone,
    label: "Engine 06",
    title: "Mobile App Development",
    shortDescription: "Custom iOS, Android, and web applications engineered to scale seamlessly and deliver a flawless user experience.",
    problem: "You have a great idea for a product, but technical roadblocks, buggy code, and slow developers are killing your momentum. You're terrified of launching an app that crashes on day one.",
    agitation: "A buggy, slow app is a death sentence. Users give you exactly one chance. If your app takes too long to load or has confusing navigation, they will delete it and download your competitor's app within 30 seconds.",
    solution: [
      "Cross-platform development (React Native / Flutter)",
      "Scalable backend architecture (Node.js / Python / AWS)",
      "Rigorous QA testing and smooth App Store launches"
    ],
    stat: "99.9%",
    statLabel: "crash-free session rate",
    accent: "from-cyan-600 to-blue-700",
    benefits: [
      { title: "Blazing Performance", desc: "We write clean, optimized code so your app feels instantaneous." },
      { title: "Intuitive UX", desc: "Interfaces designed around user psychology to minimize friction and churn." },
      { title: "Future-Proof Tech", desc: "Built on modern stacks that can easily scale to millions of users." }
    ],
    caseStudies: [
      { name: "FitSync", result: "Launched MVP in 8 weeks, acquired 10,000 active users in month one." },
      { name: "DeliverIt Local", result: "Built a dispatch system that reduced delivery times by 22%." }
    ],
    heroHeadline: "Don't just build an app. Build a scalable business.",
    heroSubheadline: "We engineer lightning-fast, highly scalable mobile applications that users actually love returning to, without the technical headaches.",
    deliverables: [
      { title: "Cross-Platform Development", description: "We build using React Native or Flutter, allowing you to launch on both iOS and Android simultaneously without paying for two separate codebases." },
      { title: "Scalable Cloud Architecture", description: "We build robust, secure backends that can seamlessly handle your first 100 users or your first 1,000,000 users without crashing." },
      { title: "UI/UX Application Design", description: "We design intuitive interfaces based on mobile psychology. We reduce the number of clicks required for a user to find value, dropping your churn rate." },
      { title: "QA & App Store Launch", description: "We handle the rigorous testing across dozens of device types and manage the notoriously difficult Apple App Store and Google Play Store approval processes for you." }
    ],
    processSteps: [
      { num: "01", title: "Product Scoping & Wireframes", description: "We don't write a single line of code until we have mapped out every single screen, user flow, and edge case in a clickable prototype." },
      { num: "02", title: "Sprint-Based Development", description: "We work in agile sprints. Every two weeks, we deliver a working, testable version of the app so you can see progress in real-time." },
      { num: "03", title: "Rigorous QA Testing", description: "Our QA team tries to break the app. We test on old phones, new phones, bad internet connections, and weird screen sizes to ensure stability." },
      { num: "04", title: "Launch & Post-Launch Support", description: "We push the app live to the stores and monitor the servers. We offer ongoing maintenance contracts to squash any post-launch bugs and build new features." }
    ],
    founderNote: {
      name: "The Engineering Team",
      role: "Meta Toppers",
      quote: "Building an app is easy. Building a scalable, secure, and lightning-fast application that survives contact with thousands of real-world users is incredibly hard. We don't cut corners on architecture, because technical debt always comes due when you can least afford it."
    },
    faqs: [
      { question: "How much does it cost to build an app?", answer: "It depends entirely on the features (e.g., a simple directory app vs. a real-time social network). Most high-quality MVP (Minimum Viable Product) apps start around $15,000 to $25,000. We will give you a precise quote after our scoping phase." },
      { question: "How long will development take?", answer: "A robust MVP typically takes between 3 to 4 months of dedicated development and testing. We move as fast as possible without compromising code quality or security." },
      { question: "Who owns the code after launch?", answer: "You do. 100%. Once the final payment is made, all intellectual property, source code, and design assets are legally transferred to your company." },
      { question: "Will you maintain the app after it's built?", answer: "Yes. Apple and Google frequently update their operating systems, which can occasionally break app features. We offer affordable monthly retainers to keep your app updated, secure, and bug-free." }
    ]
  },
  {
    slug: "crm-solutions",
    icon: Database,
    label: "Engine 07",
    title: "CRM & Sales Pipeline",
    shortDescription: "Custom CRM setups and sales pipeline automation that give you complete visibility and control over every deal.",
    problem: "Your leads are scattered across spreadsheets, WhatsApp chats, and email threads. You have no idea where any deal stands, which follow-ups are overdue, or why potential clients are going cold.",
    agitation: "A disorganized sales pipeline is a revenue leak you can't see. Deals are slipping through the cracks every single day—not because you have a bad product, but because no one is following up at the right time with the right message.",
    solution: [
      "Full CRM setup and configuration tailored to your sales process",
      "Automated follow-up sequences so no lead goes cold",
      "Real-time pipeline dashboards so you always know your revenue forecast",
    ],
    stat: "35%",
    statLabel: "avg. increase in deal close rate",
    accent: "from-sky-600 to-cyan-700",
    benefits: [
      { title: "Total Pipeline Visibility", desc: "See exactly where every deal stands at every moment, from first contact to closed-won." },
      { title: "Automated Follow-Ups", desc: "Never let a warm lead go cold. Automated sequences keep you top-of-mind without manual effort." },
      { title: "Revenue Forecasting", desc: "Know your projected revenue for the next 30, 60, and 90 days based on live pipeline data." }
    ],
    caseStudies: [
      { name: "Sterling Properties", result: "Recovered 18 stalled deals within 2 weeks of CRM implementation." },
      { name: "Apex Consulting", result: "Increased deal close rate by 41% through automated nurture sequences." }
    ],
    heroHeadline: "Stop losing deals you already have.",
    heroSubheadline: "We build and configure your entire CRM system so every lead is tracked, every follow-up is automated, and no deal ever slips through the cracks again.",
    deliverables: [
      { title: "CRM Configuration & Setup", description: "We configure your CRM (HubSpot, GoHighLevel, Zoho, etc.) to mirror your exact sales process—stages, deal values, contact properties, and team assignments." },
      { title: "Pipeline Architecture", description: "We map out your complete sales journey and build a visual pipeline that gives your entire team instant clarity on every deal's status." },
      { title: "Automated Nurture Sequences", description: "We build email and SMS follow-up sequences triggered by deal stage changes, ensuring no lead ever goes more than 48 hours without a touchpoint." },
      { title: "Reporting & Dashboards", description: "We build custom dashboards showing your close rate, average deal size, and pipeline velocity so you make decisions based on data, not gut feel." }
    ],
    processSteps: [
      { num: "01", title: "Sales Process Mapping", description: "We interview your team to document exactly how a deal moves from first contact to closed-won, including every objection and bottleneck." },
      { num: "02", title: "CRM Build & Configuration", description: "We build out every stage, field, and workflow in your chosen CRM platform. We handle the technical setup completely." },
      { num: "03", title: "Data Migration & Cleanup", description: "We migrate your existing contacts from spreadsheets and import them cleanly into the new system." },
      { num: "04", title: "Team Training & Handover", description: "We run a live training session with your team and provide a recorded walkthrough so adoption is seamless." }
    ],
    founderNote: {
      name: "Kartik Sharma",
      role: "Founder, Meta Toppers",
      quote: "Most businesses have a lead generation problem. But when we dig deeper, we often find the real issue is a follow-up problem. Leads exist; they just aren't being nurtured. A properly configured CRM doesn't just organize your contacts—it turns your sales team into a predictable revenue machine."
    },
    faqs: [
      { question: "Which CRM platforms do you work with?", answer: "We are platform agnostic. We work with HubSpot, GoHighLevel, Zoho CRM, Pipedrive, and Monday CRM. We recommend the right platform based on your team size, budget, and complexity of your sales process." },
      { question: "We already have a CRM but don't use it. Can you fix it?", answer: "Absolutely. This is actually one of the most common projects we take on. We audit your existing setup, clean up the data, rebuild the pipeline stages to match how you actually sell, and train your team." },
      { question: "How long does a CRM implementation take?", answer: "A standard implementation takes 2 to 3 weeks. This includes setup, data migration, automation builds, and team training." },
      { question: "Can you integrate the CRM with our other tools?", answer: "Yes. We connect your CRM to your website contact forms, WhatsApp, email accounts, calendar, and any other tools you use through native integrations or tools like Zapier and Make." }
    ]
  },
  {
    slug: "api-automation",
    icon: Zap,
    label: "Engine 08",
    title: "API & Business Automation",
    shortDescription: "WhatsApp automation, API integrations, and custom workflow systems that eliminate repetitive manual tasks and scale your operations.",
    problem: "Your team is wasting hours every day on repetitive tasks — manually sending WhatsApp updates to clients, copying data between platforms, or sending the same follow-up messages over and over again.",
    agitation: "Every hour your team spends on a repetitive, automatable task is an hour they are not spending on high-value work that actually grows your business. You are paying human salaries to do work a machine could do in milliseconds.",
    solution: [
      "WhatsApp Business API automation for instant client communication",
      "Custom API integrations connecting all your business tools",
      "Automated workflow triggers that eliminate manual data entry",
    ],
    stat: "20hrs",
    statLabel: "saved per team member per week (avg.)",
    accent: "from-green-500 to-emerald-600",
    benefits: [
      { title: "WhatsApp Automation", desc: "Send order confirmations, appointment reminders, and follow-ups automatically via WhatsApp." },
      { title: "Zero Manual Data Entry", desc: "Data flows automatically between your tools — no copy-pasting, no errors, no delays." },
      { title: "24/7 Operations", desc: "Your automated systems work around the clock, even when your team is offline." }
    ],
    caseStudies: [
      { name: "CargoShip Logistics", result: "Automated 800+ WhatsApp delivery notifications daily, saving 4 hours of manual work." },
      { name: "PrimeCare Clinic", result: "Reduced appointment no-shows by 60% through automated WhatsApp reminders." }
    ],
    heroHeadline: "Automate the repetitive. Amplify the human.",
    heroSubheadline: "We build custom automation systems that handle your most time-consuming workflows—from WhatsApp customer communication to seamless API integrations between your business tools.",
    deliverables: [
      { title: "WhatsApp Business API Setup", description: "We onboard you to the official WhatsApp Business API and build automated message flows for order updates, appointment reminders, payment confirmations, and client onboarding." },
      { title: "Cross-Platform API Integrations", description: "We connect your CRM, payment gateway, e-commerce store, and any other tools so data flows automatically between them without any manual intervention." },
      { title: "Custom Workflow Automation", description: "Using Make (Integromat), Zapier, or custom-coded solutions, we map and automate your most repetitive internal processes end-to-end." },
      { title: "Chatbot Development", description: "We build intelligent WhatsApp and web chatbots that qualify leads, answer FAQs, and book appointments automatically—24 hours a day, 7 days a week." }
    ],
    processSteps: [
      { num: "01", title: "Workflow Audit", description: "We spend time with your team to identify which manual tasks are consuming the most time and have the highest potential for automation." },
      { num: "02", title: "Architecture Design", description: "We map the entire automation flow on a whiteboard—triggers, conditions, actions, and error handling—before writing a single line of code." },
      { num: "03", title: "Build & Integration", description: "We build the automation and connect all required APIs. We test every edge case rigorously before going live." },
      { num: "04", title: "Monitoring & Support", description: "We monitor the system post-launch and provide documentation so your team understands how it works and what to do if something needs updating." }
    ],
    founderNote: {
      name: "The Engineering Team",
      role: "Meta Toppers",
      quote: "Automation is not about replacing your team. It's about removing the soul-crushing, repetitive work that kills morale and wastes talent. When we automate your workflows, your team gets to focus on the creative, strategic, high-impact work that only humans can do."
    },
    faqs: [
      { question: "Is WhatsApp Business API legal and compliant?", answer: "Yes, absolutely. We onboard you through Meta's official WhatsApp Business API. It is 100% compliant and gives you access to features the standard WhatsApp Business app does not have, including broadcast messaging and full automation." },
      { question: "We use many different tools. Can you connect all of them?", answer: "Almost certainly, yes. We have experience integrating hundreds of platforms including Shopify, WooCommerce, Razorpay, Stripe, Google Sheets, Airtable, Calendly, and virtually any platform with an API." },
      { question: "What if our process changes after the automation is built?", answer: "No problem. We build systems that are modular and easy to update. We also offer monthly retainers to maintain and evolve your automations as your business grows." },
      { question: "Do we need a developer on our team to use these systems?", answer: "No. We build automations that run silently in the background. Your team just uses their normal tools and the automation handles everything behind the scenes." }
    ]
  },
];

