import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"
import AddProject from "../components/AddProject";
import { Link } from "react-router-dom";
import UploadFileModule from "../components/uploadFileModule";

const CreatePortfolio = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const profile = data?.me || {};
  
  //saving info to Users portfolio schema 
  const [formState, setFormState] = useState({ portfolioStyle: '', name: '', bio: '', portrait: '', title: '', resumeUrl: '', projects: [] });
  const [savePortfolio] = useMutation(SAVE_PORTFOLIO);

  const [ProjContent, setProjContent] = useState(<button>add project+</button>)

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

    const clickProjContent = () => {
      setProjContent(<AddProject />)
    }

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
        padding: '4px'
      },
      btn: {
        marginLeft: '5%',
        width: '10%'
      },
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
      <h2 style={styles.title}>CREATE YOUR PORTFOLIO</h2>
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
          placeholder="John Doe"
          name="name"
          type="text"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="title">Title:</label>
        <input
          placeholder="Title for portfolio"
          name="title"
          type="text"
          id="title"
          onChange={handleChange}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="bio">Bio:</label>
        <textarea
          placeholder="Describe yourself in a paragraph"
          name="bio"
          id="bio"
          onChange={handleChange}
          style={styles.bio}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="portrait">Upload a self-portrait:</label>
        <input
          placeholder="John Doe"
          name="portrait"
          type="portrait"
          id="portrait"
          onChange={handleChange}
        />
        <UploadFileModule />
      </div>
      <div onClick={clickProjContent} style={styles.btn}>{ProjContent}</div>
      <div style={styles.inputContainer}>
        <label htmlFor="name">Resume:</label>
        <input
          placeholder="Resume URL"
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

export default CreatePortfolio