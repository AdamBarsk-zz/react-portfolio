import React from 'react';
import { handleClassNames } from '../helpers/functions';

const Projects = props => (
  <div className={handleClassNames(props)}>
		<h2>Projects</h2>
		<article>
			<p>Mostly been working with classified projects for the last year, most of the other work is up on my:</p>
			<a href="https://github.com/AdamBarsk" target="_blank">Github</a>
		</article>
		<h5>Tasklist:</h5>
		<section>
      <article>
				<p>Made a quick tasklist based upon React(Router, Redux) coupled with Firebase.</p>
				<a href="https://tasklist.barsk.io" target="_blank">Project</a>
				<a href="https://github.com/AdamBarsk/react-todo" target="_blank">Github</a>
      </article>
    </section>
  </div>
);

export default Projects;
