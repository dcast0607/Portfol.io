import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";



function Nav() {

  const styles = {
    container: {
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1% 10% 1% 20%'
    },
    navLinks: {
      display: 'flex',
      gap: '1vw',
      listStyle: 'none',
      color: 'white',
      paddingTop: '1vw'
    },
    log: {
      textDecoration: 'none',
      color: 'white',
    },
  }

    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <ul style={styles.navLinks}>
              <li>
                <Link to="/" style={styles.log}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" style={styles.log}>
                  Profile
                </Link>
              </li>
              <li>
                {/* this is not using the Link component to logout user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()} style={styles.log}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul style={styles.navLinks}>
              <li>
                <Link to="/" style={styles.log}>
                  Home
                </Link>
              </li>
              <li >
                <Link to="/login" style={styles.log}>
                  Login
                </Link>
              </li>
            </ul>
          );
        }
      }

      return (
        <header style={styles.container}>
            <h1>PORTFOL-IO</h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
      )
}

export default Nav