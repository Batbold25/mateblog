import React, { useDebugValue, useEffect } from "react";
import { useState } from "react";

const data = ["Steve", "Tony", "Stark", "Thor"];
export const Allblog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="w-screen">
      <div className="w-10/12 font-['Work_Sans'] text-2xl font-bold leading-7">
        <h1>All Blog Post</h1>
      </div>

      <div>
        <div>
          <img src={articles[0].cover_image} alt="" />
          {articles[0].tag_list.map((tag) => (
            <p>{tag}</p>
          ))}
          <h1>{articles[0].title}</h1>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <div></div>
          </div>
        </div>
        <div>
          <img src={articles[0].cover_image} alt="" />
          {articles[0].tag_list.map((tag) => (
            <p>{tag}</p>
          ))}
          <h1>{articles[0].title}</h1>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <div></div>
          </div>
        </div>
        <div>
          <img src={articles[0].cover_image} alt="" />
          {articles[0].tag_list.map((tag) => (
            <p>{tag}</p>
          ))}
          <h1>{articles[0].title}</h1>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <div></div>
          </div>
        </div>
        <div>
          <img src={articles[0].cover_image} alt="" />
          {articles[0].tag_list.map((tag) => (
            <p>{tag}</p>
          ))}
          <h1>{articles[0].title}</h1>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <div></div>
          </div>
        </div>
        <div>
          <img src={articles[0].cover_image} alt="" />
          {articles[0].tag_list.map((tag) => (
            <p>{tag}</p>
          ))}
          <h1>{articles[0].title}</h1>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
