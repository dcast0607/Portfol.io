import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Slideshow from "../components/Slideshow";
import Name from "../components/Name";

const Home = () => {
    const { loading, data } = useQuery(QUERY_ME);
    
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