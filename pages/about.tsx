import Head from 'next/head'
import EnhancedNav from '../components/EnhancedNav'
import Footer from '../components/Footer'
import EnhancedSkills from '../components/EnhancedSkills'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'
import { Download, GraduationCap, Award, Trophy, Briefcase } from 'lucide-react'

const certifications = [
  "The Joy of Computing using Python - NPTEL",
  "Database Management System - NPTEL",
  "Programming in Modern C++ - NPTEL",
  "Cloud Computing - NPTEL", 
  "Ethical Hacking - Infosys Springboard",
  "Introduction to AI - LetsUpgrade",
  "Generative AI with Large Language Models - Coursera (Deeplearning.AI)",
  "LangChain Mastery - Udemy",
];

const achievements = [
  "92.8% in 12th Standard (MP Board)",
  "Developed 10+ production-ready AI applications",
  "Built RAG systems serving 1000+ queries",
  "Active contributor to open-source AI projects"
];

export default function About(){
  return (
    <>
      <Head>
        <title>About — Goutam Aswani</title>
        <meta name="description" content="AI Engineer with expertise in GenAI, LangChain, RAG pipelines, and full-stack development. Building intelligent systems and automation tools." />
      </Head>
      <div>
        <EnhancedNav />
        <main className="container py-20 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              AI Engineer passionate about building intelligent systems with LLMs, RAG pipelines, 
              and full-stack development
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    I'm an AI Engineer passionate about building intelligent systems with Large Language Models, 
                    Retrieval-Augmented Generation pipelines, and full-stack AI applications. Currently pursuing 
                    B.Tech in Computer Science & Engineering (AI & ML) at Acropolis Institute of Technology & Research, Indore.
                  </p>
                  <p>
                    My expertise spans GenAI tools (LangChain, LangChain-Google-GenAI), backend frameworks (FastAPI, Django, Flask), 
                    and modern frontend development (React, Next.js). I specialize in building RAG systems, automation workflows, 
                    and deploying scalable solutions with Docker and cloud platforms.
                  </p>
                  <p>
                    I've developed production-ready applications including secure chatbots with document-based Q&A, 
                    job automation pipelines, AI-powered presentation converters, and intelligent document processing systems. 
                    I'm deeply curious about AI algorithms, emerging GenAI tools, and leveraging automation for scalable solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <EnhancedSkills />
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-accent" />
              Education
            </h2>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">
                  B.Tech in Computer Science & Engineering (AI & ML)
                </h3>
                <p className="text-muted mb-2">
                  Acropolis Institute of Technology & Research, Indore
                </p>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Badge variant="secondary">2022 - 2026</Badge>
                  <Badge variant="outline">CGPA: 8.39</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-sm">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-accent" />
              Achievements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-sm font-medium">{achievement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Resume Download */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card>
              <CardContent className="p-12">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Want to know more?</h3>
                <p className="text-muted mb-6">
                  Download my resume for a detailed overview of my experience and skills
                </p>
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  )
}
