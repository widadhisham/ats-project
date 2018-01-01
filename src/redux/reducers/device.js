import _ from "lodash";
import * as deviceActions from "../actions/device";

const initialState = {
  devicesIds: [1, 2],
  devicesById: {
    1: { id: 1, name: "Device 1", deviceNumber: "AC-16-2D-50-E5-97" },
    2: { id: 2, name: "Device 2", deviceNumber: "AC-16-2D-50-E5-99" }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case deviceActions.ADD_DEVICE:
      return {
        ...state,
        devicesById: {
          [action.payload.id]: action.payload.device,
          ...state.devicesById
        },
        devicesIds: [action.payload.id, ...state.devicesIds]
      };

    case deviceActions.DELETE_DEVICE:
      const deleted = _.without(
        state.devicesIds,
        String(action.payload.deviceId)
      );
      return {
        ...state,
        devicesById: _.omit(state.devicesById, [action.payload.deviceId]),
        devicesIds: _.without(deleted, action.payload.deviceId)
      };
    case deviceActions.EDIT_DEVICE:
      return {
        ...state,
        devicesById: {
          ...state.devicesById,
          [action.payload.id]: {
            ...state.devicesById[action.payload.id],
            ...action.payload.device
          }
        }
      };

    default:
      return state;
  }
};

export const getDevices = state => {
  const devices = [];
  const { devicesIds } = state.device;
  devicesIds.forEach(deviceId => {
    const device = state.device.devicesById[deviceId];
    devices.push(device);
  });
  return devices;
};
