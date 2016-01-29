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
    const game = store.getState().game;

    return (
      <div className="score-container">
        {store.getState().game.frames.map((frame, key) => {
            let ball1 = (typeof frame.ballsIndexes[0] === 'undefined') ? '' : game.balls[frame.ballsIndexes[0]];
            ball1 = (ball1 === 0) ? '-' : ball1;
            ball1 = (ball1 === 10) ? 'X' : ball1;
            let ball2 = (typeof frame.ballsIndexes[1] === 'undefined') ? '' : game.balls[frame.ballsIndexes[1]];
            ball2 = (ball2 === 0) ? '-' : ball2;
            ball2 = (ball1 + ball2 === 10) ? '/' : ball2;
            const ball3 = (typeof frame.ballsIndexes[2] === 'undefined') ? '' : game.balls[frame.ballsIndexes[2]];

            return <div className="frame" key={key}>
              <div className="balls">
                <div className="ball ball1">{ball1}</div>
                <div className="ball ball2">{ball2}</div>
                {(key === 9) ? <div className="ball ball3">{ball3}</div> : ''}
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