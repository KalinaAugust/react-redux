import { combineReducers } from 'redux';
import { appReducer } from './app/reducers';
import { tabWrapperReducer } from './tabWrapper/reducers';




const mainReducer = combineReducers({
    app: appReducer,
    tabWrapper: tabWrapperReducer
});


const rootReducer = (state, action) => {
    if (action.type === 'ACTION_CLEAR_STORE') {
        state = undefined;
    }

    return mainReducer(state, action);
};



export default rootReducer;