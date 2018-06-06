// action will be picked by reducers.
// 
export function modalReducer(state = false, action) {
  switch(action.type) {
    case 'SET_MODAL_STATE': return action.payload === 'open';
    default: return state;
  }
}
