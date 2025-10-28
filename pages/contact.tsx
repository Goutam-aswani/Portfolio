import { useState, FormEvent } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ 
    type: 'idle', 
    message: '' 
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <>
      <Head>
        <title>Contact — Goutam Aswani</title>
        <meta name="description" content="Get in touch with Goutam Aswani for AI engineering projects, collaborations, or consulting opportunities." />
      </Head>
      <div>
        <Nav />
        <main className="container py-12 max-w-2xl">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-muted mt-3">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="mt-6 bg-surface rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
            <div className="text-muted space-y-2 mb-6">
              <p>📧 Email: <a href="mailto:goutamaswani43@gmail.com" className="text-accent">goutamaswani43@gmail.com</a></p>
              <p>📞 Phone: <a href="tel:+917649010424" className="text-accent">+91-7649010424</a></p>
              <p>🔗 GitHub: <a href="https://github.com/goutamaswani" target="_blank" rel="noopener noreferrer" className="text-accent">github.com/goutamaswani</a></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            
            <label className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full rounded bg-black/20 p-3 mt-1 border border-transparent focus:border-accent outline-none transition" 
              required
            />
            
            <label className="block text-sm font-medium mt-4 mb-1">Email</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full rounded bg-black/20 p-3 mt-1 border border-transparent focus:border-accent outline-none transition" 
              required
            />
            
            <label className="block text-sm font-medium mt-4 mb-1">Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full rounded bg-black/20 p-3 mt-1 h-32 border border-transparent focus:border-accent outline-none transition resize-none" 
              required
            />
            
            <button 
              type="submit"
              disabled={status.type === 'loading'}
              className="mt-6 inline-block bg-accent text-black px-6 py-3 rounded font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-muted'}`}>
                {status.message}
              </p>
            )}
          </form>
        </main>
        <Footer />
      </div>
    </>
  )
}
