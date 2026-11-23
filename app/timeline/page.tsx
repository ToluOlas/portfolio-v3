"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Brain,
  Building2,
  Laptop,
  BookOpen,
  Terminal,
  Users,
  Bot
} from "lucide-react";

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  highlights: string[];
  skills: string[];
  icon: JSX.Element;
}

export default function Timeline() {
  const timelineData: TimelineItem[] = [
    {
      period: "Oct 2026-Present",
      title: "AI Engineer at MyPocketSkill",
      description: "Building production AI agents at MyPocketSkill, having joined through the askollo AI Operator Programme in August 2026.",
      highlights: [
        "Built and deployed four production AI agents on the ollo agent platform, integrating GitHub, Google Workspace and Slack to automate workflows",
        "Designed prompts to a consistent schema and connected agents to external tools and data through platform connectors",
        "Completed 40+ simulated client conversations on the StayReady Games AI learning platform, practising technical communication and objection handling",
        "Earned Microsoft Certified: Azure AI Fundamentals (September 2026)"
      ],
      skills: ["AI Agents", "Prompt Design", "GitHub", "Google Workspace", "Slack", "Azure AI"],
      icon: <Bot className="w-6 h-6" />
    },
    {
      period: "Mar 2026-Present",
      title: "Independent AI Projects",
      description: "Building AI systems in my own time. I picked up LangGraph, RAG and agent design with no course or employer requiring it.",
      highlights: [
        "Designed a multi-agent system in Python with LangGraph, where a primary agent delegates document evaluation, drafting and research to specialised sub-agents",
        "Implemented Retrieval-Augmented Generation with external APIs to ground answers in verified sources and reduce hallucinated responses",
        "Running LLMs locally through Ollama for privacy and control",
        "Built an end-to-end AI voice agent with n8n, ElevenLabs and OpenRouter for a Forward Deployed Engineer bootcamp assessment"
      ],
      skills: ["Python", "LangGraph", "RAG", "Ollama", "Claude Code", "n8n", "ElevenLabs"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      period: "Jun 2025-Feb 2026",
      title: "Systems Development Consultant, Robert Walters",
      description: "Accelerate Programme, Robert Walters' structured route into tech consulting, with intensive training in software engineering and consulting skills before client placement.",
      highlights: [
        "Built SimpleBank, a Java CLI banking application, in an Agile team of four",
        "Owned the Payment Control workstream, designing and implementing direct debits and standing orders",
        "Practised test-driven development, writing unit tests for payment components before implementation",
        "Took part in peer code reviews and architecture discussions through GitHub pull requests",
        "Completed Foundational C# with Microsoft (CodeCamp, August 2025)"
      ],
      skills: ["Java", "Object Oriented Programming", "Test-Driven Development", "Docker", "Git/GitHub", "Agile", "Agentic AI"],
      icon: <Users className="w-6 h-6" />
    },
    {
      period: "2024-2025",
      title: "Personal Projects & Upskilling",
      description: "Focused on personal projects and skill development after graduating.",
      highlights: [
        "Completed a 2D action platformer in Unity, with three levels, enemy AI, unlockable abilities and a boss battle",
        "Took online courses in Microsoft Azure and web technologies",
        "Built this website, the third version of my portfolio, with Next.js, TypeScript and Tailwind CSS"
      ],
      skills: ["C#", "Unity", "Next.js", "TypeScript", "Tailwind CSS", "Azure"],
      icon: <Code className="w-6 h-6" />
    },
    {
      period: "2023-2024",
      title: "Final Year at University",
      description: "Final year of university, focusing on Digital Media and Games, Software Engineering, and Artificial Intelligence, culminating in a dissertation project on cybersecurity awareness through gaming.",
      highlights: [
        "Deepened understanding of coding standards, game development, deep learning, software metrics and more",
        "Completed an 82 page dissertation project on cybersecurity, developing an educational game in Unity (Grade: A)",
        "User studies showed a 34% average increase in cybersecurity knowledge and a 76% improvement in threat recognition after playing",
        "Graduated with First Class Honours in Computer Science (Digital Media and Games)"
      ],
      skills: ["C#", "Unity", ".NET", "R/RStudio", "Blockchain", "Deep Learning", "Game Design", "Large Language Models", "Software Engineering"],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      period: "2022-2023",
      title: "Back Office IT Intern, FedEx Express",
      description: "Placement year in FedEx Express's Process Intelligence team, which tracked and visualised business processes so other FedEx teams could find bottlenecks and improvement opportunities.",
      highlights: [
        "Built and maintained 15+ dashboards in Celonis EMS and Power BI for real-time process reporting",
        "Deployed a TF-IDF email classifier (scikit-learn) into a live triage pipeline, sorting inquiries into 11 types and cutting response times by around 20%",
        "Led a Generative AI initiative, building LLM proofs of concept and presenting them to senior managers, who approved the work",
        "Owned the team's SharePoint site, managing access and keeping technical documentation accurate",
        "Automated SharePoint processes with Power Automate and provided IT support to internal users",
        "Earned SAFe 5 Practitioner certification"
      ],
      skills: ["Celonis EMS", "Power BI", "Python", "scikit-learn", "SQL", "SharePoint", "Power Automate", "LLMs", "Lean Agile"],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      period: "2019-2022",
      title: "Early University Years",
      description: "First years at Brunel University London, starting with foundation year and progressing through core computer science subjects.",
      highlights: [
        "Won the Emerge-IQ L2 Project Prize for Software Innovation (March 2022) for a student budgeting web app built by a team of ten",
        "Led a sprint on the budgeting app, merging the team's separate stylesheets to fix integration problems between sub-groups",
        "Led multiple group projects and coordinated team meetings",
        "eSports Team Leader and Student Fellowship Treasurer"
      ],
      skills: ["Java", "Spring Boot", "MySQL", "HTML/CSS/JS", "GitHub", "AI/Machine Learning", "Agile Scrum", "Networks"],
      icon: <Laptop className="w-6 h-6" />
    },
    {
      period: "2017-2019",
      title: "A Levels",
      description: "A Levels in Mathematics, Computer Science and Product Design at Havering Sixth Form College.",
      highlights: [
        "Built an A Level Maths revision app, my first self-directed project, because the new curriculum lacked revision material",
        "Joined coding club at school",
        "Improved time management skills"
      ],
      skills: ["Python", "Object Oriented Programming", "Networks", "Project Planning", "Waterfall Development"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      period: "2016-2017",
      title: "Introduction to Programming",
      description: "GCSE period at Drapers Academy, where I was first introduced to programming and computing concepts.",
      highlights: [
        "Achieved 9 GCSEs, including Computing",
        "Started learning programming basics through Python",
        "Developed various small scale programs"
      ],
      skills: ["Python", "SQL", "Software Development", "Programming Concepts", "Microsoft Excel"],
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 text-center text-foreground after:block after:mx-auto after:mt-4 after:h-1 after:w-12 after:rounded-full after:bg-highlight after:content-['']">
            Career Timeline
          </h1>
          <p className="text-xl text-muted-foreground mb-16 text-center">
            My journey through education and professional development in technology
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 dark:from-blue-500 dark:via-blue-400 dark:to-blue-300" />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.2, 0.4) }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-background shadow-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-100 dark:border-blue-900">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 dark:bg-blue-500 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
