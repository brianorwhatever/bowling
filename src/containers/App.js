import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';
import BowlButton from '../components/BowlButton';
import configureStore from '../store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bowling!</h1>
        <Scoreboard />
        <BowlButton />
      </div>
    )
  }
}

export default App;