import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.css';
import world from '../pics/world.png';
import Projects from '../pages/Projects';
import Home from '../pages/Home';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav className="nav mb-5">
        <ul className="nav-links">
          <Link to='/'>
            <li className="nav-item">HOME</li>
          </Link>
          <Link to='/projects'>
            <li className="nav-item">PROJECTS</li>
          </Link>
          <Link to='/about'>
            <li className="nav-item">ABOUT</li>
          </Link>
          <Link to='/contact'>
            <li className="nav-item">CONTACT</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
