import React from 'react';
import {connect} from 'react-redux';

import {closeModal} from '../../actions/modalAction';
import {addTodo} from '../../actions/todoAction';

class AddTodo extends React.Component {
  
  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  textArea;

  addTodo(event) {
    event.preventDefault();
    this.props.add(this.textArea.value);
  }

  cancel(event) {
    event.preventDefault();
    this.props.close();
  }

  render() {
    return (
      <div className='add-todo-modal'>
        <form id='add-todo-form' onSubmit={this.addTodo}>
          <div className='add-todo-modal-title'>
            <h4>Add New Todo</h4>
          </div>
          <div className='add-todo-text'>
            <textarea 
              name="add-todo-text" 
              id="add-todo-text" 
              cols="30" 
              rows="3"
              ref={(input) => this.textArea = input}
              >
            </textarea>
          </div>
          <div>
            <button>Add</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return {
    add: (text) => dispatch(addTodo(text)),
    close: () => dispatch(closeModal())
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
