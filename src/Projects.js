import './Projects.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Projects({ articles, projects, isDarkMode }) {
  const navigate = useNavigate();

  return (
    <div className={`projects ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="top-projects">
        <h1 className="projects_header">Projects</h1>
      </div>
      <div className="projectList">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              className="projectList_item"
              key={project.id}
              
            >
              <div className="project_banner">
                <img
                  className="project_banner_image"
                  src={`${process.env.PUBLIC_URL}/markdown/img/${project.img}`}
                  alt={`Banner for ${project.title}`}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                />
                <div className="project_banner_overlay">
                <div>
                    <h2 className="project_title">{project.title}</h2>
                </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
