import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';

function Home() {
  return (
    <div className="home container">
      <div className="picture row my-3 justify-content-center"><img className="logo" src={logo}/></div>
      <div className='home-nav'><NavBar/></div>
      <div className="heading-section row">
        <h1 className="heading">TRUST NO ONE BUT YOUR MOM</h1>
      </div>
      <div className="row my-3">
        <div className="heading-image-container col px-0 mx-3">
          <img className="heading-image" src={gun}/>
        </div>
        <div className="col">
          ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE
        </div>
      </div>
    </div>

  );
}

export default Home;