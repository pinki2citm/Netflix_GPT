import React from "react";
import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //fetch the data and update the store
  usePlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecContainer />
        </>
      )}
      {/* 
     Main Container
    1. videoBackGround
    2. secondary container contains other videos
  
  
  */}
    </div>
  );
};

export default Browse;
