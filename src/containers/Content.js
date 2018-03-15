import React, { Component } from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Resume from '../components/Resume';

export default class Content extends Component {
  renderContentComponents = () => {
		const components = {
			Skills,
			Projects,
			About,
			Resume
		}

		return this.props.contents.map(el => {
			const ContentComponent = components[el.id]
			return <ContentComponent active={el.active} category={el.category} key={el.id} />
		})
	}
  
  render() {
    return (
			this.renderContentComponents()
    );
  }
}
