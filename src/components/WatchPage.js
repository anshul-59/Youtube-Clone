import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addToLikedVideos } from "../utils/likedVideosSlice";

const WatchPage = () => {
  const [serachParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleLike = () => {
    dispatch(addToLikedVideos());
  };
  return (
    <div className="flex flex-col w-full">
      <div className="w-full px-5 py-2 flex">
        <div>
          <iframe
            className="rounded-lg"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + serachParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full ">
          <LiveChat />
        </div>
      </div>
      <div>
        <button onClick={handleLike} className="bg-red-300">
          Like
        </button>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
