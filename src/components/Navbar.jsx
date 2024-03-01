import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    
  }

  return (
    <>
      <h1> Navbar </h1>
      <div className="navbarContainer">
        <ul className="navbarList">
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/about">About</NavLink>{" "}
          </li>
          {isUserSignedIn ? (
            <>
            <li>
              {" "}
              <NavLink to="/account">Account</NavLink>{" "}
              <button type="button" onClick={signout}> Signout </button>
            </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <NavLink to="/signup">Signup</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/login">Login</NavLink>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
