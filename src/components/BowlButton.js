import React, { PropTypes, Component } from 'react';

class BowlButton extends Component {
  bowl() {
    const { store } = this.context;
    const value = Math.round(Math.random()*store.getState().game.currentFrame.pinsLeft);
    store.dispatch({type: 'ADD_BALL', value: value});
  }

  render() {
    return (
      <button onClick={this.bowl.bind(this)}>Bowl!</button>
    )
  }
}
BowlButton.contextTypes = {
  store: React.PropTypes.object
}

export default BowlButton;