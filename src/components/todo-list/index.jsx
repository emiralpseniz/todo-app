import React from 'react';

import {TodoListItem} from '../todo-list-item';

export class TodoList extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        <ul>
          {this.props.items.map(item => (
            <TodoListItem 
              key={item.id} 
              item={item} 
              markItemAsDone={this.props.markItemAsDone} 
              markItemAsUndone={this.props.markItemAsUndone}
              removeItem={this.props.removeItem}
            />
            )
          )}
        </ul>
      </div>
    );
  }

}
