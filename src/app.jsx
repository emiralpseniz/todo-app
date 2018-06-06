import React from 'react';
import Modal from 'react-modal';

import {connect} from 'react-redux';

import {Header} from './components/header';
import TodoList from './components/todo-list';
import Footer from './components/footer';
import AddTodo from './components/add-todo';

import {openModal, closeModal} from './actions/modalAction';

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
  render() {
    return (
      <div className='app'>
        <Header />
        <TodoList />
        <Footer />
        <Modal 
          isOpen={this.props.isModalOpen} 
          contentLabel='Add New Todo'
          style={modalStyles}
          onRequestClose={() => this.props.closeModal()}
        >
          <AddTodo />
        </Modal>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    isModalOpen: state.isModalOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
