import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.slice(0, 4);
  
  return (
    <>
      <Head>
        <title>Goutam Aswani — AI Engineer | GenAI | LangChain</title>
        <meta name="description" content="AI Engineer specializing in GenAI, LangChain, RAG pipelines, and full-stack AI applications. Building intelligent systems with LLMs and automation." />
        <meta property="og:title" content="Goutam Aswani — AI Engineer" />
        <meta property="og:description" content="AI Engineer specializing in GenAI, LangChain, and full-stack AI applications" />
        <meta property="og:type" content="website" />
      </Head>
      <Nav />
      <main className="container py-12">
        <Hero
          name="Goutam Aswani"
          title="AI Engineer specializing in GenAI, LangChain & Full-Stack Development"
          ctas={[{label:'View projects', href:'/projects'},{label:'Download resume', href:'/resume.pdf'}]}
        />

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="text-accent text-sm">View all →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map(p => (
              <ProjectCard 
                key={p.slug} 
                title={p.title} 
                description={p.summary} 
                tech={p.tech.slice(0,4)} 
                href={`/projects/${p.slug}`} 
              />
            ))}
          </div>
        </section>

        <section className="mt-16 bg-surface rounded-lg p-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-muted leading-relaxed">
            I'm an AI Engineer passionate about building intelligent systems with Large Language Models, RAG pipelines, and full-stack AI applications. 
            Currently pursuing B.Tech in Computer Science & Engineering (AI & ML) at Acropolis Institute of Technology & Research. 
            I specialize in LangChain, FastAPI, React, and cloud deployment for scalable solutions.
          </p>
          <Link href="/about" className="inline-block mt-4 text-accent">Learn more →</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
