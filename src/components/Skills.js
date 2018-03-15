import React from 'react';
import { handleClassNames } from '../helpers/functions';

const Skills = props => (
  <div className={handleClassNames(props)}>
    <h2>Skills</h2>
    <h5>Front:</h5>
    <section>
      <article>
				<p>HTML</p>
        <p>CSS (SASS)</p>
        <p>Javascript (jQuery)</p>
        <p>React (Router, Redux)</p>
      </article>
    </section>
    <h5>Back:</h5>
    <section>
      <article>
				<p>PHP (Laravel)</p>
        <p>REST API</p>
        <p>SQL</p>
      </article>
    </section>
  </div>
);

export default Skills;
