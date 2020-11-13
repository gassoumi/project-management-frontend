import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  USER_SIGNING,
  REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_SUCCESS
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errorMessage: null,
  token: localStorage.getItem("token"),
  isSigning: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_SIGNING :
      return {
        ...state,
        isSigning: true,
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        isSigning: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isSigning: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        isSigning: false,
      };
    default:
      return state;
  }
}
