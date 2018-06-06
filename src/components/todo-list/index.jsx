import React from 'react';
import {connect} from 'react-redux';

import {TodoListItem} from '../todo-list-item';
import * as action from '../../actions/todoAction';

class TodoList extends React.Component {
  render() {

    const {markDone, markUndone, remove, items} = this.props;
    return (
      <div className='todo-list'>
        <ul>
          {items.map(item => (
            <TodoListItem 
              key={item.id} 
              item={item} 
              markItemAsDone={markDone} 
              markItemAsUndone={markUndone}
              removeItem={remove}
            />
            )
          )}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    markDone: id => dispatch(action.markDone(id)),
    markUndone: id => dispatch(action.markUndone(id)),
    remove: id => dispatch(action.remove(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
