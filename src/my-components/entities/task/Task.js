import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchTasks, deleteTaskById, clearCacheTask, clearCacheProject} from "../../../redux";
import TaskTable from './TaskTable';
import DeleteDialog from '../common/DeleteDialog';
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {SuspenseLoading} from "../../../Routes";
import {
  Box,
  CardContent,
  Tab,
  TablePagination,
  Tabs,
  Typography
} from "@material-ui/core";
import {getColorTask} from "./TaskTable";
import Alert from '../common/Alert';


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// TODO file plugin
// https://github.com/react-dropzone/react-dropzone/
// plugins
// https://falcon.technext.it/plugins/plyr

// https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
// TODO 4 side Effect and react hooks
// https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns

// TODO 5 add event listener
// https://forum.freecodecamp.org/t/react-add-event-listener/201983
// https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component
function Task(props) {

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({});
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = React.useState(paginationState.search);


  const handleInput = (value) => {
    setQuery(value);
  };

  const handleQuery = () => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const sortEntities = () => {
    let sort = paginationState.order === 'asc' ? "" : "-";
    props.fetchTasks(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
    let endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (paginationState.search) {
      endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };


  const handleChangePage = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage + 1
    });
  };

  const handleChangeRowsPerPage = (event) => {
    const rowPerPage = parseInt(event.target.value, 10);
    setPaginationState({
      ...paginationState,
      itemsPerPage: rowPerPage,
      activePage: 1,
    });
  };

  useEffect(() => {
    // props.fetchTasks();
    return () => {
      props.clearCacheTask();
      props.clearCacheProject();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (props.deleteSuccess) {
      setOpen(false);
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [props.deleteSuccess]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page') || 1;
    const sort = params.get('sort');
    const search = params.get('search') || '';
    if (sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        sort: sortSplit[0],
        order: sortSplit[1],
        search,
      });
    } else {
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        search,
      });
    }
    setQuery(search);
  }, [props.location.search]);


  const handleEdit = (id) => {
    props.history.push(`/task/${id}/edit`);
  };

  const handleDelete = (task) => {
    setTask(task);
    setOpen(true);
  };

  const createNew = () => {
    props.history.push("/task/create");
  };

  const handleCreateNewProblem = idTask => {
    props.history.push(`/problem/create?idTask=${idTask}`);
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabContent = (filter) => {
    const newTasks = props.tasks.filter(task => task.status === filter);
    if (newTasks.length === 0) {
      return <Alert label="Pas de taches !!"/>;
    } else {
      return (
        <div className="table-responsive">
          <TaskTable
            displayStatus={false}
            canEdit={props.canEdit}
            tasks={newTasks}
            count={props.count}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            sort={sort}
          />
        </div>
      )
    }
  };

  return (
    <>
      {/*<PageTitle*/}
      {/*  titleHeading="Taches"*/}
      {/*/>*/}
      <DeleteDialog
        open={open}
        object={task}
        handleClose={() => setOpen(false)}
        deleteObject={props.deleteTaskById}
        title="Êtes-vous sûr de vouloir supprimer cette tâche?"
        label={task.description}
      />
      <Card className="card-box mb-4">
        <div>
          <AddNew
            canEdit={props.canEdit}
            label="Taches"
            count={props.count}
            buttonLabel="Ajouter une tache"
            handleAdd={createNew}
            handleInput={handleInput}
            handleQuery={handleQuery}
            queryValue={query}
          />
        </div>
      </Card>
      {props.isFetching ?
        <SuspenseLoading/>
        : (props.tasks && props.tasks.length > 0) ?
          (<div className="example-card-seamless mb-4-spacing">
            <Card className="card-box bg-white mb-4">
              <CardContent className="p-3">
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  onChange={handleChange}>
                  <Tab className="py-3" label="Tous"/>
                  <Tab className={`py-3 text-${getColorTask('Backlog')}`} label="Backlog"/>
                  <Tab className={`py-3 text-${getColorTask('A Faire')}`} label="A faire"/>
                  <Tab className={`py-3 text-${getColorTask('En Cours')}`} label="En cours"/>
                  <Tab className={`py-3 text-${getColorTask('A Verifier')}`} label="A vérifier"/>
                  <Tab className={`py-3 text-${getColorTask('Termine')}`} label="Terminé"/>
                </Tabs>
                <TabPanel value={value} index={0}>
                  <div className="table-responsive">
                    <TaskTable
                      displayStatus={true}
                      canEdit={props.canEdit}
                      tasks={props.tasks}
                      count={props.count}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      sort={sort}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {getTabContent('Backlog')}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {getTabContent('A Faire')}
                </TabPanel>
                <TabPanel value={value} index={3}>
                  {getTabContent('En Cours')}
                </TabPanel>
                <TabPanel value={value} index={4}>
                  {getTabContent('A Verifier')}
                </TabPanel>
                <TabPanel value={value} index={5}>
                  {getTabContent('Termine')}
                </TabPanel>
              </CardContent>
              <div className="card-footer p-1 bg-secondary">
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={props.count}
                  rowsPerPage={props.pageSize}
                  page={props.page - 1}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </div>
            </Card>
          </div>) :
          (<Fragment>
              <Card className="card-box p-2 mb-4">
                <Alert label="Aucun tache trouvé"/>
              </Card>
            </Fragment>
          )
      }
    </>
  );
}

Task.propTypes = {};

const mapStateToProps = (state) => {
  const {
    pagination: {tasks},
    entity: {task}
  } = state;
  const listTask = Selector.getTasksPage(state);

  return {
    tasks: listTask,
    nextPageUrl: tasks.nextPageUrl,
    isFetching: tasks.isFetching,
    canEdit: state.auth.user.is_staff,
    count: tasks.count,
    page: tasks.page,
    pageSize: tasks.pageSize,
    deleteSuccess: task.deleteSuccess,
    authenticatedUser: state.auth.user
  };
};

export default connect(mapStateToProps, {fetchTasks, deleteTaskById, clearCacheTask, clearCacheProject})(Task);

