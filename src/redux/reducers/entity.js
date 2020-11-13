import * as ActionTypes from "../actionTypes";

const entity = ({types}) => {

  const [requestType, logout, updateSuccessType, removeSuccessType,
    starredFetch, fetchFailure, fetchSuccess, clearCache, startUpdate, updateFailure] = types;

  const initialState = {
    // for create or update an entity
    updateSuccess: false,
    // for delete an entity
    deleteSuccess: false,
    isLoaded: false,
    isUpdating: false,
    error: null,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case logout:
      case requestType:
        return {
          ...initialState,
        };
      case updateSuccessType:
        return {
          ...state,
          updateSuccess: true,
          isUpdating: false
        };
      case startUpdate:
        return {
          ...state,
          isUpdating: true
        };
      case updateFailure:
        return {
          ...state,
          isUpdating: false
        };
      case starredFetch:
        return {
          ...state,
          isLoaded: false,
          error: null,
        };
      // fail to fetch this entity
      case fetchFailure:
        return {
          ...state,
          isLoaded: false,
          error: action.error,
        };
      case fetchSuccess:
        return {
          ...state,
          isLoaded: true,
        };
      case  ActionTypes.SUCCESS('FETCH_DISCUSSION'):
        console.log(action.payload);
        return {
          ...state,
          isLoaded: true
        };
      case removeSuccessType:
        return {
          ...state,
          deleteSuccess: true,
          isUpdating: false
        };
      case clearCache:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  }

};

export default entity;
