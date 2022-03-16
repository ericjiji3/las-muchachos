import React from 'react';
import './Heading.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import blackWorld from '../pics/black-world.gif';

function Projects() {
  return (
    <div className="container mt-3">
        <div className="heading">
            <h1 className="header">LAS MUCHACHOS</h1>
            <div className="picture"><img className="logo" src={blackWorld}/></div>
            <h1 className="header">WORLDWIDE</h1>
        </div>
        <div className='home-nav'>
            <NavBar/>
        </div>
    </div>

  );
}

export default Projects;