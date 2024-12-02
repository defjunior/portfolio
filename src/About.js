import './About.css';
import Footer from './Footer';
import { MarkdownRenderer } from './App';

function About({isDarkMode}) {
    

  return (
    <div className={`about ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="top"></div>
      <div className={`content ${isDarkMode ? 'dark-mode' : ''}`}>
        <MarkdownRenderer filePath="/markdown/aboutme.md" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
