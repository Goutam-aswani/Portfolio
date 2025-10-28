export default function ProjectCard({ title, description, tech, href }: { title: string; description: string; tech: string[]; href: string }) {
  return (
    <article className="rounded bg-surface p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted text-sm mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-black/20 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4">
        <a href={href} className="text-accent text-sm">View →</a>
      </div>
    </article>
  )
}
