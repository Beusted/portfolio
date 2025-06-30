# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Inspired by clean academic layouts with strong content organization and quantified achievements.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode**: Built-in dark/light theme toggle with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards
- **Performance Focused**: Optimized fonts, images, and lazy loading
- **Easy Customization**: Centralized data files for content management

## 📦 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Personal Information

Edit `src/data/personal.ts` to customize your personal information:

```typescript
export const personalData = {
  name: 'Your Name',
  title: 'Software Engineer',
  location: 'Your City, Country',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  
  hero: {
    greeting: "Hi, I'm",
    description: 'Your professional description...',
    resumeUrl: '/resume.pdf'
  },
  
  about: {
    title: 'About Me',
    description: 'Brief description...',
    journey: [
      'Your journey paragraph 1...',
      'Your journey paragraph 2...',
      'Your journey paragraph 3...'
    ]
  },
  
  skills: [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    // Add more skills...
  ]
}
```

### Projects

Update the projects array in `src/components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Brief description',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://project-demo.vercel.app',
    featured: true,
    completedAt: '2024-01-15'
  },
  // Add more projects...
]
```

### Experience

Update the experiences array in `src/components/sections/Experience.tsx`:

```typescript
const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Your Position',
    startDate: '2022-06-01',
    endDate: '2024-01-31', // or null for current
    description: 'Role description...',
    technologies: ['React', 'Node.js'],
    achievements: [
      'Achievement 1 with quantified results',
      'Achievement 2 with metrics',
    ]
  },
  // Add more experiences...
]
```

### SEO & Metadata

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Software Engineer',
    template: '%s | Your Name - Software Engineer'
  },
  description: 'Your professional description...',
  keywords: ['your', 'relevant', 'keywords'],
  // Update other fields...
}
```

## 🎭 Styling & Theming

### Color Scheme

The default color scheme uses:
- Primary: Blue (`blue-600`)
- Backgrounds: White/Gray (`gray-50`, `gray-900`)
- Text: Gray (`gray-900`, `gray-100`)

To customize colors, update the Tailwind classes in components or modify `tailwind.config.js`.

### Typography

The site uses Inter font. To change:

1. Update font import in `src/app/layout.tsx`
2. Update CSS variables in `src/app/globals.css`

### Dark Mode

Dark mode is automatically handled by the `DarkModeProvider`. The system:
- Detects user's system preference
- Saves user's manual selection
- Provides smooth transitions

## 📱 Components Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Work experience
│   │   └── Contact.tsx     # Contact form
│   └── ui/
│       ├── DarkModeProvider.tsx  # Dark mode context
│       └── DarkModeToggle.tsx    # Dark mode button
├── data/
│   ├── types.ts           # TypeScript interfaces
│   └── personal.ts        # Personal data
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Google Fonts loading with `font-display: swap`
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as they enter viewport
- **Bundle Analysis**: Run `npm run build` to analyze bundle size

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Content Guidelines

### Writing Tips

- **Be Specific**: Use numbers and metrics in achievements
- **Show Impact**: Quantify results whenever possible
- **Stay Current**: Keep technologies and experience up to date
- **Professional Tone**: Maintain consistent, professional language

### Image Guidelines

- **Profile Photo**: 400x400px minimum, professional headshot
- **Project Screenshots**: 1200x800px for optimal display
- **Optimize Images**: Use WebP format when possible

## 🛠️ Technical Details

### Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: < 100KB gzipped

### Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you need help customizing your portfolio:

1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub
4. Reach out via email

---

Built with ❤️ using Next.js and modern web technologies.
