import React from 'react';
import './Heading.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import world from '../pics/world.png';

function Projects() {
  return (
    <div className="container">
        <div className="d-flex">
            <div className="picture"><img className="logo" src={world}/></div>
            <h1 className="header">LAS MUCHACHOS WORLDWIDE</h1>
        </div>
        <div className='home-nav'>
            <NavBar/>
        </div>
    </div>

  );
}

export default Projects;