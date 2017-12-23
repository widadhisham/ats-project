import _ from "lodash";
import * as groundActions from "../actions/ground";

const initialState = {
  groundsIds: [],
  groundsById: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case groundActions.ADD_GROUND:
      return {
        ...state
      };

    case groundActions.DELETE_GROUND:
      return {};

    case groundActions.EDIT_GROUND:
      return {};

    default:
      return state;
  }
};
