import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from '../utils/movieSlice';

const  useVideoBg = (movieId)=> {
    
    const dispatch =useDispatch();
    const trailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
          API_options
        );
        const json = await data.json();
        
    
        const filter_data = json.results.filter(
          (video) => video.type === "Trailer"
        );
    const trailer_data = filter_data.length ? filter_data[0] : json.results[0];
      
        // setTrailerId(trailer_data.key);
        dispatch(addTrailerVideo(trailer_data));
      };
      useEffect(() => {
        trailer();
      }, []);
}
export default useVideoBg;
