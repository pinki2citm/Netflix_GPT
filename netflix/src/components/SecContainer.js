import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecContainer() {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="-mt-55 relative z-20 bg-black">
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title = {"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
  );
}

export default SecContainer;
