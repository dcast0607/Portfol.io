import React, { useState } from 'react';
import Navtab from './navtab';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Home from './pages/home';



export default function PortfolioContainer(params) {
    const user = params.userData

    console.log("We are getting into Portfolio", user)

    const styles = {
        navBar: {
            flexDirection: 'row-reverse',
            fontWeight: '600',
            fontSize: '50px'
        }
    }

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home userData={user}/>;
        }
        if (currentPage === 'Projects') {
            return <Projects userData={user}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact userData={user}/>;
        }
            return <Resume/>;
        };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.navBar} >
            <Navtab currentPage={currentPage} handlePageChange={handlePageChange} userData={user}/>
            {renderPage()}
        </div>
    )
}



