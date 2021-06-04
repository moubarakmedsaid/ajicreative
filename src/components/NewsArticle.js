import React from "react";
import moment from "moment";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h5>LE POINT :</h5><span className="news__source">{data.source.name+" "+moment(data.publishedAt)
            .format('DD/MM/YYYY, hh:mm a')}</span>
      <h1 className="news__title">{data.title}</h1>
      <span> <img className="news__img" src= {data.urlToImage}/></span>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />      
    </div>
  );
}

export default NewsArticle;
