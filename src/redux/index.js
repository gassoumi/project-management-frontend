import {
  logout,
  register,
  login,
  loadUser,
  updateProject,
  createProject,
  deleteProjectById,
  fetchProjects,
  fetchProjectById,
  clearAuthToken,
  clearAuthentication,
  fetchTasks,
  createTask,
  updateTask,
  deleteTaskById,
  deleteSprintById,
  createDocument,
  fetchSprintById,
  fetchSprints,
  updateSprint,
  createSprint,
  fetchDocuments,
  updateDocument,
  clearCacheProject,
  deleteDocumentById,
  fetchDiscussions,
  fetchDiscussion,
  fetchCommentsByDiscussion,
  createComment,
  createDiscussion,
  updateDiscussion,
  clearCacheTask,
  clearCacheSprint,
  clearCacheDocument,
  clearCacheDiscussion,
  clearCacheComment,
  updateComment,
  deleteCommentById,
  fetchWeekTasks,
  fetchWeekSprints,
  fetchLatestProjects,
  fetchLatestDiscussions,
  createNote,
  deleteNote,
  fetchNoteById,
  fetchNotes,
  updateNote,
  fetchTopDiscussions,
  clearCacheNote,
  fetchProjectTasks,
  clearCacheProblem,
  createProblem,
  deleteProblemById,
  fetchProblemById,
  fetchProblems,
  updateProblem,
  fetchTaskById,
  fetchProblemsByTask,
  fetchCalenderSprints,
} from './actions';

import {setTabValueProject, setTabValueNote} from './reducers/setting';

export {
  setTabValueNote,
  setTabValueProject,
  fetchCalenderSprints,
  fetchProblemsByTask,
  fetchTaskById,
  updateProblem,
  fetchProblems,
  fetchProblemById,
  deleteProblemById,
  createProblem,
  clearCacheProblem,
  fetchProjectTasks,
  clearCacheNote,
  fetchTopDiscussions,
  updateNote,
  fetchNotes,
  fetchNoteById,
  deleteNote,
  createNote,
  fetchLatestDiscussions,
  fetchLatestProjects,
  fetchWeekSprints,
  fetchWeekTasks,
  deleteCommentById,
  updateComment,
  updateDiscussion,
  createDiscussion,
  createComment,
  fetchCommentsByDiscussion,
  fetchDiscussion,
  fetchDiscussions,
  deleteDocumentById,
  updateDocument,
  fetchDocuments,
  createSprint,
  updateSprint,
  fetchSprints,
  fetchSprintById,
  createDocument,
  deleteTaskById,
  deleteSprintById,
  updateTask,
  createTask,
  clearAuthentication,
  clearAuthToken,
  loadUser,
  login,
  logout,
  register,
  deleteProjectById,
  createProject,
  updateProject,
  fetchProjectById,
  fetchProjects,
  fetchTasks,
  clearCacheProject,
  clearCacheComment,
  clearCacheDiscussion,
  clearCacheDocument,
  clearCacheSprint,
  clearCacheTask,
}
