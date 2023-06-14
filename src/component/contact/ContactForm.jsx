import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contactform.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace the following values with your own EmailJS service configuration
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    // Prepare the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <div className="input-container">
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
