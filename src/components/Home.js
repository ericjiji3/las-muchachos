import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
function Home() {
  return (
    <div className="home container">
      <div className="picture row my-3 justify-content-center"><img className="logo" src={logo}/></div>
      <div className='home-nav'><NavBar/></div>
      <div className="heading-section row mx-3">
        <h1 className="heading">TRUST NO ONE BUT YOUR MOM</h1>
      </div>
      <div className="row my-3 mx-3">
        <div className="heading-image-container col px-0">
          <img className="heading-image" src={gun}/>
        </div>
        <div className="col">
          ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE
        </div>
      </div>
      {/* <img className="offsetPicture-1" src={hitclub}/>
      <img className="offsetPicture-2" src={computerBlue}/> */}
      
    </div>

  );
}

export default Home;