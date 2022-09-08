import React from "react";
import { useQuery } from '@apollo/client';
import Portfolio from "../components/Portfolio";
import { Link } from "react-router-dom";


import { QUERY_ME } from '../utils/queries';
//Questions:
//need help debugging why QUERY_ME is returning no data

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);

    const profile = data?.me || {};
    
    if (!profile?.username) {
        return (
          <h4>
            You need to be logged in to see your profile page. Use the navigation
            links above to sign up or log in!
          </h4>
        );
    }
    
    
    

    return (
      //here we will load all components of the users profile
      <div>
        <div>

          <Portfolio args={profile}/>
        </div>
      </div>
    )
    

    
}

export default Profile