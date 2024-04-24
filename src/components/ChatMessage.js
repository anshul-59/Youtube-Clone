import React, { useEffect } from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img className="h-8" alt="user icon" src={USER_ICON} />
      <span className="font-bold px-2 py-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
