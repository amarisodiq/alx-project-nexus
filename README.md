🎬 Movie Recommendation App
A modern, responsive web application for discovering and saving your favorite movies. Built with Next.js, TypeScript, and Tailwind CSS.

🚀 Live Demo
https://alx-project-nexus-kappa.vercel.app/

✨ Features
Trending Movies: Discover currently popular movies from TMDB API

Movie Details: Detailed information pages for each movie with dynamic routing

Favorites System: Save and manage your favorite movies using localStorage

Dynamic Hero Section: Showcases the #1 trending movie with beautiful backdrop

Responsive Design: Works perfectly on all devices - mobile, tablet, and desktop

Type Safety: Built with TypeScript for better development experience and reliability

🛠️ Tech Stack
Framework: Next.js 15.5.4 with App Router

Language: TypeScript

Styling: Tailwind CSS

Icons: Lucide React

API: The Movie Database (TMDB) API

Deployment: Vercel

State Management: React Hooks (useState, useEffect)

Routing: Next.js Dynamic Routing


🎯 Project Structure
text
alx-project-nexus/
├── app/                    # Next.js App Router pages
│   ├── favorites/          # Favorites page
│   ├── movies/[id]/        # Dynamic movie detail pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
│   ├── DynamicHeroSection.tsx
│   ├── FavoriteButton.tsx
│   ├── MovieCard.tsx
│   └── MovieGrid.tsx
├── hooks/                  # Custom React hooks
│   └── useFavorites.ts
├── lib/                    # Utility functions
│   └── tmdb.ts
├── types/                  # TypeScript type definitions
│   └── movie.ts
└── public/                 # Static assets
🎨 Key Features Implemented
Dynamic Routing
Individual movie pages with dynamic routes (/movies/[id])

Server-side rendering for better SEO and performance

Fast navigation with Next.js Link component

API Integration
Fetches trending movies from TMDB API

Error handling and loading states

Image optimization with TMDB CDN

Proper TypeScript interfaces for API responses

User Personalization
Save favorite movies to localStorage

Favorites page to view all saved movies

Persistent data across browser sessions

Add/remove favorites with intuitive heart icons

Responsive UI
Mobile-first design with Tailwind CSS

Interactive movie cards with hover effects

Accessible navigation and buttons

Beautiful gradient overlays and animations

📱 Pages
Home (/): Trending movies with dynamic hero section and favorites preview

Movie Details (/movies/[id]): Detailed movie information with backdrop images

Favorites (/favorites): All saved favorite movies with empty state handling

🚀 Deployment
The app is deployed on Vercel and configured for automatic deployments:

Push code to GitHub main branch

Vercel automatically builds and deploys

Environment variables managed in Vercel dashboard

🏗️ Build Process
bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start


Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request


🙏 Acknowledgments
The Movie Database (TMDB) for providing the movie data API

Next.js for the amazing React framework

Tailwind CSS for the utility-first CSS framework

Vercel for seamless deployment

ALX for making me do hard things
