import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="container py-24 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-muted text-lg">Page not found</p>
        <Link href="/" className="inline-block mt-6 bg-accent text-black px-6 py-3 rounded font-medium">
          Go home
        </Link>
      </main>
      <Footer />
    </>
  )
}
