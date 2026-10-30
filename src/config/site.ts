export type Lang = "pt" | "en";

// ── Edit your personal info here ────────────────────────────────────────────
const WHATSAPP_PHONE = "5519996282121"; // country code + area code + number, digits only
const EMAIL = "rafaelmenegalli@gmail.com";
const GITHUB_URL = "https://github.com/rafaelmenegalli";
const INSTAGRAM_URL = "https://instagram.com/_raffort";
const LINKEDIN_URL = "https://www.linkedin.com/in/rafael-menegalli-970a23248/";

const WHATSAPP_MESSAGES: Record<Lang, string> = {
  pt: "Olá Rafael! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  en: "Hi Rafael! I saw your portfolio and I'd like to talk about a project.",
};

export const siteConfig = {
  name: "Rafael Menegalli",
  age: 21,
  location: "São Paulo, Brazil",
  url: "https://rafaelmenegalli.com",
  email: EMAIL,
  github: GITHUB_URL,
  instagram: INSTAGRAM_URL,
  linkedin: LINKEDIN_URL,
  whatsappPhone: WHATSAPP_PHONE,
  cv: {
    pt: "/cv-rafael-menegalli-pt.pdf",
    en: "/cv-rafael-menegalli-en.pdf",
  } satisfies Record<Lang, string>,
} as const;

export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGES[lang])}`;
}
