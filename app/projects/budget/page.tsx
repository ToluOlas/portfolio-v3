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

export default function BudgetProject() {
  return (
    <CaseStudyLayout
      eyebrow="Project"
      title="Student Budgeting App"
      toc={toc}
      facts={[
        { label: "Technologies Used", value: <TechList items={["HTML/CSS/JS", "Bootstrap", "MySQL"]} />, wide: true },
        { label: "Development Time", value: "3 months" },
        { label: "Project Status", value: "Completed" },
      ]}
      media={<HeroImage src="https://i.ibb.co/6cb77fvh/budgetaward-Img.png" alt="Student Budgeting App" position="object-top" />}
      stats={[
        { to: 25, suffix: "%", label: "reduction in unnecessary expenses" },
        { to: 30, suffix: "%", label: "increase in savings" },
      ]}
    >
      <Section id="overview" index="01" label="Overview" title="Project Overview">
        <Prose>
          <p className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
            A web-based application designed to help students manage their finances effectively. The project aligns with UN Sustainable Development Goals of No Poverty and Quality Education by making financial management accessible to students.
          </p>
        </Prose>

        <h3 className={H3}>Key Features</h3>
        <FeatureGrid
          items={[
            "Expense tracking and categorisation",
            "Budget planning tools",
            "Cheaper alternative suggestions",
            "Savings goals tracking",
            "Educational resources on financial management",
          ]}
        />

        <h3 className={H3}>Impact</h3>
        <Prose>
          <p>The application has helped students:</p>
          <ul className={UL}>
            <li>Reduce unnecessary expenses by 25%</li>
            <li>Increase savings by 30%</li>
            <li>Better understand financial management</li>
            <li>Make informed spending decisions</li>
          </ul>
        </Prose>
      </Section>

      <Section id="development-process" index="02" label="Process" title="Development Process">
        <Steps
          steps={[
            {
              title: "Research & Planning",
              body: "Conducted surveys with students to understand their financial challenges. Researched existing budgeting tools and identified areas for improvement.",
            },
            {
              title: "Implementation",
              body: "Used agile scrum methodology for development. Created a responsive web interface and implemented core financial tracking features. Leadership would rotate every two weeks upon the start of each sprint.",
            },
            {
              title: "User Testing",
              body: "Conducted extensive user testing with student groups. Gathered feedback and made improvements to enhance usability.",
            },
          ]}
        />
      </Section>
    </CaseStudyLayout>
  );
}
