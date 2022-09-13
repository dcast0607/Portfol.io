import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { EDIT_PORTFOLIO } from "../../utils/mutations";

function AddProject(params) {
    const portfolio = params.userData.portfolio[0]

    const [formState, setFormState] = useState( { projectName: '', projectUrl: '', projectPreview: ''} );
    const [saveProject] = useMutation(EDIT_PORTFOLIO);
    const payload = 
        { 
            portfolioStyle: portfolio.portfolioStyle, 
            name: portfolio.name, 
            contactEmail: portfolio.contactEmail,
            bio: portfolio.bio, 
            portrait: portfolio.portrait, 
            title: portfolio.title, 
            resumeUrl: portfolio.resumeUrl, 
            projects: portfolio.projects 
        }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const removeType = []
        payload.projects.forEach(project => {
            removeType.push({
                projectName: project.projectName, 
                projectUrl: project.projectUrl, 
                projectPreview: project.projectPreview
            })
        });
        const arr = [...removeType, formState]
        payload.projects = arr
        saveProject({
        variables: { input: { ...payload } },
        });        
        window.location.assign('/profile');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value,
        });
    };

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="projectName">Project Name:</label>
                <input
                    name="projectName"
                    type="text"
                    id="projectName"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="projectUrl">Project URL:</label>
                <input
                    name="projectUrl"
                    type="text"
                    id="projectUrl"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="projectPreview">Project Preview:</label>
                <input
                    name="projectPreview"
                    id="projectPreview"
                    onChange={handleChange}
                />
            </div>
            <div className="flex-row flex-end">
                <button type="submit">Add project +</button>
            </div>
        </form>
        </div>
    )
}

export default AddProject