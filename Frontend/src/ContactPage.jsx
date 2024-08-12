import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="profile-section">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQGK7jsFynGATA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709932264787?e=1729123200&v=beta&t=YjTfIjTdPVxH5j8S3Kn_iCWvxYv-EvMknXVasYLKzTw" 
          alt="Profile" 
          className="profile-picture"
        />
        <h1>Abhishek Sharma</h1>
        <p>Software Developer</p>
      </div>
      <div className="links-section">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <a href="https://github.com/abhisheksharma8630/" target="_blank" rel="noopener noreferrer" style={{display:"flex",gap:"10px"}}>
              <i class="fa-brands fa-github"></i>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-sharma-655182215/" target="_blank" rel="noopener noreferrer" style={{display:"flex",gap:"10px"}}>
            <i class="fa-brands fa-linkedin"></i>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:as755213@gmail.com" style={{display:"flex",gap:"10px"}}>
            <i class="fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
