"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Hi, I'm{" "}
          </span>
          <span className="bg-gradient-to-r from-accent via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Goutam Aswani
          </span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-muted mb-4"
        >
          AI Engineer & Full-Stack Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted/80 mb-12 max-w-2xl mx-auto"
        >
          Building intelligent systems with RAG, LLMs, and modern web technologies.
          Passionate about solving real-world problems with AI and automation.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:scale-105"
          >
            View My Work
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent/30 text-accent rounded-lg font-semibold hover:bg-accent/10 hover:border-accent transition-all hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-16"
        >
          <a
            href="https://github.com/Goutam-aswani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-muted hover:text-accent transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/goutam-aswani-bei143/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-muted hover:text-accent transition-colors" />
          </a>
          <a
            href="mailto:goutamaswani43@gmail.com"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-muted hover:text-accent transition-colors" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-flex flex-col items-center gap-2 text-muted/50"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
