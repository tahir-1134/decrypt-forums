import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsList.css";
import axios from "axios";

function NewsList() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=602e2d8471c943b4b3a05388ecc32c1e&q=bitcoin"
      )
      .then((response) => setNewsData(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="newsList">
        {newsData.slice(0,10).map((item) => (
          <NewsItem
            key={item.id}
            author={item.author || "Unknown"}
            title={item.title}
            description={item.description}
            source={item.url}
            image={item.urlToImage}
          />
        ))}
    </div>
  );
}

export default NewsList;
