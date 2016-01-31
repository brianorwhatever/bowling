import { combineReducers } from 'redux';
import game from './game';
import monitor from './monitor';

const rootReducer = combineReducers({
  game,
  monitor
});

export default rootReducer;