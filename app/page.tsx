import { movieAPI } from "../lib/tmdb";
import { Movie } from "../types/movie";
import MovieGrid from "../components/MovieGrid";
import DynamicHeroSection from "@/components/DynamicHeroSection";

export default async function HomePage() {
  let trendingMovies: Movie[] = [];

  try {
    const response = await movieAPI.getTrending();
    trendingMovies = response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }

  return (
    <main>
      <DynamicHeroSection></DynamicHeroSection>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-500 mb-2">
            Discover Amazing Movies
          </h1>
          <p className="text-gray-500">
            Browse trending movies and save your favorites
          </p>
        </div>

        <MovieGrid movies={trendingMovies} title="🔥 Trending This Week" />
      </div>
    </main>
  );
}
