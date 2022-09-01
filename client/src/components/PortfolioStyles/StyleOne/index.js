import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer"

function StyleOne(params) {
    
    //First check if the user is passing their information in to create a portfolio
    //If not, create the portfolio using the sample data (John Doe)
    const [userData, setUserData] = useState(
        {
            name: 'John Doe', 
            bio: 'Hi my name is John and this is my ', 
            portrait: '' 
        }
    );
    if (params) {
        setUserData({
            name: params.name,
            bio: params.bio,
            portrait: params.portrait
        })
    }



    return (
        //This is where the portfolio template will be, using the userData to fill in the template
        <div>
            <PortfolioContainer params={userData} />
        </div>
    )
}

export default StyleOne