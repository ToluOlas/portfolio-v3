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
  Network,
  Database,
  Users,
  Gamepad,
  Shield,
  Cloud,
  Bot
} from "lucide-react";
import Image from "next/image";

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
      period: "2024-Present",
      title: "Present Day",
      description: "Currently searching for the next opportunity while continuing personal projects and skill development.",
      highlights: [
        "Continuing development of 2D Platformer game in Unity",
        "Taking online courses for several technologies, including Microsoft Azure and web technologies",
        "Working on this website!"
      ],
      skills: ["HTML/CSS/Javascript", "C#", "Unity", "Azure", "Language Learning Models"],
      icon: <Code className="w-6 h-6" />
    },
    {
      period: "2023-2024",
      title: "Final Year at University",
      description: "Final year of university, focusing on Digital Media and Games, Software Engineering, and Artificial Intelligence, culminating in a dissertation project on cybersecurity awareness through gaming.",
      highlights: [
        "Deepened understanding of coding standards, game development, deep learning, software metrics and more",
        "Completed an 82 page dissertation project on cybersecurity, developing an educational game (Grade: A)",
        "Graduated with First Class Honours in Computer Science(Digital Media and Games)"
      ],
      skills: ["C#", "Unity", ".Net", "R/RStudio", "Blockchain", "Deep Learning", "Game Design", "Language Learning Models", "Software Engineering"],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      period: "2022-2023",
      title: "FedEx Express Internship",
      description: "Industrial year with FedEx Express in the Process Intelligence team, focusing on business process optimization and dashboard development.",
      highlights: [
        "Gained experience with Process Mining, Task Mining and Data Analysis",
        "Developed the Process Intelligence team website using SharePoint",
        "Built machine learning algorithms for text categorization and sentiment analysis",
        "Earned SAFe 5 certification"
      ],
      skills: ["Celonis EMS", "Power BI", "SharePoint", "Python", "SQL", "Machine Learning", "Agile Scrum", "Data Analysis"],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      period: "2019-2022",
      title: "Early University Years",
      description: "First years at Brunel University London, starting with foundation year and progressing through core computer science subjects.",
      highlights: [
        "Adopted various technologies across different aspects of computer science",
        "Led multiple group projects and coordinated team meetings",
        "Won the Emerge-IQ Project Prize for Software Innovation at Made In Brunel 2022"
      ],
      skills: ["Java", "HTML/CSS/JS", "Github", "AI/Machine Learning", "Databases", "Agile Scrum", "Networks", "Software Development"],
      icon: <Laptop className="w-6 h-6" />
    },
    {
      period: "2017-2019",
      title: "A Levels",
      description: "A Level studies focusing on Computer Science, developing first major programming project.",
      highlights: [
        "Worked on first long-form software development project",
        "Joined coding club at school",
        "Improved time management skills"
      ],
      skills: ["Networks", "Object Oriented Programming", "Python", "Project Planning", "Waterfall Development"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      period: "2016-2017",
      title: "Introduction to Programming",
      description: "GCSE period where first exposure to programming and computing concepts occurred.",
      highlights: [
        "Introduction to computing and programming",
        "Started learning programming basics through Python",
        "Developed various small scale programs"
      ],
      skills: ["Python", "SQL", "Software Development", "Programming Concepts", "Waterfall Methodology", "Microsoft Excel"],
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
          <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
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
                transition={{ delay: index * 0.2 }}
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
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
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
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 dark:bg-blue-500" />
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