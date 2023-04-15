import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../../Contex/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [accept, setAccept] = useState(false);

  const { PasswordRegistration, varifyEmail, updateUserProfile } =
    useContext(AuthContext);

  const handleRegisterforom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.names.value;
    const photoUrl = form.Photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    const ConfirmPassword = form.ConfirmPassword.value;
    PasswordRegistration(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        handleUserUpdateProfile(name, photoUrl);
        handleEmailVarfy();

        navigate("/");
      })
      .catch((error) => console.error(error.messege));
    setError(error);
    // if (password >= 6) {
    //   setError("please your password lenght minumum 6 charecter");
    // }
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  const handleUserUpdateProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((erorr) => console.error(erorr.code));
  };
  const handleEmailVarfy = () => {
    varifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Form
        onSubmit={handleRegisterforom}
        className="container p-3 border rounded mt-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="bg-light"
            type="text"
            placeholder="Enter your name"
            name="names"
          />
          <Form.Label>Your photo url</Form.Label>
          <Form.Control
            className="bg-light"
            type="text"
            placeholder="Enter your photourl"
            name="Photourl"
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="bg-light"
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="bg-light"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="bg-light"
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
          />
        </Form.Group>
        <p>{error}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccept}
            label={
              <>
                Accept <Link to="/terms">Terms and condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
