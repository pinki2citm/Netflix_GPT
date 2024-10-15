import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addUpcomingMovies} from "../utils/movieSlice"
import { API_options } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch =useDispatch();
  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_options
    )
    const json = await data.json();
  
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
  upcomingMovies();
  }, []);
};

export default useUpcomingMovies;