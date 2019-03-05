import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import tabWrapperReducer from './tabWrapper/reducers';


const mainReducer = combineReducers({
  app: appReducer,
  tabWrapper: tabWrapperReducer,
});


const rootReducer = (state, action) => {
  let statement = state;

  if (action.type === 'ACTION_CLEAR_STORE') {
    statement = undefined;
  }

  return mainReducer(statement, action);
};


export default rootReducer;
