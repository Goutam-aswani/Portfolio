import Head from 'next/head'
import { useState } from 'react'
import EnhancedNav from '../../components/EnhancedNav'
import Footer from '../../components/Footer'
import EnhancedProjectCard from '../../components/EnhancedProjectCard'
import { projects } from '../../data/projects'
import { Search } from 'lucide-react'
import { Input } from '../../components/ui/input'

export default function Projects(){
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Head>
        <title>Projects — Goutam Aswani</title>
        <meta name="description" content="AI and full-stack projects featuring LangChain, RAG pipelines, automation, and machine learning applications." />
      </Head>
      <div>
        <EnhancedNav />
        <main className="container py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
              A collection of AI, automation, and web development projects showcasing my expertise
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <EnhancedProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.summary}
                  tech={project.tech}
                  href={`/projects/${project.slug}`}
                  year={project.year?.toString()}
                  category="AI & Dev"
                  github={project.links?.github}
                  demo={project.links?.live}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No projects found matching "{searchTerm}"</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}
