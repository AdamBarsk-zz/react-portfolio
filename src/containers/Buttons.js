import React, { Component } from 'react';
import Button from '../components/Button';

export default class Buttons extends Component {
	renderButtons = () => {
		return this.props.contents.map(el => {
			return <Button handleClick={this.props.handleClick} active={el.active} icon={el.icon} category={el.category} id={el.id} key={el.id}/>
		})
	}

  render() {
    return (
			this.renderButtons()
    );
  }
}



