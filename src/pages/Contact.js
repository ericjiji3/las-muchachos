import React from 'react';
import './Contact.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import world from '../pics/world.png';

function Contact() {
  return (
    <div className="contact container">
        <div className="d-flex mt-3">
            <div className="picture"><img className="logo" src={world}/></div>
            <h1 className="header">LAS MUCHACHOS WORLDWIDE</h1>
        </div>
        <div className='home-nav'>
            <NavBar/>
        </div>
        <div>
            CONTACCT
        </div>
    </div>

  );
}

export default Contact;