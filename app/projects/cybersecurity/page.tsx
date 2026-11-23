"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  BookOpen,
  Bug,
  Fish,
  Github,
  KeyRound,
  Lightbulb,
  MessagesSquare,
  UserX,
  VenetianMask,
  type LucideIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CARD,
  Callout,
  CaseStudyLayout,
  Figure,
  H3,
  H4,
  Panel,
  Prose,
  Section,
  TAB_LIST,
  TAB_PANEL,
  TAB_TRIGGER,
  TechList,
  UL,
  type Stat,
  type TocItem,
} from "@/components/case-study";
import { cn } from "@/lib/utils";

const toc: TocItem[] = [
  { id: "overview", label: "Project Overview", short: "Overview", n: "01" },
  { id: "the-problem", label: "The Problem", short: "Problem", n: "02" },
  { id: "design-decisions", label: "Design Decisions", short: "Design", n: "03" },
  { id: "the-implementation", label: "The Implementation", short: "Build", n: "04" },
  { id: "results", label: "Results & Evaluation", short: "Results", n: "05" },
  { id: "reflection", label: "My Reflection", short: "Reflection", n: "06" },
];

const threats: { name: string; Icon: LucideIcon; description: string }[] = [
  { name: "Malware", Icon: Bug, description: "Software designed to damage or infiltrate a system. Includes viruses, ransomware, trojans, and spyware." },
  { name: "Phishing", Icon: Fish, description: "Attackers impersonate trusted entities via email, text, or fake websites to steal sensitive information." },
  { name: "Spoofing", Icon: VenetianMask, description: "Impersonating another source (an email address, a website, a caller ID) to deceive users or gain unauthorised access." },
  { name: "Brute Force / Weak Passwords", Icon: KeyRound, description: "Systematically guessing passwords until the correct one is found. Simple or repeated passwords make this trivially easy." },
  { name: "Insider Threats", Icon: UserX, description: "Individuals within an organisation, intentionally or accidentally, misusing access to compromise systems or data." },
  { name: "Man-in-the-Middle", Icon: ArrowRightLeft, description: "A third party secretly intercepts communication between two parties, often over unsecured networks." },
  { name: "Social Engineering", Icon: MessagesSquare, description: "Manipulating people psychologically into divulging information or granting access, without any technical exploit." },
];

const emailExamples = [
  { sender: "fjones@corpo.com", message: "\"Please enable two factor authentication here:\"", action: "REPLY" },
  { sender: "fjones@corpol.com", message: "\"Please enable two factor authentication here:\"", action: "REPORT" },
  { sender: "fjones@corpo.com", message: "\"Please send me your account details.\"", action: "REPORT" },
];

const levels = [
  { level: "Day 1", mechanics: "Email System" },
  { level: "Day 2", mechanics: "Email System, Machine Maintenance, Compose Emails" },
  { level: "Day 3", mechanics: "Email System, Machine Maintenance, Compose Emails, Passcode Scanner, Wi-Fi Connection" },
  { level: "Day 4", mechanics: "All of the above" },
];

const headlineStats: Stat[] = [
  { to: 34, suffix: "%", label: "average increase in cybersecurity knowledge" },
  { to: 76, suffix: "%", label: "improvement in threat recognition" },
  { to: 100, suffix: "%", label: "preferred this method of learning" },
  { to: 7.67, decimals: 2, suffix: "/10", label: "average engagement rating" },
];

export default function CybersecurityProject() {
  return (
    <CaseStudyLayout
      title="Workday for a Weekday"
      subtitle="Cybersecurity Training and Awareness"
      toc={toc}
      stats={headlineStats}
      facts={[
        { label: "Technologies Used", value: <TechList items={["C#", ".NET", "Unity", "Excel"]} />, wide: true },
        { label: "Development Time", value: "6 months" },
        { label: "Project Status", value: "Completed" },
        {
          label: "Repository",
          wide: true,
          value: (
            <a
              href="https://github.com/ToluOlas/Cyber-Security-RPG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
              View on GitHub
            </a>
          ),
        },
      ]}
      media={
        <div className="relative aspect-video overflow-hidden rounded-xl border border-blue-100 dark:border-blue-900">
          <iframe
            src="https://www.youtube.com/embed/Xh33VmkGBc8?start=25"
            title="Workday for a Weekday - Gameplay Footage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      }
    >
      {/* ============ 01 Overview ============ */}
      <Section id="overview" index="01" label="Overview" title="Project Overview">
        <Prose>
          <p className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
            Most people know cybersecurity matters. Most people still get phished.
          </p>
          <p>
            The problem isn&apos;t a lack of information: it&apos;s that traditional training doesn&apos;t stick. Campaigns inform. Courses certify. Neither creates the kind of practical, memorable experience that actually changes behaviour. At least that&apos;s what 85% of companies believe despite spending so much money yearly to train their employees not to click on a link for a free holiday, or leave their computer open and unmanned when going on break. And you can&apos;t exactly let someone experience a real data breach for the sake of a lesson.
          </p>
          <p className="border-l-2 border-highlight pl-4 font-medium text-foreground">That gap is what this project set out to close.</p>
          <p>
            Workday for a Weekday is a 2D RPG built in Unity, designed to teach cybersecurity awareness through scenario based gameplay rather than plain information recital. Players step into the role of Steve, a new hire at Corpo, a company quietly falling apart from the inside, where colleagues sabotage each other, management is negligent, and every workday brings a new wave of cyber threats to navigate.
          </p>
          <p>
            The game covers phishing, social engineering, spoofing, insider threats, brute force attacks, and man-in-the-middle attacks. Not just as topics to memorise; the game itself is built around them mechanically and narratively.
            A live email inbox where players must distinguish legitimate messages from deceptive ones, a passcode scanner that penalises weak passwords in real time, a deteriorating Wi-Fi connection that mirrors unsecured network risks, and roaming NPCs who will exploit an unlocked computer the moment you even THINK of stepping out of your cubicle to do anything else. All of these will train you to use the knowledge you&apos;re being given at each level.
          </p>
          <p>
            <strong className="text-foreground">The results backed it up.</strong>{" "}
            After playing, participants showed a 34% average increase in cybersecurity knowledge, a 76% improvement in threat recognition, and perhaps most tellingly, 100% said they preferred this method of learning over reading, lectures, seminars, and video content. Even participants who already had formal cybersecurity training.
          </p>
        </Prose>
      </Section>

      {/* ============ 02 The Problem ============ */}
      <Section id="the-problem" index="02" label="Problem" title="The Problem">
        <Prose>
          <p>
            Cybersecurity is one of those topics everyone agrees matters... and almost nobody engages with voluntarily. The threat landscape is expanding constantly, with new users, new platforms, and new attack methods emerging every day. And yet, despite years of awareness campaigns and training programs, human error remains the leading cause of most data breaches, both personally and professionally.
          </p>
        </Prose>

        <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
          <Prose>
            <p>
              Most cybersecurity education; be it a campaign poster, an online course, or a workplace training module, is almost entirely focused on just informing. It tells you what phishing is. It explains what a strong password looks like. But information without the practical experience of applying it under pressure, rarely changes behaviour. You can know exactly what a phishing email looks like and still click the wrong link on a busy Tuesday morning.
            </p>
            <p>
              Second, cybersecurity is uniquely difficult to practice. Unlike learning to drive, where the consequences of mistakes are immediate and real, you can&apos;t safely put someone in front of a genuine cyber threat just to teach them a lesson. That gap between knowing and doing is where most training falls short.
            </p>
          </Prose>
          <Figure
            src="/fortinet2023.png"
            alt="Fortinet 2023 cybersecurity report"
            caption={"\"Fortinet 2023 Security Awareness and Training Global Research Brief\" (Fortinet, 2023)"}
          />
        </div>

        <Callout icon={Lightbulb} title="Did you know?" className="mt-8 max-w-3xl">
          <ul className={UL}>
            <li>85% of organisations have a cybersecurity training program in place, yet <strong className="text-foreground">almost 60%</strong> of business leaders believe their employees still lack cybersecurity awareness.</li>
            <li>Phishing, malware, and password attacks remain the most common methods used by attackers, all of which target human habits rather than technical vulnerabilities.</li>
            <li>Research shows that cramming information to pass a certification test actively harms long-term knowledge retention (who could have guessed).</li>
          </ul>
        </Callout>

        <Prose className="mt-6">
          <p>
            So what is being done about this? Awareness campaigns do a decent job of simplifying information. Posters, videos, short form content; they can be catchy, but they struggle to make the information feel relevant or urgent to the average person. Training courses go deeper, but they&apos;re dependent on the learner&apos;s motivation, and when the goal is a certificate rather than genuine understanding, the knowledge rarely sticks.
          </p>
        </Prose>

        <blockquote className="my-10 max-w-3xl border-l-4 border-highlight pl-5 sm:pl-6">
          <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
            “Effective influencing requires more than simply informing people about what they should and
            should not do: they need, first of all, to accept that the information is relevant, secondly,
            understand how they ought to respond, and thirdly, be willing to do this in the face of many
            other demands”
          </p>
          <footer className="mt-3 text-sm text-muted-foreground">- (Bada, Sasse and Nurse, 2019).</footer>
        </blockquote>

        <h3 className={H3}>The Role of Serious Games</h3>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <Figure src="/vital signs.jpg" alt="Vital Signs: ED simulation game screenshot" caption={"Screenshot from \"Vital Signs: ED\" by BreakawayGames"} />
          <Callout icon={BookOpen} title="Serious Games">
            <p className="italic">
              &quot;Digital games or simulations designed with a primary purpose beyond pure entertainment, focusing instead on education, training, healthcare, marketing, or behavioural change.&quot;
            </p>
          </Callout>
        </div>

        <Prose className="mt-6">
          <p>
            So why a simulation game? Games are not new to the field of education and training. Your first thought might be those simple numbers games that kids might play on a tablet, but serious games stand tall in even some of the most stressful, high-level work environments you can think of. Take Vital Signs: ED, a simulation game built around working in a hospital emergency department. It mimics a real high-stakes situation, giving players a risk-free environment to build instincts that transfer directly to real practice. Studies have shown it measurably improves the real-world performance of professionals, including surgeons, in genuine medical situations.
          </p>
          <p>
            Here we see the core idea: Creating an experience that can simulate something in the real world. This is where both cybersecurity campaigns and training often falls short, both solely aim to try and relay important information without giving that information any practically or immediate usage that would attribute value to it. When we learn to drive, information is constantly put into practice as we try to safely operate a vehicle that is both carrying us to our destination and protecting us from all the other high speed metal wagons on the road. I&apos;m sure that the fastest way to deeply ingrain the important of cybersecurity into somebody is allowing them to get hacked and lose all their assets, but we both know why that is not sustainable.
          </p>
          <p>
            Serious games are not perfect though, most of them almost never escape the room they were built for. They tend to live exclusively in formal settings; used by organisations already convinced of their value, and rarely by anyone else. No distribution in commercial game stores, no replay value, no reason to return once the training is done. Compare that to something like <em>Wii Fit™</em>, a game built around fitness that found a massive audience far beyond the gym, simply because Nintendo remembered it also had to be fun. If a serious game is going to reach people who aren&apos;t already looking for it, it has to earn their attention as a game first, and teach them second. This is where I introduce you to my solution...
          </p>
        </Prose>
      </Section>

      {/* ============ 03 Design Decisions ============ */}
      <Section id="design-decisions" index="03" label="Design" title="Design Decisions">
        <div className="grid items-center gap-6 sm:grid-cols-[140px_1fr]">
          <Figure
            src="/steve.png"
            alt="Steve character sprite"
            caption={"Screenshot from \"Workday for a Weekday\" by yours truly."}
            className="mx-auto w-32 sm:w-full"
          />
          <Callout icon={Lightbulb} title="Did you know?">
            <p>
              The United Kingdom has the highest proportion of people named Steve of any country in the world, roughly 0.55% of the population. That&apos;s approximately 368,000 Steves currently living in Britain.
            </p>
          </Callout>
        </div>

        <Prose className="mt-6">
          <p className="font-display text-xl font-medium text-foreground">...meet Steve.</p>
          <p>
            Steve is a new hire at Corpo, a company that on the surface, looks like any other office job. But underneath, it&apos;s a workplace quietly tearing itself apart. Employees sabotage each other to get ahead, management turns a blind eye to everything, and every single workday brings a fresh wave of cyber threats that Steve has to navigate just to keep his job. Players step into his shoes and experience a week at Corpo, with each day introducing new challenges, new mechanics inspired by real cyber threats, and a story that gets progressively harder to ignore as it directly impacts gameplay.
          </p>
          <p>
            The workplace setting puts the player in exactly the kind of environment where cybersecurity threats reside, and where the consequences of poor decisions are felt the most. The narrative is purposefully on the nose, as it sets up a setting that will bombard the player with situations where cybersecurity is at risk, and reinforce the best preventative measures.
          </p>
        </Prose>

        {/* Threats */}
        <h3 className={H3}>Identifying Common Threats</h3>
        <Prose>
          <p>
            Before any mechanics were designed, the scope of what the game needed to teach had to be defined. The goal was to identify the specific attacks and human errors most responsible for real-world breaches, and use those as the foundation for the game&apos;s design. Research into industry reports and existing training programs pointed to a consistent set of threats:
          </p>
        </Prose>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {threats.map(({ name, Icon, description }) => (
            <li key={name} className={cn(CARD, "flex gap-3 p-4")}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{name}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-foreground/70">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <Prose className="mt-6">
          <p>
            A notable observation during this stage was how much overlap exists between these threats. Phishing frequently delivers malware. Spoofing is often used in conjunction with social engineering. Weak passwords make brute force attacks significantly easier. Where threats naturally connected, the design grouped them together, which also informed how mechanics were structured and layered.
          </p>
        </Prose>

        {/* Mechanics */}
        <h3 className={H3}>From Threat to Game Mechanic</h3>
        <Prose>
          <p>
            With the threat landscape defined, each one needed to be translated into a gameplay mechanic that players could actively experience. The following outlines each mechanic, the threat it was designed to represent, and what behaviour it was intended to train.
          </p>
        </Prose>

        <Tabs defaultValue="email" className="mt-6">
          <TabsList className={cn(TAB_LIST, "grid-cols-2 sm:grid-cols-4")}>
            <TabsTrigger value="email" className={TAB_TRIGGER}>Email</TabsTrigger>
            <TabsTrigger value="office" className={TAB_TRIGGER}>Office &amp; NPCs</TabsTrigger>
            <TabsTrigger value="passcode" className={TAB_TRIGGER}>Passcode Scanner</TabsTrigger>
            <TabsTrigger value="wifi" className={TAB_TRIGGER}>Wi-Fi</TabsTrigger>
          </TabsList>

          <TabsContent value="email" forceMount className={TAB_PANEL}>
            <h4 className={H4}>The Email System: Phishing, Spoofing &amp; Social Engineering</h4>
            <div className="grid items-start gap-6 md:grid-cols-2">
              <Figure src="/email screen screenshot.png" alt="Screenshot of the computer UI in Unity, displaying the email screen" caption="Screenshot of the computer UI in Unity, displaying the email screen" />
              <Prose>
                <p>
                  The email system is the core gameplay mechanic. Each level, the player receives a set number of emails that must be cleared from the inbox within the time limit. Emails are a mix of legitimate company correspondence and malicious ones, and the player must respond to each with one of two options: Reply or Report.
                </p>
              </Prose>
            </div>
            <Prose className="mt-6">
              <p>
                Identifying the correct response requires attention to detail. Legitimate company emails use the @corpo.com domain. Spoofed emails use near identical variations of the domain. Some emails originate from real employees but contain malicious content or requests, while others may appear suspicious but are genuine. This diversity trains players to assess the full context of a message rather than rely on surface level info.
              </p>
            </Prose>
            <div className="mt-5 grid gap-3 sm:grid-cols-3" role="table" aria-label="Example emails">
              <div role="row" className="sr-only">
                <span role="columnheader">Sender</span>
                <span role="columnheader">Email Message</span>
                <span role="columnheader">Correct Action</span>
              </div>
              {emailExamples.map((e, i) => (
                <div key={i} role="row" className={cn(CARD, "flex flex-col gap-2 p-4")}>
                  <span role="cell" className="font-mono text-xs text-muted-foreground">{e.sender}</span>
                  <span role="cell" className="flex-1 text-sm text-foreground/80">{e.message}</span>
                  <span
                    role="cell"
                    className={cn(
                      "self-start rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      e.action === "REPLY"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                    )}
                  >
                    {e.action}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
              <Prose>
                <p>
                  Certain emails trigger an additional compose-email minigame, where the player must select the correct recipient and attach the correct file before sending. Selecting either field incorrectly results in a point deduction, representing the real-world risk of misdirected sensitive information.
                </p>
              </Prose>
              <Figure src="/reply screen screenshot.png" alt="Compose-email reply screen UI in Unity" caption="Compose-email reply screen UI in Unity" />
            </div>
          </TabsContent>

          <TabsContent value="office" forceMount className={TAB_PANEL}>
            <h4 className={H4}>The Office &amp; NPC System: Insider Threats</h4>
            <div className="grid items-start gap-6 md:grid-cols-2">
              <Figure src="/npc random movement screenshot.png" alt="NPCs walking around the office randomly along the grid in Unity" caption="NPCs walking around the office randomly along the grid in Unity" />
              <Prose>
                <p>
                  Insider threats and physical security risks were represented through the office environment. NPCs move around the office throughout each level following a grid-based movement system. If the player leaves their desk without logging out of their computer, there is a chance that a passing NPC will tamper with it, resulting in a point deduction. This mechanic directly represents the risk of leaving a device unlocked and unattended in a shared workspace.
                </p>
              </Prose>
            </div>
            <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
              <Prose>
                <p>
                  To create situations where the player must leave their desk, a machine maintenance minigame was implemented. Devices around the office break at random intervals, and leaving them broken for too long also results in a point deduction. This creates a recurring conflict between staying at the computer to manage emails and moving around the office to maintain equipment, while ensuring the screen remains locked when unattended.
                </p>
              </Prose>
              <Figure src="/machine locations upscale.png" alt="Office marked with machine locations that must be fixed if broken" caption="Office marked with machine locations that must be fixed if broken" />
            </div>
          </TabsContent>

          <TabsContent value="passcode" forceMount className={TAB_PANEL}>
            <h4 className={H4}>The Passcode Scanner: Brute Force &amp; Weak Passwords</h4>
            <div className="grid items-start gap-6 md:grid-cols-2">
              <Figure src="/passcode scanner mockup.png" alt="Passcode Scanner Mock-Up" caption="Passcode Scanner Mock-Up" />
              <Prose>
                <p>
                  The passcode scanner is triggered by specific emails and requires the player to leave their desk and interact with a physical scanner object in the office. The player creates a passcode using a grid of coloured symbols (circles, diamonds, and hearts in red, blue, and green) to begin a document scan.
                </p>
              </Prose>
            </div>
            <div className="mt-6 grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <Prose>
                <p>
                  The scan takes approximately 15 seconds to complete, during which the player is expected to return to other tasks. Once complete, the player must re-enter the same passcode from memory within three attempts.
                </p>
                <p>
                  The passcode is evaluated against four criteria: length, colour diversity, shape diversity, and whether it forms a simple repeating sequence. A passcode that fails any of these criteria results in a point deduction, regardless of whether it was recalled correctly. This is designed to reinforce the understanding that a memorable but weak password offers little real protection.
                </p>
              </Prose>
              <Figure
                src="/passcode examples.jpg"
                alt="Examples of good and bad passcodes"
                caption="Examples of good and bad passcodes"
                imgClassName="max-h-72 w-auto"
              />
            </div>
          </TabsContent>

          <TabsContent value="wifi" forceMount className={TAB_PANEL}>
            <h4 className={H4}>The Wi-Fi System: Man-in-the-Middle Attacks</h4>
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <Prose>
                <p>
                  The Wi-Fi mechanic runs automatically in the background from the start of the level. The company network connection degrades gradually over time, moving between connection strength states. If the connection is poor enough, the player is automatically switched to an unsecured street network, at which point points begin to deplete for as long as the unsecured connection remains active.
                </p>
                <p>
                  The player can monitor connection strength through the settings screen and troubleshoot it before it drops, or reconnect after a dropout. Both actions consume time. The mechanic is intended to build awareness of network security as an ongoing responsibility rather than a one-time action.
                </p>
              </Prose>
              <Figure
                src="/WiFi connections and their statuses.png"
                alt="Wi-Fi connections and their statuses"
                caption="Wi-Fi connections and their statuses"
                imgClassName="max-h-72 w-auto"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Story */}
        <h3 className={H3}>The story layer</h3>
        <Prose>
          <p>
            The game&apos;s story was designed to contextualise the mechanics and give players a reason to engage with the cybersecurity content beyond the gameplay alone. Each mechanic is introduced through character dialogue, which also advances the plot and establishes why each threat matters in the context of Steve&apos;s situation.
          </p>
          <p>
            Four characters carry the narrative: Steve, the player character; Mark, the negligent manager whose behaviour enables a hostile work environment; Fred, Steve&apos;s line manager who introduces new mechanics and offers guidance; and Q, a mysterious figure outside the Corpo building who provides background on the threats Steve will face each day.
          </p>
        </Prose>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Figure src="/exampledialogue1.png" alt="Dialogue Example 1" caption="Dialogue Example 1" />
          <Figure src="/exampledialogue2.png" alt="Dialogue Example 2" caption="Dialogue Example 2" />
        </div>
        <Prose className="mt-6">
          <p>Mechanics are introduced progressively across each level, with each day adding new systems:</p>
        </Prose>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Mechanics included per level">
          {levels.map((l, i) => (
            <li key={l.level} className={cn(CARD, "relative p-4")}>
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-highlight text-xs text-highlight-foreground">{i + 1}</span>
                {l.level}
              </p>
              <p className="text-sm leading-relaxed text-foreground/70">{l.mechanics}</p>
            </li>
          ))}
        </ol>
        <Prose className="mt-6">
          <p>
            This gradual introduction avoids overwhelming players before they develop familiarity with each individual system. Introducing them one at a time allowed each mechanic to be understood and practised before the next was added.
          </p>
        </Prose>

        {/* Visual style */}
        <h3 className={H3}>Visual style</h3>
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <Prose>
            <p>
              The game uses a pixelated 2D top-down perspective, built in Unity using open-source tilesets assembled in Tiled, a 2D map editor that exports directly into Unity. The visual style was chosen primarily for its clarity. A top-down office environment is immediately readable, character movement is easy to follow, and the aesthetic keeps the focus on the gameplay systems rather than the visuals. The overall look was loosely inspired by late-2000s top-down RPGs, particularly the overworld style of the early Pokémon series.
            </p>
          </Prose>
          <Figure
            src="/pokemon DP screenshot.png"
            alt="Screenshot of Pokémon Diamond and Pearl, the visual reference"
            caption="Pokémon Diamond and Pearl"
            imgClassName="max-h-64 w-auto"
          />
        </div>
      </Section>

      {/* ============ 04 Implementation ============ */}
      <Section id="the-implementation" index="04" label="Build" title="The Implementation">
        <Prose>
          <p>
            The game was built in Unity 2D using C#, with maps designed in Tiled and imported directly into Unity. This section covers the implementation of the core systems, the technical decisions made during development, and some of the more interesting problems that came up along the way.
          </p>
        </Prose>

        <div className="mt-8 space-y-3">
          {/* Email system */}
          <Panel n="4.1" title="The Email System" defaultOpen>
            <div className="grid items-start gap-6 md:grid-cols-[1fr_240px]">
              <Prose>
                <p>
                  The email system is built around two classes: <code>email</code> and <code>emailManager</code>. The <code>email</code> class acts as a data container, storing everything needed to define and display a single email within the game. Each email object holds:
                </p>
                <ul className={UL}>
                  <li><code>emailTopic</code>, <code>emailSender</code>, <code>emailRecipients</code>, and <code>emailMessage</code> for display purposes</li>
                  <li>Two reply options, each with an assigned integer result value on a scale of 1 to 4, plus a separate <code>reportResult</code> for the Report action</li>
                  <li>An <code>emailType</code> string classifying the email as safe, malicious, phishing, or spoofing</li>
                  <li>An <code>isMinigame</code> boolean and <code>minigameType</code> string for emails that trigger additional mechanics</li>
                </ul>
                <p>
                  Compose-email objects extend this with additional fields: three recipient options, three attachment options, and integer values identifying the correct choice for each. Everything a compose-email needs to function is self-contained within the object itself.
                </p>
              </Prose>
              <Figure src="/emailclass screenshot.png" alt="Part of the email class" caption="Part of the email class" className="mx-auto w-full max-w-xs" />
            </div>
            <Prose className="mt-6">
              <p>
                The <code>emailManager</code> holds all emails for a given level in a list called <code>emailQueue</code> and manages the UI that displays them. When <code>updateInbox()</code> is called, if fewer than five emails remain in the queue, blank email objects are temporarily added to bring the count up to five, all five preview button slots are updated from the list, and the blanks are then removed. This keeps the UI consistently populated without requiring separate logic for partially filled inboxes.
              </p>
            </Prose>
            <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
              <Figure src="/email object in CSharp.jpg" alt="Email object in C# called to game UI" caption={<><code>email</code> object in C# called to game UI</>} />
              <Figure src="/parts of updateInbox in CSharp.jpg" alt="Parts of the updateInbox method in emailManager" caption={<>Parts of the <code>updateInbox</code> method in emailManager</>} />
            </div>
            <Prose className="mt-6">
              <p>
                When the player selects an email, <code>currentEmail</code> is updated to track which slot is active. This is a 1-indexed value while <code>emailQueue</code> is 0-indexed, so <code>removeEmail()</code> compensates by using <code>currentEmail - 1</code> when calling <code>RemoveAt()</code>. Getting this offset wrong would consistently remove the wrong email from the queue, so maintaining that synchronisation across every interaction (clicking an email, answering it, closing the computer mid-level) was the central challenge of this system.
              </p>
              <p>
                When the player responds to an email, the result value for the chosen option is passed to the <code>scoreManager</code>, which handles point allocation. Emails flagged as minigames open a secondary screen upon a correct reply. Compose-email types require the player to select the correct recipient and attachment before sending, with each field evaluated independently by the <code>scoreManager</code>.
              </p>
            </Prose>
            <Figure src="/reply screen screenshot.png" alt="Compose-email reply screen UI in Unity" caption="Compose-email reply screen UI in Unity" className="mx-auto mt-6 max-w-xl" />
          </Panel>

          {/* NPC & office */}
          <Panel n="4.2" title="The NPC & Office System">
            <Prose>
              <p>
                The office environment uses two types of NPC: regular NPCs, which appear in outdoor scenes and move randomly within a defined zone, and office NPCs, which follow a grid-based movement system inside the main office area.
              </p>
              <p>
                Office NPCs spawn at the start of each level and navigate the office using a network of nodes. When an NPC reaches a node, the node&apos;s <code>switchDirection</code> method evaluates which directions are enabled for that position and randomly selects one. If no directions are enabled, the NPC stops. This produces varied movement paths across the office without every route needing to be manually scripted.
              </p>
            </Prose>
            <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
              <Figure src="/npcmovementdraft.png" alt="Movement pattern for NPCs in the office" caption="Movement pattern for NPCs in the office" />
              <Figure src="/nodefunctionality.png" alt="switchDirection method on each node in the grid" caption={<><code>switchDirection</code> method on each node in the grid</>} />
            </div>
            <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
              <Prose>
                <p>
                  The security mechanic is handled by a trigger zone around the player&apos;s cubicle, managed by the <code>playerOfficeCheck</code> script. This zone tracks two things independently: whether the player is inside it, and whether any NPCs are inside it. If an NPC enters the zone while the player is absent and the computer is still logged in, <code>Random.Range(0, 2)</code> is called; a result of 1 triggers <code>vulnerablePC()</code> on the <code>scoreManager</code>, deducting points. The 50% chance reflects the unpredictable nature of insider threats rather than making the penalty feel automatic or unfair.
                </p>
              </Prose>
              <Figure src="/officeCheckerScript.png" alt="TriggerEnter and TriggerExit scripts for the playerOfficeCheck script" caption={<>TriggerEnter and TriggerExit scripts for the <code>playerOfficeCheck</code> script</>} />
            </div>
            <Prose className="mt-6">
              <p>
                Devices around the office are assigned a random chance to break at set intervals, managed by the game manager. The player fixes them by walking to the device and interacting with it, which triggers a repair method and removes the broken status marker from both the HUD and the map.
              </p>
            </Prose>
          </Panel>

          {/* Passcode scanner */}
          <Panel n="4.3" title="The Passcode Scanner">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <Prose>
                <p>
                  The passcode scanner is a self-contained minigame triggered by emails with a <code>minigameType</code> of <code>&quot;password&quot;</code>. The player must leave their desk and interact with a physical scanner object in the office to begin.
                </p>
                <p>
                  The player creates a passcode by selecting from a grid of nine coloured symbols — circles, diamonds, and hearts in red, blue, and green. Each symbol maps to an integer value from 1 to 9, and the entered passcode is stored as a list of integers. A switch statement in <code>scannerController</code> handles both adding each symbol&apos;s value to the list and placing the correct symbol graphic in the correct position on the UI.
                </p>
              </Prose>
              <Figure src="/scanner object and UI screenshot.jpg" alt="Symbol values and switch statement in scannerController" caption="Scanner object and scanner UI" />
            </div>
            <Prose className="mt-6">
              <p>
                Once the passcode is set, scanning begins and takes approximately 15 seconds to complete. The player is expected to return to other tasks during this time. When the scan finishes, the player must re-enter the passcode from memory within three attempts.
              </p>
              <p>The passcode is evaluated against four criteria by the <code>passwordMinigame</code> class:</p>
            </Prose>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Length:", body: <>the passcode must be longer than three symbols</> },
                { title: "Colour diversity:", body: <>symbols are grouped by colour (Red: 1,2,3 / Blue: 4,5,6 / Green: 7,8,9) and more than one colour group must be present</> },
                { title: "Shape diversity:", body: <>symbols are grouped by shape (Circle: 1,4,7 / Diamond: 2,5,8 / Heart: 3,6,9) and more than one shape group must be present</> },
                { title: "Simple sequence check:", body: <>the <code>isSimpleSequence</code> method iterates through the list and returns true if every value increments by exactly 1, flagging predictable patterns as weak</> },
              ].map((c) => (
                <li key={c.title} className={cn(CARD, "p-4 text-sm leading-relaxed text-foreground/80")}>
                  <strong className="text-foreground">{c.title}</strong> {c.body}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
              <Figure src="/For loop for colourCount.png" alt="For loop for the colourCount method in passwordMinigame" caption={<>For loop for the <code>colourCount</code> method in <code>passwordMinigame</code></>} />
              <Figure src="/isSimpleSequence.png" alt="isSimpleSequence method in passwordMinigame" caption={<><code>isSimpleSequence</code> method in <code>passwordMinigame</code></>} />
            </div>
            <Prose className="mt-6">
              <p>
                Each criterion that fails is reported to the <code>scoreManager</code> independently, meaning a passcode can lose points for being short, lacking diversity, and being a simple sequence all at once. This was a deliberate design decision, as it reinforces that password strength is not a single property but a combination of several habits applied together.
              </p>
            </Prose>
          </Panel>

          {/* Game & level management */}
          <Panel n="4.4" title="Game & Level Management">
            <div className="grid items-start gap-6 md:grid-cols-[1fr_280px]">
              <Prose>
                <p>
                  The <code>gameManager</code> is the central script that controls the state of the game. It coordinates the start and end conditions of each level and acts as the point of communication between all other major systems.
                </p>
                <p>When a level begins, the <code>gameManager</code> triggers three things simultaneously:</p>
                <ul className={UL}>
                  <li>The <code>countdownTimer</code> starts counting down</li>
                  <li>The <code>NPCSpawner</code> begins populating the office with NPCs</li>
                  <li>The <code>connectionStatus</code> script starts the Wi-Fi degradation cycle</li>
                </ul>
                <p>
                  When the <code>emailQueue</code> reaches zero, the <code>emailManager</code> signals the <code>gameManager</code> to call the win sequence. The <code>gameManager</code> also monitors the <code>scoreManager</code> continuously. If the player accumulates too many high-severity mistakes, the loss sequence is triggered before the timer expires.
                </p>
              </Prose>
              <Figure src="/gameplay activity diagram.png" alt="Gameplay Activity Diagram" caption="Gameplay Activity Diagram" className="mx-auto w-full max-w-sm" />
            </div>
            <div className="mt-6 grid items-center gap-6 md:grid-cols-[220px_1fr]">
              <Figure src="/timer function.png" alt="Timer countdown functionality from the timer script" caption="Timer countdown functionality from the timer script" className="mx-auto w-full max-w-xs" />
              <Prose>
                <p>
                  The <code>countdownTimer</code> script holds a <code>timeLeft</code> float that decrements every frame while <code>timerOn</code> is true. When <code>timeLeft</code> reaches zero, it calls <code>endGameLoss()</code> on the <code>gameManager</code> directly. During development, a unit test revealed that this call was missing; the timer was reaching zero and stopping without triggering the loss sequence. This was identified and resolved promptly.
                </p>
              </Prose>
            </div>
            <Prose className="mt-6">
              <p>
                The Wi-Fi system runs on a separate <code>connectionStatus</code> script that manages a <code>connectVal</code> integer ranging from 5 to 0. At set intervals, <code>wifiShift()</code> is called, which uses <code>Random.Range(0, 100)</code> and a switch statement on the current <code>connectVal</code> to determine whether the connection goes up, stays the same, or goes down. The probability of degradation increases as <code>connectVal</code> decreases: at a value of 5 the connection always drops by one, while at higher values there is a chance it holds or recovers. At zero, the player is moved onto an unsecured network and the <code>scoreManager</code> begins applying a continuous point deduction until the connection is restored.
              </p>
            </Prose>
            <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
              <Figure src="/wifishift in systemStatus.png" alt="Part of the wifiShift method in the systemStatus class" caption={<>Part of the <code>wifiShift</code> method in the <code>systemStatus</code> class</>} />
              <Figure src="/WiFi connections and their statuses.png" alt="Settings UI at connection values 3 to 0" caption="Settings UI at connection values 3 to 0" />
            </div>
            <Prose className="mt-6">
              <p>
                Unit testing was the main method used to validate each system as it was implemented. Testing individual components in isolation allowed issues to be identified and fixed early. The game manager unit tests in particular surfaced some synchronisation issues, which I resolved before moving on.
              </p>
            </Prose>
          </Panel>
        </div>
      </Section>

      {/* ============ 05 Results ============ */}
      <Section id="results" index="05" label="Results" title="Results & Evaluation">
        <Tabs defaultValue="pre">
          <TabsList className={cn(TAB_LIST, "grid-cols-2 sm:max-w-md")}>
            <TabsTrigger value="pre" className={TAB_TRIGGER}>Pre-Game Findings</TabsTrigger>
            <TabsTrigger value="post" className={TAB_TRIGGER}>Post-Game Findings</TabsTrigger>
          </TabsList>

          <TabsContent value="pre" forceMount className={TAB_PANEL}>
            <h3 className="sr-only">Pre-Game Findings</h3>
            <Prose>
              <p>
                Before playing, participants completed a survey measuring their existing cybersecurity knowledge, habits, and attitudes. Key findings:
              </p>
            </Prose>

            <div className="mt-8 grid items-center gap-6 md:grid-cols-2">
              <div>
                <h4 className={H4}>Knowledge &amp; Confidence</h4>
                <ul className={cn(UL, "text-foreground/80")}>
                  <li>Participants rated their overall cybersecurity knowledge as moderate on average, somewhere between complete beginners and confident experts</li>
                  <li>Threat recognition confidence was slightly higher than general knowledge, but most participants only rated themselves slightly above average</li>
                  <li>Phishing was the most widely recognised threat, with malware and ransomware close behind, while network-based threats like Man-in-the-Middle and Wi-Fi eavesdropping were far less recognised</li>
                  <li>Only around 50% of participants felt confident recognising social engineering attempts</li>
                </ul>
              </div>
              <Figure src="/Threat recognition results Bar Chart.png" alt="Threat recognition results Bar Chart" caption="Threat recognition results" />
            </div>

            <h4 className={cn(H4, "mt-10")}>Habits</h4>
            <ul className={cn(UL, "max-w-3xl text-foreground/80")}>
              <li>Only 17% of participants updated software immediately when prompted; 50% waited for reminders and 33% left it until automatic updates kicked in</li>
              <li>Only around 33% of participants used completely different passwords across all their accounts, with 17% admitting to using the same password everywhere</li>
            </ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Figure src="/Install updates question Pie Chart.png" alt="Install updates question Pie Chart" caption="Install updates question" />
              <Figure src="/Password habits Pie Chart.png" alt="Password habits Pie Chart" caption="Password habits" />
            </div>

            <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
              <Figure src="/Cybersecurity learning willingness Pie Chart.png" alt="Figure 50: Cybersecurity learning willingness Pie Chart" caption="Cybersecurity learning willingness" />
              <div>
                <h4 className={H4}>Attitudes</h4>
                <ul className={cn(UL, "text-foreground/80")}>
                  <li>Participants almost unanimously rated cybersecurity as highly important in their daily lives, with an average importance rating of 4.5 out of 5</li>
                  <li>Despite this, 50% said they were outright unlikely to engage with cybersecurity learning material outside of mandatory settings</li>
                  <li>Only 17% said they were very likely to do so voluntarily</li>
                </ul>
              </div>
            </div>
            <Callout icon={Lightbulb} title="Takeaway" className="mt-8 max-w-3xl">
              <p>
                These results established a clear picture going in: participants understood that cybersecurity mattered, but their habits didn&apos;t reflect that, and their appetite for engaging with the topic on their own terms was low.
              </p>
            </Callout>
          </TabsContent>

          <TabsContent value="post" forceMount className={TAB_PANEL}>
            <h3 className="sr-only">Post-Game Findings</h3>
            <div className="grid items-start gap-6 md:grid-cols-2">
              <div>
                <h4 className={H4}>Knowledge &amp; Threat Recognition</h4>
                <ul className={cn(UL, "text-foreground/80")}>
                  <li>Overall self-rated cybersecurity knowledge increased by approximately 33% on average after playing</li>
                  <li>The largest improvements came from participants who rated themselves lower before playing, while more experienced participants saw little to no change in their knowledge ratings</li>
                  <li>Despite this split, every single participant felt more confident identifying at least one type of cyber threat after playing</li>
                  <li>Social engineering saw the greatest improvement in recognition, with nearly every participant selecting it as a threat they could now better identify</li>
                  <li>Understanding of who poses a cybersecurity threat saw the most significant improvement of any survey question. Recognition of employees, managers, and trusted individuals as potential threats improved dramatically compared to pre-game responses</li>
                </ul>
              </div>
              <Figure src="/Threat Identification comparison Bar Chart.png" alt="Figure 54 — Threat Identification comparison Bar Chart" caption="Threat identification comparison" />
            </div>

            <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
              <Figure src="/Standout Aspect Bar Chart.png" alt="Figure 56 — Standout Aspect Bar Chart" caption="Standout aspect ratings" />
              <div>
                <h4 className={H4}>Engagement</h4>
                <ul className={cn(UL, "text-foreground/80")}>
                  <li>The game received an average engagement rating of 7.67 out of 10</li>
                  <li>Story and dialogue were consistently identified as the standout aspects of the experience</li>
                  <li>Gameplay was a secondary but still notable factor in the high engagement scores</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
              <div>
                <h4 className={H4}>Learning Preference</h4>
                <ul className={cn(UL, "text-foreground/80")}>
                  <li>100% of participants said they preferred this method of learning over the method they had previously identified as their favourite, including reading, lectures, and videos</li>
                  <li>Participants were evenly split between those who would return to a fuller version of the game for learning purposes and those who would return purely for entertainment</li>
                  <li>83% indicated a willingness to pay to access an expanded version of the game</li>
                </ul>
              </div>
              <Figure src="/Learning Method Preference Pie Chart.png" alt="Figure 57 — Learning Method Preference Pie Chart" caption="Learning method preference" />
            </div>
          </TabsContent>
        </Tabs>

        <h3 className={H3}>Evaluation</h3>
        <Prose>
          <p>
            The results highlighted a meaningful distinction between the game&apos;s ability to teach and its ability to train. For participants with less prior knowledge, the game functioned well as an educational tool, introducing concepts through story and reinforcing them through mechanics. For those with more experience, it offered less in terms of new information, but still improved their confidence in recognising specific threats through repeated, pressured exposure to them.
          </p>
          <p>
            The story proved to be the most impactful element overall. The improvement in participants&apos; understanding of who can pose a cybersecurity threat, including people within an organisation, was largely attributed to the narrative rather than any specific mechanic. This supported the core design hypothesis: that embedding cybersecurity concepts in an engaging story makes the information feel more relevant and worth retaining.
          </p>
          <p>
            The weakest area was the negative feedback loop. Losing points or failing a level does not meaningfully replicate the real consequences of a data breach, and participants reflected this in their responses. A more impactful penalty system, one that visibly affected gameplay in ways tied to the specific mistake made, would have strengthened the training aspect of the experience considerably.
          </p>
          <p>
            Overall, the game demonstrated real potential as a complement to existing cybersecurity awareness methods, particularly for audiences who would not voluntarily engage with traditional training material. The unanimous preference for this learning method, even among participants who felt their knowledge hadn&apos;t improved, suggests that the engagement problem this project set out to solve was addressed, even if the depth of information delivered still has room to grow.
          </p>
        </Prose>
      </Section>

      {/* ============ 06 Reflection ============ */}
      <Section id="reflection" index="06" label="Reflection" title="My Reflection">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl rounded-xl border border-l-4 border-highlight/30 border-l-highlight bg-highlight/[0.05] p-5 sm:p-7"
        >
          <Prose>
            <p>
              Going into this project, I underestimated how much work game development actually takes. My experience with both Unity and C# was limited at the start, and that learning curve had a real impact on how much I was able to deliver. As the deadline approached, a significant number of planned features had to be cut: randomised AI-generated emails, additional gameplay environments beyond the main office, a database for tracking player performance across sessions, and a more sophisticated penalty system where mistakes would affect gameplay directly rather than simply deducting points. These cuts were necessary, but they also represent the clearest picture of where the project could grow.
            </p>
            <p>
              In terms of the solution itself, I think the results were honest about both its strengths and its limitations. The game worked well as an awareness tool for those with less prior cybersecurity knowledge, and the story-driven approach to delivering information proved more effective than I initially anticipated. However, it fell short of matching the informative depth of formal training courses for those who had already been through them. In its current state I see it as a complement to existing methods rather than a replacement, filling a gap that campaigns and courses both struggle with: reaching people who wouldn&apos;t seek out the topic on their own terms.
            </p>
            <p>
              There is a lot I would still like to do with this project. Generative AI producing dynamic, randomised emails for each playthrough would give the game genuine replay value and make the phishing detection mechanic considerably harder to game with familiarity. Expanding the gameplay to new environments (a café, a home setting) would introduce network and physical security concepts in a more varied and memorable way. And building out the penalty system so that mistakes have visible, gameplay-affecting consequences would bring the experience closer to the simulation standard that makes serious games genuinely effective as training tools. I had a lot of fun building this, and I have every intention of taking it further.
            </p>
          </Prose>
        </motion.div>
      </Section>
    </CaseStudyLayout>
  );
}
