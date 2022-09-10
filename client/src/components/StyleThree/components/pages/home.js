import React from 'react';



export default function Home(params) {

    const bio = params.userData.bio

    return (
        <div className='aboutBar'>
            <p> {bio} </p>
        </div>
    )
}