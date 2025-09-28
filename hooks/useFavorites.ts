'use client';

import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favoriteMovies');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const removeFavorite = (movieId: number) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId);
  };

  return { 
    favorites, 
    addFavorite, 
    removeFavorite, 
    isFavorite,
    isLoaded 
  };
}