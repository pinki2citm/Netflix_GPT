import React from "react";

function VideoTitle(props) {
  return (
    <div className="w-full aspect-video pt-36 px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="py-6 m-2 text-6xl font-bold w-1/4"> {props.title}</h1>
      <h1 className="py-6 m-2 text-lg w-1/4 "> {props.overview}</h1>

      <div className="text-left">
        <button className="text-white bg-gray-800 hover:bg-gray-9 rounded-lg text-xl px-12 p-4  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          ▶Play
        </button>
        <button className="mx-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 rounded-lg text-xl px-12 p-4 dark:bg-green-600 dark:hover:bg-green-700">
          View More
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
