
export function markDone(id) {
  return {
    type: 'MARK_DONE',
    payload: id
  };
}

export function markUndone(id) {
  return {
    type: 'MARK_UNDONE',
    payload: id
  };
}

export function remove(id) {
  return {
    type: 'REMOVE',
    payload: id
  };
}

export function markAllDone() {
  return {
    type: 'MARK_ALL_DONE',
  };
}

export function markAllUndone() {
  return {
    type: 'MARK_ALL_UNDONE',
  };
}

export function clear() {
  return {
    type: 'CLEAR'
  };
}

export function addTodo(text) {
  return {
    type: 'ADD',
    payload: text
  };
}
