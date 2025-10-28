import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects(){
  return (
    <>
      <Head>
        <title>Projects — Goutam Aswani</title>
        <meta name="description" content="AI and full-stack projects featuring LangChain, RAG pipelines, automation, and machine learning applications." />
      </Head>
      <div>
        <Nav />
        <main className="container py-12">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-3 text-muted">A collection of AI, automation, and full-stack projects showcasing RAG pipelines, LangChain integrations, and intelligent systems.</p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map(p => (
              <ProjectCard 
                key={p.slug} 
                title={p.title} 
                description={p.summary} 
                tech={p.tech.slice(0, 5)} 
                href={`/projects/${p.slug}`} 
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
