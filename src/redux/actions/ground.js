import uuid from "uuid";

export const ADD_GROUND = "ADD_GROUND";

export const addGround = ground => ({
  type: ADD_GROUND,
  payload: { id: uuid.v1(), ground }
});

export const EDIT_GROUND = "EDIT_GROUND";

export const editGround = ground => ({
  type: EDIT_GROUND,
  payload: { ground }
});

export const DELETE_GROUND = "DELETE_GROUND";

export const deleteGround = groundId => ({
  type: DELETE_GROUND,
  payload: { groundId }
});

export const GET_GROUNDS = "GET_GROUNDS";

export const getGrounds = (userId, ground) => ({
  type: GET_GROUNDS,
  payload: { userId, ground }
});
