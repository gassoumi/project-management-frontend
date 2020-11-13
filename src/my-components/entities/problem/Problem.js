import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchProblems, deleteProblemById, clearCacheProblem} from "../../../redux";
import ProblemTable from './ProblemTable';
import DeleteDialog from '../common/DeleteDialog';
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {SuspenseLoading} from "../../../Routes";
import {CardContent, IconButton, TablePagination, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "../common/Alert";


function Problem(props) {

  const [open, setOpen] = useState(false);
  const [problem, setProblem] = useState({});

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
    props.fetchProblems(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
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
    // fetchSprints(1, 10);
    return () => {
      props.clearCacheProblem();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (props.deleteSuccess) {
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
    }
    setQuery(search);
  }, [props.location.search]);


  const handleEdit = (id) => {
    props.history.push(`/problem/${id}/edit`);
  };

  const handleDelete = (problem) => {
    setProblem(problem);
    setOpen(true);
  };

  const createNew = () => {
    props.history.push("/problem/create");
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  return (
    <>
      {/*<PageTitle*/}
      {/*  titleHeading="Problèmes"*/}
      {/*  // titleDescription="Building a projects related application? Start from this layout."*/}
      {/*/>*/}
      <DeleteDialog
        open={open}
        object={problem}
        handleClose={() => setOpen(false)}
        deleteObject={props.deleteProblemById}
        title="Êtes-vous sûr de vouloir supprimer le problème?"
        label={problem.description}
      />
      <Card className="card-box mb-4">
        <div>
          <AddNew
            canEdit
            label="Problèmes"
            count={props.count}
            buttonLabel="Ajouter un problème"
            handleAdd={createNew}
            handleInput={handleInput}
            handleQuery={handleQuery}
            queryValue={query}
          />
        </div>
      </Card>
      {props.isFetching ?
        <SuspenseLoading/>
        : (props.problems && props.problems.length > 0) ?
          (<div className="example-card-seamless mb-4-spacing">
            <Card className="card-box mb-4">
              <div className="card-header pr-2">
                <div className="card-header--title">Problèmes status</div>
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
                  <ProblemTable
                    authenticatedUser={props.authenticatedUser}
                    problems={props.problems}
                    sort={sort}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </div>
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
                <Alert label="Aucun problème trouvé"/>
              </Card>
            </Fragment>
          )
      }
    </>
  );
}

Problem.propTypes = {
  problems: PropTypes.array.isRequired,
  nextPageUrl: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  fetchProblems: PropTypes.func.isRequired,
  deleteProblemById: PropTypes.func.isRequired,
  clearCacheProblem: PropTypes.func.isRequired,
  authenticatedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const {
    pagination: {problems},
    entity: {problem}
  } = state;
  const listProblem = Selector.getProblemsPage(state);

  return {
    problems: listProblem,
    nextPageUrl: problems.nextPageUrl,
    isFetching: problems.isFetching,
    count: problems.count,
    page: problems.page,
    pageSize: problems.pageSize,
    deleteSuccess: problem.deleteSuccess,
    authenticatedUser: state.auth.user
  };
};

export default connect(mapStateToProps, {fetchProblems, deleteProblemById, clearCacheProblem})(Problem);

