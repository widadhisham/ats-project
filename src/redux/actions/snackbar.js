export const SHOW_SNACKBAR_REQUEST = "SHOW_SNACKBAR_REQUEST";

export const showSnackbarRequest = message => ({
  type: SHOW_SNACKBAR_REQUEST,
  payload: message
});

export const SHOW_SNACKBAR = "SHOW_SNACKBAR";

export const showSnackbar = message => ({
  type: SHOW_SNACKBAR,
  payload: message
});
