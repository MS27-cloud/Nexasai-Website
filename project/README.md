# Nexasai Solutions - Production-Ready Website

A modern, high-performance website built with React, TypeScript, Vite, and Tailwind CSS. Features comprehensive SEO optimization, accessible design, working contact form with backend integration, and production-grade tooling.

## Features

- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **SEO Optimized**: Meta tags, OpenGraph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, focus states
- **Contact Form**: Full validation, honeypot spam protection, rate limiting, email notifications via Resend
- **Analytics**: Plug-and-play support for Plausible or Google Analytics
- **Performance**: Image optimization, lazy loading, code splitting, optimized builds
- **Testing**: Vitest + React Testing Library setup with sample tests
- **CI/CD**: GitHub Actions workflow for linting, testing, and building
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Supabase account (for contact form backend)
- Resend account (for email notifications)

## Getting Started

### 1. Clone and Install

\`\`\`bash
git clone <repository-url>
cd project
npm install
\`\`\`

### 2. Environment Setup

Copy the example environment file:

\`\`\`bash
cp .env.example .env
\`\`\`

Update \`.env\` with your credentials:

\`\`\`env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics
VITE_ANALYTICS_PROVIDER=plausible
VITE_ANALYTICS_ID=your_analytics_id

# Required for contact form emails
RESEND_API_KEY=your_resend_api_key
\`\`\`

### 3. Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:5173](http://localhost:5173)

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint
- \`npm run format\` - Format code with Prettier
- \`npm run format:check\` - Check code formatting
- \`npm run test\` - Run tests in watch mode
- \`npm run test:run\` - Run tests once
- \`npm run test:ui\` - Open Vitest UI

## Project Structure

\`\`\`
src/
├── assets/          # Images, logos
├── components/      # Reusable components (Navbar, Footer, SEOHead)
├── pages/          # Route pages (Home, About, Services, Contact, etc.)
├── test/           # Test files
├── utils/          # Utilities (validation, analytics, SEO)
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles

public/
├── robots.txt      # SEO: Search engine instructions
└── sitemap.xml     # SEO: Site structure

supabase/
└── functions/
    └── contact-submit/  # Edge Function for contact form
\`\`\`

## Deployment

### Prerequisites

1. **Supabase Database**: Already configured and migrations applied
2. **Resend API Key**: Set as environment variable in your deployment platform
3. **Analytics ID** (optional): Configure if using analytics

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Add environment variables in Vercel dashboard:
- \`VITE_SUPABASE_URL\`
- \`VITE_SUPABASE_SUPABASE_ANON_KEY\`
- \`VITE_ANALYTICS_PROVIDER\` (optional)
- \`VITE_ANALYTICS_ID\` (optional)

### Deploy to Netlify

\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod
\`\`\`

Add environment variables in Netlify dashboard.

### Deploy to Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Build command: \`npm run build\`
3. Build output directory: \`dist\`
4. Add environment variables in Cloudflare dashboard

### Important: Update Base URL

After deployment, update the \`baseURL\` in \`src/utils/seo.ts\`:

\`\`\`typescript
export const baseURL = 'https://your-actual-domain.com';
\`\`\`

Also update URLs in:
- \`public/sitemap.xml\`
- \`index.html\` (canonical URLs, OpenGraph, JSON-LD)

## Performance Optimization

The site is optimized for Lighthouse scores ≥90:

- **Images**: Lazy loading, proper sizing, modern formats
- **Code Splitting**: Automatic via Vite
- **CSS**: Tailwind with PurgeCSS for minimal CSS
- **Fonts**: Preloaded in index.html (add if using custom fonts)
- **Caching**: Static assets cached via headers

## Contact Form Backend

The contact form uses:

1. **Database**: Supabase PostgreSQL for storing submissions
2. **Edge Function**: Handles validation, rate limiting, email sending
3. **Email**: Resend for transactional emails
4. **Security**: RLS policies, rate limiting (3 requests/hour per IP), honeypot field

### Rate Limiting

- 3 submissions per hour per IP address
- Enforced at Edge Function level
- Returns 429 status when exceeded

## SEO Configuration

The site includes:

- **Meta Tags**: Title, description, keywords
- **OpenGraph**: Facebook, LinkedIn sharing
- **Twitter Cards**: Rich Twitter previews
- **JSON-LD**: Structured data for search engines
- **Sitemap**: \`/sitemap.xml\`
- **Robots.txt**: \`/robots.txt\`
- **Canonical URLs**: Proper canonical tags

## Analytics

Supports Plausible (privacy-focused) or Google Analytics:

\`\`\`env
VITE_ANALYTICS_PROVIDER=plausible  # or 'ga'
VITE_ANALYTICS_ID=your_id
\`\`\`

Leave empty to disable analytics.

## Testing

Tests use Vitest + React Testing Library:

\`\`\`bash
npm run test        # Watch mode
npm run test:run    # CI mode
npm run test:ui     # Visual UI
\`\`\`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Proprietary - Nexasai Solutions

## Support

For issues or questions:
- Email: contact@nexasai.com
- Phone: +1 (555) 123-4567
