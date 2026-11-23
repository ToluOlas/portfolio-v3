"use client";

import {
  CaseStudyLayout,
  FeatureGrid,
  H3,
  HeroImage,
  Prose,
  Section,
  Steps,
  TechList,
  UL,
  type TocItem,
} from "@/components/case-study";

const toc: TocItem[] = [
  { id: "overview", label: "Project Overview", short: "Overview", n: "01" },
  { id: "development-process", label: "Development Process", short: "Process", n: "02" },
];

export default function PlatformerProject() {
  return (
    <CaseStudyLayout
      eyebrow="Project"
      title="2D Action Platformer"
      toc={toc}
      facts={[
        { label: "Technologies Used", value: <TechList items={["C#", ".NET", "Unity"]} />, wide: true },
        { label: "Development Time", value: "3 months" },
        { label: "Project Status", value: "Completed" },
      ]}
      media={<HeroImage src="https://i.ibb.co/1fPLTGYq/platformer-Img.png" alt="2D Action Platformer" />}
    >
      <Section id="overview" index="01" label="Overview" title="Project Overview">
        <Prose>
          <p className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
            A 2D action platformer game developed in Unity, featuring three distinct levels of increasing difficulty and a final boss battle. The game incorporates progressive skill unlocking, allowing players to gain new abilities as they advance through the levels.
          </p>
        </Prose>

        <h3 className={H3}>Key Features</h3>
        <FeatureGrid
          items={[
            "Three unique platforming levels with increasing complexity",
            "Progressive skill unlocking system",
            "Various enemy types with different AI behaviors",
            "Boss battle with multiple attack patterns",
            "Smooth character controls and animations",
            "Particle effects and visual feedback",
          ]}
        />

        <h3 className={H3}>Technical Challenges</h3>
        <Prose>
          <p>The development process involved solving various technical challenges, including:</p>
          <ul className={UL}>
            <li>Implementing precise character controls and collision detection</li>
            <li>Creating a flexible skill system that could be expanded</li>
            <li>Designing and implementing AI behaviors for different enemy types</li>
            <li>Optimizing performance for smooth gameplay</li>
          </ul>
        </Prose>
      </Section>

      <Section id="development-process" index="02" label="Process" title="Development Process">
        <Steps
          steps={[
            {
              title: "Planning Phase",
              body: "Started with detailed game design documentation, including level layouts, character abilities, and enemy behaviors. Created prototypes to test core mechanics and gameplay feel.",
            },
            {
              title: "Implementation",
              body: "Developed the core systems first, including character controller and basic platforming mechanics. Gradually added more features like combat, enemies, and special abilities.",
            },
            {
              title: "Testing & Refinement",
              body: "Conducted extensive playtesting to balance difficulty, refine controls, and ensure a smooth progression curve through the levels.",
            },
          ]}
        />
      </Section>
    </CaseStudyLayout>
  );
}
