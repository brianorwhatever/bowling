import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Monitor from '../components/Monitor';
import configureStore from '../store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Monitor />
      </div>
    )
  }
}

export default App;