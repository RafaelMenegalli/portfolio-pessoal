export type ProjectCategory = "saas" | "sites";

export interface ProjectMeta {
  id: "orcafy" | "facilitacifra" | "inova" | "maker" | "pulse";
  name: string;
  url: string;
  category: ProjectCategory;
  stack: string[];
}

export const projects: ProjectMeta[] = [
  {
    id: "orcafy",
    name: "Orçafy",
    url: "https://orcafy-mu.vercel.app",
    category: "saas",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma", "Payment Gateways"],
  },
  {
    id: "facilitacifra",
    name: "Facilita Cifra",
    url: "https://facilitacifra.com.br",
    category: "saas",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "UI/UX"],
  },
  {
    id: "inova",
    name: "Inova Grelhas Lineares",
    url: "https://inovagrelhaslineares.com.br",
    category: "sites",
    stack: ["Next.js", "Neon DB (PostgreSQL)", "Prisma", "shadcn/ui", "Tailwind CSS", "SEO"],
  },
  {
    id: "maker",
    name: "Maker Lucrativo",
    url: "https://makerlucrativo.com.br",
    category: "sites",
    stack: ["Web Moderno", "SEO Técnico", "UI Responsiva", "E-commerce Strategy"],
  },
  {
    id: "pulse",
    name: "Pulse",
    url: "https://pulse-landing-page-nine.vercel.app",
    category: "sites",
    stack: ["Next.js", "React", "Vercel", "UI/UX", "Pricing & Conversão", "Design Responsivo"],
  },
];

export const marqueeStack = [
  "Next.js", "React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Node.js",
  "Python", "PHP", "PostgreSQL", "MySQL", "Neon DB", "Supabase", "Prisma", "TypeORM", "WordPress",
  "REST APIs", "Webhooks", "Vercel", "Git/GitHub", "LLMs & AI Workflows",
];
