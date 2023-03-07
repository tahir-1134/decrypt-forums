// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "./NewsItem.css";

function NewsItem({ author, title, description, source, image }) {
  return (
    <div className="newsItem">
      <div className="newItem__top">
        <img
          className="newsItem__image"
          src={
            image ||
            "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/pavelstasevich181101028.jpg?ver=6"
          }
          alt=""
        ></img>
      </div>
      <div className="newsItem__description">
        <div>
        <h3>{title.slice(0,80)}</h3>
        <em><h5>- {author}</h5></em>
        </div>
        <p>{description.slice(0,150)+"..."}</p>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
