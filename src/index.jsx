import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import {Header} from './components/header';
import {TodoList} from './components/todo-list';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        {id: 1, isDone: true, text: 'Brush your teeth'},
        {id: 2, isDone: false, text: 'Take out the trash'},
        {id: 3, isDone: false, text: 'Trim backyard'},
      ]
    };

    this.markItemAsDone = this.markItemAsDone.bind(this);
    this.markItemAsUndone = this.markItemAsUndone.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
        <div>Footer</div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
