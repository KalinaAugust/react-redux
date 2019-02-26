import { ACTION_CHANGE_TITLE } from './actions';

const initialState = {
    defaultTitle: 'default Title from redux'
};


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_CHANGE_TITLE:
            return { ...state, defaultTitle: action.payload };
        default: return state;
    }
};
