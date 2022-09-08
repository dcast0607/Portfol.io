import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Slideshow from "../components/Slideshow";

const Home = () => {
    const { loading, data } = useQuery(QUERY_ME);
    
    return (
        <div>
            <Slideshow /> 
        </div>
    )
}

export default Home