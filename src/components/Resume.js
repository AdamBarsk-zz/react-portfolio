import React from 'react';
import { handleClassNames } from '../helpers/functions';

const Resume = props => (
  <div className={handleClassNames(props)}>
    <h2>Resume</h2>
    <article>
      <h5>Education:</h5>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>Internship - Chas Visual Management AB, 2017-2018</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>Polytechnic - KYH Stockholm Front End Developer, 2016-2018</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>High school – Electronics and computer program in Kiruna, 2006-2009</p></li>
      </ul>
    </article>

    <article>
      <h5>Work:</h5>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>Operator, LKAB, Kiruna, Sweden – 2007-Current</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>Industrial consulting, IPIK AB, Kiruna, Sweden – 2011-2012</p></li>
      </ul>
    </article>
  </div>
);

export default Resume;
