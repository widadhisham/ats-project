import _ from "lodash";
import * as PlantActions from "../actions/plant";

const initialState = {
  plantsIds: [],
  plantsById: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlantActions.ADD_PLANT:
      //console.log(action.payload);
      return {
        ...state,
        plantsById: {
          [action.payload.id]: action.payload.plant,
          ...state.plantsById
        },
        plantsIds: [action.payload.id, ...state.plantsIds]
      };

    case PlantActions.DELETE_PLANT:
      return {};

    case PlantActions.EDIT_PLANT:
      return {};

    default:
      return state;
  }
};
