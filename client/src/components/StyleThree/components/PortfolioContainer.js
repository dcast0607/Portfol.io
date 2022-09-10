import { useState } from 'react';
import Home from './Home';
import About from './About';
import Project from './Project';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
        return <About />;
      }
    if (currentPage === 'Project') {
      return <Project />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer />
    </div>
  );
}