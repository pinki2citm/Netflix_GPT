import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies} from "../utils/movieSlice"
import { API_options } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch =useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_options
    )
    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
   popularMovies();
  }, []);
};

export default usePopularMovies;