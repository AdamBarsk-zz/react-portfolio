import React from 'react';
import profile from '../static/images/profile.jpg';

const Header = () => (
  <div className="logo-container">
    <img className="profile-picture" src={profile} alt="Profile" />
    <div className="profile-info">
      <h1>Adam Barsk</h1>
      <a href="mailto:adam@barsk.io">Contact me</a>
      <a href="https://github.com/AdamBarsk" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.linkedin.com/in/adam-ahlnander-barsk-993846121?trk=nav_responsive_tab_profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
);

export default Header;
