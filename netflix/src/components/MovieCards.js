import React from 'react'
import {image_url} from "../utils/constant"

function MovieCards({poster_path}) {
  if(poster_path==null) return null;
  return (
    <div className='p-2'>
      <img
      alt="Movie icon"
      width="300px"
      src ={image_url + poster_path}
      />
    </div>
  )
}

export default MovieCards
