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
import { Typewriter } from "@/components/typewriter";
import { SectionHeading } from "@/components/section-heading";
import { Magnetic } from "@/components/magnetic";
import { trackPointer } from "@/lib/spotlight";
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
        { name: "Claude Code", src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
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
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden px-4 py-16 lg:py-0">
        {/* Background: soft colour blobs + dot grid that fades out toward the edges */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-600/20" />
          <div className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
          <div className="absolute -bottom-40 left-1/3 h-[22rem] w-[22rem] rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-600/10" />
          <div
            className="absolute inset-0 text-slate-900/[0.12] dark:text-white/[0.08]"
            style={{
              backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Text column */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 dark:border-blue-800/70 bg-white/60 dark:bg-white/5 backdrop-blur-sm px-3 py-1 text-sm text-muted-foreground mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </div>

              <p className="text-lg font-medium text-muted-foreground mb-2">Hi, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 text-foreground">
                Tolu Olasupo<span className="text-highlight">.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
                Software engineer who builds
                <Typewriter
                  className="block text-highlight"
                  words={["full-stack web apps", "machine learning models", "games in Unity", "cloud solutions"]}
                />
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Building innovative solutions with modern technologies.
                Specialised in full-stack development, machine learning, with exposure to cloud engineering and data analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Magnetic className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                    onClick={scrollToProjects}
                  >
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <Link href="https://drive.google.com/file/d/1Xu9DcS1d3Qhsoxp3ZMvUl54emuddq6Pu/view?pli=1" target="_blank" className="block w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full bg-white/40 dark:bg-transparent border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                      Download Resume
                    </Button>
                  </Link>
                </Magnetic>
                <div className="flex items-center justify-center gap-2 sm:ml-2">
                  <Link
                    href="https://github.com/ToluOlas"
                    target="_blank"
                    aria-label="GitHub"
                    className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-blue-100/60 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tolu-olasupo-7a6037223/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-blue-100/60 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
                <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 blur-2xl" />
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#2563eb,#22d3ee,#a78bfa,#2563eb)] animate-spin motion-reduce:animate-none"
                  style={{ animationDuration: "8s" }}
                />
                <div className="absolute inset-0 rounded-full bg-background p-1.5">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="https://i.ibb.co/d0nZ6ydQ/profile-Img.png"
                      alt="Tolu Olasupo"
                      fill
                      sizes="(min-width: 1024px) 320px, 224px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 bg-slate-100/70 dark:bg-white/[0.03] border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading index="01" label="Expertise" title="Technical Expertise" />
          {/* Rows slide in from the left one after another */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            onMouseMove={trackPointer}
            className="group/panel relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-blue-100 dark:border-blue-900 divide-y divide-blue-100 dark:divide-blue-900"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold md:pt-1">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full text-sm bg-background/70 border border-blue-100 dark:border-blue-900/70 text-foreground/80 hover:border-highlight hover:text-foreground hover:-translate-y-0.5 transition-all"
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
              </motion.div>
            ))}
            {/* Cursor-following glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 !border-0 opacity-0 transition-opacity duration-300 group-hover/panel:opacity-100"
              style={{ background: "radial-gradient(360px circle at var(--x) var(--y), hsl(var(--highlight) / 0.12), transparent 60%)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading index="02" label="Work" title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[260px] gap-4 sm:gap-5">
            {projects.map((project, index) => {
              const featured = index === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={bentoLayout[index]}
                >
                  <Link
                    href={project.link}
                    onMouseMove={trackPointer}
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
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "radial-gradient(420px circle at var(--x) var(--y), rgba(255,255,255,0.22), transparent 45%)" }}
                    />

                    {featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-highlight text-highlight-foreground shadow">
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
      <section className="py-16 sm:py-24 bg-slate-100/70 dark:bg-white/[0.03] border-t border-border">
        <div className="container mx-auto px-4 text-center">
          {/* Blur-in reveal */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading index="03" label="Contact" title="Let's Connect" align="center" className="!mb-6 sm:!mb-8" />
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              I'm always open to new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Magnetic className="w-full sm:w-auto">
                <Link href="https://github.com/ToluOlas" target="_blank" className="block w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full bg-background/60 border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                    <Github className="mr-2" />
                    GitHub
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <Link href="https://www.linkedin.com/in/tolu-olasupo-7a6037223/" target="_blank" className="block w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full bg-background/60 border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                    <Linkedin className="mr-2" />
                    LinkedIn
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
