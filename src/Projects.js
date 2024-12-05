import './Projects.css';
import Footer from './Footer';
import { MarkdownRenderer } from './App';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



function Projects({articles, projects, isDarkMode}) {
  const navigate = useNavigate;
  return (
    <div className={`projects ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="top-projects">
        <h1 className='projects_header'>Projects</h1>
      </div>
      <div className='projectList'>
         {projects.length > 0 ? (
                    projects.map((project) => (
                        <a href = {`/#/projects/${project.slug}`} key={project.id} className="projectList_item" >
                            <h2 className='project_title'>{project.title}</h2>
                            {/*<Link to={`/projects/${project.slug}`} className="read-more">
                                Read More
                            </Link> */}

                        </a>
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
