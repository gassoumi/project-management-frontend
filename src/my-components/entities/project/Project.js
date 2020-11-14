import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchProjects, clearCacheProject, deleteProjectById, setTabValueProject} from "../../../redux";


import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  Divider,
  TablePagination
} from '@material-ui/core';


import ProjectTable from './ProjectTable';
import ProjectList from './ProjectList';
import AddNew from '../common/AddNew';
import {Selector} from '../index';
import {SuspenseLoading} from "../../../Routes";
import Alert from '../common/Alert';
import {overridePaginationStateWithQueryParams, getSortState} from "../../../utils";
import DeleteDialog from "../common/DeleteDialog";


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const ApplicationsProjectsContent = (props) => {

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = useState(paginationState.search);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({});

  const handleChange = (event, newValue) => {
    props.setTabValueProject(newValue);
  };

  const handleInput = (value) => {
    setQuery(value);
  };

  const handleDelete = project => {
    setProject(project);
    setOpen(true);
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
    props.fetchProjects(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
    let endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (paginationState.search) {
      endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    // props.fetchProjects();
    return () => {
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
        search
      });
      setQuery(search);
    }
  }, [props.location.search]);

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

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  const createNew = () => {
    props.history.push(`${props.match.url}/create`);
  };

  return (
    <Fragment>
      <Fragment>
        <DeleteDialog
          object={project}
          open={open}
          handleClose={() => setOpen(false)}
          deleteObject={props.deleteProjectById}
          title=" Êtes-vous sûr de vouloir supprimer ce projet?"
          label={project.designation}/>
        <Card className="card-box mb-4">
          <div>
            <AddNew
              canEdit={props.canEdit}
              label="Projets"
              count={props.count}
              buttonLabel="Ajouter un projet"
              handleAdd={createNew}
              handleInput={handleInput}
              handleQuery={handleQuery}
              queryValue={query}
            />
            <Divider/>
            <Tabs
              value={props.value}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="Colonnes de liste"/>
              <Tab label="Tableau"/>
            </Tabs>
          </div>
        </Card>
        {props.isFetching ? <SuspenseLoading/> :
          (props.projects && props.projects.length > 0) ?
            (
              < Fragment>
                < TabPanel value={props.value} index={0}>
                  <Grid container spacing={4}>
                    <ProjectList handleDelete={handleDelete} canEdit={props.canEdit} projects={props.projects}/>
                  </Grid>
                </TabPanel>
                <TabPanel value={props.value} index={1}>
                  <Card className="card-box mb-4">
                    <ProjectTable handleDelete={handleDelete} canEdit={props.canEdit} projects={props.projects}
                                  sort={sort}/>
                  </Card>
                </TabPanel>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={props.count}
                      rowsPerPage={props.pageSize}
                      page={props.page - 1}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </Grid>
                </Grid>
              </Fragment>
            ) :
            (
              <Fragment>
                <Card className="card-box p-2 mb-4">
                  <Alert label="Aucun projet trouvé"/>
                </Card>
              </Fragment>
            )
        }
      </Fragment>
    </Fragment>
  )
};

ApplicationsProjectsContent.prototype = {
  projects: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  canEdit: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  nextPageUrl: PropTypes.string,
  fetchProjects: PropTypes.func.isRequired,
  clearCacheProject: PropTypes.func.isRequired,
  deleteProjectById: PropTypes.func.isRequired,
  setTabValueProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  const {
    pagination: {projects},
  } = state;
  const listProject = Selector.getProjectsPage(state);

  return {
    projects: listProject,
    nextPageUrl: projects.nextPageUrl,
    page: projects.page,
    isFetching: projects.isFetching,
    canEdit: state.auth.user.is_staff,
    count: projects.count,
    pageSize: projects.pageSize,
    updateSuccess: state.entity.project.updateSuccess,
    deleteSuccess: state.entity.project.deleteSuccess,
    value: state.setting.tabValueProject
  };
};

const mapDispatchToProps = {
  fetchProjects,
  clearCacheProject,
  deleteProjectById,
  setTabValueProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsProjectsContent);

