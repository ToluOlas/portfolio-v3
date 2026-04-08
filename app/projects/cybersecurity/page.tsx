"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CybersecurityProject() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" size="sm" className="group border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Workday for a Weekday - Cybersecurity Training and Awareness</h1>
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://i.ibb.co/JjL0jrvJ/cybersecurity-Img.png"
              alt="Cybersecurity Training RPG"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">.NET</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">Excel</span>
              </div>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Development Time</h2>
              <p className="text-muted-foreground">6 months</p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Project Status</h2>
              <p className="text-muted-foreground">Completed</p>
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              Most people know cybersecurity matters. Most people still get phished.
            </p>

            <p className="text-muted-foreground mb-6">
              The problem isn't a lack of information — it's that traditional training doesn't stick. Campaigns inform. Courses certify. Neither creates the kind of practical, memorable experience that actually changes behaviour. At least that's what 85% of companies believe despite spending so much money yearly to train their employees not to click on a link for a free holiday, or leave their computer open and unmanned when going on break. And you can't exactly let someone experience a real data breach for the sake of a lesson.
            </p>

            <p className="text-muted-foreground mb-6">
              That gap is what this project set out to close.
            </p>

            <p className="text-muted-foreground mb-6">
              Workday for a Weekday is a 2D RPG built in Unity, designed to teach cybersecurity awareness through scenario based gameplay rather than plain information recital. Players step into the role of Steve, a new hire at Corpo — a company quietly falling apart from the inside, where colleagues sabotage each other, management is negligent, and every workday brings a new wave of cyber threats to navigate.
            </p>

            <p className="text-muted-foreground mb-6">
              The game covers phishing, social engineering, spoofing, insider threats, brute force attacks, and man-in-the-middle attacks. Not just as topics to memorise; the game itself is built around them mechanically and narratively.
              A live email inbox where players must distinguish legitimate messages from deceptive ones, a passcode scanner that penalises weak passwords in real time, a deteriorating Wi-Fi connection that mirrors unsecured network risks, and roaming NPCs who will exploit an unlocked computer the moment you even THINK of stepping out of your cubicle to do anything else. All of these will train you to use the knowledge you're being given at each level.
            </p>

            <p className="text-muted-foreground mb-6">
              The results backed it up.
              After playing, participants showed a 34% average increase in cybersecurity knowledge, a 76% improvement in threat recognition, and perhaps most tellingly, 100% said they preferred this method of learning over reading, lectures, seminars, and video content. Even participants who already had formal cybersecurity training.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h2 className="text-2xl font-semibold mb-6">So... why?</h2>
            <p className="text-muted-foreground mb-6">
              Cybersecurity is one of those topics everyone agrees matters... and almost nobody engages with voluntarily. The threat landscape is expanding constantly, with new users, new platforms, and new attack methods emerging every day. And yet, despite years of awareness campaigns and training programs, human error remains the leading cause of most data breaches, both personally and professionally.
            </p>
            <div className="flex gap-8 items-center">
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-muted-foreground">
                  Most cybersecurity education; be it a campaign poster, an online course, or a workplace training module — is almost entirely focused on just informing. It tells you what phishing is. It explains what a strong password looks like. But information without the practical experience of applying it under pressure, rarely changes behaviour. You can know exactly what a phishing email looks like and still click the wrong link on a busy Tuesday morning.
                </p>
                <p className="text-muted-foreground">
                  Second, cybersecurity is uniquely difficult to practice. Unlike learning to drive, where the consequences of mistakes are immediate and real, you can't safely put someone in front of a genuine cyber threat just to teach them a lesson. That gap — between knowing and doing — is where most training falls short.
                </p>
              </div>
              <div className="w-1/2 shrink-0">
                <img
                  src="https://i.ibb.co/MJHTJ47/fortinet2023.png"
                  alt="Fortinet 2023 cybersecurity report"
                  className="w-full object-contain"
                />
                <p className="text-xs text-muted-foreground text-center mt-1">"Fortinet 2023 Security Awareness and Training Global Research Brief" (Fortinet, 2023)</p>
              </div>


            </div>

            <div className="mt-8 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h3 className="text-lg font-semibold mb-4">🔍 Did you know?</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>85% of organisations have a cybersecurity training program in place, yet <strong>almost 60%</strong> of business leaders believe their employees still lack cybersecurity awareness.</li>
                <li>Phishing, malware, and password attacks remain the most common methods used by attackers, all of which target human habits rather than technical vulnerabilities.</li>
                <li>Research shows that cramming information to pass a certification test actively harms long-term knowledge retention (who could have guessed).</li>
              </ul>
            </div>

            <p className="text-muted-foreground mt-6">
              So what is being done about this? Awareness campaigns do a decent job of simplifying information. Posters, videos, short form content; they can be catchy, but they struggle to make the information feel relevant or urgent to the average person. Training courses go deeper, but they're dependent on the learner's motivation, and when the goal is a certificate rather than genuine understanding, the knowledge rarely sticks.
            </p>

            <p className="text-muted-foreground mt-8 mb-8 text-center italic text-lg">
              “Effective influencing requires more than simply informing people about what they should and
              should not do: they need, first of all, to accept that the information is relevant, secondly,
              understand how they ought to respond, and thirdly, be willing to do this in the face of many
              other demands” - (Bada, Sasse and Nurse, 2019).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">The Role of Serious Games</h3>

            <img
              src="https://i.ibb.co/qYgtGS8n/vital-signs.jpg"
              alt="Vital Signs: ED simulation game screenshot"
              className="mx-auto block w-1/2 object-contain rounded-lg"
            />
            <p className="text-xs text-muted-foreground text-center mt-1">Screenshot from "Vital Signs: ED" by BreakawayGames</p>

            <div className="mt-6 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h3 className="text-lg font-semibold mb-3">📋 Serious Games</h3>
              <p className="text-muted-foreground italic">
                "Digital games or simulations designed with a primary purpose beyond pure entertainment, focusing instead on education, training, healthcare, marketing, or behavioural change."
              </p>
            </div>

            <p className="text-muted-foreground mt-6">
              So why a simulation game? Games are not new to the field of education and training. Your first thought might be those simple numbers games that kids might play on a tablet, but serious games stand tall in even some of the most stressful, high-level work environments you can think of. Take Vital Signs: ED — a simulation game built around working in a hospital emergency department. It mimics a real high-stakes situation, giving players a risk-free environment to build instincts that transfer directly to real practice. Studies have shown it measurably improves the real-world performance of professionals, including surgeons, in genuine medical situations.
            </p>

            <p className="text-muted-foreground mt-6">
              Here we see the core idea: Creating an experience that can simulate something in the real world. This is where both cybersecurity campaigns and training often falls short, both solely aim to try and relay important information without giving that information any practically or immediate usage that would attribute value to it. When we learn to drive, information is constantly put into practice as we try to safely operate a vehicle that is both carrying us to our destination and protecting us from all the other high speed metal wagons on the road. I'm sure that the fastest way to deeply ingrain the important of cybersecurity into somebody is allowing them to get hacked and lose all their assets, but we both know why that is not sustainable.
            </p>

            <p className="text-muted-foreground mt-6">
              Serious games are not perfect though, most of them almost never escape the room they were built for. They tend to live exclusively in formal settings; used by organisations already convinced of their value, and rarely by anyone else. No distribution in commercial game stores, no replay value, no reason to return once the training is done. Compare that to something like <em>Wii Fit™</em> — a game built around fitness that found a massive audience far beyond the gym, simply because Nintendo remembered it also had to be fun. If a serious game is going to reach people who aren't already looking for it, it has to earn their attention as a game first, and teach them second. This is where I introduce you to my solution...
            </p>


          </div>

          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Design — Meet the Team</h2>

            <div className="flex gap-8 items-center">
              <div className="w-1/6 shrink-0">
                <img
                  src="https://i.ibb.co/bj2PM1JZ/steve.png"
                  alt="Steve character sprite"
                  className="w-full object-contain rounded-lg"
                />
                <p className="text-xs text-muted-foreground text-center mt-1">Screenshot from "Workday for a Weekday" by yours truly.</p>
              </div>
              <div className="bg-blue-50/50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900 flex-1">
                <h3 className="text-lg font-semibold mb-4">🔍 Did you know?</h3>
                <p className="text-muted-foreground">
                  The United Kingdom has the highest proportion of people named Steve of any country in the world, roughly 0.55% of the population. That's approximately 368,000 Steves currently living in Britain.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mt-6">
              ...meet Steve.
            </p>
            <p className="text-muted-foreground mt-6">
              Steve is a new hire at Corpo — a company that, on the surface, looks like any other office job. But underneath, it's a workplace quietly tearing itself apart. Employees sabotage each other to get ahead, management turns a blind eye to everything, and every single workday brings a fresh wave of cyber threats that Steve has to navigate just to keep his job. Players step into his shoes and experience a week at Corpo, with each day introducing new challenges, new mechanics inspired by real cyber threats, and a story that gets progressively harder to ignore as it directly impacts gameplay.
            </p>
            <p className="text-muted-foreground mt-6">
              The workplace setting puts the player in exactly the kind of environment where cybersecurity threats reside, and where the consequences of poor decisions are felt the most. The narrative is purposefully on the nose, as it sets up a setting that will bombard the player with situations where cybersecurity is at risk, and reinforce the best preventative measures.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Interactive scenario-based learning</li>
              <li>AI controlled characters for dynamic gameplay</li>
              <li>Progress tracking and assessment system</li>
              <li>Gamification of real-world cybersecurity concepts</li>
              <li>Engaging storyline and character progression</li>
              <li>Immediate feedback and learning reinforcement</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Research Findings</h3>
            <p className="text-muted-foreground mb-6">
              The project demonstrated significant improvements in participants' cybersecurity awareness:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>34% increase in overall knowledge</li>
              <li>76% improvement in threat recognition</li>
              <li>8/10 overall user engagement rating</li>
              <li>83% of players expressed potential monetary commitment to further development of game</li>
            </ul>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900">
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Research Phase</h3>
                <p className="text-muted-foreground">
                  Conducted extensive research on the current state of cybersecurity in various businesses, and existing cybersecurity education methods. Analysed existing training programs, awareness campaigns and previously attempted solutions. Identified key areas for improvement and outlined aims and objectives.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Design & Implementation</h3>
                <p className="text-muted-foreground">
                  Wrote a basic narrative for the game that would immerse players into the game before introducing training elements. After this, I designed game mechanics based on cyber threats; including Phishing, Spoofing, Social Engineering and more.
                </p>
                <p></p>
                <p className="text-muted-foreground">
                  Implemented game mechanics in Unity, using OOP principles in C# to create interactions between players, objects, AI controlled characters and other mechanics. Also added dialogue, a scoring system and different levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Testing & Validation</h3>
                <p className="text-muted-foreground">
                  Conducted user testing with various demographic groups. Gathered feedback and iteratively improved the game mechanics and educational content. Upon completion, handpicked playtesters with varying levels of cybersecurity knowledge and experience. Asked players questions both before and after playing a quick demo build.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
