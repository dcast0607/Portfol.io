import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { SAVE_PORTFOLIO } from "../utils/mutations";


const CreatePortfolio = () => {
    //saving info to Users portfolio schema 
    const [formState, setFormState] = useState({ portfolioStyle: '', name: '', bio: '', portrait: '' });
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


    return (
        //here we will render the form that will gather the users information
      <div>
        <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="portfolioStyle">Portfolio Style:</label>
          <input
            placeholder="portfolioStyle"
            name="portfolioStyle"
            type="portfolioStyle"
            id="portfolioStyle"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="John Doe"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="bio">Bio:</label>
          <textarea
            placeholder="Describe yourself in a paragraph"
            name="bio"
            type="bio"
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