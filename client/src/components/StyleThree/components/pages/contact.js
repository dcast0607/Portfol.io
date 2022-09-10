import React from 'react';

export default function Contact(params) {

    const email = params.userData.email
    const github = params.userData.github
    const phone = params.userData.phone
    return (
        <div className='contact'>
                <p> Contact Me: </p>
                <p>{phone}</p>
                <p><a href={email}>Jimmyqv.tran@gmail.com</a></p>
                <p><a href={github}>Github</a></p>
        </div>
    )
}