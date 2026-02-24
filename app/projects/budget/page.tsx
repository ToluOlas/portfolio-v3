"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BudgetProject() {
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
          <h1 className="text-4xl font-bold mb-6">Student Budgeting App</h1>
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://i.imgur.com/Ac48wQc.png"
              alt="Student Budgeting App"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">HTML/CSS/JS</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">MySQL</span>
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
              A web-based application designed to help students manage their finances effectively. The project aligns with UN Sustainable Development Goals of No Poverty and Quality Education by making financial management accessible to students.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Expense tracking and categorisation</li>
              <li>Budget planning tools</li>
              <li>Cheaper alternative suggestions</li>
              <li>Savings goals tracking</li>
              <li>Educational resources on financial management</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p className="text-muted-foreground mb-6">
              The application has helped students:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Reduce unnecessary expenses by 25%</li>
              <li>Increase savings by 30%</li>
              <li>Better understand financial management</li>
              <li>Make informed spending decisions</li>
            </ul>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-100 dark:border-blue-900">
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Research & Planning</h3>
                <p className="text-muted-foreground">
                  Conducted surveys with students to understand their financial challenges. Researched existing budgeting tools and identified areas for improvement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                <p className="text-muted-foreground">
                  Used agile scrum methodology for development. Created a responsive web interface and implemented core financial tracking features. Leadership would rotate every two weeks upon the start of each sprint.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">User Testing</h3>
                <p className="text-muted-foreground">
                  Conducted extensive user testing with student groups. Gathered feedback and made improvements to enhance usability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}