import _ from "lodash";
import * as PlantActions from "../actions/plant";

const initialState = {
  plantsIds: [1, 2, 3, 4],
  plantsById: {
    1: {
      id: 1,
      name: "Tomato",
      waterQuantity: 1,
      temperature: 24,
      distanceX: 0.1,
      distanceY: 0.1
    },
    2: {
      id: 2,
      name: "Cucumber",
      waterQuantity: 2,
      temperature: 26,
      distanceX: 0.15,
      distanceY: 0.15
    },
    3: {
      id: 3,
      name: "Onions",
      waterQuantity: 0.5,
      temperature: 20,
      distanceX: 0.05,
      distanceY: 0.05
    },
    4: {
      id: 4,
      name: "Bean",
      waterQuantity: 2,
      temperature: 24,
      distanceX: 0.2,
      distanceY: 0.15
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlantActions.ADD_PLANT:
      return {
        ...state,
        plantsById: {
          [action.payload.id]: action.payload.plant,
          ...state.plantsById
        },
        plantsIds: [action.payload.id, ...state.plantsIds]
      };

    case PlantActions.DELETE_PLANT:
      const deleted = _.without(
        state.plantsIds,
        String(action.payload.plantId)
      );
      return {
        ...state,
        plantsById: _.omit(state.plantsById, [action.payload.plantId]),
        plantsIds: _.without(deleted, action.payload.plantId)
      };

    case PlantActions.EDIT_PLANT:
      return {};

    default:
      return state;
  }
};

export const getPlants = state => {
  const plants = [];
  const { plantsIds } = state.plant;
  plantsIds.forEach(plantId => {
    const plant = state.plant.plantsById[plantId];
    plants.push(plant);
  });
  return plants;
};
