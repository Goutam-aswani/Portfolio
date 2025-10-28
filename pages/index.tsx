import Head from 'next/head'
import Link from 'next/link'
import EnhancedNav from '../components/EnhancedNav'
import AnimatedHero from '../components/AnimatedHero'
import EnhancedProjectCard from '../components/EnhancedProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.slice(0, 3);
  
  return (
    <>
      <Head>
        <title>Goutam Aswani — AI Engineer | GenAI | LangChain</title>
        <meta name="description" content="AI Engineer specializing in GenAI, LangChain, RAG pipelines, and full-stack AI applications. Building intelligent systems with LLMs and automation." />
        <meta property="og:title" content="Goutam Aswani — AI Engineer" />
        <meta property="og:description" content="AI Engineer specializing in GenAI, LangChain, and full-stack AI applications" />
        <meta property="og:type" content="website" />
      </Head>
      <EnhancedNav />
      <main>
        <AnimatedHero />

        {/* Featured Projects Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-surface/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Explore my recent work in AI, automation, and web development
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project, index) => (
                <EnhancedProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.summary}
                  tech={project.tech}
                  href={`/projects/${project.slug}`}
                  year={project.year?.toString()}
                  category="AI"
                  github={project.links?.github}
                  demo={project.links?.live}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 text-accent rounded-lg font-semibold border-2 border-accent/30 hover:bg-accent/20 hover:border-accent transition-all hover:scale-105"
              >
                View All Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
