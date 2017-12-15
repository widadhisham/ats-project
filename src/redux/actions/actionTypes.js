import { SEND_ANONYMOUS_MESSAGE } from "src/redux/actions/types";

export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (token, id, role, firebase_token) => ({
  type: LOGIN_SUCCESS,
  payload: { token, id, role, firebase_token }
});

export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});
