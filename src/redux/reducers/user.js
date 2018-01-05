import * as USER from "../actions/types";

const initialState = {
  userData: {},
  id: undefined,
  isAuthenticating: true,
  isAuthenticated: false,
  isLogging: false,
  loginError: undefined,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER.AUTH.PENDING: {
      return { ...state, isAuthenticating: true };
    }
    case USER.AUTH.SUCCESS: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        id: action.userId
      };
    }
    case USER.AUTH.ERROR: {
      return { ...state, isAuthenticating: false, isAuthenticated: false };
    }
    case USER.LOGIN.PENDING: {
      return { ...state, isLogging: true, loginError: undefined };
    }
    case USER.LOGIN.SUCCESS: {
      return {
        ...state,
        loginError: undefined,
        isLogging: false,
        isAuthenticated: true,
        id: action.userId
      };
    }
    case USER.LOGIN.ERROR: {
      return {};
    }
    case USER.SIGNUP.PENDING: {
      return {};
    }
    case USER.SIGNUP.SUCCESS: {
      return {};
    }
    case USER.SIGNUP.ERROR: {
      return {};
    }
    /*  case UserActions.LOGIN_REQUEST:
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
