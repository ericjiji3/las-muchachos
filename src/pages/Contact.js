import React, {useRef} from 'react';
import './Contact.css';
import NavBar from '../components/NavBar';
import logo from '../pics/grey.png';
import { Nav } from 'reactstrap';
import gun from '../pics/ig_pics_files/gun.png';
import hitclub from '../pics/ig_pics_files/hitclub.jpg';
import computerBlue from '../pics/ig_pics_files/computerBlue.jpg';
import emailjs from '@emailjs/browser';
import Heading from '../components/Heading';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6gytabr', 'template_khltiuj', form.current, 'user_HEpjDnIA7TzKgFpcOlpbt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact container">
        <Heading/>
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail} class="row g-3">
              <div class="col-md-6">
                <label for="firstName" class="form-label d-flex">First Name</label>
                <input type="text" class="form-control" id="firstName" name="firstName"/>
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label d-flex">Last Name</label>
                <input type="text" class="form-control" id="lastName" name="lastName"/>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label d-flex">Email</label>
                <input type="email" class="form-control" id="email" name="email"/>
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label d-flex">Phone</label>
                <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone"/>
              </div>
              <div class="col-md-6">
                <label for="city" class="form-label d-flex">City</label>
                <input type="text" class="form-control" id="city" name="city"/>
              </div>
              <div class="col-md-6">
                <label for="comapanyName" class="form-label d-flex">Company Name</label>
                <input type="text" class="form-control" id="comapanyName" name="companyName"/>
              </div>
              <div class="col-md-4">
                <label for="inquiryType" class="form-label d-flex">Inquiry Type</label>
                <select id="inquiryType" class="form-select" name="inquiryType">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-12">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="4" name="message"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
              </div>
          </form>
        </div>
    </div>

  );
}

export default Contact;