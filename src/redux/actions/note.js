import * as ActionTypes from "../actionTypes";
import { returnErrors } from "./messages";
import axios from 'axios';
import { createMessage } from "./messages";
import { normalize } from "normalizr";
import { notesListSchema, noteSchema } from "../../utils";

//get list of project projects
export const fetchNotes = (page = 1, pageSize, sort, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_NOTES,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.notes &&
      getState().pagination.notes.pageSize) || 5;

  try {
    const res = await axios.get(`/api/notes/?search=${searchQuery}&page=${page}&page_size=${pageSizeToUse}&ordering=${sort}`);
    const { data: { results, next, count } } = res;

    const normalizedData = normalize(results, notesListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_NOTES,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_NOTES,
    });
    if (error.response) {
      const { data, status } = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};


// create a note
export const createNote = (note) => (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_NOTE
  });
  const newNote = { ...note, user: getState().auth.user.id };
  axios.post('/api/notes/', newNote)
    .then(response => {
      const note = response.data.note;
      dispatch(createMessage({
        added: `the story ${note}  is created `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_NOTE
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_NOTE
      })
    })
    .catch(error => {
      if (error.response) {
        const { data, status } = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_NOTE
      });
    }).finally(() => {
      // dispatch(hideLoading())
    })
};

// update a note
export const updateNote = (idNote, note) => (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_PROBLEM
  });
  const newNote = { ...note, user: getState().auth.user.id };
  axios.put(`/api/notes/${idNote}/`, newNote)
    .then(response => {
      const note = response.data.note;
      dispatch(createMessage({
        updated: `the story ${note} is modified `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_NOTE
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_NOTE
      })
    })
    .catch(error => {
      if (error.response) {
        const { data, status } = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_NOTE
      });
    }).finally(() => {
      // dispatch(hideLoading())
    })
};

//Delete note
export const deleteNote = note => (dispatch) => {
  // dispatch(showLoading());
  const id = note.id;
  axios.delete(`/api/notes/${id}/`)
    .then(res => {
      dispatch(createMessage({
        deleted: `the story ${note.note} is deleted`
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_NOTE
      });
      dispatch({
        type: ActionTypes.REMOVE_SUCCESS_NOTE
      })
    })
    .catch(error => {
      if (error.response) {
        const { data, status } = error.response;
        dispatch(returnErrors(data, status));
      }
    }).finally(() => {
      // dispatch(hideLoading())
    });
}
  ;

export const clearCacheNote = () => dispatch => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_NOTE
  });
};

//get note
export const fetchNoteById = id => async dispatch => {
  try {
    const response = await axios.get(`/api/notes/${id}/`);
    const result = response.data;
    const normalizedData = normalize(result, noteSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_SPRINT,
      response: normalizedData,
    });
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      dispatch(returnErrors(data, status));
    }
  }
};

