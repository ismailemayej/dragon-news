import Carousel from "react-bootstrap/Carousel";

import React from "react";

import barand1 from "../../../../assests/brands/n1.jpg";
import barand2 from "../../../../assests/brands/n2.jpg";
import barand3 from "../../../../assests/brands/n3.jpg";

const CarouselsItem = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={barand1} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={barand2} />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={barand3} />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselsItem;
