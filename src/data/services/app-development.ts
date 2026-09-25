import { Smartphone } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "app-development",
  variant: "technical",
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
  ],
  heroImage: "/images/app-dev-mockup.jpg"
};

export default service;
