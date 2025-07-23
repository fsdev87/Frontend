import React from "react";
import "./Die.css";

const Die = (props) => {
  return <button className="die">{props.value}</button>;
};

export default Die;
