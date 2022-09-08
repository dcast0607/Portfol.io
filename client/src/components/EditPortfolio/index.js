import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../../utils/mutations";
import AddProject from "../AddProject";
//Need new Mutation UPDATE_PORTFOLIO and replace it with SAVE_PORTFOLIO
//The new mutation will first remove the original data in the portfolio array and then add the new data

const EditPortfolio = (params) => {
    const portfolio = params.userData.portfolio[0]
    const [formState, setFormState] = useState({ portfolioStyle: portfolio.portfolioStyle, name: portfolio.name, bio: portfolio.bio, portrait: portfolio.portrait, title: portfolio.title, resumeUrl: portfolio.resumeUrl, projects: portfolio.projects });
    const [savePortfolio] = useMutation(SAVE_PORTFOLIO);

    const [ProjContent, setProjContent] = useState(<button>add project+</button>)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          await savePortfolio({
            variables: { input: { ...formState } }
          });   
          window.location.assign('/profile');
        }  catch (err) {
          console.error(err)
        } 
      };

    const clickProjContent = () => {
        setProjContent(<AddProject />)
    }

    const cancel = () => {
        window.location.assign('/profile');
        //maybe try another method where we don't have to reload all components
    }

    const styles = {
        container: {
          marginTop: '5%',
          width: '100%'
        },
        headerContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
        },
        title: {
          textAlign: 'center',
          marginTop: '10px'
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        },
        inputContainer: {
          marginLeft: '5%',
          marginRight: '5%',
          display: 'flex',
          flexDirection: 'column',
        },
        portfolioStyles: {
          display: 'flex',
          width: '100%',
          display: 'flex',
          marginTop: '10px',
          gap: '15px'
        },
        styleContainer: {
          width: '20%',
        },
        img: {
          maxWidth: '100%',
          maxHeight:'fit-content',
        },
        radio: {
          width: '100%'
        },
        bio: {
          width: '100%',
          height: '5vw',
          outline: 'none',
          padding: '4px'
        },
        btn: {
          marginLeft: '5%',
          width: '10%'
        },
    }

    return (
        //here we will render the form that will gather the users information
      <div style={styles.container}>
        <div style={styles.headerContainer}>
            <h2 style={styles.title}>EDIT YOUR PORTFOLIO</h2>
            <button onClick={cancel}>Cancel</button>
        </div> 
        <form onSubmit={handleFormSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="portfolioStyles">Choose a style for your portfolio:</label>
          <div style={styles.portfolioStyles} name="portfolioStyles">
            <label htmlFor="portfolioStyleOne" style={styles.styleContainer}>
              <img src={`/images/slide0.png`} alt="preview for portfolio Style One" style={styles.img}/>
              <input
                name="portfolioStyle"
                type="radio"
                value="one"
                style={styles.radio}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="portfolioStyleTwo" style={styles.styleContainer}>
              <img src={`/images/slide1.png`} alt="preview for portfolio Style Two" style={styles.img}/>
              <input
                name="portfolioStyle"
                type="radio"
                value="two"
                style={styles.radio}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="portfolioStyleThree" style={styles.styleContainer}>
              <img src={`/images/slide2.png`} alt="preview for portfolio Style Three" style={styles.img}/>
              <input
                name="portfolioStyle"
                type="radio"
                value="three"
                style={styles.radio}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            value={portfolio.name}
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="title">Title:</label>
          <input
            value={portfolio.title}
            name="title"
            type="text"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            value={portfolio.bio}
            name="bio"
            id="bio"
            onChange={handleChange}
            style={styles.bio}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="portrait">Upload a self-portrait:</label>
          <input
            value={portfolio.portrait}
            name="portrait"
            type="portrait"
            id="portrait"
            onChange={handleChange}
          />
        </div>
        <div onClick={clickProjContent} style={styles.btn}>{ProjContent}</div>
        <div style={styles.inputContainer}>
          <label htmlFor="name">Resume:</label>
          <input
            value={portfolio.resumeUrl}
            name="resumeUrl"
            type="text"
            id="resume"
            onChange={handleChange}
          />
        </div>
        <div style={styles.btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
}

export default EditPortfolio