export const SET_TAB_VALUE_PROJECT = "SET_TAB_VALUE_PROJECT";
export const SET_TAB_VALUE_NOTE = "SET_TAB_VALUE_NOTE";

const initialState = {
  tabValueProject: 0,
  tabValueNote: 0
};

export const setTabValueProject = (value) => ({
  type: SET_TAB_VALUE_PROJECT,
  value,
});

export const setTabValueNote = (value) => ({
  type: SET_TAB_VALUE_NOTE,
  value,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TAB_VALUE_PROJECT:
      return {
        ...state,
        tabValueProject: action.value
      };
    case SET_TAB_VALUE_NOTE:
      return {
        ...state,
        tabValueNote: action.value
      };
    default:
      return {
        ...state
      };
  }
}
