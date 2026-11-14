export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  type: string;
};

export const projects: Project[] = [
  {
    id: "2",
    slug: "skillforge-ai",
    title: "SkillForge AI",
    category: "Full-Stack AI Learning Management System",
    description:
      "An LMS with course discovery, learning flows, instructor and admin management, AI-assisted content, certificates, notifications, messaging, OAuth, PostgreSQL and Supabase.",
    liveUrl: "https://learning-hub-skillforge-ai.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/Learning-Hub",
    type: "Learning platform",
  },
  {
    id: "3",
    slug: "ai-website-feedback",
    title: "AI Website Feedback Platform",
    category: "AI-powered SaaS",
    description:
      "An AI-powered website analysis platform with authentication, dashboards, reports, charts, PDF export, admin features, subscriptions, Supabase, PostgreSQL and OpenAI integration.",
    liveUrl: "https://saas-website-analyzer.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/saas-website-analyzer",
    type: "AI analysis SaaS",
  },
  {
    id: "4",
    slug: "dinespark",
    title: "DineSpark",
    category: "Restaurant management application",
    description:
      "A full-stack restaurant application with menus, reservations, contact handling, database operations and validation, migrated to a unified Next.js architecture.",
    liveUrl: "https://dine-spark-ui-ogcr.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/DineSpark-UI",
    type: "Operations software",
  },
  {
    id: "5",
    slug: "digitalcraft",
    title: "DigitalCraft",
    category: "Digital marketing agency website",
    description:
      "A responsive agency website with modern UI, motion, services, portfolio, testimonials and contact features.",
    liveUrl: "https://digitalmarketing-eta.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/digitalmarketing",
    type: "Studio experience",
  },
  {
    id: "6",
    slug: "orbital",
    title: "Orbital",
    category: "Voice-first personal computer agent",
    description:
      "A voice-first computer agent concept connecting natural language, tool execution and browser automation into one focused workflow.",
    liveUrl: "",
    githubUrl: "https://github.com/abdullahdeveloper13/llm-model",
    type: "Agent system",
  },
  {
    id: "7",
    slug: "scentheaven-shopify",
    title: "ScentHeaven — Shopify Fragrance Store",
    category: "E-commerce (Shopify)",
    description:
      "A premium fragrance Shopify store selling curated perfumes for him, her, unisex, oud & attars, with collections, best-sellers and nationwide delivery.",
    liveUrl: "https://getscentrush.com/",
    type: "E-commerce store",
  },
];
