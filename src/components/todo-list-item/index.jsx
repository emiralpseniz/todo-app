import React from 'react';

export const TodoListItem = (props) => {
  const {item, markItemAsDone, markItemAsUndone, removeItem} = props;
  return (
    <li className={`todo-list-item ${item.isDone ? 'done' : ''}`}>
      <div className='todo'>
        <div className='todo-text'>{item.text}</div>
        <div className='todo-toolbox'>
          {
            !item.isDone ?
              <button onClick={() => markItemAsDone(item.id)}>Done</button> :
              <button onClick={() => markItemAsUndone(item.id)}>Undone</button>
          }
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      </div>
    </li>
  );
};
