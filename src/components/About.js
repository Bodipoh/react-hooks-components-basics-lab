import React from "react";
import { ReactDOM } from "react-dom";

function Card(props) {
  console.log(props)
  return (
    <div id="about">
      <h2>{props.About}</h2>
    </div>
  )
}
