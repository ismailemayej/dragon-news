import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../../Contex/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [errorrPassword, setErrorPassword] = useState();

  const { passwordLogin } = useContext(AuthContext);

  const handleLoginforom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    passwordLogin(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.code);
        if (error.code === "auth/user-not-found" || "auth/wrong-password") {
          setErrorPassword("Your password or email is incorrect");
        }
      });
  };

  return (
    <Form
      onSubmit={handleLoginforom}
      className="container p-3 border rounded mt-5"
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="bg-light"
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
      <p className="text-warning"> {errorrPassword}</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
