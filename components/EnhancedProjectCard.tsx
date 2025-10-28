"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface EnhancedProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  href: string;
  year?: string;
  category?: string;
  github?: string;
  demo?: string;
  index?: number;
}

export default function EnhancedProjectCard({
  title,
  description,
  tech,
  href,
  year,
  category,
  github,
  demo,
  index = 0,
}: EnhancedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={href}>
        <Card className="h-full group cursor-pointer hover:border-accent/50 transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {category && (
                  <Badge variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                )}
                {year && (
                  <span className="text-xs text-muted">{year}</span>
                )}
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            <CardTitle className="group-hover:text-accent transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 4).map((t, i) => (
                <Badge key={i} variant="default" className="text-xs">
                  {t}
                </Badge>
              ))}
              {tech.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{tech.length - 4} more
                </Badge>
              )}
            </div>
          </CardContent>

          {(github || demo) && (
            <CardFooter className="gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </CardFooter>
          )}
        </Card>
      </Link>
    </motion.div>
  );
}
