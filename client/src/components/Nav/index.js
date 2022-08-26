import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="mx-1">
                {/* this is not using the Link component to logout user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          );
        }
      }

      return (
        <header>
            <h1>APP NAME</h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
      )
}

export default Nav