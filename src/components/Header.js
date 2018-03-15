import React, { Component } from 'react';
import profile from '../static/images/profile.jpg'

export default class Header extends Component {
  render() {
    return (
			<div className="logo-container">
				<img className="profile-picture" src={profile}/>
				<div className="profile-info">
					<h1>Adam Barsk</h1>
					<a href="mailto:adam@barsk.io">Contact me</a>
					<a href="https://github.com/AdamBarsk" target="_blank">Github</a>
					<a href="https://www.linkedin.com/in/adam-ahlnander-barsk-993846121?trk=nav_responsive_tab_profile" target="_blank">LinkedIn</a>
				</div>
			</div>
    );
  }
}
