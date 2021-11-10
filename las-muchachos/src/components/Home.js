import React from 'react';
import './Home.css';
import logo from '../pics/grey.png';

function Home() {
  return (
    <div className="home container">
        <div className="row justify-content-center"><img className="logo" src={logo}/></div>
        <h1 className="row justify-content-center my-5">LASMUCHACHOS</h1>
    </div>
  );
}

export default Home;