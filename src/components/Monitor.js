import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import BowlButton from '../components/BowlButton';
import Scoreboard from '../components/Scoreboard';
import PowerButton from '../components/PowerButton';

class Monitor extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const monitorClass = (store.getState().monitor.powerOn) ? 'monitor on' : 'monitor off';

    return (
      <div className="monitor-container">
        <div className="monitor-border">
          <div className="monitor-wrapper">
            <div className="monitor-shadow">
              <div className={monitorClass}>
                <div className="screen">
                  <Title />
                  <Scoreboard />
                  <BowlButton />
                </div>
                <div className="overlay">AV-1</div>
              </div>
            </div>
            <PowerButton />
          </div>
        </div>
        <div className="monitor-bottom"></div>
      </div>
    )
  }
}
Monitor.contextTypes = {
  store: React.PropTypes.object
}
export default Monitor;
