# Portfolio — Goutam Aswani

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features 8+ AI/ML projects, full project detail pages, working contact form, and production-ready deployment configuration.

## ✨ Features

- **8 Full Project Showcases**: DocuMentor, Job Automation, SlideTalk AI, PDF-to-HTML, HTML-to-PDF, IMS, Monument Detection, NutriGuide
- **Project Detail Pages**: Individual pages for each project with features, tech stack, and links
- **Working Contact Form**: Serverless API route with validation (ready for email integration)
- **Dark Theme**: Cyan accent color scheme optimized for readability
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **TypeScript**: Full type safety across the codebase
- **Resume Download**: Direct PDF download link

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```powershell
# Clone the repository
git clone <your-repo-url>
cd portfoli

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

### Build for Production

```powershell
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
portfoli/
├── components/          # Reusable React components
│   ├── Nav.tsx         # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── ProjectCard.tsx # Project preview cards
│   └── Footer.tsx      # Footer with social links
├── data/
│   └── projects.ts     # All project data
├── pages/
│   ├── _app.tsx        # Next.js app wrapper
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page with skills & bio
│   ├── contact.tsx     # Contact form
│   ├── 404.tsx         # Custom 404 page
│   ├── projects/
│   │   ├── index.tsx   # Projects listing
│   │   └── [slug].tsx  # Dynamic project detail pages
│   └── api/
│       └── contact.ts  # Contact form API endpoint
├── public/             # Static assets
│   └── resume.pdf      # Your resume (add this!)
├── styles/
│   └── globals.css     # Global styles & Tailwind
└── README.md
```

## 🎨 Customization

### Add Your Resume
Place your `resume.pdf` in the `public/` folder. The download link is already wired on the About page.

### Update Projects
Edit `data/projects.ts` to add, remove, or modify projects. Each project has:
- `slug`: URL-friendly identifier
- `title`: Project name
- `summary`: Short description
- `description`: Full overview
- `features`: Array of key features
- `tech`: Technologies used
- `year`: Project year
- `links`: Optional GitHub/live demo URLs

### Change Colors
Edit `tailwind.config.cjs` to customize the color palette:
```js
colors: {
  bg: '#0b0f14',        // Background
  surface: '#0f1724',   // Elevated surfaces
  muted: '#9aa4b2',     // Muted text
  accent: '#7dd3fc'     // Accent (links, buttons)
}
```

### Connect Contact Form to Email
The contact form currently logs submissions. To send actual emails, edit `pages/api/contact.ts` and integrate:
- **Formspree**: Easiest, no backend needed
- **SendGrid**: Reliable email API
- **Resend**: Modern email API with great DX
- **Nodemailer**: Full SMTP control

Example with Formspree:
```typescript
// In pages/contact.tsx, replace the fetch call:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js and deploys

Your site will be live at `https://your-project.vercel.app`

### Custom Domain
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → Settings → Domains
3. Add your custom domain
4. Update your DNS records as instructed

### Environment Variables
If you add email integration or other services, set environment variables in Vercel dashboard → Settings → Environment Variables.

## 📝 Content Updates

### Personal Info
- **Name/Email**: Update in `components/Nav.tsx`, `pages/about.tsx`, `pages/contact.tsx`
- **Bio**: Edit `pages/about.tsx`
- **Skills**: Modify the `skills` object in `pages/about.tsx`
- **Social Links**: Update `components/Footer.tsx` and `pages/about.tsx`

### SEO
- **Meta Tags**: Each page has `<Head>` component with title and description
- **Structured Data**: Add JSON-LD in `pages/index.tsx` for rich search results
- **sitemap.xml**: Generate with `next-sitemap` package

## 🔧 Scripts

```powershell
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Forms**: API Routes (serverless)

## 🎯 Next Steps

1. ✅ Add your `resume.pdf` to `public/` folder
2. ✅ Update GitHub/LinkedIn links in Footer
3. ✅ Add project screenshots/images (optional)
4. ✅ Connect contact form to email service
5. ✅ Deploy to Vercel
6. ✅ Add custom domain (optional)
7. ✅ Set up analytics (Vercel Analytics, Plausible, or Google Analytics)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions, feel free to open an issue.

---

Built with ❤️ by Goutam Aswani

