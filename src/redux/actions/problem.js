import * as ActionTypes from "../actionTypes";
import { returnErrors } from "./messages";
import axios from 'axios';
import { createMessage } from "./messages";
import { normalize } from "normalizr";
import { problemListSchema, problemSchema } from "../../utils";
import { fetchTaskById } from "./task";
import _ from 'lodash';


//get list of problems
export const fetchProblems = (page = 1, pageSize, sort, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_PROBLEMS,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.problems &&
      getState().pagination.problems.pageSize) || 5;

  try {
    const res = await axios.get(`/api/problems/?search=${searchQuery}&page=${page}&page_size=${pageSizeToUse}&ordering=${sort}`);
    const { data: { results, next, count } } = res;
    const listTask = results.map(problem => problem.task);
    const filteredIdTask = _.uniq(listTask);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const id of filteredIdTask) {
      // await sleep(1e4);
      await fetchTaskById(id)(dispatch);
    }

    const normalizedData = normalize(results, problemListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_PROBLEMS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_PROBLEMS,
    });
    if (error.response) {
      const { data, status } = error.response;
      dispatch(returnErrors(data, status));
    }
  }
};

export const fetchProblemsByTask = (page = 1, idTask, pageSize) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_PROBLEMS,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.problems &&
      getState().pagination.problems.pageSize) || 5;

  try {
    const res = await axios.get(`/api/problems/?page=${page}&page_size=${pageSizeToUse}&task=${idTask}`);
    const { data: { results, next, count } } = res;
    const normalizedData = normalize(results, problemListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_PROBLEMS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_PROBLEMS,
    });
    if (error.response) {
      const { data, status } = error.response;
      dispatch(returnErrors(data, status));
    }
  }
};


// create a problem
export const createProblem = (problem) => (dispatch) => {
  dispatch({
    type: ActionTypes.START_UPDATE_PROBLEM
  });
  // dispatch(showLoading());
  axios.post('/api/problems/', problem)
    .then(response => {
      const description = response.data.description;
      dispatch(createMessage({
        added: `the problem ${description}  is created `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_PROBLEM
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_PROBLEM
      })
    })
    .catch(error => {
      if (error.response) {
        const { data, status } = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_PROBLEM
      });
    }).finally(() => {
      // dispatch(hideLoading())
    })
};

// update a problem
export const updateProblem = (idProblem, problem) => dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_PROJECT
  });
  axios.put(`/api/problems/${idProblem}/`, problem)
    .then(response => {
      const description = response.data.description;
      dispatch(createMessage({
        updated: `the problem ${description} is modified `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_PROBLEM
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_PROBLEM
      })
    })
    .catch(error => {
      if (error.response) {
        const { data, status } = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_PROBLEM
      });
    }).finally(() => {
      // dispatch(hideLoading())
    })
};

//Delete Project
export const deleteProblemById = problem => (dispatch) => {
  // dispatch(showLoading());
  const id = problem.id;
  axios.delete(`/api/problems/${id}/`)
    .then(res => {
      dispatch(createMessage({
        deleted: `the problem ${problem.description} is deleted`
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_PROBLEM
      });
      dispatch({
        type: ActionTypes.REMOVE_SUCCESS_PROBLEM
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

export const clearCacheProblem = () => dispatch => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_PROBLEM
  });
};

//get Sprint
export const fetchProblemById = id => async dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_FETCH_PROBLEM,
  });
  try {
    const response = await axios.get(`/api/problems/${id}/`);
    const result = response.data;
    await fetchTaskById(result.task)(dispatch);
    const normalizedData = normalize(result, problemSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_PROBLEM,
      response: normalizedData,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_FAILURE_PROBLEM,
    });
    if (error.response) {
      const { data, status } = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

