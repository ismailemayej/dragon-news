import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCart from "../Share/newsSummay/NewsSummaryCart";

const Catagory = () => {
  const CatagoryNews = useLoaderData();
  return (
    <div>
      {CatagoryNews.map((news) => (
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Catagory;
