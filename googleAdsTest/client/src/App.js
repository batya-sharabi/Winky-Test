import React, { Component } from 'react';
import Login from './Login';
import RouterApp from './Router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <RouterApp />
      </div>
    );
  }
}

export default App;