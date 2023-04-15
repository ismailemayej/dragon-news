import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { _id, title, author, details, image_url, total_view, rating } = news;

  return (
    <Card className="mt-3">
      <Card.Img variant="top" src={image_url} />

      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              className="mt-2"
              roundedCircle
              src={author.img}
              style={{ height: "40px" }}
            ></Image>
            <div className="ms-2">
              <p className="mb-0">{author.name}</p>
              <p className="mt-0">{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Text>{<p>{details}</p>}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
          <FaStar></FaStar> {rating?.number}
        </div>
        <div>
          <FaEye></FaEye>
          <span className="ms-1"> {total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default News;
