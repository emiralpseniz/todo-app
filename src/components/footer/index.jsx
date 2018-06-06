import React from 'react';
import {connect} from 'react-redux';

import {openModal} from '../../actions/modalAction';
import * as action from '../../actions/todoAction';

class Footer extends React.Component {
  render() {
    const {showModal, markAllDone, markAllUndone, clear} = this.props;
    return (
      <div className='footer'>
        <div className='toolbox'>
          <button onClick={() => showModal()}>Add Todo</button>
          <button onClick={() => markAllDone()}>All Done</button>
          <button onClick={() => markAllUndone()} >All Undone</button>
          <button onClick={() => clear()} >Clear</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => dispatch(openModal()),
    markAllDone: () => dispatch(action.markAllDone()),
    markAllUndone: () => dispatch(action.markAllUndone()),
    clear: () => dispatch(action.clear())
  };
}

export default connect(null, mapDispatchToProps)(Footer);
