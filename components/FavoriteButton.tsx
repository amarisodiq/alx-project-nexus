'use client';

import { Movie } from '../types/movie';
import { useFavorites } from '../hooks/useFavorites';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  movie: Movie;
  size?: 'small' | 'large';
}

export default function FavoriteButton({ movie, size = 'small' }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const iconSize = size === 'large' ? 24 : 20;
  const buttonClass = size === 'large' 
    ? 'px-4 py-2 text-base flex items-center space-x-2' 
    : 'p-2 flex items-center space-x-1';

  return (
    <button
      onClick={toggleFavorite}
      className={`bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors ${buttonClass}`}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        size={iconSize} 
        fill={favorite ? 'currentColor' : 'none'} 
      />
      <span className={size === 'large' ? 'text-sm' : 'text-xs'}>
        {favorite ? 'Remove Favorite' : 'Add Favorite'}
      </span>
    </button>
  );
}