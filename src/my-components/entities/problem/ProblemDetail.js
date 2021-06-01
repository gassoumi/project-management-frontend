import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Selector } from '../index';
import { SuspenseLoading } from "../../../Routes";
import { fetchProblemById } from "../../../redux/actions";
import PropTypes from 'prop-types';
import { Card, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ReactMarkdown from 'react-markdown';
import { getColorProblem } from "./ProblemTable";
import moment from 'moment';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { getDisplayString } from "../../utils";

function ProblemDetail(props) {
  const { isLoaded, problem, fetchProblemById } = props;
  const id = props.match.params.id;

  useEffect(() => {
    fetchProblemById(id);
  }, [id]);

  return (
    <>
      {!isLoaded ? <SuspenseLoading /> :
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card className="mb-4">
                <div className="card-header bg-neutral-first">
                  <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
                    Problem Informations
                  </div>
                </div>
                <Divider />
                <div className="p-4">
                  <h5 className="mb-1">
                    Description :
                  </h5>
                  <ReactMarkdown className="font-size-lg text-black-50">
                    {problem.description}
                  </ReactMarkdown>
                  <h5 className="mb-1">
                    Cause :
                  </h5>
                  <ReactMarkdown className="font-size-lg text-black-50">
                    {problem.cause}
                  </ReactMarkdown>
                  <h5 className="mb-1">
                    Resolution tools :
                  </h5>
                  <ReactMarkdown className="font-size-lg text-black-50">
                    {problem.resolutionTools}
                  </ReactMarkdown>
                  <h5 className="mb-1">
                    Statuts :
                  </h5>

                  <h6 className="mb-3"><span className={`badge badge-${getColorProblem(problem.status)}`}>
                    {problem.status === "NON_CLOTURE" ? "No Closing" : "Closing"}
                  </span></h6>
                  {
                    problem.task.sprint && problem.task.sprint.project &&
                    problem.task.sprint.project.designation &&
                    <div className="mb-1">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <h5>
                            Project :
                          </h5>
                          <Link component={RouterLink}
                            to={`/project/${problem.task.sprint.project.id}`}>
                            <span className="text-primary font-size-lg">
                              {getDisplayString(problem.task.sprint.project.designation, 50)}
                            </span>
                          </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <h5>
                            Task :
                          </h5>
                          <Link
                            component={RouterLink}
                            to={`/task/${problem.task.id}`}>
                            <span className="text-primary font-size-lg">
                              {problem.task.description}
                            </span>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  }
                  <div className="mb-3">
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <h5>
                          Start date :
                        </h5>
                        <div className="font-size-lg text-black-50">
                          {moment(problem.start_at).format('LL')}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <h5>
                          End date :
                        </h5>
                        <div className="font-size-lg text-black-50">
                          {moment(problem.end_at).format('LL')}
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                </div>
              </Card>
            </Grid>
          </Grid>
        </>
      }
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const isLoaded = state.entity.problem.isLoaded;
  const problem = Selector.getProblemById(state, id);
  return {
    isLoaded,
    problem
  }
};

ProblemDetail.prototype = {
  isLoaded: PropTypes.bool.isRequired,
  problem: PropTypes.object.isRequired,
  fetchProblemById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchProblemById })(ProblemDetail);
