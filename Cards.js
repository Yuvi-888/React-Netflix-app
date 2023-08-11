import React from "react";
import css from "../index.css";

export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.img}/>
          <h2 className="card_title">{props.title}</h2>
          <a href={props.link}>
            <button className="watch_btn">Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}
