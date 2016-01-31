import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Monitor from '../components/Monitor';
import ThreeDTitle from '../components/ThreeDTitle';
import configureStore from '../store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <ThreeDTitle width="500" height="300" />
        <Monitor />
      </div>
    )
  }
}

export default App;