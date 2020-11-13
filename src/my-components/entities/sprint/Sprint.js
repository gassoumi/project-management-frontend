import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Selector} from '../index';
import {fetchSprints, deleteSprintById, clearCacheSprint, createSprint, updateSprint} from "../../../redux/actions";
import SprintUpdate from './SprintUpdate';
import axios from 'axios';
import SprintTable from './SprintTable';
import {SuspenseLoading} from "../../../Routes";
import DeleteDialog from '../common/DeleteDialog';
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {CardContent, IconButton, TablePagination, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "../common/Alert";


function Sprint(props) {

  const {
    pageSize, sprints, page, count, isFetching, deleteSuccess, updateSuccess, clearCacheSprint,
    fetchSprints, canEdit, deleteSprintById, isUpdating, createSprint, updateSprint,
  } = props;

  const [open, setOpen] = React.useState(false);

  const [sprint, setSprint] = React.useState({});
  const [isNew, setIsNew] = React.useState(true);
  const [idSprint, setIdSprint] = React.useState(-1);

  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [sprintToDelete, setSprintToDelete] = React.useState({});
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = React.useState(paginationState.search);


  const handleInput = (value) => {
    setQuery(value);
  };

  const handleQuery = (event) => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const sortEntities = () => {
    let sort = paginationState.order === 'asc' ? "" : "-";
    fetchSprints(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
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


  const handleClickOpen = () => {
    setOpen(true);
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };


  const createNew = () => {
    setSprint({});
    setIsNew(true);
    setIdSprint(-1);
    handleClickOpen();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleEdit = idSprint => {
    setIsNew(false);
    setIdSprint(idSprint);
  };

  const handleDelete = sprint => {
    setSprintToDelete(sprint);
    setOpenDeleteDialog(true);
  };

  useEffect(() => {
    // fetchSprints(1, 10);
    return () => {
      clearCacheSprint();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (updateSuccess || deleteSuccess) {
      handleClose();
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [deleteSuccess, updateSuccess]);

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

  useEffect(() => {
    let active = true;

    if (idSprint === -1) {
      return undefined;
    }

    axios.get(`/api/sprints/${idSprint}`)
      .then(response => {
        axios.get(`/api/projects/${response.data.project}/`)
          .then(res => {
            if (active) {
              const sprint = {...response.data, project: res.data};
              setSprint(sprint);
              handleClickOpen();
              setIdSprint(-1);
            }
          });
      })
      .catch(error => console.log(error));

    return () => {
      active = false;
    }
  }, [idSprint]);


  return (
    <>
      {/*<PageTitle*/}
      {/*  titleHeading="Sprints"*/}
      {/*  // titleDescription="Building a projects related application? Start from this layout."*/}
      {/*/>*/}
      <Fragment>
        <DeleteDialog
          object={sprintToDelete}
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
          deleteObject={deleteSprintById}
          title=" Êtes-vous sûr de vouloir supprimer ce sprint?"
          label={sprintToDelete.name}/>
        <SprintUpdate
          isUpdating={isUpdating}
          createSprint={createSprint}
          updateSprint={updateSprint}
          isNew={isNew}
          sprint={sprint}
          open={open}
          handleClose={handleClose}/>

        <Card className="card-box mb-4">
          <div>
            <AddNew
              canEdit={canEdit}
              label="Sprints"
              count={count}
              buttonLabel="Ajouter un sprint"
              handleAdd={createNew}
              handleInput={handleInput}
              handleQuery={handleQuery}
              queryValue={query}
            />
          </div>
        </Card>

        {isFetching ?
          <SuspenseLoading/>
          : (sprints && sprints.length > 0) ?
            (<div className="example-card-seamless mb-4-spacing">
              <Card className="card-box mb-4">
                <div className="card-header pr-2">
                  <div className="card-header--title">Sprints statut</div>
                  <div className="card-header--actions">
                    <Tooltip arrow title="Refresh">
                      <IconButton size="small" color="primary" className="mr-3">
                        <FontAwesomeIcon icon={['fas', 'cog']} spin/>
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="table-responsive">
                    <SprintTable
                      canEdit={canEdit}
                      sprints={sprints}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      sort={sort}
                    />
                  </div>
                </CardContent>
                <div className="card-footer p-1 bg-secondary">
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={count}
                    rowsPerPage={pageSize}
                    page={page - 1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </div>
              </Card>
            </div>) :
            (<Fragment>
                <Card className="card-box p-2 mb-4">
                  <Alert label="Aucun sprint trouvé"/>
                </Card>
              </Fragment>
            )
        }
      </Fragment>
    </>
  );
}

Sprint.propTypes = {
  sprints: PropTypes.array.isRequired,
  nextPageUrl: PropTypes.string,
  page: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  fetchSprints: PropTypes.func.isRequired,
  deleteSprintById: PropTypes.func.isRequired,
  clearCacheSprint: PropTypes.func.isRequired,
  createSprint: PropTypes.func.isRequired,
  updateSprint: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    pagination: {sprints},
  } = state;
  //const listProjectIds = project.ids || [];
  const listSprint = Selector.getSprintsPage(state);

  return {
    sprints: listSprint,
    nextPageUrl: sprints.nextPageUrl,
    page: sprints.page,
    isFetching: sprints.isFetching,
    canEdit: state.auth.user.is_staff,
    count: sprints.count,
    pageSize: sprints.pageSize,
    updateSuccess: state.entity.sprint.updateSuccess,
    deleteSuccess: state.entity.sprint.deleteSuccess,
    isUpdating: state.entity.sprint.isUpdating,
  };
};

export default connect(mapStateToProps, {
  fetchSprints,
  deleteSprintById,
  clearCacheSprint,
  createSprint,
  updateSprint
})(Sprint);
