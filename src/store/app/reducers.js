import { ACTION_CHANGE_TITLE } from './actions';

const initialState = {
    tabTitle: 'default Title from redux'
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_TITLE:
            return { ...state, tabTitle: action.payload };
        default: return state;
    }
};
