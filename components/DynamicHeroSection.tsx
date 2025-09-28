
'use client';

import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import { movieAPI, getImageUrl } from '../lib/tmdb';
import Link from 'next/link';
import { Play, Info, Star, Calendar } from 'lucide-react'; 

export default function DynamicHeroSection() {
  // State management
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  // Data fetching
  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const response = await movieAPI.getTrending();
        const movies = response.data.results;
        if (movies.length > 0) {
          setFeaturedMovie(movies[0]);
        }
      } catch (error) {
        console.error('Error fetching featured movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMovie();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading featured movie...</p>
        </div>
      </section>
    );
  }

  // Error/No data state
  if (!featuredMovie) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to MovieHub</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover amazing movies and save your favorites
          </p>
          <Link 
            href="#trending"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            <Play size={20} />
            Explore Movies
          </Link>
        </div>
      </section>
    );
  }

  // Main hero section with movie data
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${getImageUrl(featuredMovie.backdrop_path, 'original')})`
        }}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Trending Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 Trending Now
            </span>
          </div>
          
          {/* Movie Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {featuredMovie.title}
          </h1>
          
          {/* Movie Metadata */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={24} fill="currentColor" />
              <span className="text-xl font-semibold">
                {featuredMovie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-300 text-sm">/10</span>
            </div>
            
            {/* Release Year */}
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-400" size={20} />
              <span className="text-lg text-gray-300">
                {new Date(featuredMovie.release_date).getFullYear()}
              </span>
            </div>
          </div>
          
          {/* Movie Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed line-clamp-3">
            {featuredMovie.overview}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Watch Now Button */}
            <Link 
              href={`/movies/${featuredMovie.id}`}
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play size={24} />
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}