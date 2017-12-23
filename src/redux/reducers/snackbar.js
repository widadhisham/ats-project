import * as Snackbar from "../actions/snackbar";

export default (state = [], action) => {
  switch (action.type) {
    case Snackbar.SHOW_SNACKBAR: {
      return action.payload;
    }
    default:
      return state;
  }
};
