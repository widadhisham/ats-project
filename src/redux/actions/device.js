import uuid from "uuid";

export const ADD_DEVICE = "ADD_DEVICE";

export const addDevice = device => ({
  type: ADD_DEVICE,
  payload: { id: uuid.v1(), device }
});

export const EDIT_DEVICE = "EDIT_DEVICE";

export const editDevice = device => ({
  type: EDIT_DEVICE,
  payload: { device }
});

export const DELETE_DEVICE = "DELETE_DEVICE";

export const deleteDevice = deviceId => ({
  type: DELETE_DEVICE,
  payload: { deviceId }
});

export const GET_DEVICES = "GET_DEVICES";

export const getGROUNDs = (userId, device) => ({
  type: GET_DEVICES,
  payload: { userId, device }
});
