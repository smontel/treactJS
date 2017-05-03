import React, { Component } from 'react';
import '../App.css';
import Tache from './Tache.js';
import Chrono from './Chrono.js';

class App extends Component {
  render() {
    return (
      <div className="list col-lg-4 mx-3">
        <div className="headList">
        <h2 className="text-center">Work in progress</h2>
        </div>
        <div className="bodyList">

        </div>

      </div>

    );
  }
}

export default App;
