export function todoReducer(state = [], action) {
  switch(action.type) {
    case 'MARK_DONE': return markTodo(state, action.payload, true);
    case 'MARK_UNDONE': return markTodo(state, action.payload, false);
    case 'REMOVE': return removeTodo(state, action.payload);
    case 'CLEAR': return [];
    case 'MARK_ALL_DONE': return markAllTodos(state, true);
    case 'MARK_ALL_UNDONE': return markAllTodos(state, false);
    case 'ADD': return addTodo(state, action.payload);
    default: return state;
  }
}

function markTodo(items, id, isDone) {
  return items.map(item => {
    return {
      id: item.id,
      text: item.text,
      isDone: item.id === id ? isDone : item.isDone
    };
  });
}

function removeTodo(items, id) {
  return items.filter(item => item.id !== id);
}


function markAllTodos(items, isDone) {
  return items.map(item => {
    return {
      id: item.id,
      text: item.text,
      isDone
    };
  });
}

function addTodo(items, text) {
  const itemsClone = items.slice(0);
  if(text.trim() !== '') {
    itemsClone.push({id: itemsClone.length + 1, text, isDone: false});
  }
  return itemsClone;
}
