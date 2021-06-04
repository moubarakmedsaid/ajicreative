import React, { useContext } from "react";
import { NewsContext } from "../page/NewsContext";
import NewsArticle from "./NewsArticle";
import {Row, Col} from 'reactstrap'
import  {NavbarComponent} from "./navbar.component";


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <>
    <NavbarComponent/>
    <div>
      <Row>
        <Col md="4"></Col>
        <Col md="6">
      <div>
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
      </Col>
      <Col md="3"></Col>
      </Row>
    </div>
    </>
  );
}

export default News;
