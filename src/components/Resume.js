import React from 'react';
import { handleClassNames } from '../helpers/functions';

const Resume = props => (
  <div className={handleClassNames(props)}>
    <h2>Resume</h2>
    <h5>Education:</h5>
    <section>
      <article>
        <p>Internship - Chas Visual Management AB, 2017-2018</p>
        <p>Polytechnic - KYH Stockholm Front End Developer, 2016-2018</p>
        <p>High school – Electronics and computer program in Kiruna, 2006-2009</p>
      </article>
    </section>
    <h5>Work:</h5>
    <section>
      <article>
        <p>Operator, LKAB, Kiruna, Sweden – 2007-Current</p>
        <p>Industrial consulting, IPIK AB, Kiruna, Sweden – 2011-2012</p>
      </article>
    </section>
  </div>
);

export default Resume;
