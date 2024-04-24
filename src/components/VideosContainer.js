// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="flex flex-wrap rounded-lg px-20">
      {videos &&
        videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <div>
              <VideoCard info={video} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default VideosContainer;
