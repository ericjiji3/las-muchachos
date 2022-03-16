import React from 'react';
import './Contact.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import Heading from '../components/Heading';

function Contact() {
  return (
    <div className="contact container">
        <Heading/>
        <div className="form-container">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label d-flex">First Name</label>
                <input type="email" class="form-control" id="inputEmail4"/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label d-flex">Last Name</label>
                <input type="password" class="form-control" id="inputPassword4"/>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label d-flex">Email</label>
                <input type="email" class="form-control" id="inputEmail4"/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label d-flex">Phone</label>
                <input type="password" class="form-control" id="inputPassword4"/>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label d-flex">City</label>
                <input type="text" class="form-control" id="inputCity"/>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label d-flex">Company Name</label>
                <input type="text" class="form-control" id="inputCity"/>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label d-flex">Inquiry Type</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-12">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
          </form>
        </div>
    </div>

  );
}

export default Contact;