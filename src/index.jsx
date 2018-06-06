import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.scss';

import reducers from './reducers';
import App from './app';

const initialStore = {
  items: [
    {id: 1, isDone: true, text: 'Brush your teeth'},
    {id: 2, isDone: false, text: 'Take out the trash'},
    {id: 3, isDone: false, text: 'Trim backyard'},
  ],
  isModalOpen: false,
};
const store = createStore(reducers, initialStore, composeWithDevTools());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, 
  document.getElementById('app'),
);
