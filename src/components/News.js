import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import placeholder from "./placeholder.jpeg";

function News(props) {
  const [articles, setArticles] = useState([]);

  const fetchingData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c33a4d3161574668afdaf6c65c3879fe`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setArticles(data.articles);
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <h1 className="news-header">NewsMonkey. - Top Headlines</h1>
      <div className="row">
        {articles.map((element) => {
          const {
            title,
            description,
            urlToImage,
            url,
            author,
            publishedAt,
            source,
          } = element;
          return (
            <div className="news-width column" key={url}>
              <NewsItem
                title={title ? title.substring(0, 60) : "No Title"}
                description={
                  description ? description.substring(0, 150) : "No Description"
                }
                img={urlToImage ? urlToImage : placeholder}
                newsUrl={url}
                author={author ? author.substring(0, 25) : "Unknown"}
                publishedAt={publishedAt ? publishedAt : "Unknown"}
                batch={source.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
