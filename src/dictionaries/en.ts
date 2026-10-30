import type { Dictionary } from "./pt";

export const en: Dictionary = {
  meta: {
    title: "Rafael Menegalli — Full-Stack Developer",
    description:
      "Full-Stack Developer specialized in custom web systems, Micro-SaaS and high-converting pages. 100% remote.",
  },
  nav: {
    projects: "Projects",
    services: "Services",
    stack: "Stack",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    hire: "Hire Me",
    menu: "Menu",
    toggleTheme: "Toggle theme",
  },
  hero: {
    badge: "Available for new projects & opportunities",
    headline: "**Full-Stack** Developer focused on quality, speed, and **real business results.**",
    sub: "Hi, I'm **Rafael Menegalli**. I turn ideas into scalable web systems, Micro-SaaS, and high-converting pages. From database architecture to polished UI, I ship fast solutions built to sell and scale.",
    ctaWhats: "Request a Quote on WhatsApp",
    ctaProjects: "View Live Projects",
    ctaResume: "View / Download Resume (CV)",
  },
  metrics: [
    { value: "+4 Years", desc: "Hands-on coding & systems experience" },
    { value: "Full-Stack", desc: "End-to-end mastery (Front, Back, DB & AI)" },
    { value: "High Conversion", desc: "Business acumen + Payment integrations" },
    { value: "100% Remote", desc: "Fast delivery across Brazil & globally" },
  ],
  projects: {
    eyebrow: "Portfolio",
    title: "Real projects, **live right now.**",
    subtitle: "No mockups: systems and websites in production, serving real users and clients.",
    filters: { all: "All", saas: "SaaS & Systems", sites: "Landing Pages & Blogs" },
    live: "Live in Production",
    preview: {
      interact: "Live Preview",
      screenshot: "Back to screenshot",
      expand: "Expand fullscreen",
      external: "Open in new tab",
      unavailable: "Preview currently unavailable",
      blockedHint: "If the site doesn't load here, it may block embedding.",
    },
    visit: "Visit Site",
    featured: "FEATURED",
    visitLive: "Visit Live Site",
    interactivePreview: "Interactive Preview",
    highlight: "Highlight",
    items: {
      orcafy: {
        type: "Micro-SaaS / Web System",
        badge: "Live SaaS",
        description:
          "Micro-SaaS built to streamline how service providers close deals. Enables generating, managing, and sending interactive, high-converting commercial quotes directly to clients for fast approval.",
        highlight: "Scalable SaaS architecture + mobile-first experience focused on closing sales.",
      },
      facilitacifra: {
        type: "Web Application / Platform",
        badge: "Live App",
        description:
          "Web platform engineered to solve practical challenges for musicians when reading, organizing, and performing chord charts. Features an ultra-fast, distraction-free UI built for live stage performance and study.",
        highlight: "Instant performance and user-centered usability.",
      },
      inova: {
        type: "Commercial Landing Page + Blog + Affiliate E-commerce",
        badge: "Live Commercial Site",
        description:
          "Complete commercial ecosystem combining a high-converting Landing Page, SEO-optimized blog, and dynamic product catalog integrated with Mercado Livre affiliate links for automated sales generation.",
        highlight: "Serverless Neon DB integration + high-conversion architecture.",
      },
      maker: {
        type: "Content Portal & 3D E-commerce",
        badge: "Live Portal",
        description:
          "Strategic blog and portal dedicated to the 3D Printing Maker universe and e-commerce sales, engineered for fast page loads, reader retention, and monetization.",
        highlight: "Structure optimized for organic traffic and conversion.",
      },
      pulse: {
        type: "SaaS Landing Page (Habits & Focus)",
        badge: "Live Landing Page",
        description:
          "High-converting landing page for a habit and focus management SaaS. Showcases the product with an app mockup, social proof, testimonials, pricing plans with monthly/annual toggle, comparison table, FAQ and a waitlist to capture leads.",
        highlight: "Complete SaaS sales page: from value proposition to lead capture, built around conversion.",
      },
    },
  },
  services: {
    eyebrow: "Services",
    title: "What I can **build for you**",
    subtitle: "Tailor-made solutions to take your business from improvisation to selling online.",
    items: [
      {
        title: "Custom Web Systems & Micro-SaaS",
        description:
          "Turn your software idea into reality fast. Admin dashboards, management systems, member areas, secure auth, and scalable databases.",
      },
      {
        title: "High-Converting Landing Pages & Sales Pages",
        description:
          "Replace slow, amateur pages with a professional sales machine. Premium design, instant load times, and laser focus on turning visitors into paying customers.",
      },
      {
        title: "Premium Corporate Sites & SEO Blogs",
        description:
          "Position your brand as an industry leader with a modern, responsive website optimized for Google search rankings.",
      },
      {
        title: "Payments, APIs & AI Workflows",
        description:
          "Seamless integration with payment gateways, checkouts, external APIs, webhooks, WordPress, and AI-powered automations.",
      },
    ],
    process: {
      title: "How we work together",
      note: "Flexible communication: via video call OR 100% via WhatsApp messages/audio for busy clients.",
      steps: [
        { title: "Quick Briefing", description: "Call or 100% via WhatsApp." },
        { title: "Architecture & UI Prototype", description: "See what you'll get before it's built." },
        { title: "Agile + AI-Assisted Dev", description: "Live preview while it's being built." },
        { title: "Production Deploy & Support", description: "Domain live, plus ongoing support." },
      ],
    },
  },
  skills: {
    eyebrow: "Tech arsenal",
    title: "A **modern** stack, end to end",
    subtitle: "Tools chosen to ship fast without giving up on quality and scale.",
    groups: [
      {
        id: "front",
        label: "Front-End & Mobile",
        items: [
          "Next.js (App Router/SSR)", "React.js", "React Native", "TypeScript", "JavaScript (ES6+)",
          "Tailwind CSS", "shadcn/ui", "HTML5/CSS3", "WordPress",
        ],
      },
      {
        id: "back",
        label: "Back-End & Architecture",
        items: [
          "Node.js", "Python", "PHP", "RESTful APIs", "Webhooks",
          "Payment Gateways & Checkout Integrations", "Scalable Architecture",
        ],
      },
      {
        id: "db",
        label: "Database & ORMs",
        items: ["PostgreSQL", "MySQL", "Neon DB (Serverless Postgres)", "Supabase", "Prisma ORM", "TypeORM"],
      },
      {
        id: "ai",
        label: "AI & DevOps",
        items: [
          "AI-Augmented Software Engineering (LLMs, Prompt Engineering, AI Workflows for ultra-fast delivery)",
          "Git/GitHub", "Vercel", "DNS/Domain Management",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Career",
    title: "Journey **and education**",
    subtitle: "From the technical-school classroom to shipping real products for clients.",
    items: [
      {
        period: "2024 – Present",
        duration: "2 years",
        role: "Independent Full-Stack Developer & Freelancer",
        description:
          "Building custom web systems, Micro-SaaS, and high-converting pages for clients across Brazil. Combining software engineering with business strategy and payment integrations.",
      },
      {
        period: "Software House",
        duration: "4 months",
        role: "Junior Full-Stack Developer",
        description:
          "Promoted from intern due to high delivery speed and technical quality. Built end-to-end features, maintained production applications, and optimized database queries.",
      },
      {
        period: "Software House",
        duration: "1 year",
        role: "Full-Stack Developer Intern",
        description:
          "Hands-on development of web interfaces, REST API creation, bug resolution, and agile teamwork in a fast-paced software house environment.",
      },
      {
        period: "Tech Company",
        duration: "6 months",
        role: "Systems Technical Support",
        description:
          "Direct troubleshooting of software systems, business rules analysis, database queries, and user support.",
      },
    ],
    educationTitle: "Academic background",
    education: [
      {
        period: "Ongoing",
        role: "B.S. in Computer Science",
        description: "Penultimate year (ongoing).",
      },
      {
        period: "Completed",
        role: "Technical Diploma in Informatics (integrated with High School)",
        description: "Completed. Started coding in the 1st year of high school.",
      },
    ],
  },
  about: {
    title: "About **Rafael**",
    paragraphs: [
      "I'm 21 and started coding in a high-school IT program, in my first year. Since then I've gone through tech support, an internship and a software house, and today I work independently.",
      "I'm a business-minded developer: I don't just ship code, I ship a product that has to sell, convert and scale. I use AI as a lever to deliver faster without giving up quality.",
    ],
    facts: [
      { label: "Age", value: "21 years old" },
      { label: "Location", value: "São Paulo, Brazil" },
      { label: "Availability", value: "100% remote, worldwide" },
      { label: "English", value: "Intermediate" },
      { label: "Degree", value: "Computer Science (penultimate year)" },
    ],
  },
  resumeUi: {
    open: "View Resume",
    title: "Resume",
    description: "Read it here, print it or download the PDF.",
    print: "Print / Save as PDF",
    download: "Download PDF",
    copyContact: "Copy contact",
    copied: "Contact copied!",
    langPt: "Português",
    langEn: "English",
  },
  resumeDoc: {
    role: "Full-Stack Developer",
    summaryTitle: "Summary",
    summary:
      "Full-Stack Developer with 4+ years of hands-on experience, focused on scalable web systems, Micro-SaaS and high-converting pages. End-to-end expertise: front-end, back-end, databases, payment integrations and AI workflows.",
    skillsTitle: "Skills",
    skills: [
      { label: "Front-End & Mobile", value: "Next.js, React, React Native, TypeScript, JavaScript, Tailwind CSS, shadcn/ui, HTML/CSS, WordPress" },
      { label: "Back-End", value: "Node.js, Python, PHP, REST APIs, Webhooks, Payment Gateways" },
      { label: "Databases", value: "PostgreSQL, MySQL, Neon DB, Supabase, Prisma, TypeORM" },
      { label: "AI & DevOps", value: "LLMs, Prompt Engineering, AI Workflows, Git/GitHub, Vercel, DNS" },
    ],
    experienceTitle: "Experience",
    experience: [
      {
        role: "Independent Full-Stack Developer & Freelancer",
        period: "2024 – Present",
        text: "Custom web systems, Micro-SaaS and high-converting pages for clients across Brazil, including payment integrations.",
      },
      {
        role: "Junior Full-Stack Developer — Software House",
        period: "4 months",
        text: "End-to-end features, production application maintenance and database query optimization.",
      },
      {
        role: "Full-Stack Developer Intern — Software House",
        period: "1 year",
        text: "Web interfaces, REST API creation, bug fixing and agile teamwork.",
      },
      {
        role: "Systems Technical Support — Tech Company",
        period: "6 months",
        text: "System troubleshooting, business rules analysis, SQL queries and user support.",
      },
    ],
    projectsTitle: "Live production projects",
    educationTitle: "Education",
    education: [
      { title: "B.S. in Computer Science", period: "Penultimate year (ongoing)" },
      { title: "Technical Diploma in Informatics (integrated with High School)", period: "Completed" },
    ],
    languagesTitle: "Languages",
    languages: "Portuguese (native) · English (intermediate)",
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a system idea or need a website that actually sells? Let's build it.",
    subtitle: "Tell me your idea in one message. I reply fast and suggest the best path.",
    whatsapp: "Chat on WhatsApp",
    email: "Send email",
    copyEmail: "Copy email",
    copied: "Email copied!",
    github: "GitHub",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    footer: "All rights reserved.",
    built: "Built with Next.js, Tailwind and plenty of coffee.",
  },
};
