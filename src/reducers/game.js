const initialState = {
  score: 0,
  currentFrame: {
    pinsLeft: 10,
    ballsBowled: 0,
    number: 1,
    ballsIndexes: [],
    score: 0
  },
  frames: Array(10).fill({score: '', ballsIndexes: []}),
  balls: []
}

function calculateFrameScore(game) {

}

export default function game(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BALL':
      if(state.currentFrame.number == 11) return;
      var newState = {
        score: state.score,
        currentFrame: {
          number: state.currentFrame.number,
          pinsLeft: state.currentFrame.pinsLeft - action.value,
          ballsBowled: state.currentFrame.ballsBowled + 1,
          ballsIndexes: [...state.currentFrame.ballsIndexes, state.balls.length]
        },
        frames: state.frames,
        balls: [...state.balls, action.value]
      }

      if(newState.currentFrame.pinsLeft === 0 || newState.currentFrame.ballsBowled == 2) {
        newState.currentFrame.score = newState.score;
        newState.frames[newState.currentFrame.number-1] = newState.currentFrame;
        newState.currentFrame = {
          pinsLeft: 10,
          ballsBowled: 0,
          number: newState.currentFrame.number + 1,
          ballsIndexes: []
        }
      }

      newState.frames.forEach(function(frame, index) {
        if(frame.ballsIndexes.length === 0)
          return;
        const previousScore = (index === 0) ? 0 : newState.frames[index-1].score;

        const ball1 = newState.balls[frame.ballsIndexes[0]];
        const ball2 = (typeof frame.ballsIndexes[1] === 'undefined') ? 0 : newState.balls[frame.ballsIndexes[1]];
        frame.score = previousScore + ball1 + ball2;


        /* Strike bonus */
        if(ball1 === 10) {
          frame.score += (typeof newState.balls[frame.ballsIndexes[0]+1] === 'undefined') ? 0 : newState.balls[frame.ballsIndexes[0]+1];
          frame.score += (typeof newState.balls[frame.ballsIndexes[0]+2] === 'undefined') ? 0 : newState.balls[frame.ballsIndexes[0]+2];
        }
        /* Spare bonus */
        if(ball1 + ball2 === 10) {
          frame.score += (typeof newState.balls[frame.ballsIndexes[0]+1] === 'undefined') ? 0 : newState.balls[frame.ballsIndexes[0]+1];
        }
        // frame.score = newState.scoreframe.ballsIndexes
        // if(newState.balls[frame.ballsIndexes[0]] === 10)
        //   frame.score += 
        // if(newState.balls[frame.])
        // frame.score = ;
        // console.log(index);
      });

      return newState;
    default:
      return state;
  }
}