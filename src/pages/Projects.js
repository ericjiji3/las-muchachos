import React, { useState, useEffect } from 'react';
import './Projects.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import jordon from '../pics/jordon.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import Heading from '../components/Heading';
import $ from 'jquery';


function Projects() {
  
  useEffect(() => {
    $('.projects .project-card').each(function(i){
      var min = -10;
      var max = 10;
      let randomAngleVal =   Math.floor(Math.random() * (max - min +1)) + min;
      let randomYVal = Math.floor(Math.random() * 30);
      $(this).css('transform','rotate('+ randomAngleVal +'deg)');
      $(this).css({top: randomYVal + 'px'});
      
    })
  });

  return (
    <div className="projects container">
        <Heading/>
        <div className="cards row justify-content-center">
          <figure className="project-card">
            <a href="https://www.youtube.com/watch?v=Sl-807pq3cY" target="_blank">
              <img className="project-pic" src={jordon}/>
              <figcaption className="caption">PAINT ME HOWEVER - JORDON</figcaption>
            </a>
          </figure>
          <figure className="project-card one">
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
          <figure className="project-card two">
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
          <figure className="project-card three">
            <img className="project-pic" src={computerBlue}/>
            <figcaption className="caption">Project</figcaption>
          </figure>
        </div>
    </div>

  );
}
// add javascript to randomize project figure tilts and top offsets 
export default Projects;