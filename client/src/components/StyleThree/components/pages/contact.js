import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact(params) {

    const styles = {
        contact: {
            color: 'black',
        }
    }
    
    const buttonMail = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };

    const email = params.userData.contactEmail
    const github = params.userData.github
    const phone = params.userData.phone

    console.log('what are information in contacts', params, email, github, phone)
    return (
        <div style={styles.contact} className='contact'>
                <p> Contact Me: </p>
                <p>{phone}</p>
                <p>{email}</p>
                <p><a href={github}>Github</a></p>
        </div>
    )
}