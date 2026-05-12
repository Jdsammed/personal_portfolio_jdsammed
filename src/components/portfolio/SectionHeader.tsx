import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        {eyebrow}
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </Reveal>
  );
}
