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
          <h1 className="text-4xl font-bold mb-6">Cybersecurity Training and Awareness</h1>
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://i.imgur.com/P1hNMEP.png"
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
              An educational RPG designed to improve cybersecurity awareness through gamification. The project combines engaging gameplay mechanics with real-world cybersecurity scenarios to create an effective learning experience.
            </p>
            
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