export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password }
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = id => ({
  type: LOGIN_SUCCESS,
  payload: { id }
});

export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});

const API = "https://localhost/ats/api/action.php";

export const logIn = userObject => {
  return dispatch => {
    dispatch(logInRequest());

    return fetch(endpoint.LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        /* if (data.success === true) {
          dispatch(logInSuccess(data.id));
          //localStorage.setItem("id", data.id);
        } else {
          dispatch(logInFailed(data.message));
        }*/
      })
      .catch(errors => {
        dispatch(logInFailed(errors.message));
        throw errors;
      });
  };
};
