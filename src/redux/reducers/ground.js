import _ from "lodash";
import * as groundActions from "../actions/ground";

const initialState = {
  groundsIds: [1, 2, 3],
  groundsById: {
    1: { id: 1, name: "Ground 1 ", width: 300, height: 200 },
    2: { id: 2, name: "Ground 2 ", width: 200, height: 150 },
    3: { id: 3, name: "Ground 3 ", width: 100, height: 200 }
  }
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

export const getGrounds = state => {
  const grounds = [];
  const { groundsIds } = state.ground;
  groundsIds.forEach(groundId => {
    const ground = state.ground.groundsById[groundId];
    grounds.push(ground);
  });
  return grounds;
};
