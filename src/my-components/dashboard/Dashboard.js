import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import TaskWeek from './TaskWeek';
import LatestProject from './LatestProject';
import Grid from "@material-ui/core/Grid";
import WeekSprint from "./WeekSprint";
import DiscussionList from './DiscussionList';
import {connect} from 'react-redux';
import {
  fetchWeekTasks,
  fetchWeekSprints,
  fetchLatestProjects,
  fetchLatestDiscussions,
  fetchTopDiscussions,
  clearCacheTask,
  clearCacheSprint,
  clearCacheProject,
  clearCacheDiscussion,
} from "../../redux";
import {Selector} from "../entities";
import {SuspenseLoading} from "../../Routes";
import {PageTitle} from "../../layout-components";


function Dashboard(props) {

  const isFetching = props.isFetchingWeekSprint || props.isFetchingWeekTask || props.isFetchingLatestDiscussion ||
    props.isFetchingTopDiscussion;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        await props.fetchWeekTasks();
        await props.fetchWeekSprints();
        await props.fetchLatestProjects();
        await props.fetchLatestDiscussions();
        await props.fetchTopDiscussions(1, 3);
      } catch (e) {

      }
      if (active) {
        setIsLoaded(true);
      }
    })();
    // used for clear cache
    // componentWillUnmount
    return () => {
      //console.log("componentWillUnmount in dashboard component");
      active = false;
      props.clearCacheTask();
      props.clearCacheSprint();
      props.clearCacheProject();
      props.clearCacheDiscussion();
    }
  }, []);


  return (
    <>
      {/*<PageTitle*/}
      {/*  titleHeading="Dashboard"*/}
      {/*  // titleDescription="Building a projects related application? Start from this layout."*/}
      {/*/>*/}
      {!isLoaded ?
        <SuspenseLoading/> :
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {props.taskWeek && props.taskWeek.length !== 0 &&
              <Grid item xs={12}>
                <TaskWeek rows={props.taskWeek}/>
              </Grid>
              }
              <Grid item xs={12}>
                <LatestProject rows={props.latestProjects}/>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} md={4}>
            {/*  space between all included grid */}
            <Grid container direction="column" spacing={3}>
              {props.sprintWeek.length !== 0 &&
              <Grid item xs={12}>
                <WeekSprint items={props.sprintWeek}/>
              </Grid>
              }
              <Grid item xs={12}>
                <DiscussionList items={props.latestDiscussion} title="Derniers Discussions"/>
              </Grid>
              <Grid item xs={12}>
                <DiscussionList items={props.topDiscussion} title="Top Discussions"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    </>
  )
}

Dashboard.propTypes = {
  latestDiscussion: PropTypes.array.isRequired,
  topDiscussion: PropTypes.array.isRequired,
  latestProjects: PropTypes.array.isRequired,
  taskWeek: PropTypes.array.isRequired,
  sprintWeek: PropTypes.array.isRequired,
  isFetchingWeekTask: PropTypes.bool.isRequired,
  isFetchingWeekSprint: PropTypes.bool.isRequired,
  isFetchingLatestDiscussion: PropTypes.bool.isRequired,
  isFetchingTopDiscussion: PropTypes.bool.isRequired,
  fetchWeekTasks: PropTypes.func.isRequired,
  fetchWeekSprints: PropTypes.func.isRequired,
  fetchLatestProjects: PropTypes.func.isRequired,
  fetchLatestDiscussions: PropTypes.func.isRequired,
  fetchTopDiscussions: PropTypes.func.isRequired,
  clearCacheTask: PropTypes.func.isRequired,
  clearCacheSprint: PropTypes.func.isRequired,
  clearCacheProject: PropTypes.func.isRequired,
  clearCacheDiscussion: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const {
    pagination: {weekTasks, weekSprints, latestDiscussions, topDiscussions},
  } = state;

  const taskWeek = Selector.getWeekTaskPage(state);
  const sprintWeek = Selector.getWeekSprintPage(state);
  const latestProjects = Selector.getLatestProjectPage(state);
  const latestDiscussion = Selector.getLatestDiscussionPage(state);
  const topDiscussion = Selector.getTopDiscussionPage(state);

  return {
    latestDiscussion,
    topDiscussion,
    latestProjects,
    taskWeek,
    sprintWeek,
    isFetchingWeekTask: weekTasks.isFetching,
    isFetchingWeekSprint: weekSprints.isFetching,
    isFetchingLatestDiscussion: latestDiscussions.isFetching,
    isFetchingTopDiscussion: topDiscussions.isFetching,
  }
};

const mapDispatchToProps = {
  fetchWeekTasks,
  fetchWeekSprints,
  fetchLatestProjects,
  fetchLatestDiscussions,
  fetchTopDiscussions,
  clearCacheTask,
  clearCacheSprint,
  clearCacheProject,
  clearCacheDiscussion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

