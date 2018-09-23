import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logoPlatzi from './platzi.png'
import {CSSTransition} from 'react-transition-group';

class App extends Component {
  state = {
    logo: logo,
  }
  onClick() {
    this.setState({
      logo: logoPlatzi,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransition
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
          <img
            key={this.state.logo}
            src={this.state.logo}
            className="App-logo"
            alt="logo"
          />
          </CSSTransition>
          <h1 className="App-title">Welcome to Animations</h1>
          <button onClick={this.onClick.bind(this)}>click me!</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
