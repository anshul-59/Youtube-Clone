import React from "react";
import Button from "./Button";

const List = ["All", "Cricket", "Formula"];

const ButtonsList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Formula 1" />
      <Button name="Football" />
      <Button name="Live" />
      <Button name="Funny" />
    </div>
  );
};

export default ButtonsList;
