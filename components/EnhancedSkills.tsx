"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Database,
  Wrench,
  Award,
  GraduationCap,
  Trophy,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 70 },
    ],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      { name: "LangChain", level: 95 },
      { name: "RAG Pipelines", level: 90 },
      { name: "OpenAI API", level: 90 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    icon: Database,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Vercel/Netlify", level: 85 },
      { name: "MongoDB/PostgreSQL", level: 80 },
    ],
  },
];

export default function EnhancedSkills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
