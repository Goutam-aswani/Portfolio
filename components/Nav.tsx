import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-transparent py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" aria-label="Home">Goutam</Link>
        <div className="space-x-4">
          <Link href="/projects" className="text-sm text-muted">Projects</Link>
          <Link href="/about" className="text-sm text-muted">About</Link>
          <Link href="/contact" className="text-sm text-muted">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
