import './Projects.css';
import Footer from './Footer';
import { MarkdownRenderer } from './App';
import {useState, useEffect} from 'react';
function Projects({articles, projects, isDarkMode}) {
  return (
    <div className={`projects ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="top-projects">
        <h1 className='projects_header'>projects!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
      </div>
      <div className='projectList'>
         {projects.length > 0 ? (
                    projects.map((project) => (
                        <iframe key={project.id} className="projectList_item" src = {`${project.gif}`} >
                            <h2 className='project_title'>{project.title}</h2>
                            {/*<Link to={`/projects/${project.slug}`} className="read-more">
                                Read More
                            </Link> */}

                        </iframe>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}         
      </div>
      <Footer />
    </div>
    )
  };
export default Projects;
