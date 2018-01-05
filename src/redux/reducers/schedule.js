import _ from "lodash";
import * as scheduleActions from "../actions/schedule";

const initialState = {
  scheduleIds: [1, 2, 3],
  scheduleById: {
    1: {
      id: 1
    },
    2: {
      id: 2
    },
    3: {
      id: 3
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case scheduleActions.ADD_SCHEDULE:
      return {
        ...state,
        scheduleById: {
          [action.payload.id]: action.payload.schedule,
          ...state.scheduleById
        },
        scheduleIds: [action.payload.id, ...state.scheduleIds]
      };

    case scheduleActions.DELETE_GROUND:
      const deleted = _.without(
        state.scheduleIds,
        String(action.payload.scheduleId)
      );
      return {
        ...state,
        scheduleById: _.omit(state.scheduleById, [action.payload.scheduleId]),
        scheduleIds: _.without(deleted, action.payload.scheduleId)
      };

    default:
      return state;
  }
};

export const getSchedule = state => {
  const schedules = [];
  return schedules;
};
