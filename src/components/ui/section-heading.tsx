import { gradientText, Rich } from "./rich";
import { Reveal } from "./reveal";

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        <Rich text={title} strongClassName={gradientText} />
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
