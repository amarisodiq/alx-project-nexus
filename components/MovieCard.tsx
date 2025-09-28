'use client';

import { Movie } from '../types/movie';
import { useFavorites } from '../hooks/useFavorites';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { getImageUrl } from '../lib/tmdb';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link href={`/movies/${movie.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
        <div className="relative">
          <img 
            src={getImageUrl(movie.poster_path)} 
            alt={movie.title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = '/placeholder-movie.jpg';
            }}
          />
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart 
              size={20} 
              fill={favorite ? 'red' : 'none'} 
              color={favorite ? 'red' : 'white'} 
              className="transition-colors"
            />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 leading-tight text-gray-700">
            {movie.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {movie.overview || 'No description available.'}
          </p>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
            </span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}