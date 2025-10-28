import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { projects, Project } from '../../data/projects';

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <>
      <Head>
        <title>{project.title} — Goutam Aswani</title>
        <meta name="description" content={project.summary} />
      </Head>
      <Nav />
      <main className="container py-12">
        <Link href="/projects" className="text-accent text-sm">← Back to projects</Link>
        
        <header className="mt-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted text-lg mt-2">{project.summary}</p>
          <p className="text-sm text-muted mt-1">{project.year}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-3 text-muted leading-relaxed">{project.description}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="text-muted flex items-start">
                <span className="text-accent mr-2">→</span>
                {feat}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1 bg-surface rounded">{t}</span>
            ))}
          </div>
        </section>

        {project.links && (
          <section className="mt-8 flex gap-3">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-black px-4 py-2 rounded">
                View on GitHub →
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-block bg-surface px-4 py-2 rounded">
                Live Demo →
              </a>
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = projects.find(p => p.slug === params?.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
};
