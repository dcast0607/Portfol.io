import React, { useState } from "react";
import './styles/styles.css';
import PortfolioContainer from "./components/PortfolioContainer"



function StyleTwo(params) {
    
    let userData
    if (params.portfolio) {
        userData = {
            name: params.portfolio.name,
            bio: params.portfolio.bio,
            contactEmail: params.portfolio.contactEmail,
            portrait: params.portfolio.portrait,
            title: params.portfolio.title,
            resumeUrl: params.portfolio.resumeUrl,
            projects: params.portfolio.projects
        }
    } else {
        userData = {
            name: 'John Doe', 
            bio: 'Hi my name is John and this is my ',
            contactEmail: 'johndoe@john.com', 
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

export default StyleTwo