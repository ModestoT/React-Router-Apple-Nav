import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import navData from './NavData';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
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
        {/* <NavWrapper navItems={this.state.navItems}/> */}
        <Route path="/" render={props => <NavWrapper {...props} navItems={this.state.navItems}/>} />
        <Route path="/:name" render={props => <SubNav {...props} navItems={this.state.navItems}/>} />
      </div>
    );
  }
}

export default App;
