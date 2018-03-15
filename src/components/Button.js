import React, { Component } from 'react';

export default class Button extends Component {
	handleClassNames = () => {
		return this.props.active ? "icon active" : "icon"
	}

  render() {
    return (
			<button className={this.handleClassNames()} onClick={() => this.props.handleClick(this.props.id)}>
				<i className={`fal fa-fw fa-2x fa-${this.props.icon}`} />
			</button>
    );
  }
}
