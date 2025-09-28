import { movieAPI, getImageUrl } from "../../../lib/tmdb";
import { notFound } from "next/navigation";
import FavoriteButton from "../../../components/FavoriteButton";
import Image from "next/image";
import { MovieDetails } from "../../../types/movie";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  let movie: MovieDetails;

  try {
    const response = await movieAPI.getMovieDetails(parseInt(id));
    movie = response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="relative h-96 bg-cover bg-center rounded-lg mb-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${getImageUrl(
            movie.backdrop_path,
            "w1280"
          )})`,
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
          <div className="flex flex-wrap items-center space-x-4">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            {movie.runtime && <span>{movie.runtime} minutes</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <Image
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="mt-4 flex justify-center">
            <FavoriteButton movie={movie} size="large" />
          </div>
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {movie.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Details</h3>
              <div className="space-y-2 text-sm">
                {movie.genres && movie.genres.length > 0 && (
                  <p>
                    <strong>Genres:</strong>{" "}
                    {movie.genres.map((g) => g.name).join(", ")}
                  </p>
                )}
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                {movie.runtime && (
                  <p>
                    <strong>Runtime:</strong> {movie.runtime} minutes
                  </p>
                )}
                {movie.budget > 0 && (
                  <p>
                    <strong>Budget:</strong> ${movie.budget.toLocaleString()}
                  </p>
                )}
                {movie.revenue > 0 && (
                  <p>
                    <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            {movie.production_companies &&
              movie.production_companies.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Production Companies
                  </h3>
                  <p className="text-sm">
                    {movie.production_companies.map((pc) => pc.name).join(", ")}
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
