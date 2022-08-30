import React, { useState } from "react";
import { Link } from "react-router-dom";


function Portfolio(profile) {

  const getPortfolio = () => {
      if (profile.portfolio) {
        const portfolioStyle = profile.portfolio.portfolioStyle
        if (portfolioStyle === 'one') {
          //repeat for all possible styles that we create
          //example: <PortfolioStyleOne params={profile} />
          return (
            <></>
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
            <div>
                <span>Looks like you haven't created a portfolio yet! Click </span> 
                <Link to="/create" >
                  here
                </Link>
                <span> to get started</span>
            </div>
        )
      }
      }
      const portfolio = getPortfolio()

    return (
        //maybe have component like edit button that lets you edit the portfolio
        <div>
            {portfolio}
        </div>
    )
}

export default Portfolio