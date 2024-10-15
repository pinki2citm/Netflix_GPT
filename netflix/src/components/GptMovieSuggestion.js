import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestion() {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (movieNames == null) return;
  //const movie_Names =movieNames.split(', ');

  return (
    <>
      <div className="p-4 mx-4 bg-black text-white bg-opaque">
        {movieNames.map((movie,index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]}
          />
        ))}
        ;
      </div>
    </>
  );
}

export default GptMovieSuggestion;
