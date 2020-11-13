import {schema} from "normalizr";


// Define a user schema
export const userSchema = new schema.Entity("users");
export const usersListSchema = new schema.Array(userSchema);

// Define a projectUsers schema
export const projectUsersSchema = new schema.Entity(
  "projectUsers",
  {user: userSchema}
);
export const projectUsersListSchema = new schema.Array(projectUsersSchema);

// Define your projects schema
// export const projectSchema = new schema.Entity(
//     "projects",
//     {projectUsers: projectUsersListSchema},
//     {idAttribute: "code_project"}
// );

export const projectSchema = new schema.Entity(
  "projects",
  {projectUsers: projectUsersListSchema},
);


export const projectListSchema = new schema.Array(projectSchema);

// Define a sprint schema
export const sprintSchema = new schema.Entity("sprints",
  {project: projectSchema});

export const sprintListSchema = new schema.Array(sprintSchema);

// Define a task schema
export const taskSchema = new schema.Entity("tasks",
  {sprint: sprintSchema});

export const taskListSchema = new schema.Array(taskSchema);

// Define a problem schema
export const problemSchema = new schema.Entity("problems",
  {task: taskSchema});

export const problemListSchema = new schema.Array(problemSchema);

// Define a document schema
export const documentSchema = new schema.Entity("documents",
  {task: taskSchema});
export const documentsListSchema = new schema.Array(documentSchema);

// Define a note schema
export const noteSchema = new schema.Entity("notes",
  {user: userSchema});
export const notesListSchema = new schema.Array(noteSchema);

// Define a discussion schema
export const discussionSchema = new schema.Entity("discussions",
  {user: userSchema});
export const discussionsListSchema = new schema.Array(discussionSchema);

// Define a comment schema
export const commentSchema = new schema.Entity("comments",
  {user: userSchema, discussion: discussionSchema});
export const commentsListSchema = new schema.Array(commentSchema);

export const tokenConfig = () => {
  // get token from state
  const token = localStorage.getItem("token");

  //Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token add to header config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};

export const overridePaginationStateWithQueryParams = (paginationBaseState, locationSearch) => {
  const params = new URLSearchParams(locationSearch);
  const page = params.get('page');
  const sort = params.get('sort');
  const search = params.get('search');
  if (page && sort) {
    const sortSplit = sort.split(',');
    paginationBaseState.activePage = parseInt(page);
    paginationBaseState.sort = sortSplit[0];
    paginationBaseState.order = sortSplit[1];
  }
  paginationBaseState.search = search || "";
  return paginationBaseState;
};

export const getSortState = (location, itemsPerPage) => {
  const pageParam = getUrlParameter('page', location.search);
  const sortParam = getUrlParameter('sort', location.search);
  const searchParam = getUrlParameter('search', location.search);
  let sort = 'id';
  let order = 'asc';
  let activePage = 1;
  let search = "";
  if (pageParam !== '' && !isNaN(parseInt(pageParam, 10))) {
    activePage = parseInt(pageParam, 10);
  }
  if (sortParam !== '') {
    sort = sortParam.split(',')[0];
    order = sortParam.split(',')[1];
  }
  if (searchParam) {
    search = searchParam;
  }
  return {itemsPerPage, sort, order, activePage, search};
};

export const getUrlParameter = (name, search) => {
  const url = new URL(`http://localhost${search}`); // using a dummy url for parsing
  return url.searchParams.get(name) || '';
};
