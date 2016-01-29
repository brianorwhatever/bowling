import React, { PropTypes, Component } from 'react';

class BowlButton extends Component {
  constructor(props) {
    super(props);

    this.state = {buttonText: 'Bowl!'};
  }

  componentDidMount() {
    const { store } = this.context;
    store.subscribe(this.updateButton.bind(this));
  }

  buttonPressed() {
    const { store } = this.context;
    if(store.getState().game.currentFrame.number === 11) {
      store.dispatch({type: 'RESET_GAME'});
    } else {
      const value = Math.round(Math.random()*store.getState().game.currentFrame.pinsLeft);
      store.dispatch({type: 'ADD_BALL', value: value});
    }
  }

  updateButton() {
    const { store } = this.context;
    if(store.getState().game.currentFrame.number === 11) {
      this.setState({buttonText: 'Reset'});
    } else {
      this.setState({buttonText: 'Bowl!'});
    }
  }

  render() {
    return (
      <div className="bowl-button-container">
        <button className="bowl-button" onClick={this.buttonPressed.bind(this)}>{this.state.buttonText}</button>
      </div>
    )
  }
}
BowlButton.contextTypes = {
  store: React.PropTypes.object
}

export default BowlButton;