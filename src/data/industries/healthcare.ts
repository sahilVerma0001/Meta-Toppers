import { Stethoscope, HeartPulse, ShieldCheck, Activity } from "lucide-react";
import type { IndustryData } from "./types";

const industry: IndustryData = {
  slug: "healthcare",
  title: "Healthcare",
  layout: "healthcare",
  icon: Activity,
  heroHeadline: "Patient-First Digital Experiences for Healthcare Providers.",
  heroDescription: "We build secure, compliant, and highly accessible websites and marketing systems for clinics, hospitals, and specialized medical practices.",
  marketImpact: {
    label1: "Increase in patient bookings",
    value1: "215%",
    label2: "HIPAA compliance score",
    value2: "100%",
  },
  solutionsHeadline: "How we grow medical practices.",
  services: [
    {
      title: "Telehealth Integrations",
      description: "Seamless, secure video consultation platforms built directly into your primary website.",
      icon: Stethoscope,
    },
    {
      title: "Patient Acquisition",
      description: "Local SEO and targeted ad campaigns designed to attract patients searching for your specific medical services.",
      icon: HeartPulse,
    },
    {
      title: "Compliant Data Systems",
      description: "Encrypted, HIPAA-compliant forms and CRM integrations to safely manage patient inquiries.",
      icon: ShieldCheck,
    },
  ],
  caseStudiesHeadline: "Proven clinical growth.",
  caseStudies: [
    {
      metric: "3x",
      label: "Increase in specialized bookings",
      description: "Overhauled a dental clinic's local SEO, resulting in a 300% increase in high-ticket implant inquiries.",
    },
    {
      metric: "-45%",
      label: "Drop in front-desk call volume",
      description: "Implemented an intuitive online booking and FAQ system that significantly reduced administrative workload.",
    },
    {
      metric: "1st",
      label: "Page ranking for 20+ keywords",
      description: "Achieved absolute local dominance for a multi-location physical therapy practice within 6 months.",
    },
  ],
  benefitsHeadline: "Why medical professionals trust us.",
  benefits: [
    {
      title: "Privacy First",
      description: "We understand healthcare regulations. Every form, database, and integration we build is designed with patient privacy and compliance in mind."
    },
    {
      title: "Accessible Design",
      description: "Your patients span all demographics. We build ADA-compliant, highly accessible interfaces that anyone can use easily."
    },
    {
      title: "Reputation Management",
      description: "We automate review collection systems to boost your clinic's Google ratings without violating medical advertising guidelines."
    }
  ],
  faqs: [
    {
      question: "Are your healthcare websites HIPAA compliant?",
      answer: "Yes. We use specialized, encrypted hosting, secure forms, and BAA-compliant third-party integrations to ensure patient data is never compromised."
    },
    {
      question: "Can you integrate with our existing EMR/EHR system?",
      answer: "In most cases, yes. We have experience connecting front-end websites with popular clinical management systems for seamless patient onboarding."
    },
    {
      question: "Do you offer marketing services for specialized surgeons?",
      answer: "Absolutely. We build highly targeted, high-ticket funnels specifically for elective and specialized procedures (plastics, LASIK, dental implants, etc.)."
    }
  ]
};

export default industry;
