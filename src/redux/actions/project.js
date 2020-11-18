import * as ActionTypes from "../actionTypes";
import {returnErrors} from "./messages";
import axios from 'axios';
import {createMessage} from "./messages";
import {normalize} from "normalizr";
import {projectSchema, projectListSchema} from "../../utils";
import {fetchUserById} from "./user";
import _ from "lodash";

//get list of project projects
export const fetchProjects = (page = 1, pageSize, sort, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_PROJECTS,
  });
  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.projects &&
      getState().pagination.projects.pageSize) || 5;

  try {
    const res = await axios.get(`/api/projects/?search=${searchQuery}&page=${page}&page_size=${pageSizeToUse}&ordering=${sort}`);
    const {data: {results, next, count}} = res;
    // get an array of arrays
    const projectsUsers = results.map(project => project.projectUsers);
    const users = projectsUsers.map(projectUser => projectUser.map(item => item.user));
    const listOfUsers = [].concat.apply([], users);
    const filteredUsers = _.uniq(listOfUsers);
    for (const idUser of filteredUsers) {
      await fetchUserById(idUser)(dispatch);
    }
    const normalizedData = normalize(results, projectListSchema);
    dispatch({
      type: ActionTypes.STARRED_SUCCESS_PROJECTS,
      response: normalizedData,
      nextPageUrl: next,
      page: page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_PROJECTS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

//get list of latest project projects
export const fetchLatestProjects = (page = 1) => async dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_REQUEST_LATEST_PROJECTS,
  });
  try {
    const res = await axios.get(`/api/projects/?page=${page}&page_size=${5}&ordering=-created_at`);
    const {data: {results, next, count}} = res;
    const normalizedData = normalize(results, projectListSchema);
    dispatch({
      type: ActionTypes.STARRED_SUCCESS_LATEST_PROJECTS,
      response: normalizedData,
      nextPageUrl: next,
      page: page,
      pageSize: 5,
      count
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.STARRED_FAILURE_LATEST_PROJECTS,
    });
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
  } finally {
    // dispatch(hideLoading());
  }
};

export const clearCacheProject = () => dispatch => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_LATEST_PROJECT
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_PROJECT
  });
};

// create a project
export const createProject = (project) => async dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_PROJECT
  });
  axios.post('/api/projects/', project)
    .then(response => {
      const designation = response.data.designation;
      dispatch(createMessage({
        added: `le projet ${designation}  a été creé `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_LATEST_PROJECT
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_PROJECT
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_PROJECT
      })
    })
    .catch(error => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_PROJECT
      })
    }).finally(() => {
    // dispatch(hideLoading())
  })
};

// update a project
export const updateProject = (idProject, project) => dispatch => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_PROJECT
  });
  axios.put(`/api/projects/${idProject}/`, project)
    .then(response => {
      const designation = response.data.designation;
      dispatch(createMessage({
        updated: `le projet ${designation} a été modifié `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_LATEST_PROJECT
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_PROJECT
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_PROJECT
      })
    })
    .catch(error => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_PROJECT
      })
    }).finally(() => {
    // dispatch(hideLoading())
  })
};

//Delete Project
export const deleteProjectById = project => (dispatch) => {
    // dispatch(showLoading());
    const id = project.id;
    axios.delete(`/api/projects/${id}/`)
      .then(res => {
        dispatch(createMessage({
          deleted: `le projet ${project.designation} a été supprimé`
        }));
        dispatch({
          type: ActionTypes.CLEAR_CACHE_LATEST_PROJECT
        });
        dispatch({
          type: ActionTypes.CLEAR_CACHE_PROJECT
        });
        dispatch({
          type: ActionTypes.REMOVE_SUCCESS_PROJECT
        })
      })
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


//get Project
export const fetchProjectById = (id) => async dispatch => {
  // dispatch(showLoading());
  try {
    const response = await axios.get(`/api/projects/${id}/`);
    const result = response.data;
    const projectUsers = result.projectUsers;
    const users = projectUsers.map(item => item.user);
    for (const user of users) {
      await fetchUserById(user)(dispatch)
    }
    const normalizedData = normalize(result, projectSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_PROJECT,
      response: normalizedData,
    });
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch({
        type: ActionTypes.FETCH_FAILURE_PROJECT,
        error: {data, status},
      });
      dispatch(returnErrors(data, status));
    } else {
      dispatch({
        type: ActionTypes.FETCH_FAILURE_PROJECT,
        error: "il y'a une erreur"
      });
    }
  }
};

