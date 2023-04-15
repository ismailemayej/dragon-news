import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../../../Contex/AuthProvider/AuthProvider";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(photoURLRef);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="container p-3 border rounded mt-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            className="bg-light"
            type="text"
            placeholder="Enter your name"
            name="name"
            defaultValue={name}
          />
          <Form.Label>Your photo url</Form.Label>
          <Form.Control
            className="bg-light"
            type="text"
            placeholder="Enter your photourl"
            name="Photourl"
            ref={photoURLRef}
            defaultValue={user?.photoURL}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="bg-light"
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={user?.email}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
