"use client";

import {
  CARD,
  CaseStudyLayout,
  FeatureGrid,
  H3,
  HeroImage,
  Prose,
  Section,
  Steps,
  TechList,
  type TocItem,
} from "@/components/case-study";
import { cn } from "@/lib/utils";

const toc: TocItem[] = [
  { id: "overview", label: "Project Overview", short: "Overview", n: "01" },
  { id: "development-process", label: "Development Process", short: "Process", n: "02" },
];

const subjects = [
  { name: "Pure Mathematics", topics: "Calculus, Algebra, Geometry" },
  { name: "Mechanics", topics: "Forces, Motion, Energy" },
  { name: "Statistics", topics: "Probability, Data Analysis, Hypothesis Testing" },
];

export default function MathsProject() {
  return (
    <CaseStudyLayout
      eyebrow="Project"
      title="Maths Revision Program"
      toc={toc}
      facts={[
        { label: "Technologies Used", value: <TechList items={["Python", "tkinter", "Photoshop"]} />, wide: true },
        { label: "Development Time", value: "4 months" },
        { label: "Project Status", value: "Completed" },
      ]}
      media={<HeroImage src="https://i.ibb.co/tTBckBhc/maths-Img.png" alt="Maths Revision Program" />}
    >
      <Section id="overview" index="01" label="Overview" title="Project Overview">
        <Prose>
          <p className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
            A comprehensive mathematics revision program designed specifically for A Level students. The application covers pure mathematics, mechanics, and statistics, providing both learning materials and practice questions.
          </p>
        </Prose>

        <h3 className={H3}>Key Features</h3>
        <FeatureGrid
          items={[
            "Comprehensive topic summaries",
            "Randomized practice questions",
            "Step-by-step solutions",
            "Progress tracking",
            "Performance analytics",
            "Custom practice tests",
          ]}
        />

        <h3 className={H3}>Subject Coverage</h3>
        <Prose>
          <p>The program covers three main areas:</p>
        </Prose>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {subjects.map((s) => (
            <li key={s.name} className={cn(CARD, "p-4")}>
              <p className="font-semibold text-foreground">
                {s.name}
                <span className="sr-only">:</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">{s.topics}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="development-process" index="02" label="Process" title="Development Process">
        <Steps
          steps={[
            {
              title: "Content Creation",
              body: "Collaborated with mathematics teachers to create accurate and comprehensive content. Developed a question bank with varying difficulty levels.",
            },
            {
              title: "Technical Implementation",
              body: "Built a user-friendly interface using tkinter. Implemented algorithms for question randomization and answer checking.",
            },
            {
              title: "Testing & Feedback",
              body: "Tested with A Level students and incorporated their feedback. Refined the content and user interface based on user experience.",
            },
          ]}
        />
      </Section>
    </CaseStudyLayout>
  );
}
