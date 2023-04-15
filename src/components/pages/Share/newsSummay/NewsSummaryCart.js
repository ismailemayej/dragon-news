import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;
  return (
    <Card className="mt-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
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
      </Card.Header>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "...."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
          {" "}
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

export default NewsSummaryCart;
