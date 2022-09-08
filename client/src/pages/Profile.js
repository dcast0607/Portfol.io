import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import StyleOne from "../components/StyleOne";
import StyleTwo from "../components/StyleTwo";
import { Link } from "react-router-dom";

import { QUERY_ME } from '../utils/queries';
//Questions:
//need help debugging why QUERY_ME is returning no data

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const profile = data?.me || {};
    const [portfolioBody, setPortfolioBody] = useState('none')

    const styles = {
      errMsg: {
        width: '50%',
        margin: '20px 25%',
        textAlign: 'center'
      },
      link: {
        textDecoration: 'none',
      },
    }

    if (!profile?.username) {
        return (
          <h4 style={styles.errMsg}>
            Oops, looks like you're not logged in! Click 
            <Link to="/login" style={styles.link}> here </Link>
            to log in.
          </h4>
        );
    } else if (profile.portfolio.length === 0) {
      return (
        <h4 style={styles.errMsg}>
            Looks like you haven't created a portfolio yet! Click
            <Link to="/create" style={styles.link}> here </Link>
            to get started
        </h4>
      )
    } else if (portfolioBody == 'none') {
      const portfolio = profile.portfolio[0]
      const portfolioStyle = portfolio.portfolioStyle
      
      if (portfolioStyle === 'one') {
        setPortfolioBody(<StyleOne portfolio={portfolio}/>)
      } else if (portfolioStyle === 'two') {
        setPortfolioBody(<StyleTwo portfolio={portfolio}/>)
      } else if (portfolioStyle === 'three') {
        return <></>
      }
    } 

  return (
    <div>
      {portfolioBody}
    </div>
  )
}

export default Profile