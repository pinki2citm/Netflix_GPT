import React, { useRef } from "react";
import { lang } from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/Gemini";
import { API_options } from "../utils/constant";
import { addGptmovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store?.config?.language);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    //console.log(json.results);
    return json.results;
  };

  const HandleGptSearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      "Act like a movie recommendation system and give me some movie names in: " +
      searchText.current.value +
      " give me only 5 movies name seperated with commas example: [a, b]";
    const result = await model.generateContent(prompt);
    const response = await result.response.text().split(", ");
    //console.log(response);
    //for each movie we will search in TMDB API (5 Promises will return)
    const promiseArray =response.map((movie) => searchMovie(movie));
   // console.log(promiseArray);
    const tmdb_results = await Promise.all(promiseArray);
   console.log(tmdb_results);
   dispatch(addGptmovieResult({ movieNames: response, movieResults: tmdb_results }));

  };

  return (
    <div className="mt-45 py-56 flex justify-center">
      <div className="w-1/2 grid grid-cols-12 bg-black rounded-lg">
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          className="p-4 m-4 bg-light-900 rounded-lg col-span-9"
        />
        <button
          className="col-span-3 m-4 bg-red-800 text-2xl text-white rounded-lg"
          onClick={HandleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </div>
    </div>
  );
}

export default GptSearchBar;
