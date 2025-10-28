# Deployment Guide — Portfolio Website

This guide will help you deploy your portfolio to Vercel and set up a custom domain.

## Prerequisites

- GitHub account
- Vercel account (free tier is perfect for this)
- Your portfolio code pushed to GitHub
- Optional: custom domain

## Step 1: Push to GitHub

If you haven't already:

```powershell
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your portfolio repository
4. Vercel will auto-detect Next.js configuration
5. Click "Deploy"

That's it! Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

### Option B: Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

### Buy a Domain

Recommended registrars:
- Namecheap (~$10/year for .com)
- Google Domains
- Cloudflare Registrar (lowest prices)
- Porkbun

### Add Domain to Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `goutamaswani.com`)
4. Vercel will give you DNS records to configure

### Configure DNS

In your domain registrar's DNS settings, add:

**For root domain (`goutamaswani.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Changes take 5 minutes to 48 hours to propagate.

## Step 4: Add Environment Variables (If Needed)

If you integrate email services or APIs:

1. Vercel Dashboard → Settings → Environment Variables
2. Add variables like:
   - `SENDGRID_API_KEY`
   - `FORMSPREE_ENDPOINT`
   - `GOOGLE_ANALYTICS_ID`

## Step 5: Enable Analytics (Optional)

### Vercel Analytics (Free)

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable "Audience" or "Web Vitals"
4. No code changes needed!

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Install package:
   ```powershell
   npm install --save nextjs-google-analytics
   ```
3. Add to `pages/_app.tsx`:
   ```typescript
   import { GoogleAnalytics } from 'nextjs-google-analytics';
   
   export default function App({ Component, pageProps }: AppProps) {
     return (
       <>
         <GoogleAnalytics trackPageViews />
         <Component {...pageProps} />
       </>
     );
   }
   ```

## Step 6: Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a preview URL

## Step 7: Performance Optimization

### Image Optimization

Next.js automatically optimizes images with `next/image`. To use:

```typescript
import Image from 'next/image';

<Image 
  src="/project-screenshot.png" 
  alt="Project preview"
  width={800}
  height={600}
/>
```

### SEO Checklist

- ✅ Meta tags on all pages (done)
- ✅ Open Graph tags (done)
- ⬜ Add `robots.txt` (see below)
- ⬜ Add `sitemap.xml` (see below)

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Generate Sitemap

Install next-sitemap:
```powershell
npm install --save-dev next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
};
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common issues:
- TypeScript errors → run `npm run build` locally first
- Missing dependencies → check `package.json`

### 404 on Refresh

Next.js handles this automatically. If you see 404s, check your Vercel configuration is set to "Next.js" framework.

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Use [whatsmydns.net](https://whatsmydns.net) to verify propagation

## Maintenance

### Updating Content

1. Edit files locally
2. Commit and push to GitHub
3. Vercel auto-deploys in ~1 minute

### Monitoring

- Check Vercel Analytics for traffic
- Monitor Web Vitals for performance
- Set up Vercel Notifications for deployment status

## Cost

- **Vercel Free Tier**: Perfect for portfolios
  - Unlimited deployments
  - 100GB bandwidth/month
  - SSL certificates included
  - No credit card required

- **Domain**: ~$10-15/year

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

🎉 **Congratulations!** Your portfolio is now live and auto-deploying.
