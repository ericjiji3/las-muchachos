import React from 'react';
import './Home.css';
import NavBar from '../components/NavBar';
import Heading from '../components/Heading';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import world from '../pics/world.png';

function Home() {
  return (
    <div className="home container">
      <Heading/>
      <div className="heading-section mx-3">
        <h1 className="heading row justify-content-center">TRUST NO ONE BUT YOUR MOM</h1>
      </div>
      <div className="row justify-content-center my-3 mx-3">
        <div className="heading-image-container float-md-start col-6 px-0 mx-3">
          <img className="heading-image" src={gun}/>
        </div>
        <div className="image-text col-6">
        <h2 className="image-header">Lorem ipsum dolor sit amet</h2>
        <span className="image-content"> Donec eget dapibus justo, nec hendrerit orci. Aenean consequat tortor in diam eleifend, id viverra turpis semper. Curabitur in varius dui. Cras quis dolor vel arcu finibus finibus in ac ex. Duis imperdiet leo ac urna euismod, non pretium augue finibus. Fusce luctus ex at gravida ultrices. Nulla facilisi. Sed urna enim, lobortis at massa et, fringilla aliquet lectus. Phasellus tempor scelerisque nunc, vel posuere dui lobortis non. Quisque ut mattis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.

In hac habitasse platea dictumst. Etiam semper iaculis volutpat. Fusce finibus neque eu lorem malesuada, eget placerat ipsum pellentesque. Praesent in sapien semper, efficitur eros sed, molestie purus. Donec pellentesque nulla at sem porta, et cursus eros fermentum. Curabitur ipsum quam, feugiat in erat at, tincidunt tincidunt justo. Proin sit amet ex scelerisque, lobortis mi at, congue arcu. Aenean tincidunt sodales justo, ac pellentesque ex auctor eget. Sed lectus risus, malesuada id risus ac, volutpat viverra dui.
        </span>
      </div>
      
    </div>
    </div>
  );
}

export default Home;