import { TypeOrFieldNameRegExp } from '@apollo/client/cache/inmemory/helpers';
import React from 'react';

function Navtab({ currentPage, handlePageChange, userData}) {

    console.log(userData);

    const resume = userData.resumeUrl;

    // const resume = params.resumeUrl;

    const styles = {
        nav: {
            marginTop: '20px',
            display: 'flex',
            gap: '20px',
        },
    }

    return (
        <ul style={styles.nav} className='nav nav-tabs'>
            <li className='nav-item'>
                <a href='#home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >Home</a>
            </li>
            <li className='nav-item'>
                <a href='#projects'
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >Projects</a>
            </li>
            <li className='nav-item'>
                <a href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
            <li className='nav-item'>
                <a href={resume} target="_blank" rel='noreferrer noopener'
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
        </ul>
    );
}

export default Navtab;