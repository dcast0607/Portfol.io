import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_PORTFOLIO } from "../../utils/mutations";
import AddProject from "../AddProject";
import UploadFileModule from "../uploadFileModule";
//Need new Mutation UPDATE_PORTFOLIO and replace it with SAVE_PORTFOLIO
//The new mutation will first remove the original data in the portfolio array and then add the new data

const EditPortfolio = (params) => {

    const portfolio = params.userData.portfolio[0];
    
    const removeType = []
    portfolio.projects.forEach(project => {
      removeType.push({
          projectName: project.projectName, 
          projectUrl: project.projectUrl, 
          projectPreview: project.projectPreview
      })
    });

    const [formState, setFormState] = useState({ portfolioStyle: portfolio.portfolioStyle, name: portfolio.name, bio: portfolio.bio, contactEmail: portfolio.contactEmail, portrait: portfolio.portrait, title: portfolio.title, resumeUrl: portfolio.resumeUrl, projects: removeType });

    const [editPortfolio] = useMutation(EDIT_PORTFOLIO);

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
          await editPortfolio({
            variables: { input: { ...formState } }
          });   
          window.location.assign('/profile');
        }  catch (err) {
          console.error(err)
        } 
      };

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
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '40px',
          letterSpacing: '1.5px',
          fontFamily: 'Justink'
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
          flexDirection: 'column'
          
          
        },
        inputHeadings: {
          fontWeight: 'bold',
          letterSpacing: '1px',
          fontFamily: 'Justink'
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
          borderStyle: 'solid',
          borderWidth: '2.5px',
          padding: '4px',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        },
        btn: {
          marginLeft: '5%',
          width: '10%',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        },
        btnShadow: {
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        }
    }

    return (
        //here we will render the form that will gather the users information
      <div style={styles.container}>
        <div style={styles.headerContainer}>
            <h2 style={styles.title}>EDIT YOUR PORTFOLIO</h2>
            <button onClick={cancel} style={styles.btn}>Cancel</button>
        </div> 
        <form onSubmit={handleFormSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="portfolioStyles" style={styles.inputHeadings}>Choose a style for your portfolio:</label>
          <div style={styles.portfolioStyles} name="portfolioStyles">
            <label htmlFor="portfolioStyleOne" style={styles.styleContainer}>
              <img src={`/images/slides/slide0.png`} alt="preview for portfolio Style One" style={styles.img}/>
              <input
                name="portfolioStyle"
                type="radio"
                value="one"
                style={styles.radio}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="portfolioStyleTwo" style={styles.styleContainer}>
              <img src={`/images/slides/slide1.png`} alt="preview for portfolio Style Two" style={styles.img}/>
              <input
                name="portfolioStyle"
                type="radio"
                value="two"
                style={styles.radio}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="portfolioStyleThree" style={styles.styleContainer}>
              <img src={`/images/slides/slide2.png`} alt="preview for portfolio Style Three" style={styles.img}/>
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
          <label htmlFor="name" style={styles.inputHeadings}>Name (First and Last):</label>
          <input style={styles.btnShadow}
            value={formState.name}
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="title" style={styles.inputHeadings}>Title of your Portfolio:</label>
          <input style={styles.btnShadow}
            value={formState.title}
            name="title"
            type="text"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputContainer}>
        <label htmlFor="contactEmail" style={styles.inputHeadings}>Email:</label>
        <input style={styles.btnShadow}
          placeholder="johndoe@email.com"
          name="contactEmail"
          type="text"
          id="contactEmail"
          onChange={handleChange}
        />
      </div>
        <div style={styles.inputContainer}>
          <label htmlFor="bio" style={styles.inputHeadings}>Bio: (include a paragraph about yourself)</label>
          <textarea 
            value={formState.bio}
            name="bio"
            id="bio"
            onChange={handleChange}
            style={styles.bio}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="portrait" style={styles.inputHeadings}>Upload a self-portrait:</label>
          <input style={styles.btnShadow}
            value={formState.portrait}
            name="portrait"
            type="portrait"
            id="portrait"
            onChange={handleChange}
          />
          <UploadFileModule />
        </div>

        <div style={styles.inputContainer}>
          <label htmlFor="resume" style={styles.inputHeadings}>Resume (must be URL):</label>
          <input style={styles.btnShadow}
            value={formState.resumeUrl}
            name="resumeUrl"
            type="text"
            id="resume"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" style={styles.btn}>Submit</button>
        </div>
      </form>
      </div>
    )
}

export default EditPortfolio