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
      <div className="heading-section row mx-3">
        <h1 className="heading">TRUST NO ONE BUT YOUR MOM</h1>
      </div>
      <div className="row my-3 mx-3">
        <div className="heading-image-container col-6 px-0">
          <img className="heading-image" src={gun}/>
        </div>
        <div className="col-6">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <span> Donec eget dapibus justo, nec hendrerit orci. Aenean consequat tortor in diam eleifend, id viverra turpis semper. Curabitur in varius dui. Cras quis dolor vel arcu finibus finibus in ac ex. Duis imperdiet leo ac urna euismod, non pretium augue finibus. Fusce luctus ex at gravida ultrices. Nulla facilisi. Sed urna enim, lobortis at massa et, fringilla aliquet lectus. Phasellus tempor scelerisque nunc, vel posuere dui lobortis non. Quisque ut mattis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.

In hac habitasse platea dictumst. Etiam semper iaculis volutpat. Fusce finibus neque eu lorem malesuada, eget placerat ipsum pellentesque. Praesent in sapien semper, efficitur eros sed, molestie purus. Donec pellentesque nulla at sem porta, et cursus eros fermentum. Curabitur ipsum quam, feugiat in erat at, tincidunt tincidunt justo. Proin sit amet ex scelerisque, lobortis mi at, congue arcu. Aenean tincidunt sodales justo, ac pellentesque ex auctor eget. Sed lectus risus, malesuada id risus ac, volutpat viverra dui.
        </span>
        </div>
      </div>
      <div className="row my-3 mx-3">
      Vestibulum vel enim sit amet tortor accumsan elementum. Curabitur ut nunc eget justo ornare dictum ut rutrum metus. Aliquam vel felis venenatis, dictum arcu in, malesuada sapien. Donec dignissim nunc a erat congue, eu mollis leo dignissim. Nulla dapibus ex ac ante dictum, eu volutpat purus consequat. Aliquam commodo augue in nunc aliquet, quis rutrum ipsum malesuada. Sed tempus viverra augue, a tincidunt lectus tristique non. Suspendisse nec dolor ut lectus dictum aliquam. Vivamus placerat diam id gravida interdum. Phasellus ut pulvinar quam.

Curabitur lobortis scelerisque ultricies. Aliquam erat volutpat. Donec lobortis viverra nisi, in malesuada odio imperdiet non. Fusce fermentum bibendum ante, a interdum erat sagittis ut. Fusce vitae felis risus. Donec a diam dolor. Aenean tempus dapibus ornare. Nullam eu magna imperdiet, sollicitudin sem vel, vehicula est. Quisque eget lacus nisl. Sed dictum vel risus ac convallis. Nam viverra tempus metus ac tristique.


      </div>
      {/* <img className="offsetPicture-1" src={hitclub}/>
      <img className="offsetPicture-2" src={computerBlue}/> */}
      
    </div>

  );
}

export default Home;