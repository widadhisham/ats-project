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

const API = "https://192.168.1.6/ats/api/action.php";

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
