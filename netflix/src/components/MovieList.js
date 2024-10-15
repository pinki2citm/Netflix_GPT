import React from "react";
import MovieCards from "./MovieCards";

function MovieList({ title, movies }) {
  return (
    <div className="">
    <div className="bg-black text-white">
      <h1 className="text-4xl">{title}</h1>
      <div className="flex px-2 overflow-x-scroll">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCards key={movie.id} poster_path={movie.poster_path} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default MovieList;
