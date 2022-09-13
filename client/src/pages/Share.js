import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import StyleOne from "../components/StyleOne";
import StyleTwo from "../components/StyleTwo";
import { useParams } from 'react-router-dom';
import { QUERY_PORTFOLIO } from '../utils/queries';


const Share = () => {
    let { id } = useParams();
    const [portfolioBody, setPortfolioBody] = useState('none');

    const { loading, data } = useQuery(QUERY_PORTFOLIO, {
        variables: { _id: id },
    });
    
    const portfolio = data?.portfolio || [];

    if (portfolioBody == 'none' && portfolio.portfolioStyle) {
        const portfolioStyle = portfolio.portfolioStyle
      console.log(portfolioStyle)
      if (portfolioStyle === 'one') {
        setPortfolioBody(<StyleOne portfolio={portfolio}/>)
      } else if (portfolioStyle === 'two') {
        setPortfolioBody(<StyleTwo portfolio={portfolio}/>)
      } else if (portfolioStyle === 'three') {
        return <></>
      }
    } 
    
    const styles = {
        container: {
            marginTop: '32px',
            height: '100%',
            width: '100%',
            display: 'flex',
        },
    }
    return (
        <div style={styles.container}>
        {portfolioBody}
        </div>
    )
}

export default Share