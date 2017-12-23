import _ from "lodash";
import * as deviceActions from "../actions/device";

const initialState = {
  devicesIds: [],
  devicesById: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case deviceActions.ADD_DEVICE:
      return {
        ...state
      };

    case deviceActions.DELETE_DEVICE:
      return {};

    case deviceActions.EDIT_DEVICE:
      return {};

    default:
      return state;
  }
};
