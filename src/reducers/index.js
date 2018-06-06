import {combineReducers} from 'redux';

import {modalReducer} from './modalReducer';
import {todoReducer} from './todoReducer';

export default combineReducers({
  isModalOpen: modalReducer,
  items: todoReducer
});
