import uuid from "uuid";

export const ADD_PLANT = "ADD_PLANT";

export const addPlant = plant => ({
  type: ADD_PLANT,
  payload: { id: uuid.v1(), plant }
});

export const EDIT_PLANT = "EDIT_PLANT";

export const editPlant = (id, plant) => ({
  type: EDIT_PLANT,
  payload: { id, plant }
});

export const DELETE_PLANT = "DELETE_PLANT";

export const deletePlant = plantId => ({
  type: DELETE_PLANT,
  payload: { plantId }
});

export const GET_PLANTS = "GET_PLANTS";

export const getPlants = (userId, plant) => ({
  type: GET_PLANTS,
  payload: { userId, plant }
});
