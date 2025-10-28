import Head from 'next/head'
import EnhancedNav from '../components/EnhancedNav'
import Footer from '../components/Footer'
import EnhancedContactForm from '../components/EnhancedContactForm'
import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react'

export default function Contact(){
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "goutamaswani43@gmail.com",
      href: "mailto:goutamaswani43@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7649010424",
      href: "tel:+917649010424"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/goutam-aswani-bei143",
      href: "https://www.linkedin.com/in/goutam-aswani-bei143/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Goutam-aswani",
      href: "https://github.com/Goutam-aswani"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact — Goutam Aswani</title>
        <meta name="description" content="Get in touch with Goutam Aswani for AI engineering projects, collaborations, or consulting opportunities." />
      </Head>
      <div>
        <EnhancedNav />
        <main className="container py-20 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just say hi, 
              I'd love to hear from you!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/5 hover:border-accent/50 transition-all"
                >
                  <IconComponent className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-semibold mb-1">{method.label}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted hover:text-accent transition-colors break-all"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">{method.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <EnhancedContactForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
