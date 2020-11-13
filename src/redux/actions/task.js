import * as ActionTypes from "../actionTypes";
import {returnErrors} from "./messages";
import axios from "axios";
import {createMessage} from "./messages";
import {normalize} from "normalizr";
import {taskSchema, taskListSchema} from "../../utils";
// import {showLoading, hideLoading} from "react-redux-loading-bar";
import {fetchSprintById} from "./sprint";
import {fetchUserById} from "./user";
import _ from "lodash";
import {sleep} from "./sprint";
import moment from 'moment';

//get list of tasks
export const fetchTasks = (page = 1, pageSize, sort, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_TASKS,
  });

  const pageSizeToUse =
    pageSize ||
    (getState().pagination &&
      getState().pagination.tasks &&
      getState().pagination.tasks.pageSize) ||
    5;

  try {
    await sleep(1e2); // For demo purposes.
    const res = await axios.get(
      `/api/tasks/?search=${searchQuery}&page=${page}&page_size=${pageSizeToUse}&ordering=${sort}`
    );
    const {
      data: {results, next, count},
    } = res;
    // fetch all sprint of this list of task
    const listSprint = results.map((task) => task.sprint);
    const filteredIdSprint = _.uniq(listSprint);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idSprint of filteredIdSprint) {
      await fetchSprintById(idSprint)(dispatch);
    }

    // fetch all users of this list of tasks
    const listUser = results.map((task) => task.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, taskListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_TASKS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_TASKS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};


//get list of tasks of a project
export const fetchProjectTasks = (page = 1, pageSize, id) => async (
  dispatch,
  getState
) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_PROJECT_TASKS,
  });

  const pageSizeToUse =
    pageSize ||
    (getState().pagination &&
      getState().pagination.projectTasks &&
      getState().pagination.projectTasks.pageSize) || 5;

  try {
    await sleep(1e2); // For demo purposes.
    const res = await axios.get(
      `/api/projects/${id}/tasks/?page=${page}&page_size=${pageSizeToUse}`
    );
    const {
      data: {results, next, count},
    } = res;
    // fetch all sprint of this list of task
    const listSprint = results.map((task) => task.sprint);
    const filteredIdSprint = _.uniq(listSprint);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idSprint of filteredIdSprint) {
      await fetchSprintById(idSprint)(dispatch);
    }

    // fetch all users of this list of tasks
    const listUser = results.map((task) => task.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, taskListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_PROJECT_TASKS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_PROJECT_TASKS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};


// https://til.hashrocket.com/posts/cxd9yl95ip--get-beginning-and-end-of-week-with-momentjs
//get list of tasks
// https://stackoverflow.com/questions/50524040/how-to-filter-the-data-use-equal-or-greater-than-condition-in-the-url
// https://stackoverflow.com/questions/58837940/django-rest-framework-filter-by-date-range
export const fetchWeekTasks = (page = 1) => async (
  dispatch,
  getState
) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_WEEK_TASKS,
  });

  const today = moment();
  const startWeek = today.startOf('week').format("YYYY-MM-DDTHH:mm");
  // .format('YYYY-MM-DDTHH:mmZ');
  const endWeek = today.endOf('isoWeek').format("YYYY-MM-DDTHH:mm");

  //moment(endWeek, 'YYYY-MM-DDTHH:mm Z').toDate()
  try {
    await sleep(1e1); // For demo purposes.
    const res = await axios.get(
      `/api/tasks/?page=${page}&page_size=${5}&end_at__lte=${endWeek}&start_at__gte=${startWeek}`
    );
    const {
      data: {results, next, count},
    } = res;
    // fetch all sprint of this list of task
    const listSprint = results.map((task) => task.sprint);
    const filteredIdSprint = _.uniq(listSprint);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idSprint of filteredIdSprint) {
      await fetchSprintById(idSprint)(dispatch);
    }

    // fetch all users of this list of tasks
    const listUser = results.map((task) => task.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, taskListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_WEEK_TASKS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: 5,
      count,
    });

  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_WEEK_TASKS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

export const clearCacheTask = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_WEEK_TASK,
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_PROJECT_TASKS,
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_TASK,
  });
};

// create a task
export const createTask = (task) => (dispatch) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_TASK
  });
  axios
    .post("/api/tasks/", task)
    .then((response) => {
      const description = response.data.description;
      dispatch(
        createMessage({
          added: `la tache ${description}  a été creée `,
        })
      );
      dispatch({
        type: ActionTypes.CLEAR_CACHE_WEEK_TASK,
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_TASK,
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_TASK,
      });
    })
    .catch((error) => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_TASK
      });
    })
    .finally(() => {
      // dispatch(hideLoading())
    });
};

// update a task
export const updateTask = (idTask, task) => (dispatch) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_TASK
  });
  axios
    .put(`/api/tasks/${idTask}/`, task)
    .then((response) => {
      const description = response.data.description;
      dispatch(
        createMessage({
          updated: `la tache ${description} a été modifiée `,
        })
      );
      dispatch({
        type: ActionTypes.CLEAR_CACHE_WEEK_TASK,
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_TASK,
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_TASK,
      });
    })
    .catch((error) => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_TASK
      });
    })
    .finally(() => {
      // dispatch(hideLoading())
    });
};

//Delete task
export const deleteTaskById = (task) => (dispatch) => {
  // dispatch(showLoading());
  const id = task.id;
  axios
    .delete(`/api/tasks/${id}/`)
    .then((res) => {
      dispatch(
        createMessage({
          deleted: `la tache ${task.description} a été supprimée`,
        })
      );
      dispatch({
        type: ActionTypes.CLEAR_CACHE_WEEK_TASK,
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_TASK,
      });
      dispatch({
        type: ActionTypes.REMOVE_SUCCESS_TASK,
      });
    })
    // .then(() => fetchSprints()(dispatch))
    .catch((error) => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
    })
    .finally(() => {
      // dispatch(hideLoading())
    });
};

//get task
export const fetchTaskById = (id) => async (dispatch) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_FETCH_TASK,
  });
  try {
    const response = await axios.get(`/api/tasks/${id}/`);
    const result = response.data;
    await fetchUserById(result.user)(dispatch);
    await fetchSprintById(result.sprint)(dispatch);
    const normalizedData = normalize(result, taskSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_TASK,
      response: normalizedData,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_FAILURE_TASK,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  }
  // dispatch(hideLoading());
};
