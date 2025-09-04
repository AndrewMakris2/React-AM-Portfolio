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
            <li><a href="https://github.com/AndrewMakris2/Python-vpn">VPN Project (Python Code)</a></li>
            <li><a href="#">Project Name 2</a></li>
            <li><a href="#">Project Name 3</a></li>
          </ul>
        </div>
        <div>
          <h3>React Projects</h3>
          <ul>
            <li><a href="https://fancy-pastelito-fa9d8c.netlify.app/">VPN Project (React Webiste)</a></li>
            <li><a href="https://eloquent-babbage-15108c.netlify.app/">Old Portfolio (2021)</a></li>
            <li><a href="https://suspicious-pike-55fa2c.netlify.app/">Batman (Internal APIs)</a></li>
          </ul>
        </div>
        <div>
          <h3>Miscelanious Projects</h3>
          <ul>
            <li><a href="https://github.com/Amakris12/Store-Shoe-API">External API Project</a></li>
            <li><a href="https://github.com/Amakris12/Nodejs-Passport-Login">Secure Web Authentication with Passport.js</a></li>
            <li><a href="https://github.com/Amakris12/EJS-Login">EJS Login</a></li>
          </ul>
        </div>
      </div>

      <div className="MoreProjectsSection">
        <h2>More Projects of Mine</h2>
        <div className="MoreProjects">
          <div>
            <h4>GitHub Profile</h4>
            <a href="https://github.com/AndrewMakris2" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
              />
            </a>
          </div>
          <div>
            <h4>LinkedIn Profile</h4>
            <a href="https://www.linkedin.com/in/andrew-makris-441969258/" target="_blank">
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
