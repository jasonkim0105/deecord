import {combineReducers} from 'redux';
import ModalReducer from './modal_reducer';
import ErrorsReducer from './errors_reducer';

const uiReducer = combineReducers({
  modal: ModalReducer,
});

export default uiReducer;