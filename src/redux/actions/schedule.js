import uuid from "uuid";

export const ADD_SCHEDULE = "Add_SCHEDULE";

export const addSchedule = schedule => ({
  type: ADD_SCHEDULE,
  payload: { id: uuid.v1(), schedule }
});

export const DELETE_SCHEDULE = "DELETE_SCHEDULE";

export const deleteSchedule = scheduleId => ({
  type: DELETE_SCHEDULE,
  payload: { scheduleId }
});
