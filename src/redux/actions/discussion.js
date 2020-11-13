import * as ActionTypes from "../actionTypes";
import {createMessage, returnErrors} from "./messages";
import axios from 'axios';
import {normalize} from "normalizr";
import {
  discussionSchema,
  discussionsListSchema,
} from "../../utils";
// import {showLoading, hideLoading} from 'react-redux-loading-bar';
import _ from 'lodash';
import {sleep} from "./sprint";
import {fetchUserById, fetchUserById2} from "./user";


//get list of discussions
export const fetchDiscussions = (page = 1, pageSize, searchQuery) => async (dispatch, getState) => {
  // dispatch(showLoading());
  // dispatch({
  //     type: ActionTypes.CLEAR_CACHE_COMMENT,
  // });
  dispatch({
    type: ActionTypes.STARRED_REQUEST_DISCUSSIONS,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.discussions &&
      getState().pagination.discussions.pageSize) || 5;

  try {
    await sleep(1e2); // For demo purposes.
    const res = await axios.get(`/api/discussions/?page=${page}&page_size=${pageSizeToUse}&search=${searchQuery}`);
    const {data: {results, next, count}} = res;

    // fetch all users of this list of discussions
    const listUser = results.map(discussion => discussion.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, discussionsListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_DISCUSSIONS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
    dispatch({
      type: ActionTypes.STARRED_FAILURE_DISCUSSIONS,
    });
  } finally {
    // dispatch(hideLoading());
  }
};
//get top of discussions
export const fetchTopDiscussions = (page = 1, pageSize) => async (dispatch, getState) => {

  // dispatch(showLoading());

  dispatch({
    type: ActionTypes.STARRED_REQUEST_TOP_DISCUSSIONS,
  });

  const pageSizeToUse = pageSize ||
    (getState().pagination && getState().pagination.topDiscussions &&
      getState().pagination.topDiscussions.pageSize) || 5;

  try {
    await sleep(1e2); // For demo purposes.
    const res = await axios.get(`/api/topDiscussion/?page=${page}&page_size=${pageSizeToUse}`);
    const {data: {results, next, count}} = res;

    // fetch all users of this list of discussions
    const listUser = results.map(discussion => discussion.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, discussionsListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_TOP_DISCUSSIONS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: pageSizeToUse,
      count
    });
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
    dispatch({
      type: ActionTypes.STARRED_FAILURE_TOP_DISCUSSIONS,
    });
  } finally {
    // dispatch(hideLoading());
  }
};

export const fetchLatestDiscussions = (page = 1) => async (dispatch, getState) => {
  // dispatch(showLoading());

  dispatch({
    type: ActionTypes.STARRED_REQUEST_LATEST_DISCUSSIONS,
  });


  try {
    await sleep(1e1); // For demo purposes.
    const res = await axios.get(`/api/discussions/?page=${page}&page_size=${3}`);
    const {data: {results, next, count}} = res;

    // fetch all users of this list of discussions
    const listUser = results.map(discussion => discussion.user);
    const filteredIdUser = _.uniq(listUser);

    // https://www.w3schools.com/js/js_loop_for.asp
    for (const idUser of filteredIdUser) {
      await fetchUserById(idUser)(dispatch);
    }

    const normalizedData = normalize(results, discussionsListSchema);

    dispatch({
      type: ActionTypes.STARRED_SUCCESS_LATEST_DISCUSSIONS,
      response: normalizedData,
      nextPageUrl: next,
      page,
      pageSize: 3,
      count
    });
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
    dispatch({
      type: ActionTypes.STARRED_FAILURE_LATEST_DISCUSSIONS,
    });
  } finally {
    // dispatch(hideLoading());
  }
};

export const clearCacheDiscussion = () => dispatch => {
  dispatch({
    type: ActionTypes.CLEAR_CACHE_DISCUSSION
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_TOP_DISCUSSION
  });
  dispatch({
    type: ActionTypes.CLEAR_CACHE_LATEST_DISCUSSION
  });
};

export const fetchDiscussion = id => async (dispatch) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.STARRED_FETCH_DISCUSSION,
  });
  try {
    await sleep(1e2); // For demo purposes.
    const result = await axios.get(`/api/discussions/${id}/`);
    await fetchUserById(result.data.user)(dispatch);
    const normalizedData = normalize(result.data, discussionSchema);
    dispatch({
      type: ActionTypes.FETCH_SUCCESS_DISCUSSION,
      response: normalizedData,
    });
  } catch (error) {

    if (error.response) {
      const {data, status} = error.response;
      dispatch({
        type: ActionTypes.FETCH_FAILURE_DISCUSSION,
        error: {data, status},
      });
      dispatch(returnErrors(data, status));
    } else {
      dispatch({
        type: ActionTypes.FETCH_FAILURE_DISCUSSION,
        error: "il y'a une erreur"
      });
    }
  } finally {
    // dispatch(hideLoading());
  }
};

export const fetchDiscussionNew = id => async (dispatch) => {
  return dispatch({
    type: 'FETCH_DISCUSSION',
    async payload() {
      await sleep(1e2);
      const result = await axios.get(`/api/discussions/${id}/`);
      await dispatch(fetchUserById2(result.data.user));
      return result;
    }
  })
};

export const fetchDiscussionV2 = id => async (dispatch) => {
  return await dispatch({
    type: 'FETCH_DISCUSSION',
    payload: axios.get(`/api/discussions/${id}/`)
  }).then((value, action) => {
    console.log(value);
    fetchUserById(value.data.user)(dispatch)
  })
};

// async payload() {
//   await sleep(1e2);
//   const result = await axios.get(`/api/discussions/${id}/`)
//     .then();
//   const resultUser = await fetchUserById(result.data.user)(dispatch);
//   return resultUser;
// }


// export const fetchDiscussion = id => {
//   return {
//     type: 'FETCH_DISCUSSION',
//     payload: axios.get(`/api/discussions/${id}/`)
//   }
// };

// create a discussion
export const createDiscussion = (discussion) => (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_DISCUSSION
  });
  const newDiscussion = {...discussion, user: getState().auth.user.id};
  axios.post('/api/discussions/', newDiscussion)
    .then(response => {
      const object = response.data.object;
      dispatch(createMessage({
        added: `la discussion ${object}  a été creée `
      }));
      dispatch({
        type: ActionTypes.CLEAR_CACHE_TOP_DISCUSSION
      });
      dispatch({
        type: ActionTypes.CLEAR_CACHE_DISCUSSION
      });
      dispatch({
        type: ActionTypes.UPDATE_SUCCESS_DISCUSSION
      })
    })
    .catch(error => {
      if (error.response) {
        const {data, status} = error.response;
        dispatch(returnErrors(data, status));
      }
      dispatch({
        type: ActionTypes.UPDATE_FAILURE_DISCUSSION
      });
    }).finally(() => {
    // dispatch(hideLoading())
  })
};

// update a discussion
export const updateDiscussion = (idDiscussion, discussion) => async (dispatch, getState) => {
  // dispatch(showLoading());
  dispatch({
    type: ActionTypes.START_UPDATE_DISCUSSION
  });
  const newDiscussion = {...discussion, user: getState().auth.user.id};
  try {
    const response = await axios.put(`/api/discussions/${idDiscussion}/`, newDiscussion);
    const object = response.data.object;
    dispatch(createMessage({
      updated: `la discussion ${object} a été modifiée `
    }));
    // dispatch({
    //     type: ActionTypes.CLEAR_CACHE_DISCUSSION
    // });
    await fetchDiscussion(idDiscussion)(dispatch);
    dispatch({
      type: ActionTypes.UPDATE_SUCCESS_DISCUSSION
    })
  } catch (error) {
    if (error.response) {
      const {data, status} = error.response;
      dispatch(returnErrors(data, status));
    }
    dispatch({
      type: ActionTypes.UPDATE_FAILURE_DISCUSSION
    });
  } finally {
    // dispatch(hideLoading());
  }
};

