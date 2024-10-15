import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { bg_logo } from '../utils/constant';

function GPTsearch() {
  return (
    <>
    <div className="absolute -z-10">
    <img
      src={bg_logo}
      alt="netflixgpt"
    />
  </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </>
  )
}

export default GPTsearch;
