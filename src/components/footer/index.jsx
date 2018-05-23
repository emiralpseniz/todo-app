import React from 'react';

export const Footer = (props) => {

  return (
    <div className='footer'>
      <div className='toolbox'>
        <button onClick={props.showModal}>Add Todo</button>
        <button onClick={props.markAllDone}>All Done</button>
        <button onClick={props.markAllUndone} >All Undone</button>
        <button onClick={props.clear} >Clear</button>
      </div>
    </div>
  );

}
