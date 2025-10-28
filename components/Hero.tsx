type CTA = { label: string; href: string }

export default function Hero({ name, title, ctas }: { name: string; title: string; ctas?: CTA[] }) {
  return (
    <header className="py-16">
      <div className="container">
        <h1 className="text-4xl font-extrabold">{name}</h1>
        <p className="text-muted mt-2">{title}</p>

        <div className="mt-6 flex gap-3">
          {ctas?.map(c => (
            <a key={c.href} href={c.href} className="inline-block rounded bg-accent px-4 py-2 text-black">{c.label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}
