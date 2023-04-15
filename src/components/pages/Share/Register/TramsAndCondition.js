import React from "react";
import { Link } from "react-router-dom";

const TramsAndCondition = () => {
  return (
    <div>
      <h1>Here is our terms ans condition</h1>
      <p>
        Go back to register : <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TramsAndCondition;
