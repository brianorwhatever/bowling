const initialState = {
  score: 0,
  currentFrame: {
    pinsLeft: 10,
    ballsBowled: 0,
    number: 1
  },
  frames: Array(10).fill({score: 0}),
  balls: []
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BALL':
      var newState = {
        score: state.score,
        currentFrame: {
          number: state.currentFrame.number,
          pinsLeft: state.currentFrame.pinsLeft - action.value,
          ballsBowled: state.currentFrame.ballsBowled +1
        },
        frames: state.frames,
        balls: [...state.balls, action.value]
      }
      if(newState.currentFrame.pinsLeft === 0 || newState.currentFrame.ballsBowled == 2) {
        newState.currentFrame.score = 10 - newState.currentFrame.pinsLeft;
        newState.frames[newState.currentFrame.number-1] = newState.currentFrame;
        newState.currentFrame = {
          pinsLeft: 10,
          ballsBowled: 0,
          number: newState.currentFrame.number +1
        }
      }
      return newState;
    default:
      return state;
  }
}