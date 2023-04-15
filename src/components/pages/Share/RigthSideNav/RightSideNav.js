import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import CarouselsItem from "../Carousels/CarouselsItem";

import brand1 from "../../../../assests/brands/n1.jpg";
import brand2 from "../../../../assests/brands/n2.jpg";
import brand3 from "../../../../assests/brands/n3.jpg";
import { AuthContext } from "../../../../Contex/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { googleAuth, user } = useContext(AuthContext);

  const handleGoogle = () => {
    googleAuth()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {user?.uid ? (
        " "
      ) : (
        <ButtonGroup vertical>
          <Button onClick={handleGoogle} variant="outline-primary">
            <FcGoogle /> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login with Github
          </Button>
        </ButtonGroup>
      )}
      <div className="mt-3">
        <h5>Find on us</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook />
            facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twetter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> Linkdin
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <CarouselsItem></CarouselsItem>
      </div>
    </div>
  );
};

export default RightSideNav;
