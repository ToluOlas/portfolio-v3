"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PlatformerProject() {
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
          <h1 className="text-4xl font-bold mb-6">2D Action Platformer</h1>
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://i.imgur.com/MANJXcH.png"
              alt="2D Action Platformer"
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
              </div>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Development Time</h2>
              <p className="text-muted-foreground">3 months</p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Project Status</h2>
              <p className="text-muted-foreground">Completed</p>
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              A 2D action platformer game developed in Unity, featuring three distinct levels of increasing difficulty and a final boss battle. The game incorporates progressive skill unlocking, allowing players to gain new abilities as they advance through the levels.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Three unique platforming levels with increasing complexity</li>
              <li>Progressive skill unlocking system</li>
              <li>Various enemy types with different AI behaviors</li>
              <li>Boss battle with multiple attack patterns</li>
              <li>Smooth character controls and animations</li>
              <li>Particle effects and visual feedback</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
            <p className="text-muted-foreground mb-6">
              The development process involved solving various technical challenges, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Implementing precise character controls and collision detection</li>
              <li>Creating a flexible skill system that could be expanded</li>
              <li>Designing and implementing AI behaviors for different enemy types</li>
              <li>Optimizing performance for smooth gameplay</li>
            </ul>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900">
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Planning Phase</h3>
                <p className="text-muted-foreground">
                  Started with detailed game design documentation, including level layouts, character abilities, and enemy behaviors. Created prototypes to test core mechanics and gameplay feel.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                <p className="text-muted-foreground">
                  Developed the core systems first, including character controller and basic platforming mechanics. Gradually added more features like combat, enemies, and special abilities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Testing & Refinement</h3>
                <p className="text-muted-foreground">
                  Conducted extensive playtesting to balance difficulty, refine controls, and ensure a smooth progression curve through the levels.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}