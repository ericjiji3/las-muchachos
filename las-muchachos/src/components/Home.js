import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';

function Home() {
  return (
    <div className="home container">
        <div className="picture row my-3 justify-content-center"><img className="logo" src={logo}/></div>
        <div className='home-nav'><NavBar/></div>
    </div>
  );
}

export default Home;