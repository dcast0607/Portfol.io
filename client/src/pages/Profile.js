import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import StyleOne from "../components/StyleOne";
import StyleTwo from "../components/StyleTwo";
import StyleThree from "../components/StyleThree";
import EditPortfolio from "../components/EditPortfolio";
import AddProject from "../components/AddProject";
import { Link } from "react-router-dom";

import { QUERY_ME } from '../utils/queries';
//Questions:
//need help debugging why QUERY_ME is returning no data

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const profile = data?.me || {};
    const [portfolioBody, setPortfolioBody] = useState('none');
    const [EditContent, setEditContent] = useState(<button>Edit Portfolio</button>)
    const [ProjContent, setProjContent] = useState(<button>add project+</button>)
    const [shareBtn, setShareBtn] = useState('Share Portfolio')

    const styles = {
      errMsg: {
        width: '50%',
        margin: '25%',
        textAlign: 'center',
        fontSize: '20px'
      },
      link: {
        textDecoration: 'none',

        color: 'blue',
      },
      container: {
        marginTop: '45px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      body: {
        width: '100%'
      },
      btn: {
        width: '100%'
      },
    }

    const [btnContainer, setBtnContainer] = useState({
        width: '10%',
        top: '45px'
    })
    const path = window.location.href

    const copyUrl = () => {
      const shareUrl = window.location.href + '/' + profile._id
      navigator.clipboard.writeText(shareUrl)
      setShareBtn('Copied to Clipboard')
    };

    const clickEdit = () => {
      setEditContent(<EditPortfolio userData={profile}/>)
      setBtnContainer({
        width: '50%'
      })
    };

    const clickProjContent = () => {
      setProjContent(<AddProject userData={profile}/>)
      setBtnContainer({
        width: '25%'
      })
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
        setPortfolioBody(<StyleThree portfolio={portfolio}/>)
      } else {
        return <></>
      }
    }
    
    

  return (
    <div style={styles.container}>
      <div style={btnContainer}>
        <button onClick={copyUrl}>{shareBtn}</button>
        <div onClick={clickEdit} style={styles.btn}>{EditContent}</div>
        <div onClick={clickProjContent} style={styles.btn}>{ProjContent}</div>
      </div>
      <div style={styles.body}>
        {portfolioBody}
      </div>
    </div>
  )
}

export default Profile