import { AsyncStorage } from "react-native";
import { LOGIN, AUTH, SIGNUP } from "./types";
import store from "../store";
import * as apis from "../../api";

export const signUp = ({
  email,
  password,
  firstName,
  lastName
}) => async dispatch => {
  dispatch({ type: SIGNUP.PENDING });
  const response = await apis.signUp({ email, password, firstName, lastName });
  if (response.ok) {
    dispatch({ type: SIGNUP.SUCCESS });
  } else {
    dispatch({ type: SIGNUP.ERROR });
  }
};

export const logIn = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN.PENDING });
  const response = await apis.logIn({ email, password });
  if (response.ok) {
    const { status, success, ...user } = response.data;
    const { userId } = user;
    apis.setUserIdInRequestTransform(userId);
    await AsyncStorage.setItem("userId", JSON.stringify(userId));
    dispatch({ type: LOGIN.SUCCESS, user });
  } else {
    dispatch({ type: LOGIN.ERROR });
  }
};

export const auth = () => async dispatch => {
  dispatch({ type: AUTH.PENDING });
  let userId = await AsyncStorage.getItem("userId");
  userId = JSON.parse(userId);
  if (userId) {
    apis.setUserIdInRequestTransform(userId);
    dispatch({ type: AUTH.SUCCESS, userId });
  } else {
    dispatch({ type: AUTH.ERROR });
  }
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (id, data) => ({
  type: LOGIN_SUCCESS,
  payload: { id, data }
});

export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});

const API = "http://192.168.1.6:80/ats/api/action.php";

export const login = userObject => {
  const apiData = {
    type: "verify",
    table: "user",
    email: userObject.email,
    password: userObject.password
  };
  return dispatch => {
    dispatch(loginRequest());
    return fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(errors => {
        dispatch(loginFailed(errors.message));
        console.log(errors);
      });
  };
};
