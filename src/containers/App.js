import React, { Component } from 'react';
import Content from './Content';
import Buttons from './Buttons';
import Header from '../components/Header';

export default class App extends Component {
  state = {
    contents: [
      {
        id: 'Skills',
        category: 'skills',
        active: false,
        icon: 'code'
      },
      {
        id: 'Projects',
        category: 'projects',
        active: false,
        icon: 'code-branch'
      },
      {
        id: 'About',
        category: 'about',
        active: true,
        icon: 'user-alt'
      },
      {
        id: 'Resume',
        category: 'resume',
        active: false,
        icon:'briefcase'
      },
    ]
	}

	handleClick = id => {
    window.innerWidth >= 420
    ?
    this.setState({
      ...this.state,
      contents: this.state.contents.map(el => 
        el.id === id ? {...el, active: !el.active} : el
      ) 
    })
    :
    this.setState({
      ...this.state,
      contents: this.state.contents.map(el => 
        el.id === id ? {...el, active: !el.active} : {...el, active: false}
      ) 
    })
  }
  
  render() {
    return (
      <div className="site-container">
        <Header />
        <div className="content-container">
          <Content {...this.state}/>
          <div className="content--icons">
            <Buttons {...this.state} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}
