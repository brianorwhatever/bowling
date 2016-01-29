import React, { PropTypes, Component } from 'react';

class BowlButton extends Component {
  bowl() {
    const { store } = this.context;
    const value = Math.round(Math.random()*store.getState().game.currentFrame.pinsLeft);
    store.dispatch({type: 'ADD_BALL', value: value});
  }

  render() {
    return (
      <div className="bowl-button-container">
        <button className="bowl-button" onClick={this.bowl.bind(this)}>Bowl!</button>
      </div>
    )
  }
}
BowlButton.contextTypes = {
  store: React.PropTypes.object
}

export default BowlButton;