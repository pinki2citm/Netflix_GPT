import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies} from "../utils/movieSlice"
import { API_options } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch =useDispatch();
  const TopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    )
    const json = await data.json();
   
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
  TopRatedMovies();
  }, []);
};

export default useTopRatedMovies;