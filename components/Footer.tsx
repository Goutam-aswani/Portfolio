export default function Footer(){
  return (
    <footer className="py-8 mt-16 border-t border-surface">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Goutam Aswani — Built with Next.js & Tailwind CSS
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/goutamaswani" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/goutamaswani" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition">
              LinkedIn
            </a>
            <a href="mailto:goutamaswani43@gmail.com" className="text-muted hover:text-accent transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
