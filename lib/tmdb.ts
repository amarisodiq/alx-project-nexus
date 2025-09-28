import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const movieAPI = {
  getTrending: () => tmdb.get('/trending/movie/week'),
  getMovieDetails: (id: number) => tmdb.get(`/movie/${id}`),
  searchMovies: (query: string) => tmdb.get('/search/movie', { 
    params: { query } 
  }),
};

export const getImageUrl = (path: string | null, size: string = 'w500'): string => {
  if (!path) return '/placeholder-movie.jpg';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};