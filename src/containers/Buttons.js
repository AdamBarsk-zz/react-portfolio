import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class Buttons extends Component {
  renderButtons = () => this.props.contents.map(el => <Button handleClick={this.props.handleClick} active={el.active} icon={el.icon} category={el.category} id={el.id} key={el.id} />)

  render() {
    return (
      this.renderButtons()
    );
  }
}

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contents: PropTypes.array.isRequired,
};
