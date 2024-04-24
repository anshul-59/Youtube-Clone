import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [
      {
        name: "Anshul Bansod",
        text: "This video is really good",
        replies: [
          {
            name: "Anshul Bansod",
            text: "This video is really good",
            replies: [
              {
                name: "Anshul Bansod",
                text: "This video is really good",
                replies: [
                  {
                    name: "Anshul Bansod",
                    text: "This video is really good",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
  {
    name: "Anshul Bansod",
    text: "This video is really good",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { text, name, replies } = data;
  return (
    <div className="px-1 flex  bg-gray-200 rounded-lg items-center gap-2">
      <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        className="w-7 h-7  "
      />
      <div>
        <p className="font-semibold ">{name}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="flex flex-col gap-y-2 ">
      <div>
        <Comment data={comment} key={comment?.id} />
      </div>

      <div className="pl-5  ml-3 flex flex-col  border-l border-l-black">
        <CommentsList comments={comment.replies} key={comment?.id} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="w-full md:w-4/5 flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />{" "}
      {/* Change `comment` to `comments` */}
    </div>
  );
};

export default CommentsContainer;
