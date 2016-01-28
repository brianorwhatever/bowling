import React, { PropTypes, Component } from 'react';

class Scoreboard extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    console.log(store.getState().game.frames);
    return (
      <div className="score-container">
        {store.getState().game.frames.map((frame, key) => {
            let ball1 = (typeof frame.balls[0] === 'undefined') ? '' : frame.balls[0];
            ball1 = (ball1 === 0) ? '-' : ball1;
            let ball2 = (typeof frame.balls[1] === 'undefined') ? '' : frame.balls[1];
            ball2 = (ball2 === 0) ? '-' : ball2;

            return <div className="frame" key={key}>
              <div className="balls">
                <div className="ball ball1">{ball1}</div>
                <div className="ball ball2">{ball2}</div>
              </div>
              <span className="frame-score">{frame.score}</span>
            </div>;
        })}
      </div>
    )
  }
}
Scoreboard.contextTypes = {
  store: React.PropTypes.object
}

export default Scoreboard;