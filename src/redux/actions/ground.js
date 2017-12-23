export const ADD_GROUND = "ADD_GROUND";

export const addGround = ground => ({
  type: ADD_GROUND,
  payload: { ground }
});

export const EDIT_GROUND = "EDIT_GROUND";

export const editGROUND = ground => ({
  type: EDIT_GROUND,
  payload: { ground }
});

export const DELETE_GROUND = "DELETE_GROUND";

export const deleteGROUND = groundId => ({
  type: DELETE_GROUND,
  payload: { groundId }
});

export const GET_GROUNDS = "GET_GROUNDS";

export const getGROUNDs = (userId, ground) => ({
  type: GET_GROUNDS,
  payload: { userId, ground }
});
