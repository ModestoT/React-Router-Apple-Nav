import React, { Component } from 'react';

import navData from './NavData';
import NavWrapper from './components/NavWrapper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: [],
      subNavItems: []
    };
  }

  componentDidMount() {
    this.setState({navItems: navData});
  }
  render() {
    return (
      <div className="App">
        <NavWrapper navItems={this.state.navItems}/>
      </div>
    );
  }
}

export default App;
