import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import BowlButton from '../components/BowlButton';
import Scoreboard from '../components/Scoreboard';

class Monitor extends Component {
  render() {
    return (
      <div className="monitor">
        <Title />
        <Scoreboard />
        <BowlButton />
        <div className="overlay">AV-1</div>
      </div>
    )
  }
}

export default Monitor;

