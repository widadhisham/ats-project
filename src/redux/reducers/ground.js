import _ from "lodash";
import * as groundActions from "../actions/ground";
import { assignPlant } from "../actions/ground";

const initialState = {
  groundsIds: [1, 2, 3],
  groundsById: {
    1: {
      id: 1,
      name: "Ground 1 ",
      width: 300,
      height: 200
    },
    2: {
      id: 2,
      name: "Ground 2 ",
      width: 200,
      height: 150,
      assignPlant: 1,
      assignDevice: 2
    },
    3: {
      id: 3,
      name: "Ground 3 ",
      width: 100,
      height: 200
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case groundActions.ADD_GROUND:
      return {
        ...state,
        groundsById: {
          [action.payload.id]: action.payload.ground,
          ...state.groundsById
        },
        groundsIds: [action.payload.id, ...state.groundsIds]
      };

    case groundActions.DELETE_GROUND:
      const deleted = _.without(
        state.groundsIds,
        String(action.payload.groundId)
      );
      return {
        ...state,
        groundsById: _.omit(state.groundsById, [action.payload.groundId]),
        groundsIds: _.without(deleted, action.payload.groundId)
      };

    case groundActions.EDIT_GROUND:
      return {
        ...state,
        groundsById: {
          ...state.groundsById,
          [action.payload.id]: {
            ...state.groundsById[action.payload.id],
            ...action.payload.ground
          }
        }
      };
    case groundActions.ASSIGN_PLANT:
      return {
        ...state,
        groundsById: {
          ...state.groundsById,
          [action.payload.groundId]: {
            ...state.groundsById[action.payload.groundId],
            assignPlant: action.payload.plantId
          }
        }
      };

    case groundActions.ASSIGN_DEVICE:
      return {
        ...state,
        groundsById: {
          ...state.groundsById,
          [action.payload.groundId]: {
            ...state.groundsById[action.payload.groundId],
            assignDevice: action.payload.deviceId
          }
        }
      };

    default:
      return state;
  }
};

export const getGrounds = state => {
  const grounds = [];
  const { groundsIds } = state.ground;
  groundsIds.forEach(groundId => {
    let ground = state.ground.groundsById[groundId];
    if (ground.assignPlant)
      ground = {
        ...ground,
        assignPlantName: state.plant.plantsById[ground.assignPlant].name
      };
    if (ground.assignDevice)
      ground = {
        ...ground,
        assignDeviceName: state.device.devicesById[ground.assignDevice].name
      };
    grounds.push(ground);
  });
  return grounds;
};

export const getPlantName = state => {};
