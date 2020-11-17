import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import {Selector} from '../index'
import {fetchProjectById, fetchProjectTasks} from "../../../redux";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TeamList from './TeamList';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import TasksProjectTable from './TasksProjectTable';
import {sleep} from "../../../redux/actions/sprint";
import axios from "axios";
import CircularProgress from '../common/CircularProgress';
import {SuspenseLoading} from "../../../Routes";
import Card from "@material-ui/core/Card";
import {CardContent, TablePagination} from "@material-ui/core";
import {ExampleWrapperSimple} from "../../../layout-components";
import {Doughnut} from "react-chartjs-2";
import {getTaskCodeColor} from "../task/TaskTable";
import ReactMarkdown from 'react-markdown';


const getData = stat => {
  const labels = stat.map(item => item.status);
  const data = stat.map(item => item.count);
  const backgroundColor = labels.map(label => getTaskCodeColor(label));
  return {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor,
        hoverBackgroundColor: backgroundColor,
      }
    ]
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  markdown: {
    ...theme.typography.body2,
    // padding: theme.spacing(3, 0),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    //backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

function ProjectDescription(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <Grid container item xs={12}>
          <Grid container justify={"flex-start"} item xs={8}>
            <Typography color={"error"} gutterBottom variant="h2">
              {props.project.designation}
            </Typography>
          </Grid>
          {props.canEdit &&
          <Grid item xs={4} container justify={"flex-end"}>
            <Grid item>
              <Button startIcon={<EditIcon/>}
                      onClick={props.handleEdit}
                      type="button"
                      variant="contained"
                      color={"secondary"}
              >
                Modifier
              </Button>
            </Grid>
          </Grid>
          }
        </Grid>
        {/*<Typography gutterBottom variant='caption' paragraph>*/}
        {/*  {moment(props.project.created_at).format('LL')}*/}
        {/*</Typography>*/}

        <Typography color={"textPrimary"} className="pt-2" gutterBottom variant="h4">Objective :</Typography>
        <ReactMarkdown className="d-block font-size-lg text-black-50">
          {props.project.objective}
        </ReactMarkdown>
      </Paper>
    </>
  )
}


// TODO create not found page
function ProjectDetail(props) {

  const classes = useStyles();
  const id = props.match.params.id;
  const [stat, setStat] = useState([]);
  const [isStatLoaded, setIsStatLoaded] = useState(false);

  useEffect(() => {
    props.fetchProjectById(id);
    props.fetchProjectTasks(1, 5, id);
    let active = true;
    setIsStatLoaded(false);
    const fetch = async () => {
      try {
        await sleep(1e1); // For demo purposes.
        const response = await axios.get(`/api/projects/${id}/stat/`);
        const result = response.data;
        if (active) {
          setStat(result);
          // console.log(result);
        }
      } catch (e) {

      }
      if (active) {
        setIsStatLoaded(true);
      }
    };
    fetch();

    return () => {
      active = false;
    }
  }, [id]);

  // const isFetching = !props.isProjectLoaded || props.isFetchingProjectTasks || !isStatLoaded;

  const handleEdit = () => {
    props.history.push(`/project/${id}/edit`);
  };

  const fetchTasks = (page, pageSize) => {
    props.fetchProjectTasks(page, pageSize, id);
  };

  const handleChangePage = (event, newPage) => {
    //setPage(newPage);
    fetchTasks(newPage + 1, props.pageSize);
  };

  const handleChangeRowsPerPage = (event) => {
    //setRowsPerPage(parseInt(event.target.value, 10));
    //setPage(0);
    fetchTasks(1, parseInt(event.target.value, 10));
  };

  return (
    <>
      {
        !props.isProjectLoaded ?
          <SuspenseLoading/> :
          <Grid className={classes.root} container spacing={3}>
            <Grid className={classes.markdown} item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ProjectDescription
                    canEdit={props.canEdit}
                    handleEdit={handleEdit}
                    project={props.project}/>
                </Grid>
                {
                  props.count > 0 &&
                  <Grid item xs={12} sm={12}>
                    {
                      props.isFetchingProjectTasks ?
                        <CircularProgress/> :
                        <div className="example-card-seamless mb-4-spacing">
                          <Card className="card-box mb-4">
                            <div className="card-header pr-2">
                              <div className="card-header--title">Les taches du projet</div>
                            </div>
                            <CardContent className="p-3">
                              <div className="table-responsive">
                                <TasksProjectTable
                                  rows={props.tasks}
                                />
                              </div>
                            </CardContent>
                            <div className="card-footer p-1 bg-secondary">
                              <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={props.count}
                                page={props.page - 1}
                                rowsPerPage={props.pageSize}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                              />
                            </div>
                          </Card>
                        </div>
                    }
                  </Grid>
                }
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TeamList items={props.project.projectUsers}/>
                </Grid>
                {
                  isStatLoaded && stat.length > 0 &&
                  <Grid item xs={12}>
                    <Fragment>
                      <ExampleWrapperSimple sectionHeading="Task en chart">
                        <Doughnut data={getData(stat)}/>
                      </ExampleWrapperSimple>
                    </Fragment>
                  </Grid>
                }
              </Grid>
            </Grid>
          </Grid>
      }
    </>
  );

}


ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  canEdit: PropTypes.bool.isRequired,
  isProjectLoaded: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired,
  isFetchingProjectTasks: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  fetchProjectById: PropTypes.func.isRequired,
  fetchProjectTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const isLoaded = state.entity.project.isLoaded;
  const project = isLoaded ? Selector.getProjectById(state, id) : {};
  const tasks = Selector.getProjectTasksPage(state);

  const {
    pagination: {projectTasks},
  } = state;

  return {
    isProjectLoaded: isLoaded,
    project,
    tasks,
    isFetchingProjectTasks: projectTasks.isFetching,
    canEdit: state.auth.user.userProfile && state.auth.user.userProfile.is_manager,
    count: projectTasks.count,
    page: projectTasks.page,
    pageSize: projectTasks.pageSize,
  }
};

export default connect(mapStateToProps, {fetchProjectById, fetchProjectTasks})(ProjectDetail);

