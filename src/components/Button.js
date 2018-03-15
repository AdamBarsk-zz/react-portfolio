import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  handleClassNames = () => (this.props.active ? 'icon active' : 'icon')

  render() {
    return (
      <button className={this.handleClassNames()} onClick={() => this.props.handleClick(this.props.id)}>
        <i className={`fal fa-fw fa-2x fa-${this.props.icon}`} />
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
