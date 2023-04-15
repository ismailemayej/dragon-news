import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCart from "../Share/newsSummay/NewsSummaryCart";

const Home = () => {
  const Allnews = useLoaderData();

  return (
    <div>
      {Allnews.map((news) => (
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Home;
