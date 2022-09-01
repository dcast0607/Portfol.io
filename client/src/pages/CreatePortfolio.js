import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"
import {StyleOne, StyleTwo} from "../components/PortfolioStyles"


const CreatePortfolio = () => {
  const { loading, data } = useQuery(QUERY_ME);

    const profile = data?.me || {};
    
    

    //saving info to Users portfolio schema 
    const [formState, setFormState] = useState({ portfolioStyle: '', name: '', bio: '', portrait: '', title: '' });
    const [savePortfolio] = useMutation(SAVE_PORTFOLIO);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        savePortfolio({
          variables: {...formState},
        });        
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const styles = {
        portfolioStyles: {
          display: 'flex',
          marginTop: '2vw',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around'
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
        }
      }

      if (!profile?.username) {
        return (
          <h4>
            You need to be logged in to create a portfolio. Use the navigation
            links above to sign up or log in!
          </h4>
        );
    }

    return (
        //here we will render the form that will gather the users information
      <div>
        <form onSubmit={handleFormSubmit}>
        <div style={styles.portfolioStyles}>
          <label htmlFor="portfolioStyleOne" style={styles.styleContainer}>
            <img src={`/images/slide0.png`} alt="preview for portfolio Style One" style={styles.img}/>
            <input
              name="portfolioStyle"
              type="radio"
              style={styles.radio}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="portfolioStyleTwo" style={styles.styleContainer}>
            <img src={`/images/slide1.png`} alt="preview for portfolio Style Two" style={styles.img}/>
            <input
              name="portfolioStyle"
              type="radio"
              style={styles.radio}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="portfolioStyleThree" style={styles.styleContainer}>
            <img src={`/images/slide2.png`} alt="preview for portfolio Style Three" style={styles.img}/>
            <input
              name="portfolioStyle"
              type="radio"
              style={styles.radio}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="John Doe"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Title:</label>
          <input
            placeholder="Title for portfolio"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="bio">Bio:</label>
          <textarea
            placeholder="Describe yourself in a paragraph"
            name="bio"
            id="bio"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="portrait">Upload a self-portrait:</label>
          <input
            placeholder="John Doe"
            name="portrait"
            type="portrait"
            id="portrait"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
    

    
}

export default CreatePortfolio