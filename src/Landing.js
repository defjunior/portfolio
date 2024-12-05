import './Landing.css';
import Footer from './Footer';
import { MarkdownRenderer } from './App';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
function Landing({articles, projects, isDarkMode}) {
    const { proj } = useParams();
    const project = projects.find((a) => a.slug === proj);

  return (
    <div>
        <h1 className='projects_header'>{project.title}</h1>
        <div className='project_info'>
                <MarkdownRenderer filePath={project.infoMarkdown}>
                </MarkdownRenderer>
        </div>
      <Footer />
    </div>
    )
  };
export default Landing;
