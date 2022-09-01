import React from "react";

import Slideshow from "../components/Slideshow";
import Name from "../components/Name";

const Home = () => {
    
    return (
        <div>
            <div>
                <Name /> 
            </div>
            <div>
                <Slideshow /> 
            </div>

        </div>
    )
}

export default Home