import React from "react";
import { useSelector } from "react-redux";
import useVideoBg from "../hooks/useVideoBg";

function VideoBg({movieId}) {
  const video_from_redux = useSelector((state) => state?.movies?.trailerVideo);
  useVideoBg(movieId);
  return (
    <div className="" >
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + video_from_redux?.key +"?&autoplay=1&mute=1"}
        title="Kingdom of the Planet of the Apes | Final Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>
    </div>
  );
}

export default VideoBg;
