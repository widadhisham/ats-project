import * as UserActions from "../actions/user";

const initialState = {
  userData: {},
  id: undefined,
  isAuthenticating: true,
  isAuthenticated: false,
  isLogging: false,
  loginError: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    /* case Types.AUTH_REQUEST:
      return { ...state, isLoadingAuth: true };
    case Types.AUTH_SUCCESS:
      return { ...state, isLoadingAuth: false, isAuth: true };
    case Types.AUTH_FAILED:
      return {
        ...state,
        isLoadingAuth: false,
        isAuth: false,
        errorMessageAuth: action.errorMessage
      };*/

    case UserActions.LOGIN_REQUEST:
      return {
        ...state,
        isLogging: true,
        isAuthenticated: false
      };
    case UserActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        isAuthenticated: true,
        id: action.id,
        userData: action.data
      };
    case UserActions.LOGIN_FAILED:
      return {
        ...state,
        isLogging: false,
        isAuthenticated: false,
        id: undefined,
        userData: undefined
      };
    /*  case Types.SIGNUP_REQUEST:
      return { ...state, isLoadingSignup: true };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoadingSignup: false,
        successMessageSignup: action.successMessage
      };
    case Types.SIGNUP_FAILED:
      return {
        ...state,
        isLoadingSignup: false,
        successMessageSignup: undefined,
        errorMessageSignup: action.errorMessage
      };
    case Types.LOG_OUT:
      return {
        isAuth: false,
        isLoadingAuth: false,
        isLoadingLogin: false,
        isLoadingSignup: false,
        token: undefined,
        email: undefined,
        errorMessageAuth: undefined,
        errorMessageLogin: undefined,
        errorMessageSignup: undefined,
        successMessageSignup: undefined
      };*/

    default:
      return state;
  }
};
