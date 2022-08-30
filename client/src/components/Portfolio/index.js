import React, { useState } from "react";

function Portfolio(profile) {
    const portfolioStyle = profile.portfolio.portfolioStyle

    const getPortfolio = () => {
        if (portfolioStyle === 'one') {
          //repeat for all possible styles that we create
          //example: <PortfolioStyleOne params={profile} />
          return (
            <></>
          )
        } else if (portfolioStyle === 'two') {
          return <></>
        } else if (portfolioStyle === 'three') {
  
        } else {
          return (
            //returns if user hasn't created their portfolio yet, also renders buttton that will
            //link the user to the <CreatePortfolio /> page.
              <div>
                  No portfolio found
                  <button>create portfolio</button>
              </div>
          )
        }
      }
    
    
    return (
        //maybe have component like edit button that lets you edit the portfolio
        <div>
            {getPortfolio}
        </div>
    )
}

export default Portfolio