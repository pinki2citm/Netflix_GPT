import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

function MainContainer() {
  //fetched the data from Redux-Store
    const movies =useSelector((store)=> store.movies?.NowPlayingMovies);
  
    if(movies===null) return;
    const mainMovie = movies[0];
  
  return (
    <div>
     <VideoTitle title={mainMovie.original_title} overview ={mainMovie.overview}/>
     <VideoBg movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer
