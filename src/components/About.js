import React from 'react';
import { handleClassNames } from '../helpers/functions';

const About = props => (
  <div className={handleClassNames(props)}>
    <h2>About</h2>
    <article>
      <p>My name is Adam Barsk and I&apos;m 29 years old.</p>
      <p>I&apos;m currently studying at KYH&apos;s Front End Development 2016-2018.</p>
      <p>Born and raised in Kiruna, moved to Stockholm with my partner and son in August to change careers and become a programmer that&apos;s always been a dream of mine, but never really had time to complete.</p>
    </article>
  </div>
);

export default About;
