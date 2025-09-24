import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie, SearchMoviesResponse } from "../types/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

export async function fetchMovies(query: string, page = 1): Promise<Movie[]> {
  try {
    const response: AxiosResponse<SearchMoviesResponse> = await api.get(
      "/search/movie",
      {
        params: {
          query,
          page,
          include_adult: false,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
}
