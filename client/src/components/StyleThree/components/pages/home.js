import React from 'react';



export default function Home(params) {

    const bio = params.userData.bio

    console.log("made it into home", params, bio)

    return (
        <div className='aboutBar'>
            <p> {bio} </p>
        </div>
    )
}