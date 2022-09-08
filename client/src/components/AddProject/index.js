import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { SAVE_PROJECT } from "../../utils/mutations";

function AddProject() {
    const [formState, setFormState] = useState({ projectName: '', projectUrl: '', projectPreview: ''});
    const [saveProject] = useMutation(SAVE_PROJECT);

    const handleFormSubmit = async (event) => {
    event.preventDefault();
    
        saveProject({
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
                <textarea
                    name="projectPreview"
                    id="projectPreview"
                    onChange={handleChange}
                />
            </div>
            <div className="flex-row flex-end">
                <button type="submit">Add another project +</button>
            </div>
        </form>
        </div>
    )
}

export default AddProject