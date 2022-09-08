import React, { useState } from "react";
import { Link } from "react-router-dom";


function Portfolio(profile) {
  const styles = {
    header: {
      margin: '15% 40%',
      fontFamily: 'Titilium',
      fontSize: '40px',
      backgroundColor: '#e7e7e7ce',
      borderRadius: '5px',
      textAlign: 'center',
      boxShadow: '0px 0px 3px 0px black'

    }
  }

  const getPortfolio = () => {
      if (profile.portfolio) {
        const portfolioStyle = profile.portfolio.portfolioStyle
        if (portfolioStyle === 'one') {
          //repeat for all possible styles that we create
          //example: <PortfolioStyleOne params={profile} />
          return (
            <div>
              <Link to="/EditPortfolio">
              Edit Portfolio
              </Link>
              <portfolioStyleOne args={profile.portfolio}/>
            </div>
          )
        } else if (portfolioStyle === 'two') {
          return <></>
        } else if (portfolioStyle === 'three') {
          return <></>
        } 
      } else {
          //returns if user hasn't created their portfolio yet, also renders buttton that will
            //link the user to the <CreatePortfolio /> page.
          return (
              <div  style={styles.header}>
                  <span>Looks like you haven't created a portfolio yet! Click </span> 
                  <Link to="/create" >
                    here
                  </Link>
                  <span> to get started!</span>
              </div>
          )
        }
      }
      const portfolio = getPortfolio()

    return (
        //maybe have component like edit button that lets you edit the portfolio
        <div>
          <div>
            {portfolio}
          </div>
        </div>
    )
}

export default Portfolio