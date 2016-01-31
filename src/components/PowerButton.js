import React, { PropTypes, Component } from 'react';

class PowerButton extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    const { store } = this.context;
    store.dispatch({type: 'TOGGLE_POWER'});
  } 

  render() {
    const { store } = this.context;
    return (
      <div className="power-button-container">
        <input type="checkbox" onChange={this.buttonClicked} id="switch" value={store.getState().monitor.powerOn} />
        <label htmlFor="switch" className="switch-label" />
      </div>
    )
  }
}
PowerButton.contextTypes = {
  store: React.PropTypes.object
}

export default PowerButton;