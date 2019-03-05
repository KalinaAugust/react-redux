export const ACTION_CHANGE_TITLE = 'ACTION_CHANGE_TITLE';

export const changeTitle = newTitle => ({
  type: ACTION_CHANGE_TITLE,
  payload: newTitle,
});
