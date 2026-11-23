"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  // Once a page has been read to the end the bar stays full; it resets on reload or navigation.
  const [completed, setCompleted] = useState(false);
  // After navigating, the old page's scroll position can briefly report ~100%. Only allow
  // completion again once the new page has been seen near the top.
  const armed = useRef(true);
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    armed.current = false;
    setCompleted(false);
    progress.jump(0);
    // Fallback: by now the router has reset the scroll position.
    const t = setTimeout(() => {
      armed.current = true;
    }, 400);
    return () => clearTimeout(t);
  }, [pathname, progress]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!armed.current) {
      if (v < 0.99) armed.current = true;
      return;
    }
    if (!completed && v >= 0.99) setCompleted(true);
  });

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/timeline', label: 'Timeline' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-blue-100 dark:border-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold">
            <span className="font-display tracking-tight text-foreground">
              Tolu Olasupo<span className="text-highlight">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll progress: once the page has been read to the end it locks full and flashes green */}
      <motion.div
        aria-hidden="true"
        className={cn(
          'absolute left-0 right-0 -bottom-px h-0.5 origin-left bg-highlight',
          completed && 'animate-bar-complete'
        )}
        style={{ scaleX: completed ? 1 : progress }}
      />
    </nav>
  );
}