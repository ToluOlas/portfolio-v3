"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Gamepad2,
  Shield,
  Calculator,
  Wallet,
  Workflow,
  Sparkles,
  Webhook,
  type LucideIcon
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

  const devicon = (path: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

  type Skill = {
    name: string;
    src?: string;
    Icon?: LucideIcon;
    invertDark?: boolean;
  };

  const skillGroups: { title: string; skills: Skill[] }[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js / Next.js", src: devicon("react/react-original.svg") },
        { name: "TypeScript", src: devicon("typescript/typescript-original.svg") },
        { name: "Vue.js", src: devicon("vuejs/vuejs-original.svg") },
        { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Spring Boot", src: devicon("spring/spring-original.svg") },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "C# / .NET", src: devicon("csharp/csharp-original.svg") },
        { name: "Python", src: devicon("python/python-original.svg") },
        { name: "Java", src: devicon("java/java-original.svg") },
        { name: "Node.js / Express", src: devicon("nodejs/nodejs-original.svg") },
        { name: "Django", src: devicon("django/django-plain.svg"), invertDark: true },
        { name: "MySQL", src: devicon("mysql/mysql-original.svg") },
        { name: "SQL", src: devicon("postgresql/postgresql-original.svg") },
        { name: "RESTful APIs", Icon: Webhook },
      ],
    },
    {
      title: "Cloud, Data & Tools",
      skills: [
        { name: "AWS / Azure", src: devicon("azure/azure-original.svg") },
        { name: "Google Cloud (GCP)", src: devicon("googlecloud/googlecloud-original.svg") },
        { name: "Docker", src: devicon("docker/docker-original.svg") },
        { name: "Kubernetes", src: devicon("kubernetes/kubernetes-plain.svg") },
        { name: "Machine Learning", src: devicon("tensorflow/tensorflow-original.svg") },
        { name: "Claude / Anthropic API", Icon: Sparkles },
        { name: "Power BI / Power Automate", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Celonis EMS", src: "https://i.ibb.co/4RcwhJsp/celonis-Icon.png" },
        { name: "Unity", src: devicon("unity/unity-original.svg"), invertDark: true },
        { name: "Lean Agile", Icon: Workflow },
      ],
    },
  ];

  // Bento placement: cybersecurity is the 2x2 featured tile, platformer spans
  // two columns, maths and budget fill the remaining single cells.
  const bentoLayout = [
    "md:col-span-2 lg:col-span-2 lg:row-span-2",
    "md:col-span-2 lg:col-span-2",
    "",
    "",
  ];

  const projects = [
    {
      title: "Cybersecurity Training and Awareness",
      description: "Designed and developed an educational RPG to improve cybersecurity awareness. Combined gamification and scenario-based learning to teach cybersecurity fundamentals, enhancing long-term knowledge retention.",
      tech: ["C#", ".NET", "Unity", "Excel"],
      image: "https://i.ibb.co/JjL0jrvJ/cybersecurity-Img.png",
      link: "/projects/cybersecurity",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "2D Action Platformer",
      description: "A basic platformer developed in Unity. Contains a basic storyline, three platformer levels of increasing difficulty, and a boss battle. Players can unlock different moves on each level, with different AI-controlled enemies introduced as the game progresses.",
      tech: ["C#", ".NET", "Unity"],
      image: "https://i.ibb.co/1fPLTGYq/platformer-Img.png",
      link: "/projects/platformer",
      icon: <Gamepad2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Maths Revision Program",
      description: "An app developed in Python designed to teach and test people on A Level Mathematics. Covers pure maths, mechanics and statistics, with summaries on every topic and randomized tests for each subject.",
      tech: ["Python", "tkinter", "Photoshop"],
      image: "https://i.ibb.co/tTBckBhc/maths-Img.png",
      link: "/projects/maths",
      icon: <Calculator className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Student Budgeting App",
      description: "A group project meeting UN goals of No Poverty and Quality Education. Created a website for students to track spending and recommend cheaper alternatives, using agile scrum methodology.",
      tech: ["HTML/CSS/JS", "Bootstrap", "MySQL"],
      image: "https://i.ibb.co/6cb77fvh/budgetaward-Img.png",
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
                src="https://i.ibb.co/d0nZ6ydQ/profile-Img.png"
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
              Specialised in full-stack development, machine learning, with exposure to cloud engineering and data analytics.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Technical Expertise</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-blue-100 dark:border-blue-900 divide-y divide-blue-100 dark:divide-blue-900"
          >
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold md:pt-1">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full text-sm bg-background/70 border border-blue-100 dark:border-blue-900/70 text-foreground/80 hover:border-blue-400 hover:text-foreground hover:-translate-y-0.5 transition-all"
                    >
                      {skill.src ? (
                        <Image
                          src={skill.src}
                          alt=""
                          width={18}
                          height={18}
                          className={skill.invertDark ? "dark:invert" : undefined}
                        />
                      ) : skill.Icon ? (
                        <skill.Icon className="w-[18px] h-[18px] text-blue-500" aria-hidden="true" />
                      ) : null}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[260px] gap-4 sm:gap-5">
            {projects.map((project, index) => {
              const featured = index === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={bentoLayout[index]}
                >
                  <Link
                    href={project.link}
                    className="group relative block h-full w-full overflow-hidden rounded-2xl border border-blue-100 dark:border-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 transition-colors duration-500 lg:group-hover:via-black/60" />

                    {featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white shadow">
                        Featured
                      </span>
                    )}
                    <ArrowUpRight className="absolute top-4 right-4 w-9 h-9 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-blue-500" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                      <div className="flex items-start gap-2 mb-2">
                        <span className={featured ? "mt-1.5 sm:mt-2 shrink-0" : "mt-0.5 shrink-0"}>{project.icon}</span>
                        <h3 className={featured ? "text-2xl sm:text-3xl font-bold" : "text-lg font-semibold leading-snug"}>
                          {project.title}
                        </h3>
                      </div>
                      <p
                        className={
                          featured
                            ? "text-white/80 mb-4 line-clamp-3 sm:text-lg max-w-xl"
                            : "text-white/80 text-sm mb-3 line-clamp-2 lg:line-clamp-4 lg:max-h-0 lg:opacity-0 lg:mb-0 lg:group-hover:max-h-28 lg:group-hover:opacity-100 lg:group-hover:mb-3 lg:group-focus-visible:max-h-28 lg:group-focus-visible:opacity-100 transition-all duration-500"
                        }
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded-full text-xs bg-white/15 text-white backdrop-blur-sm border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
