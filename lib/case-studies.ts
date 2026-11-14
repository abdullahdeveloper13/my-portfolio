export type CaseStudyStep = {
  title: string;
  description: string;
  details: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  client?: string;
  role?: string;
  duration?: string;
  overview: string;
  steps: CaseStudyStep[];
  technologies: string[];
  challenges: string[];
  keyFeatures: string[];
};

const base = {
  client: "Independent / Client project",
  role: "Full Stack Developer",
  steps: [] as CaseStudyStep[],
  technologies: [] as string[],
  challenges: [] as string[],
  keyFeatures: [] as string[],
};

export const caseStudies: Record<string, CaseStudy> = {
  "nova-crm-ai": {
    ...base,
    slug: "nova-crm-ai",
    title: "NovaCRM AI",
    category: "Multi-tenant AI CRM Platform",
    description:
      "An enterprise-ready CRM with organization workspaces, contacts, companies, deal pipelines, tasks, activities, role-based team access, audit logs, notifications and an AI sales copilot.",
    liveUrl: "https://nova-crm-ai-kappa.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/crm-project",
    client: "Independent product",
    role: "Full Stack Developer",
    duration: "6 weeks",
    overview:
      "NovaCRM AI is a multi-tenant CRM built for sales teams that need one clear place to run their pipeline. Each organization gets its own workspace with a revenue dashboard, a Kanban deal board, contacts, companies, tasks, activities, role-based team management, audit logs and an AI sales copilot. The app is built with TanStack Start and TanStack Router on React 19, backed by Supabase and PostgreSQL with row-level security.",
    steps: [
      {
        title: "Architecture & data model",
        description: "Defined the multi-tenant architecture and a complete typed schema for the CRM domain.",
        details: [
          "Modeled 13 related tables: contacts, companies, deals, activities, tasks, notifications, files, audit logs, organizations, members, invitations, users and profiles.",
          "Defined enums for roles, deal stages, activity kinds and notification state.",
          "Chose TanStack Start + TanStack Router for typed file-based routing and SSR, with TanStack Query for server state.",
        ],
      },
      {
        title: "Multi-tenancy & security",
        description: "Implemented organization isolation, row-level security and granular team permissions.",
        details: [
          "Added Supabase RLS policies so every CRM record is scoped to the user's organization.",
          "Built tokenized invitations and seven roles from owner and admin to sales, support and viewer.",
          "Added immutable audit logs and automatic updated-at triggers across CRM tables.",
        ],
      },
      {
        title: "CRM workspace & pipeline",
        description: "Built the organization workspace with revenue dashboards and full CRM CRUD flows.",
        details: [
          "Revenue overview with pipeline value, won revenue, active deals, tracked contacts and open tasks.",
          "Interactive five-stage Kanban pipeline with stage totals, list view, filters and probability sliders.",
          "Contacts and companies directories with search, CSV import/export and lead-source attribution.",
        ],
      },
      {
        title: "AI sales copilot",
        description: "Added AI-assisted workflows directly inside the CRM records.",
        details: [
          "Personalized outreach email drafting from contact and deal context.",
          "Deal-closing strategy generation for active opportunities.",
          "Meeting summary synthesis and BANT lead qualification scoring.",
        ],
      },
      {
        title: "Search, notifications & team ops",
        description: "Connected the workspace with global search, notifications and cross-org analytics.",
        details: [
          "Cmd+K command palette searching contacts, companies, deals and tasks together.",
          "Real-time notification center with unread counts and mark-all-as-read.",
          "Cross-workspace dashboard aggregating analytics across every organization a user belongs to.",
        ],
      },
      {
        title: "Production hardening & launch",
        description: "Fixed SSR/auth issues, tightened types and shipped a verified production build.",
        details: [
          "Resolved TanStack Router SSR hydration mismatches and the auth redirect loop.",
          "Cleared TypeScript and ESLint errors, then verified with typecheck, lint and a production build.",
          "Deployed to Vercel with Supabase production environment variables.",
        ],
      },
    ],
    technologies: [
      "React 19", "TanStack Start", "TanStack Router", "TanStack Query", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "Supabase", "PostgreSQL", "Zod", "Recharts", "Vercel",
    ],
    challenges: [
      "Eliminating SSR hydration mismatches and auth redirect loops when combining TanStack Router with Supabase sessions.",
      "Enforcing multi-tenant data isolation with row-level security across 13 related tables.",
      "Keeping the Kanban pipeline, global search and AI copilot responsive as CRM data grows.",
    ],
    keyFeatures: [
      "Multi-tenant organization workspaces & switcher",
      "Interactive Kanban deal pipeline with stage totals",
      "Contacts, companies, tasks & activity timeline",
      "AI sales copilot for outreach, deal strategy & BANT",
      "Granular RBAC with 7 roles & tokenized invitations",
      "Audit logs, notifications & Cmd+K global search",
    ],
  },
  "skillforge-ai": {
    ...base,
    slug: "skillforge-ai",
    title: "SkillForge AI",
    category: "Full-Stack AI Learning Management System",
    description:
      "An AI-powered learning management system with course discovery, learning flows, instructor and admin dashboards, AI-assisted content generation, certificates, notifications and real-time messaging.",
    liveUrl: "https://learning-hub-skillforge-ai.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/Learning-Hub",
    duration: "8 weeks",
    overview:
      "SkillForge AI is a complete learning management platform built to help instructors create courses and learners track progress with AI assistance. The platform supports role-based access for students, instructors and administrators, with Stripe-ready payments, OAuth login and email notifications.",
    steps: [
      {
        title: "Discovery & requirements",
        description: "Defined user roles (student, instructor, admin) and mapped core learning flows from enrollment to certificates.",
        details: [
          "Identified must-have features: course catalog, learning paths, quizzes, certificates.",
          "Mapped role-based permissions: students enroll & learn, instructors create & grade, admins manage users.",
          "Chose Next.js + Supabase + PostgreSQL for type-safe full-stack development.",
        ],
      },
      {
        title: "Database design & auth",
        description: "Designed the relational schema and implemented JWT + Google/GitHub OAuth authentication.",
        details: [
          "Modeled users, courses, modules, lessons, enrollments, progress, certificates and messages in Prisma.",
          "Added row-level security policies in Supabase to protect user data.",
          "Added OAuth providers and JWT session handling for secure login.",
        ],
      },
      {
        title: "Frontend & course builder",
        description: "Built responsive course discovery pages and the instructor course creation flow.",
        details: [
          "React + Tailwind UI for course catalog, search and filtering.",
          "Module/lesson builder for instructors to create course content.",
          "AI-assisted content generation via OpenAI to draft lesson outlines.",
        ],
      },
      {
        title: "Progress & certificates",
        description: "Implemented lesson completion tracking, progress bars and auto-generated certificates.",
        details: [
          "Real-time progress tracking as learners complete lessons and quizzes.",
          "PDF certificate generation on course completion.",
          "Notification system for new course releases and reminders.",
        ],
      },
      {
        title: "Testing & deployment",
        description: "Validated auth flows, payments and responsive behavior before shipping.",
        details: [
          "Tested OAuth, protected routes and Stripe webhook handling in staging.",
          "Verified mobile responsiveness and accessibility of the course player.",
          "Deployed to Vercel with a Supabase production database.",
        ],
      },
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma ORM", "OpenAI API", "Stripe", "OAuth", "Vercel",
    ],
    challenges: [
      "Keeping lesson progress in sync across client and server without over-fetching.",
      "Securing instructor-only course-editing endpoints with role-based middleware.",
    ],
    keyFeatures: [
      "Role-based access (student / instructor / admin)",
      "AI-assisted course content generation",
      "Lesson progress tracking & certificates",
      "Real-time messaging & notifications",
      "Google/GitHub OAuth + JWT auth",
    ],
  },
  "ai-website-feedback": {
    ...base,
    slug: "ai-website-feedback",
    title: "AI Website Feedback Platform",
    category: "AI-powered SaaS",
    description:
      "An AI-powered website analysis platform with authentication, dashboards, reports, charts, PDF export, admin features, Stripe subscriptions, Supabase, PostgreSQL and OpenAI integration.",
    liveUrl: "https://saas-website-analyzer.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/saas-website-analyzer",
    duration: "7 weeks",
    overview:
      "A SaaS product that analyzes any public website using AI and returns actionable UX, performance, clarity and conversion insights. Users can view interactive dashboards, export PDF reports and subscribe to tiered plans.",
    steps: [
      {
        title: "Product definition",
        description: "Defined the analysis pipeline from URL input to AI-generated report with subscription gating.",
        details: [
          "Identified core metrics: performance, clarity, accessibility and conversion.",
          "Designed subscription tiers (free report limit, paid unlimited + PDF export).",
          "Planned multi-tenant dashboard with per-user report history.",
        ],
      },
      {
        title: "Auth, dashboard & billing",
        description: "Built authentication, user dashboards and Stripe subscription integration.",
        details: [
          "Authentication with Supabase-backed user accounts.",
          "Stripe Checkout and customer portal for subscriptions and invoices.",
          "Dashboard showing report history, scores and usage metrics.",
        ],
      },
      {
        title: "AI analysis engine",
        description: "Integrated OpenAI to crawl page structure and generate improvement recommendations.",
        details: [
          "Server-side page fetch and HTML/meta extraction for target URLs.",
          "OpenAI prompts tuned to return UX, clarity, accessibility and conversion scores.",
          "Chart visualizations for score breakdowns per category.",
        ],
      },
      {
        title: "Reports & PDF export",
        description: "Added report detail views and server-generated PDF export for paid users.",
        details: [
          "Shareable public report pages with score rings and bars.",
          "PDF export via server-side rendering for subscribed users.",
          "Admin panel to view all reports and manage users.",
        ],
      },
      {
        title: "Launch & optimization",
        description: "Hardened rate limiting, validation and deployment to production.",
        details: [
          "Zod validation and per-email rate limiting on the analysis API.",
          "Cached analysis results to reduce redundant OpenAI calls.",
          "Deployed on Vercel with Supabase PostgreSQL.",
        ],
      },
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenAI API", "Stripe", "Zod", "Recharts", "Vercel",
    ],
    challenges: [
      "Controlling OpenAI costs by caching repeated analyses of the same URL.",
      "Ensuring PDF exports matched the on-screen report design exactly.",
    ],
    keyFeatures: [
      "AI-powered website analysis & scoring",
      "Interactive dashboards & charts",
      "PDF report export",
      "Stripe subscriptions & billing",
      "Admin panel & user management",
    ],
  },
  "dinespark": {
    ...base,
    slug: "dinespark",
    title: "DineSpark",
    category: "Full-Stack Restaurant Management Application",
    description:
      "A full-stack restaurant application with menus, reservations, contact handling, database operations and validation, migrated to a unified Next.js architecture.",
    liveUrl: "https://dine-spark-ui-ogcr.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/DineSpark-UI",
    duration: "5 weeks",
    overview:
      "DineSpark is a restaurant management system for daily operations: table management, reservations, digital menus and customer contact handling. It was migrated from a split React + Vite + Express stack into a unified Next.js application with API routes.",
    steps: [
      {
        title: "Migration planning",
        description: "Audited the existing React + Vite frontend and Express backend to plan a unified Next.js structure.",
        details: [
          "Catalogued frontend components, Express routes and database models.",
          "Planned API route migration from Express to Next.js route handlers.",
          "Designed a shared validation layer to avoid duplicating logic.",
        ],
      },
      {
        title: "Unified Next.js architecture",
        description: "Consolidated frontend and backend into one Next.js codebase with App Router.",
        details: [
          "Moved Express route logic into Next.js API routes under /api.",
          "Replaced separate dev/production servers with a single next dev / next start workflow.",
          "Kept Prisma ORM and PostgreSQL as the data layer.",
        ],
      },
      {
        title: "Menu, reservations & contact",
        description: "Built restaurant-facing features: menu items, table reservations and contact form.",
        details: [
          "Menu management with categories, prices and availability toggles.",
          "Reservation system with date/time picking and table assignment.",
          "Contact form with Zod validation and database persistence.",
        ],
      },
      {
        title: "Dashboard & operations",
        description: "Added a staff dashboard showing today's covers, reservations and active tables.",
        details: [
          "Stats: covers, reservations, pending and active tables.",
          "Table map view with occupied/free status.",
          "Daily summary for shift handovers.",
        ],
      },
      {
        title: "Deployment",
        description: "Validated API routes, database migrations and deployed to Vercel.",
        details: [
          "Ran Prisma migrations against the production database.",
          "Tested reservation and contact form submission end-to-end.",
          "Deployed and configured environment variables on Vercel.",
        ],
      },
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Zod", "Vercel",
    ],
    challenges: [
      "Preserving existing Express API contracts while moving to Next.js route handlers.",
      "Synchronizing frontend form state with migrated backend validation messages.",
    ],
    keyFeatures: [
      "Digital menu with categories & availability",
      "Table reservation system",
      "Contact form with validation",
      "Staff dashboard with covers & stats",
      "Unified Next.js + Prisma stack",
    ],
  },
  "digitalcraft": {
    ...base,
    slug: "digitalcraft",
    title: "DigitalCraft",
    category: "Digital Marketing Agency Website",
    description:
      "A responsive agency website with modern UI, motion, services, portfolio, testimonials and contact features.",
    liveUrl: "https://digitalmarketing-eta.vercel.app/",
    githubUrl: "https://github.com/abdullahdeveloper13/digitalmarketing",
    duration: "4 weeks",
    overview:
      "DigitalCraft is a responsive digital marketing agency website built to showcase services, portfolio work and client testimonials with smooth motion and a clean conversion-focused layout.",
    steps: [
      {
        title: "Design & structure",
        description: "Defined the agency site structure: hero, services, portfolio, testimonials and contact sections.",
        details: [
          "Designed a responsive layout with a fixed navigation and scroll-triggered reveals.",
          "Chose a dark theme with blue accents to match Abdullah's personal brand.",
          "Planned motion interactions for service cards and portfolio items.",
        ],
      },
      {
        title: "Frontend implementation",
        description: "Built the marketing site with Next.js, React and Tailwind CSS.",
        details: [
          "Implemented sticky nav, smooth scroll and section-based scrolling.",
          "Built services grid, portfolio showcase and testimonial slider.",
          "Added a working contact form with client-side validation.",
        ],
      },
      {
        title: "Motion & polish",
        description: "Added animations and refined responsiveness across breakpoints.",
        details: [
          "Added Intersection Observer-based reveal animations.",
          "Tuned typography spacing and hover states for a polished feel.",
          "Tested on mobile, tablet and desktop breakpoints.",
        ],
      },
      {
        title: "Launch",
        description: "Deployed the static Next.js site to Vercel with a custom domain setup.",
        details: [
          "Production build and deployment on Vercel.",
          "Configured metadata and OpenGraph for social sharing.",
          "Verified Lighthouse performance and accessibility scores.",
        ],
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    challenges: [
      "Keeping motion performant on lower-end mobile devices.",
      "Ensuring the contact form worked reliably without a backend.",
    ],
    keyFeatures: [
      "Responsive marketing layout",
      "Services, portfolio and testimonials sections",
      "Scroll-triggered animations",
      "Working contact form",
      "SEO metadata & OpenGraph",
    ],
  },
  "orbital": {
    ...base,
    slug: "orbital",
    title: "Orbital",
    category: "Voice-first Personal Computer Agent",
    description:
      "A voice-first computer agent concept connecting natural language, tool execution and browser automation into one focused workflow.",
    liveUrl: "",
    githubUrl: "https://github.com/abdullahdeveloper13/llm-model",
    duration: "6 weeks",
    overview:
      "Orbital is a voice-first personal computer agent concept. It connects spoken natural language to tool execution and browser automation, letting users direct their computer through voice commands.",
    steps: [
      {
        title: "Concept & flow design",
        description: "Designed the voice-to-action pipeline: listen, interpret, execute, respond.",
        details: [
          "Mapped voice commands to system actions (open app, search web, summarize).",
          "Designed the listening → interpreting → executing pipeline states.",
          "Planned browser automation integration for web-based tasks.",
        ],
      },
      {
        title: "Voice interface",
        description: "Built the voice UI with speech recognition and synthesis.",
        details: [
          "Integrated Web Speech API for listening and speaking.",
          "Built a visual status ring showing listening / interpreting / idle states.",
          "Added waveform visualization while the agent processes audio.",
        ],
      },
      {
        title: "Tool execution & automation",
        description: "Connected natural language to tool execution and browser automation.",
        details: [
          "Implemented LLM tool calling to route commands to the right tool.",
          "Connected browser automation for web navigation and data extraction.",
          "Handled command confirmation and error feedback via voice.",
        ],
      },
      {
        title: "Polish & demo",
        description: "Refined the agent UX and prepared a demonstration workflow.",
        details: [
          "Built demo scenarios: open a project brief and summarize risks.",
          "Tuned latency and added speaking indicators for responsiveness.",
          "Documented the concept for portfolio presentation.",
        ],
      },
    ],
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Web Speech API", "Browser Automation",
    ],
    challenges: [
      "Reducing voice-to-action latency for a responsive feel.",
      "Handling ambiguous voice commands with confirmation flows.",
    ],
    keyFeatures: [
      "Voice-first computer control",
      "Natural language to tool execution",
      "Browser automation integration",
      "Listening / interpreting / executing status UI",
      "LLM tool calling",
    ],
  },
  "scentheaven-shopify": {
    ...base,
    slug: "scentheaven-shopify",
    title: "ScentHeaven — Shopify Fragrance Store",
    category: "E-commerce (Shopify)",
    description:
      "A premium fragrance Shopify store selling curated perfumes for him, her, unisex, oud & attars, with collections, best-sellers and nationwide delivery.",
    liveUrl: "https://getscentrush.com/",
    githubUrl: undefined,
    duration: "3 weeks",
    overview:
      "ScentHeaven (Scent Heaven) is a premium fragrance house built on Shopify. The store curates scent profiles for every character — the quiet ones, the loud ones, the ones still deciding — with collections for him, her, unisex, oud & attars and other fragrances. It features nationwide delivery (Pakistan), verified scents, cash on delivery and bank transfer.",
    steps: [
      {
        title: "Store setup & branding",
        description: "Configured the Shopify store, theme and brand identity for ScentHeaven.",
        details: [
          "Set up the Shopify store at getscentrush.com with a custom domain.",
          "Selected and customized a clean, minimal fragrance-theme design.",
          "Defined brand voice: 'A World of Scent. A Signature of You.'",
        ],
      },
      {
        title: "Product catalog & collections",
        description: "Imported and organized fragrance products into collections.",
        details: [
          "Added products: Azzaro Wanted, Charlie White, Maxi, Polo Blue and more.",
          "Organized into collections: For Him, For Her, Unisex, Oud & Attars, Other Fragrances.",
          "Set pricing in USD with per-product images and descriptions.",
        ],
      },
      {
        title: "Navigation & pages",
        description: "Built store navigation and informational pages.",
        details: [
          "Created navigation: Shop All, For Him, For Her, Unisex, Oud & Attars, Other Fragrances, About, FAQ, Contact.",
          "Built 'The House' about page telling the brand story.",
          "Added seasonal campaigns and 'The Edit' best-sellers section.",
        ],
      },
      {
        title: "Payments, delivery & policies",
        description: "Configured checkout, delivery options and legal policies.",
        details: [
          "Enabled Cash on delivery and Bank transfer payment methods.",
          "Set up nationwide delivery across Pakistan.",
          "Added Shipping Policy, Returns & Refunds, Privacy Policy and Terms of Service.",
        ],
      },
      {
        title: "Launch & customer capture",
        description: "Launched the store and added a newsletter signup to capture customers.",
        details: [
          "Added 'The Inner Circle' newsletter for first access to new arrivals.",
          "Configured currency (USD) and store locale.",
          "Launched the store and verified checkout flow end-to-end.",
        ],
      },
    ],
    technologies: ["Shopify", "Liquid", "HTML/CSS", "E-commerce", "Payments (COD / Bank transfer)"],
    challenges: [
      "Curating a focused product edit rather than an endless catalog.",
      "Building trust for fragrance purchases online via verified scents and clear policies.",
    ],
    keyFeatures: [
      "Curated fragrance collections (him / her / unisex / oud & attars)",
      "Best-sellers & seasonal edit",
      "Nationwide delivery (Pakistan)",
      "Cash on delivery & bank transfer",
      "Newsletter signup (The Inner Circle)",
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}