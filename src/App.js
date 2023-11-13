import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Switch from 'react-dom'
import AppHeader from './components/header';
import AppFooter from './components/footer';
import AppHero from './pages/hero';
import AppAbout from './pages/about';
import AppServices from './pages/services';
import AppWorks from './pages/works';
import AppTeams from './pages/teams';
import AppTestimonials from './pages/testimonials';
import AppPricing from './pages/pricing';
import AppBlog from './pages/blog';
import AppContact from './pages/contact';
import AppFonctionnement from './pages/fonctionnement';
import Container from 'react-bootstrap/esm/Container';
import './styles/home.css'
function App() {
  const [isFooterVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
  
      // Masque le footer lors du défilement, même si ce n'est pas en bas de la fenêtre
      setFooterVisible(scrollTop + windowHeight < bodyHeight);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <Router>
      <div className="App">
        <header id='header'>
          <AppHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<AppHero />} />
            {/* <Route path="/about" pages={AppAbout} /> */}
            <Route path="/about" element={<AppAbout />} />
            <Route path="/fonctionnement" element={<AppFonctionnement />} />
            {/* <Route path="/fonctionnement" element={AppFonctionnement} /> */}
            <Route path="/services" element={<AppServices />} />
            <Route path="/works" element={<AppWorks />} />
            <Route path="/teams" element={<AppTeams />} />
            <Route path="/testimonials" element={<AppTestimonials />} />
            <Route path="/pricing" element={<AppPricing />} />
            <Route path="/blog" element={<AppBlog />} />
            <Route path="/contact" element={<AppContact />} />
          </Routes>
        </main>
        <footer id="footer">
        <AppFooter />
      </footer>
    </div>
      
    </Router>
  );
}

export default App;
