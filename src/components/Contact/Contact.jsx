import React from 'react';
import './Contact.scss';
import ContactForm from './ContactForm/ContactForm'

function Contact() {
  return (
    <div className='contact'>
      <header className='contact-header'>
        <h2>Contact Us</h2>
      </header>
      <div className='contact-body'>
        <div className='contact-info'>
          <span className='contact-info-header'>Address:</span>
          <span className='contact-info-detail'>Lutz and Associates</span>
          <span className='contact-info-detail'>123 E Main Street</span>
          <span className='contact-info-detail'>Punta Gorda, FL 12345</span>
        </div>
        <div className='contact-form'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
