import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addNowPlayingMovies} from "../utils/movieSlice"
import { API_options } from "../utils/constant";

const usePlayingMovies = () => {
  const dispatch =useDispatch();
  const playMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    )
    const json = await data.json();
    //(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    playMovies();
  }, []);
};

export default usePlayingMovies;