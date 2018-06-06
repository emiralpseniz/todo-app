// dispatch action using action creators..
// actions are simple json objects.
// type is required but you can pass other properties.


// action creator
export function openModal() {
  // action 
  return {
    type: 'SET_MODAL_STATE',
    payload: 'open'
  };
}

export function closeModal() {
  // action 
  return {
    type: 'SET_MODAL_STATE',
    payload: 'close'
  };
}
