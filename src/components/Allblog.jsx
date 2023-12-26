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
    <div className="lg:w-screen flex justify-center items-center flex-col gap-12">
      <div className="lg:w-10/12 font-['Work_Sans'] text-2xl font-bold leading-7">
        <h1>All Blog Post</h1>
      </div>
      <div className=" flex flex-wrap gap-5 p-5 lg:w-10/12 lg:grid grid-cols-3 lg:gap-5">
        {articles.map((article) => {
          return (
            <div className="  shadow-lg border rounded-xl p-4 flex  justify-between flex-col">
              <img
                className="rounded-xl h-auto w-full mb-4"
                src={
                  article.cover_image
                    ? article.cover_image
                    : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                }
                alt=""
              />
              <p className=" font-['Work_Sans'] text-sm py-1 px-2 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md w-fit">
                tech
              </p>

              <h2 className="pt-4 pb-5 text-2xl font-semibold">
                {article.title}
              </h2>
              <div className=" w-full flex  items-center">
                <img
                  className=" w-7 h-7   lg:w-9 lg:h-9 rounded-full "
                  src={
                    article.user.profile_image
                      ? article.user.profile_image
                      : "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
                  }
                  alt=""
                />
                <p className="pl-3 pr-5 font-normal">{article.user.name}</p>
                <p className="font-normal">
                  {article.readable_publish_date} 2022
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className=" lg:w-10/12 font-['Work_Sans'] text-2xl p-5 border-solid leading-7">
        Load More
      </button>
    </div>
  );
};
