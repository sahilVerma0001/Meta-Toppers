import { Share2 } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "social-media",
  variant: "growth",
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
};

export default service;
