import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  aiMl: ['LangChain', 'RAG', 'LLMs', 'TensorFlow', 'Keras', 'OpenCV', 'Transformers', 'NLP'],
  frameworks: ['FastAPI', 'Django', 'Flask', 'React', 'Next.js', 'Tailwind CSS'],
  tools: ['Docker', 'Git', 'AWS EC2', 'n8n', 'Celery', 'Redis', 'ChromaDB', 'FAISS'],
  databases: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Pinecone']
};

export default function About(){
  return (
    <>
      <Head>
        <title>About — Goutam Aswani</title>
        <meta name="description" content="AI Engineer with expertise in GenAI, LangChain, RAG pipelines, and full-stack development. Building intelligent systems and automation tools." />
      </Head>
      <div>
        <Nav />
        <main className="container py-12 max-w-4xl">
          <h1 className="text-3xl font-bold">About Me</h1>
          
          <section className="mt-6 text-muted leading-relaxed">
            <p>
              I'm an AI Engineer passionate about building intelligent systems with Large Language Models, 
              Retrieval-Augmented Generation pipelines, and full-stack AI applications. Currently pursuing 
              B.Tech in Computer Science & Engineering (AI & ML) at Acropolis Institute of Technology & Research, Indore.
            </p>
            <p className="mt-4">
              My expertise spans GenAI tools (LangChain, LangChain-Google-GenAI), backend frameworks (FastAPI, Django, Flask), 
              and modern frontend development (React, Next.js). I specialize in building RAG systems, automation workflows, 
              and deploying scalable solutions with Docker and cloud platforms.
            </p>
            <p className="mt-4">
              I've developed production-ready applications including secure chatbots with document-based Q&A, 
              job automation pipelines, AI-powered presentation converters, and intelligent document processing systems. 
              I'm deeply curious about AI algorithms, emerging GenAI tools, and leveraging automation for scalable solutions.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-surface rounded">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">AI & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.aiMl.map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-surface rounded">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-surface rounded">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-surface rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-4 text-muted">
              <div className="border-l-2 border-accent pl-4 py-1">
                <h3 className="font-semibold text-white">B.Tech Computer Science & Engineering (AI & ML)</h3>
                <p className="text-sm">Acropolis Institute of Technology & Research, Indore, M.P</p>
                <p className="text-sm">2022 - 2026</p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex items-start">
                <span className="text-accent mr-2">🏆</span>
                <span><strong>AI Fusion Hackathon - Top 10:</strong> Achieved Top 10 placement with advanced ML/DL model on GTSRB dataset</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">♟️</span>
                <span><strong>CHESS Tournament Victory:</strong> Led team to first place in inter-college chess tournament</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">💻</span>
                <span><strong>Active Hackathon Participant:</strong> Participated in 2-3 ML-focused hackathons with real-world AI challenges</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Resume</h2>
            <p className="mt-3 text-muted">Download a copy of my full resume with detailed project descriptions and certifications:</p>
            <a className="inline-block mt-4 bg-accent text-black px-6 py-3 rounded font-medium hover:opacity-90 transition" href="/resume.pdf" download>
              Download Resume (PDF)
            </a>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-4 text-muted space-y-2">
              <p>📧 Email: <a href="mailto:goutamaswani43@gmail.com" className="text-accent">goutamaswani43@gmail.com</a></p>
              <p>📞 Phone: +91-7649010424</p>
              <p>🔗 GitHub: <a href="https://github.com/goutamaswani" target="_blank" rel="noopener noreferrer" className="text-accent">github.com/goutamaswani</a></p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
