// types/movie.ts

/**
 * Basic movie interface that represents the data we get from TMDB API
 * for movie lists (trending, search results, etc.)
 */
export interface Movie {
  id: number;                    // Unique identifier for the movie
  title: string;                 // Movie title
  overview: string;              // Movie description/summary
  poster_path: string | null;    // Path to poster image (can be null if no poster)
  backdrop_path: string | null;  // Path to background image (can be null)
  release_date: string;          // Release date in YYYY-MM-DD format
  vote_average: number;          // Average rating from 0-10
  vote_count?: number;           // Number of votes (optional)
  genre_ids?: number[];          // Array of genre IDs (optional - used in lists)
  popularity?: number;           // Popularity score (optional)
  adult?: boolean;               // Whether it's an adult movie (optional)
  video?: boolean;               // Whether it has a video (optional)
  original_language?: string;    // Original language code (optional)
  original_title?: string;       // Original title (optional)
}

/**
 * Extended movie interface with additional details
 * used on the individual movie page
 */
export interface MovieDetails extends Movie {
  // The 'extends Movie' means MovieDetails has ALL properties of Movie plus these additional ones:
  
  // Runtime in minutes
  runtime: number;
  
  // Budget in USD
  budget: number;
  
  // Revenue in USD  
  revenue: number;
  
  // Array of genre objects with id and name
  genres: Array<{
    id: number;
    name: string;
  }>;
  
  // Array of production companies
  production_companies: Array<{
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }>;
  
  // Array of production countries
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  
  // Spoken languages in the movie
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  
  // Movie status (Released, In Production, etc.)
  status: string;
  
  // Tagline
  tagline: string | null;
  
  // IMDb ID
  imdb_id: string | null;
  
  // Homepage URL
  homepage: string | null;
}

/**
 * Interface for the API response when fetching lists of movies
 * (trending movies, search results, etc.)
 */
export interface MovieListResponse {
  page: number;           // Current page number
  results: Movie[];       // Array of movies
  total_pages: number;    // Total number of pages available
  total_results: number;  // Total number of movies available
}

/**
 * Interface for the favorite movies stored in localStorage
 * We might want to store additional metadata like when it was favorited
 */
export interface FavoriteMovie extends Movie {
  favorited_at: string;   // ISO timestamp when movie was favorited
}

/**
 * Type for genre - useful if we want to display genres by name
 */
export interface Genre {
  id: number;
  name: string;
}

/**
 * Type for the movie search parameters
 * Useful if we implement search functionality later
 */
export interface SearchParams {
  query: string;
  page?: number;
  year?: number;
  genre?: number;
}

/**
 * Type for movie filters
 * Useful if we want to add filtering options
 */
export interface MovieFilters {
  genres: number[];
  yearRange: {
    min: number;
    max: number;
  };
  ratingRange: {
    min: number;
    max: number;
  };
}

/**
 * Type for the movie card props to ensure type safety
 */
export interface MovieCardProps {
  movie: Movie;
  showFavoriteButton?: boolean;
  size?: 'small' | 'medium' | 'large';
  onFavoriteToggle?: (movie: Movie, isFavorite: boolean) => void;
}

/**
 * Type for the movie grid props
 */
export interface MovieGridProps {
  movies: Movie[];
  title?: string;
  loading?: boolean;
  emptyMessage?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
}