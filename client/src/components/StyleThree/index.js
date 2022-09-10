import React, { useState } from "react";
import './styles/styles.css';
import PortfolioContainer from "./components/PortfolioContainer"

function StyleThree(params) {
    
    //First check if the user is passing their information in to create a portfolio
    //If not, create the portfolio using the sample data (John Doe)
    let userData
    if (params.portfolio) {
        userData = {
            name: params.portfolio.name,
            bio: params.portfolio.bio,
            portrait: params.portfolio.portrait,
            title: params.portfolio.title,
            resumeUrl: params.portfolio.resumeUrl,
            projects: params.portfolio.projects
        }
    } else {
        userData = {
            name: 'John Doe', 
            bio: 'Hi my name is John and this is my ', 
            portrait: '' ,
            title: 'Johns Portfolio',
            projects: [
                'Johns Project',
            ]
        }
    }

    const styles = {
        container: {
            height: '100%',
        }
    }

    return (
        //This is where the portfolio template will be, using the userData to fill in the template
        <div style={styles.container}>
            <PortfolioContainer userData={userData} />
        </div>
    )
}

export default StyleThree