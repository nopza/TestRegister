import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className="btn btn-primary" to="/register">
        Register
      </Link>
      <Link className="btn btn-warning" to="/profile">
        Profile
      </Link>
    </div>
  );
}

export default HomePage;
