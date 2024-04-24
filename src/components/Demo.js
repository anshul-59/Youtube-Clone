import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "m-4 p-2 border border-black w-96 h-96 " +
        (isDarkTheme ? "bg-gray-900 text-white" : "")
      }
    >
      <div>
        <button
          className="bg-blue-500 px-2 py-1 m-2 rounded-lg"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? "Dark" : "Light"}
        </button>
      </div>
      <div>
        <input
          className="border border-gray-400 rounded-lg px-2 py-1 w-72"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>nth Prime number : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
