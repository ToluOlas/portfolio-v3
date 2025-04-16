"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Github, 
  Linkedin,
  Gamepad2,
  Shield,
  Calculator,
  Wallet
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const projects = [
    {
      title: "2D Action Platformer",
      description: "A basic platformer developed in Unity. Contains a basic storyline, three platformer levels of increasing difficulty, and a boss battle. Players can unlock different moves on each level, with different AI-controlled enemies introduced as the game progresses.",
      tech: ["C#", ".NET", "Unity"],
      image: "https://i.imgur.com/MANJXcH.png",
      link: "/projects/platformer",
      icon: <Gamepad2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cybersecurity Training and Awareness",
      description: "Designed and developed an educational RPG to improve cybersecurity awareness. Combined gamification and scenario-based learning to teach cybersecurity fundamentals, enhancing long-term knowledge retention.",
      tech: ["C#", ".NET", "Unity", "Excel"],
      image: "https://i.imgur.com/P1hNMEP.png",
      link: "/projects/cybersecurity",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Maths Revision Program",
      description: "An app developed in Python designed to teach and test people on A Level Mathematics. Covers pure maths, mechanics and statistics, with summaries on every topic and randomized tests for each subject.",
      tech: ["Python", "tkinter", "Photoshop"],
      image: "https://i.imgur.com/X3WGEHo.png",
      link: "/projects/maths",
      icon: <Calculator className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Student Budgeting App",
      description: "A group project meeting UN goals of No Poverty and Quality Education. Created a website for students to track spending and recommend cheaper alternatives, using agile scrum methodology.",
      tech: ["HTML/CSS/JS", "Bootstrap", "MySQL"],
      image: "https://i.imgur.com/Ac48wQc.png",
      link: "/projects/budget",
      icon: <Wallet className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-background/80 dark:from-blue-600/20 dark:via-blue-400/10 dark:to-background/60" />
        <div className="container mx-auto z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              <Image
                src="https://i.imgur.com/xXgqOjR.png"
                alt="Tolu Olasupo"
                fill
                className="rounded-full object-cover border-4 border-blue-500/20"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 text-center">
              Tolu Olasupo
            </h1>
            <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6 sm:mb-8 text-center">
              Software Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-center px-4">
              Building innovative solutions with modern technologies. 
              Specialized in full-stack development, machine learning, and cloud architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="https://drive.google.com/file/d/1Xu9DcS1d3Qhsoxp3ZMvUl54emuddq6Pu/view?pli=1" target="_blank" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                  Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg transition-shadow border border-blue-100 dark:border-blue-900">
                <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
                <ul className="space-y-6 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      width={24}
                      height={24}
                    />
                    React.js / Next.js
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      width={24}
                      height={24}
                    />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt="Tailwind CSS"
                      width={24}
                      height={24}
                    />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                      alt="Spring Boot"
                      width={24}
                      height={24}
                    />
                    Spring Boot
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg transition-shadow border border-blue-100 dark:border-blue-900">
                <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
                <ul className="space-y-6 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      width={24}
                      height={24}
                    />
                    Node.js / Express
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                      width={24}
                      height={24}
                    />
                    Java
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      alt="C#"
                      width={24}
                      height={24}
                    />
                    C# / .NET
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                      width={24}
                      height={24}
                    />
                    Python / Django
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="MySQL"
                      width={24}
                      height={24}
                    />
                    MySQL
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                      alt="GraphQL"
                      width={24}
                      height={24}
                    />
                    RESTful APIs
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg transition-shadow border border-blue-100 dark:border-blue-900">
                <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
                <ul className="space-y-6 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
                      alt="AWS"
                      width={24}
                      height={24}
                    />
                    AWS / Azure
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                      alt="Unity"
                      width={24}
                      height={24}
                    />
                    Unity
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                      alt="Power BI"
                      width={24}
                      height={24}
                    />
                    Power BI / Power Automate
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                      alt="TensorFlow"
                      width={24}
                      height={24}
                    />
                    Machine Learning
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] border border-blue-100 dark:border-blue-900"
              >
                <div className="relative h-48 sm:h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {project.icon}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                    View Project
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-950/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Let's Connect</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              I'm always open to new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="https://github.com/ToluOlas" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                  <Github className="mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/tolu-olasupo-7a6037223/" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                  <Linkedin className="mr-2" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}