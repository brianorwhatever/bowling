const initialState = {
  powerOn: true
}

export default function monitor(state = initialState, action) {
  switch (action.type) {
    case 'POWER_ON':
      return {powerOn: true};
    case 'POWER_OFF':
      return {powerOn: false};
    case 'TOGGLE_POWER':
      return {powerOn: !state.powerOn};
    default:
      return state;
  }
}