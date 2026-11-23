import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

/** Numbered eyebrow label ("01 / Expertise") above a section title. */
export function SectionHeading({ index, label, title, align = "left", className }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={cn("mb-8 sm:mb-12", center && "text-center", className)}>
      <p
        className={cn(
          "flex items-center gap-3 mb-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em]",
          center && "justify-center"
        )}
      >
        <span className="text-highlight">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-highlight/60" />
        <span className="text-muted-foreground">{label}</span>
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
