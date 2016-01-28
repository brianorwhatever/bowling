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
      <table>
        <tbody>
          <tr>
            {store.getState().game.frames.map((frame, key) => {
               return <td key={key}>{frame.score}</td>;
            })}
          </tr>
         </tbody>
      </table>
    )
  }
}
Scoreboard.contextTypes = {
  store: React.PropTypes.object
}

export default Scoreboard;