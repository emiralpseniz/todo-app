import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import './index.scss';

import {Header} from './components/header';
import {TodoList} from './components/todo-list';
import {Footer} from './components/footer';
import {AddTodo} from './components/add-todo';

Modal.setAppElement('#app');

const modalStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #000000'
  }
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        {id: 1, isDone: true, text: 'Brush your teeth'},
        {id: 2, isDone: false, text: 'Take out the trash'},
        {id: 3, isDone: false, text: 'Trim backyard'},
      ],
      isModalOpen: false
    };

    this.markItemAsDone = this.markItemAsDone.bind(this);
    this.markItemAsUndone = this.markItemAsUndone.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clear = this.clear.bind(this);
    this.markAllDone = this.markAllDone.bind(this);
    this.markAllUndone = this.markAllUndone.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  markItemAsDone(itemId) {
    const items = this.state.items;
    items.forEach(item => {
      if(item.id === itemId) {
        item.isDone = true;
      }
    });
    this.setState({items});
  }

  markItemAsUndone(itemId) {
    const items = this.state.items;
    items.forEach(item => {
      if(item.id === itemId) {
        item.isDone = false;
      }
    });
    this.setState({items});
  }

  removeItem(itemId) {
    let items = this.state.items;
    items = items.filter(item => item.id !== itemId);
    this.setState({items});
  }

  clear() {
    this.setState({items: []});
  }

  markAllDone() {
    const items = this.state.items;
    items.forEach(item => item.isDone = true);
    this.setState({items});
  }

  markAllUndone() {
    const items = this.state.items;
    items.forEach(item => item.isDone = false);
    this.setState({items});
  }

  closeModal() {
    this.setState({
      items: this.state.items,
      isModalOpen: false
    })
  }

  addTodo(text) {
    const items = this.state.items;
    if(text.trim !== '') {
      const newItemId = items[items.length - 1].id + 1;
      items.push({id: newItemId, text, isDone: false});
    }

    this.setState({
      items,
      isModalOpen: false
    });
  }

  showModal() {
    this.setState({
      items: this.state.items,
      isModalOpen: true
    });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <TodoList 
          items={this.state.items} 
          markItemAsDone={this.markItemAsDone} 
          markItemAsUndone={this.markItemAsUndone}
          removeItem={this.removeItem}
        />
        <Footer 
          showModal={this.showModal}
          clear={this.clear} 
          markAllDone={this.markAllDone} 
          markAllUndone={this.markAllUndone}
        />
        <Modal 
          isOpen={this.state.isModalOpen} 
          contentLabel='Add New Todo'
          style={modalStyles}
          onRequestClose={this.closeModal}
        >
          <AddTodo 
            addTodo={this.addTodo} 
            closeModal={this.closeModal}
          >
          </AddTodo>
        </Modal>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
