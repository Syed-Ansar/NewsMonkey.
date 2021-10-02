import React from "react";
import "./NewsItem.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function NewsItem({
  title,
  description,
  img,
  newsUrl,
  author,
  publishedAt,
  batch,
}) {
  const date = new Date(publishedAt);
  return (
    <div>
      <div className="card">
        <img src={img} alt="" height="150" />
        <div className="card-body">
          <h4 className="card-title">{title}...</h4>
          <p className="card-text">
            {description}...
            <a href={newsUrl} target="_blank">
              Read More
            </a>
          </p>
          <h4 className="card-author">Author : {author}</h4>
          <p className="card-date">Date : {date.toUTCString()}</p>
          <div className="badge">
            <p style={{ backgroundColor: getRandomColor(), borderRadius: 10 }}>
              {batch}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
