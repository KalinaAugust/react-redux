export const ACTION_CHANGE_VIDEO_URL = 'ACTION_CHANGE_VIDEO_URL';

export const changeVideoUrl = (newTitle) => {
    return {
        type: ACTION_CHANGE_VIDEO_URL,
        payload: newTitle
    }
};