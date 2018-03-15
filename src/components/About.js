import React from 'react';
import { handleClassNames } from '../helpers/functions';

const About = props => (
  <div className={handleClassNames(props)}>
		<h2>About</h2>
		<article>
			<p>My name is Adam Barsk and I'm 29 years old.</p>
			<p>Born and raised in Kiruna, moved to Stockholm with my partner and son in August to change careers and become a programmer thats always been a dream of mine, but never really had time to complete.</p>
			<p>I'm currently studying at KYH's Front End Development 2016-2018.</p>
		</article>
	</div>
);

export default About;
