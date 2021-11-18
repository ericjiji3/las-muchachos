import React from 'react';
import './About.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import world from '../pics/world.png';
import Heading from '../components/Heading';

function About() {
  return (
    <div className="about container">
        <Heading/>
        <div>
            ABOUT
        </div>
    </div>

  );
}

export default About;