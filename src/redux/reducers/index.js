import ThemeOptions from './ThemeOptions';

import {combineReducers} from "redux";
import entities from "./entities";
import paginate from "./paginate";
import auth from "./auth";
import * as ActionTypes from "../actionTypes";
import messages from "./messages";
import errors from "./errors";
import entity from './entity';
import setting from './setting';


// Updates the pagination data for different actions.
const pagination = combineReducers({
  projects: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_PROJECTS,
      ActionTypes.STARRED_SUCCESS_PROJECTS,
      ActionTypes.STARRED_FAILURE_PROJECTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_PROJECT,
    ],
  }),
  latestProjects: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_LATEST_PROJECTS,
      ActionTypes.STARRED_SUCCESS_LATEST_PROJECTS,
      ActionTypes.STARRED_FAILURE_LATEST_PROJECTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_LATEST_PROJECT,
    ],
  }),
  sprints: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_SPRINTS,
      ActionTypes.STARRED_SUCCESS_SPRINTS,
      ActionTypes.STARRED_FAILURE_SPRINTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_SPRINT,
    ],
  }),
  weekSprints: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_WEEK_SPRINTS,
      ActionTypes.STARRED_SUCCESS_WEEK_SPRINTS,
      ActionTypes.STARRED_FAILURE_WEEK_SPRINTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_WEEK_SPRINT,
    ],
  }),
  tasks: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_TASKS,
      ActionTypes.STARRED_SUCCESS_TASKS,
      ActionTypes.STARRED_FAILURE_TASKS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_TASK,
    ],
  }),
  notes: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_NOTES,
      ActionTypes.STARRED_SUCCESS_NOTES,
      ActionTypes.STARRED_FAILURE_NOTES,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_NOTE,
    ],
  }),
  weekTasks: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_WEEK_TASKS,
      ActionTypes.STARRED_SUCCESS_WEEK_TASKS,
      ActionTypes.STARRED_FAILURE_WEEK_TASKS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_WEEK_TASK,
    ],
  }),
  documents: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_DOCUMENTS,
      ActionTypes.STARRED_SUCCESS_DOCUMENTS,
      ActionTypes.STARRED_FAILURE_DOCUMENTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_DOCUMENT,
    ],
  }),
  discussions: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_DISCUSSIONS,
      ActionTypes.STARRED_SUCCESS_DISCUSSIONS,
      ActionTypes.STARRED_FAILURE_DISCUSSIONS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_DISCUSSION,
    ],
  }),
  topDiscussions: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_TOP_DISCUSSIONS,
      ActionTypes.STARRED_SUCCESS_TOP_DISCUSSIONS,
      ActionTypes.STARRED_FAILURE_TOP_DISCUSSIONS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_TOP_DISCUSSION,
    ],
  }),
  latestDiscussions: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_LATEST_DISCUSSIONS,
      ActionTypes.STARRED_SUCCESS_LATEST_DISCUSSIONS,
      ActionTypes.STARRED_FAILURE_LATEST_DISCUSSIONS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_LATEST_DISCUSSION,
    ],
  }),
  projectTasks: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_PROJECT_TASKS,
      ActionTypes.STARRED_SUCCESS_PROJECT_TASKS,
      ActionTypes.STARRED_FAILURE_PROJECT_TASKS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_PROJECT_TASKS,
    ],
  }),
  comments: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_COMMENTS,
      ActionTypes.STARRED_SUCCESS_COMMENTS,
      ActionTypes.STARRED_FAILURE_COMMENTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_COMMENT,
    ],
  }),
  problems: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_PROBLEMS,
      ActionTypes.STARRED_SUCCESS_PROBLEMS,
      ActionTypes.STARRED_FAILURE_PROBLEMS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_PROBLEM,
    ],
  }),
  users: paginate({
    types: [
      ActionTypes.STARRED_REQUEST_USERS,
      ActionTypes.STARRED_SUCCESS_USERS,
      ActionTypes.STARRED_FAILURE_USERS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.CLEAR_CACHE_USER,
    ],
  }),
});


const createEntity = combineReducers({
  project: entity({
    types: [
      ActionTypes.STARRED_REQUEST_PROJECTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_PROJECT,
      ActionTypes.REMOVE_SUCCESS_PROJECT,
      ActionTypes.STARRED_FETCH_PROJECT,
      ActionTypes.FETCH_FAILURE_PROJECT,
      ActionTypes.FETCH_SUCCESS_PROJECT,
      ActionTypes.CLEAR_CACHE_PROJECT,
      ActionTypes.START_UPDATE_PROJECT,
      ActionTypes.UPDATE_FAILURE_PROJECT
    ],
  }),
  sprint: entity({
    types: [
      ActionTypes.STARRED_REQUEST_SPRINTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_SPRINT,
      ActionTypes.REMOVE_SUCCESS_SPRINT,
      ActionTypes.STARRED_FETCH_SPRINT,
      ActionTypes.FETCH_FAILURE_SPRINT,
      ActionTypes.FETCH_SUCCESS_SPRINT,
      ActionTypes.CLEAR_CACHE_SPRINT,
      ActionTypes.START_UPDATE_SPRINT,
      ActionTypes.UPDATE_FAILURE_SPRINT
    ],
  }),
  note: entity({
    types: [
      ActionTypes.STARRED_REQUEST_NOTES,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_NOTE,
      ActionTypes.REMOVE_SUCCESS_NOTE,
      ActionTypes.STARRED_FETCH_NOTE,
      ActionTypes.FETCH_FAILURE_NOTE,
      ActionTypes.FETCH_SUCCESS_NOTE,
      ActionTypes.CLEAR_CACHE_NOTE,
      ActionTypes.START_UPDATE_NOTE,
      ActionTypes.UPDATE_FAILURE_NOTE
    ],
  }),
  problem: entity({
    types: [
      ActionTypes.STARRED_REQUEST_PROBLEMS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_PROBLEM,
      ActionTypes.REMOVE_SUCCESS_PROBLEM,
      ActionTypes.STARRED_FETCH_PROBLEM,
      ActionTypes.FETCH_FAILURE_PROBLEM,
      ActionTypes.FETCH_SUCCESS_PROBLEM,
      ActionTypes.CLEAR_CACHE_PROBLEM,
      ActionTypes.START_UPDATE_PROBLEM,
      ActionTypes.UPDATE_FAILURE_PROBLEM
    ],
  }),
  task: entity({
    types: [
      ActionTypes.STARRED_REQUEST_TASKS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_TASK,
      ActionTypes.REMOVE_SUCCESS_TASK,
      ActionTypes.STARRED_FETCH_TASK,
      ActionTypes.FETCH_FAILURE_TASK,
      ActionTypes.FETCH_SUCCESS_TASK,
      ActionTypes.CLEAR_CACHE_TASK,
      ActionTypes.START_UPDATE_TASK,
      ActionTypes.UPDATE_FAILURE_TASK
    ],
  }),
  discussion: entity({
    types: [
      ActionTypes.STARRED_REQUEST_DISCUSSIONS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_DISCUSSION,
      ActionTypes.REMOVE_SUCCESS_DISCUSSION,
      ActionTypes.STARRED_FETCH_DISCUSSION,
      ActionTypes.FETCH_FAILURE_DISCUSSION,
      ActionTypes.FETCH_SUCCESS_DISCUSSION,
      ActionTypes.CLEAR_CACHE_DISCUSSION,
      ActionTypes.START_UPDATE_DISCUSSION,
      ActionTypes.UPDATE_FAILURE_DISCUSSION
    ],
  }),
  comment: entity({
    types: [
      ActionTypes.STARRED_REQUEST_COMMENTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_COMMENT,
      ActionTypes.REMOVE_SUCCESS_COMMENT,
      ActionTypes.STARRED_FETCH_COMMENT,
      ActionTypes.FETCH_FAILURE_COMMENT,
      ActionTypes.FETCH_SUCCESS_COMMENT,
      ActionTypes.CLEAR_CACHE_COMMENT,
      ActionTypes.START_UPDATE_COMMENT,
      ActionTypes.UPDATE_FAILURE_COMMENT
    ],
  }),
  document: entity({
    types: [
      ActionTypes.STARRED_REQUEST_DOCUMENTS,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.UPDATE_SUCCESS_DOCUMENT,
      ActionTypes.REMOVE_SUCCESS_DOCUMENT,
      ActionTypes.STARRED_FETCH_DOCUMENT,
      ActionTypes.FETCH_FAILURE_DOCUMENT,
      ActionTypes.FETCH_SUCCESS_DOCUMENT,
      ActionTypes.CLEAR_CACHE_DOCUMENT,
      ActionTypes.START_UPDATE_DOCUMENT,
      ActionTypes.UPDATE_FAILURE_DOCUMENT
    ],
  }),
});


export default combineReducers({
  entity: createEntity,
  entities,
  auth,
  pagination,
  messages,
  errors,
  ThemeOptions,
  setting
});

// export default {
//   ThemeOptions
// };
