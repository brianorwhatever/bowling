import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import BowlButton from '../components/BowlButton';
import Scoreboard from '../components/Scoreboard';

class Monitor extends Component {
  render() {
    return (
      <div className="monitor-container">
        <div className="monitor-border">
          <div className="monitor-wrapper">
            <div className="monitor-shadow">
              <div className="monitor">
                {/*<Title />*/}
                <Scoreboard />
                <BowlButton />
                <div className="overlay">AV-1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="monitor-bottom"></div>
      </div>
    )
  }
}

export default Monitor;
