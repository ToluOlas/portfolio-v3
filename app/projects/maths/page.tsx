"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MathsProject() {
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
          <h1 className="text-4xl font-bold mb-6">Maths Revision Program</h1>
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://i.imgur.com/X3WGEHo.png"
              alt="Maths Revision Program"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">tkinter</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">Photoshop</span>
              </div>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Development Time</h2>
              <p className="text-muted-foreground">4 months</p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Project Status</h2>
              <p className="text-muted-foreground">Completed</p>
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              A comprehensive mathematics revision program designed specifically for A Level students. The application covers pure mathematics, mechanics, and statistics, providing both learning materials and practice questions.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Comprehensive topic summaries</li>
              <li>Randomized practice questions</li>
              <li>Step-by-step solutions</li>
              <li>Progress tracking</li>
              <li>Performance analytics</li>
              <li>Custom practice tests</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Subject Coverage</h3>
            <p className="text-muted-foreground mb-6">The program covers three main areas:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pure Mathematics: Calculus, Algebra, Geometry</li>
              <li>Mechanics: Forces, Motion, Energy</li>
              <li>Statistics: Probability, Data Analysis, Hypothesis Testing</li>
            </ul>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900">
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
                <p className="text-muted-foreground">
                  Collaborated with mathematics teachers to create accurate and comprehensive content. Developed a question bank with varying difficulty levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
                <p className="text-muted-foreground">
                  Built a user-friendly interface using tkinter. Implemented algorithms for question randomization and answer checking.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Testing & Feedback</h3>
                <p className="text-muted-foreground">
                  Tested with A Level students and incorporated their feedback. Refined the content and user interface based on user experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}