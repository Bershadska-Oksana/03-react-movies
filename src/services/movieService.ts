import axios from "axios";
import type { Movie } from "../types/movie";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await api.get<SearchMoviesResponse>("/search/movie", {
    params: { query },
  });

  return response.data.results;
};
