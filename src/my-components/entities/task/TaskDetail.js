import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { fetchTaskById, clearCacheTask, clearCacheProblem, fetchProblemsByTask } from "../../../redux";
import { connect } from "react-redux";
import { Selector } from "../index";
import { SuspenseLoading } from "../../../Routes";
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import TaskProblemsTable from './TaskProblemsTable';
import CircularProgress from '../common/CircularProgress';
import Card from "@material-ui/core/Card";
import { Avatar, CardContent, IconButton, TablePagination, Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { getDisplayString } from "../../utils";
import { getColorTask } from "./TaskTable";
import { getColorSprint } from "../sprint/SprintTable";

function TaskDetail(props) {
  const id = props.match.params.id;
  const { task, isLoaded, fetchTaskById, clearCacheTask, clearCacheProblem, fetchProblemsByTask } = props;

  useEffect(() => {
    fetchTaskById(id);
    // props.fetchProblemsByTask(1, null, 10);
    return () => {
      clearCacheTask();
      clearCacheProblem();
    }
  }, [id]);

  useEffect(() => {
    if (isLoaded) {
      fetchProblemsByTask(1, id, 10);
    }
  }, [isLoaded]);

  const handleChangePage = (event, newPage) => {
    fetchProblemsByTask(newPage + 1, id, props.pageSize);
  };

  const handleChangeRowsPerPage = (event) => {
    fetchProblemsByTask(1, id, parseInt(event.target.value, 10));
  };


  return (
    <>
      {!isLoaded ?
        <SuspenseLoading /> :
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className="mb-4">
                <div className="card-header bg-neutral-first">
                  <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
                    Task information
                  </div>
                </div>
                <Divider />
                <div className="p-4">
                  <h5 className="mb-1">
                    Description :
                  </h5>
                  <ReactMarkdown className="font-size-lg text-black-50">
                    {task.description}
                  </ReactMarkdown>
                  {
                    task.sprint && task.sprint.project &&
                    task.sprint.project.designation &&
                    <div className="mb-3">
                      <h5>
                        Project :
                      </h5>
                      <Link component={RouterLink}
                        to={`/project/${task.sprint.project.id}`}>
                        <span className="text-primary font-size-lg">
                          {getDisplayString(task.sprint.project.designation, 50)}
                        </span>
                      </Link>
                    </div>
                  }

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <h5>
                        Responsible :
                      </h5>
                      <div className="d-flex align-items-center">
                        <Avatar
                          src={task.user.userProfile && task.user.userProfile.photo && task.user.userProfile.photo}
                          className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                          >
                            {task.user.username}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <h5>
                        Statuts :
                      </h5>
                      <h5>
                        <span className={`badge badge-${getColorTask(task.status)}`}>
                          {task.status === "NON_CLOTURE" ? "NON CLOTURE" : "CLOTURE"}
                        </span>
                      </h5>
                    </Grid>
                  </Grid>
                  <div className="mb-3">
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <h5>
                          Start date :
                        </h5>
                        <div className="font-size-lg text-black-50">
                          {moment(task.start_at).format('LL')}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <h5>
                          End date :
                        </h5>
                        <div className="font-size-lg text-black-50">
                          {moment(task.end_at).format('LL')}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="mb-4">
                <div className="card-header bg-neutral-first">
                  <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
                    Sprint information for this task
                  </div>
                </div>
                <Divider />
                <div className="p-4">
                  <h5 className="mb-1">
                    Sprint name :
                  </h5>
                  <ReactMarkdown className="font-size-lg text-black-50">
                    {task.sprint.name}
                  </ReactMarkdown>
                  <h5 className="mb-1">
                    Statuts :
                  </h5>
                  <h5 className="mb-3"><span className={`badge badge-${getColorSprint(task.sprint.status)}`}>
                    {task.sprint.status}
                  </span></h5>
                  <div className="mb-3">
                    <h5>
                      Date :
                    </h5>
                    <div className="font-size-lg text-black-50">
                      {moment(task.sprint.desired_at).format('LL')}
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            {props.isFetching ?
              <CircularProgress /> :
              props.problems.length > 0 ?
                <Grid item xs={12}>
                  <div className="example-card-seamless mb-4-spacing">
                    <Card className="card-box mb-4">
                      <div className="card-header bg-neutral-first pr-2">
                        <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
                          Task problems
                        </div>
                        <div className="card-header--actions">
                          <Tooltip arrow title="Refresh">
                            <IconButton size="small" color="primary" className="mr-3">
                              <FontAwesomeIcon icon={['fas', 'cog']} spin />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <div className="table-responsive">
                          <TaskProblemsTable
                            problems={props.problems}
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
                  </div>
                </Grid>
                : null
            }
          </Grid>
        </>}
    </>
  )
}

TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  problems: PropTypes.array.isRequired,
  nextPageUrl: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {

  const {
    pagination: { problems },
    entity: { problem }
  } = state;
  const listProblems = Selector.getProblemsPage(state);

  const id = ownProps.match.params.id;
  const isLoaded = state.entity.task.isLoaded;
  const task = Selector.getTaskById(state, id);
  return {
    task,
    isLoaded,
    problems: listProblems,
    nextPageUrl: problems.nextPageUrl,
    isFetching: problems.isFetching,
    count: problems.count,
    page: problems.page,
    pageSize: problems.pageSize,
    deleteSuccess: problem.deleteSuccess,
  }
};

export default connect(mapStateToProps, {
  fetchTaskById, clearCacheTask, clearCacheProblem,
  fetchProblemsByTask
})(TaskDetail);
