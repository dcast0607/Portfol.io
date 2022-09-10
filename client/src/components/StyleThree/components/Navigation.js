import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className='hero'>
        {/* <img src={require('../images/portlogo.png')} alt='header logo' /> */}
        <ul>
        <li><a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-item select' : 'nav-item'}
        >
          Home
        </a></li>
        <li><a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-item select' : 'nav-item'}
        >
          About Me
        </a></li>
        <li><a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-item select' : 'nav-item'}
        >
          Projects
        </a></li>
        <li><a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-item select' : 'nav-item'}
        >
          Resume
        </a></li>
        </ul> 
    </nav>
  );
}

export default Navigation;