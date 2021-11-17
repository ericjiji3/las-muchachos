import React from 'react';
import './Projects.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import world from '../pics/world.png';

function Projects() {
  return (
    <div className="projects container">
        <div className="d-flex mt-3">
            <div className="picture"><img className="logo" src={world}/></div>
            <h1 className="header">LAS MUCHACHOS WORLDWIDE</h1>
        </div>
        <div className='home-nav'>
            <NavBar/>
        </div>
        <div className="row">
          <figure className="project-card col-md-3">
            {/* add tape here with absolute  */}
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
          <figure className="project-card col-md-3">
            {/* add tape here with absolute  */}
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
          <figure className="project-card col-md-3">
            {/* add tape here with absolute  */}
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
          <figure className="project-card col-md-3">
            {/* add tape here with absolute  */}
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
        </div>
    </div>

  );
}
// add javascript to randomize project figure tilts and top offsets 
export default Projects;