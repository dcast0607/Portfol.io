import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"
import { Link } from "react-router-dom";
import UploadFileModule from "../components/uploadFileModule";

const CreatePortfolio = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const profile = data?.me || {};
  
  //saving info to Users portfolio schema 
  const [formState, setFormState] = useState({ portfolioStyle: '', name: '', contactEmail: '', bio: '' , portrait: '', title: '', resumeUrl: '', projects: [] });
  const [savePortfolio] = useMutation(SAVE_PORTFOLIO);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    const styles = {
      noUser: {
        width: '50%',
        margin: '25%',
        textAlign: 'center'
      },
      link: {
        textDecoration: 'none',
      },
      container: {
        marginTop: '5%'
      },
      title: {
        textAlign: 'center',
        marginTop: '10px',
        letterSpacing: '3.5px',
        fontFamily: 'Justink',
        fontWeight: 'bold',
        fontSize: '60px'
      },
      inputHeadings: {
        fontWeight: 'bold',
        letterSpacing: '1px',
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
        flexDirection: 'column',
      },
      portfolioStyles: {
        display: 'flex',
        width: '100%',
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'space-between'
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
        width: '50%',
        height: '5vw',
        outline: 'none',
        borderStyle: 'solid',
        borderWidth: '2.5px',
        padding: '4px',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      },
      btn: {
        marginLeft: '5%',
        fontSize: '20px',
        width: '10%',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      },
      addProjbtn: {
        marginLeft: '5%',
        width: '4.1%',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      },
      btnShadow: {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      }
    }

    if (!profile?.username) {
      return (
        <h4 style={styles.noUser}>
          Oops, looks like you're not logged in! Click 
          <Link to="/login" style={styles.link}> here </Link>
          to log in.
        </h4>
      );
  }

  return (
      //here we will render the form that will gather the users information
    <div style={styles.container}> 
      <h2 style={styles.title}>CREATE YOUR PORTFOL.IO</h2>
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
        <label htmlFor="name" style={styles.inputHeadings}>Name: (First and Last):</label>
        <input style={styles.btnShadow}
          placeholder="John Doe"
          name="name"
          type="text"
          id="name"
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
        <label htmlFor="title" style={styles.inputHeadings}>Title of your Portfolio:</label>
        <input style={styles.btnShadow}
          placeholder="Title for portfolio"
          name="title"
          type="text"
          id="title"
          onChange={handleChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="bio" style={styles.inputHeadings}>Bio (include a paragraph about yourself):</label>
        <textarea
          placeholder="Describe yourself in a paragraph"
          name="bio"
          id="bio"
          onChange={handleChange}
          style={styles.bio}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="portrait" style={styles.inputHeadings}>Upload a self-portrait:</label>
        <input style={styles.btnShadow}
          placeholder="John Doe"
          name="portrait"
          type="portrait"
          id="portrait"
          onChange={handleChange}
        />
        <UploadFileModule />
      </div>

      <div style={styles.inputContainer}>
        <label htmlFor="name" style={styles.inputHeadings}>Resume (must be URL):</label>
        <input style={styles.btnShadow}
          placeholder="Resume URL"
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

export default CreatePortfolio