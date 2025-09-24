// src/components/MovieGrid/MovieGrid.tsx
import React from "react";
import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
import { posterUrl } from "../../utils/image";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onSelect }) => {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div
            className={css.card}
            onClick={() => onSelect(movie)}
            role="button"
          >
            <img
              className={css.image}
              src={posterUrl(movie.poster_path)}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieGrid;
