import React, { useEffect, useState } from "react";
import {
  HAMBURGER_MENU,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu icon"
          src={HAMBURGER_MENU}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube logo" src={YOUTUBE_LOGO} />
        </a>
      </div>
      <div className="flex items-center justify-center col-span-10 relative">
        <div className="flex w-96">
          <input
            className="h-10 flex-1 pl-3 border border-gray-600 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="flex items-center justify-center text-white rounded-r-full">
            <img
              className="rounded-r-full px-2 py-2 h-10 border border-gray-600"
              alt="search icon"
              src={SEARCH_ICON}
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute w-96 top-12 border border-gray-400 shadow-md bg-white text-black rounded-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img className="h-10 pr-4 rounded-lg" alt="user icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
