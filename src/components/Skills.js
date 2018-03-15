import React from 'react';
import { handleClassNames } from '../helpers/functions';

const Skills = props => (
  <div className={handleClassNames(props)}>
    <h2>Skills</h2>
    <article>
      <h5>Front:</h5>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>HTML</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>CSS (SASS)</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>JavaScript (ES6)</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>React (Router, Redux)</p></li>
      </ul>
    </article>
    <article>
      <h5>Back:</h5>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>PHP (Laravel)</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>REST API</p></li>
        <li><span className="fa-li"><i className="fal fa-angle-double-right fa-xs" /></span><p>SQL</p></li>
      </ul>
    </article>
  </div>
);

export default Skills;
