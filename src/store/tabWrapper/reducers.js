import { ACTION_CHANGE_VIDEO_URL } from './actions';

const defaultState = {
    videoUrl: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
};


export const tabWrapperReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ACTION_CHANGE_VIDEO_URL:
            return { ...state, videoUrl: action.payload };
        default: return state;
    }
};
