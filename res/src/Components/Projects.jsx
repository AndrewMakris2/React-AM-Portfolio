import React from 'react';

const Projects = () => {
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <hr />
      <div className="Project">
        <div>
          <h3>Python Projects</h3>
          <ul>
            <li><a href="#">Project Name 1</a></li>
            <li><a href="#">Project Name 2</a></li>
            <li><a href="#">Project Name 3</a></li>
          </ul>
        </div>
        <div>
          <h3>React Projects</h3>
          <ul>
            <li><a href="#">Project Name 1</a></li>
            <li><a href="#">Project Name 2</a></li>
            <li><a href="#">Project Name 3</a></li>
          </ul>
        </div>
        <div>
          <h3>PowerShell Projects</h3>
          <ul>
            <li><a href="#">Script Name 1</a></li>
            <li><a href="#">Script Name 2</a></li>
            <li><a href="#">Script Name 3</a></li>
          </ul>
        </div>
      </div>

      <div className="MoreProjectsSection">
        <h2>More Projects of Mine</h2>
        <div className="MoreProjects">
          <div>
            <h4>GitHub Profile</h4>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
              />
            </a>
          </div>
          <div>
            <h4>LinkedIn Profile</h4>
            <a href="#">
              <img
                src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
