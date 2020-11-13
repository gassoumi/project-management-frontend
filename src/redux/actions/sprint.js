import * as ActionTypes from "../actionTypes";
import {returnErrors} from "./messages";
import axios from 'axios';
import {createMessage} from "./messages";
import {normalize} from "normalizr";
import {sprintListSchema, sprintSchema} from "../../utils";
// import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {fetchProjectById} from "./project";
import _ from 'lodash';
import moment from 'moment';


export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

//get list of sprints
export const fetchSprints = (page = 1, pageSize, sort, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_SPRINTS,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.sprints &&
      getState().pagination.sprints.pageSize) || 5;

  try {
    await sleep(1e1); // For demo purposes.
    const res = await axios.get(`/api/sprints/?search=${searchQuery}&page=${page}&page_size=${pageSizeToUse}&ordering=${sort}`);
    const {data: {results, next, count}} = res;
    const listProject = results.map(sprint => sprint.project);
    const filteredIdProject = _.uniq(listProject);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idProject of filteredIdProject) {
      await fetchProjectById(idProject)(dispatch);
    }

    const normalizedData = normalize(results, sprintListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_SPRINTS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_SPRINTS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

// https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/
const recursiveFetch = async (url, data) => {
  if (url == null) {
    return data;
  }
  const res = await axios.get(url);
  let newResult = [];
  if (data.results) {
    // newResult = res.data.results.concat(data.results);
    newResult = [...res.data.results, ...data.results];
  } else {
    newResult = res.data.results;
  }
  const newData = {...res.data, results: newResult};
  return await recursiveFetch(res.data.next, newData);
};

//get list of sprints
export const fetchCalenderSprints = (dateQueryFilter) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_SPRINTS,
  });

  try {
    await sleep(1e1); // For demo purposes.
    // const res = await axios.get(`/api/sprints/?page=${1}&page_size=${100}&${dateQueryFilter}`);
    // const {data: {results, next, count}} = res;
    const data = {};
    const res = await recursiveFetch(`/api/sprints/?page=${1}&page_size=${100}&${dateQueryFilter}`, data);
    const {results, next, count} = res;
    const listProject = results.map(sprint => sprint.project);
    const filteredIdProject = _.uniq(listProject);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idProject of filteredIdProject) {
      await fetchProjectById(idProject)(dispatch);
    }

    const normalizedData = normalize(results, sprintListSchema);


    dispatch({
      type: ActionTypes.STARRED_SUCCESS_SPRINTS,
      response: normalizedData,
      nextPageUrl: next,
      page: 1,
      pageSize: 100,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_SPRINTS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

export const fetchWeekSprints = (page = 1, pageSize = 3) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_WEEK_SPRINTS,
  });

  const today = moment();
  const startWeek = today.startOf('week').format("YYYY-MM-DDTHH:mm");
  // .format('YYYY-MM-DDTHH:mmZ');
  const endWeek = today.endOf('isoWeek').format("YYYY-MM-DDTHH:mm");

  try {
    await sleep(1e1); // For demo purposes.
    const res = await axios.get(`/api/sprints/?page=${page}&page_size=${pageSize}&desired_at__lte=${endWeek}&desired_at__gte=${startWeek}`);
    const {data: {results, next, count}} = res;
    const listProject = results.map(sprint => sprint.project);
    const filteredIdProject = _.uniq(listProject);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idProject of filteredIdProject) {
      await fetchProjectById(idProject)(dispatch);
    }

    const normalizedData = normalize(results, sprintListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_WEEK_SPRINTS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSize,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_WEEK_SPRINTS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

// create a sprint
export const createSprint = (sprint) => (dispatch) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_SPRINT
  });
  axios.post('/api/sprints/', sprint)
    .then(response => {
      const name = response.data.name;
      dispatch(createMessage({
        added: `le sprint ${name}  a été creé `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_WEEK_SPRINT
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_SPRINT
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_SPRINT
      })
    })
    .catch(error => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_SPRINT
      });
    }).finally(() => {
    // dispatch(hideLoading())
  })
};

// update a sprint
export const updateSprint = (idSprint, sprint) => dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_SPRINT
  });
  axios.put(`/api/sprints/${idSprint}/`, sprint)
    .then(response => {
      const name = response.data.name;
      dispatch(createMessage({
        updated: `le sprint ${name} a été modifié `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_WEEK_SPRINT
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_SPRINT
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_SPRINT
      })
    })
    // .then(() => fetchSprints()(dispatch))
    .catch(error => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_SPRINT
      })
    }).finally(() => {
    // dispatch(hideLoading())
  })
};

//Delete sprint
export const deleteSprintById = sprint => (dispatch) => {
    // dispatch(showLoading());
    const id = sprint.id;
    axios.delete(`/api/sprints/${id}/`)
      .then(res => {
        dispatch(createMessage({
          deleted: `le sprint ${sprint.name} a été supprimé`
        }));
        dispatch({
          type: ActionTypes.CLEAR_CACHE_WEEK_SPRINT
        });
        dispatch({
          type: ActionTypes.CLEAR_CACHE_SPRINT
        });
        dispatch({
          type: ActionTypes.REMOVE_SUCCESS_SPRINT
        })
      })
      // .then(() => fetchSprints()(dispatch))
      .catch(error => {
        if (error.response) {
          const {data, status} = error.response;
          dispatch(returnErrors(data, status));
        }
      }).finally(() => {
      // dispatch(hideLoading())
    });
  }
;

export const clearCacheSprint = () => dispatch => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_WEEK_SPRINT
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_SPRINT
  });
};

//get Sprint by id
export const fetchSprintById = id => async dispatch => {
  // dispatch(showLoading());
  try {
    const response = await axios.get(`/api/sprints/${id}/`);
    const result = response.data;
    await fetchProjectById(result.project)(dispatch);
    const normalizedData = normalize(result, sprintSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_SPRINT,
      response: normalizedData,
    });
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

