import './Header.css';
import './About.css';
import React, { useState, useEffect } from 'react';


function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [logoSrc, setLogoSrc] = useState(`${process.env.PUBLIC_URL}/markdown/img/websitelogo2.ico`); // Default logo

    const changeLogo = (newSrc) => {
        setLogoSrc(newSrc);
    };
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === '') {
            setIsDarkMode(true);
            changeLogo(`${process.env.PUBLIC_URL}/markdown/img/websitelogo2.ico`);
            document.body.classList.add('dark-mode');
        } else {
            changeLogo(`${process.env.PUBLIC_URL}/markdown/img/websitelogo1.ico`);
            setIsDarkMode(false);
            document.body.classList.remove('dark-mode');
        }
    }, []);
    
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            changeLogo(`${process.env.PUBLIC_URL}/markdown/img/websitelogo1.ico`);
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            setIsDarkMode(true);
            changeLogo(`${process.env.PUBLIC_URL}/markdown/img/websitelogo2.ico`);
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', '');
        }
    };

  return (
    <div id="top" className="header">
      <nav className="nav">
        <a href="/home" className='img_logo_link'>
          <img src={logoSrc} alt="Logo" className="img_logo" />
        </a>
        <a href="/home" className="navlink">home</a>
        <a href="/about" className="navlink">about</a>
        <a href="/tag/games" className="navlink">games</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Dark Mode' : ' Light Mode'}
        </button>
      </nav>
    </div>
  );
}

export default Header;
