import React, { lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tokenConfig } from "../../utils";
import { returnErrors } from "../../redux/actions/messages";
import * as Selector from "../../redux/selectors";
import { LeftSidebar } from "../../layout-blueprints";
import ErrorBoundaryRoute from '../common/ErrorBoundaryRoute';
// import Project from './project';
// import Sprint from './sprint';
// import Task from './task';
// import Document from './document';
// import Note from './note';
// import Problem from './problem';
// import Discussion from './discussion';
// import Dashboard from '../dashboard';
const Project = lazy(() => import('./project'));
const Sprint = lazy(() => import('./sprint'));
const Task = lazy(() => import('./task'));
//const Document = lazy(() => import('./document'));
const Note = lazy(() => import('./note'));
const Problem = lazy(() => import('./problem'));
const Discussion = lazy(() => import('./discussion'));
const Dashboard = lazy(() => import('../dashboard'));

// add all entities here
const Routes = (props) => {
  const { match } = props;
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <>
      <Route path={[
        '/dashboard',
        '/project',
        '/sprint',
        '/task',
        '/discussion',
        '/note',
        '/problem',
      ]}>
        <LeftSidebar>
          <Switch location={location} key={location.pathname}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
              <ErrorBoundaryRoute exact path="/dashboard" component={Dashboard} />
              <ErrorBoundaryRoute path={`${match.url}project`} component={Project} />
              <ErrorBoundaryRoute path={`${match.url}sprint`} component={Sprint} />
              <ErrorBoundaryRoute path={`${match.url}task`} component={Task} />
              <ErrorBoundaryRoute path={`${match.url}document`} component={Document} />
              <ErrorBoundaryRoute path={`${match.url}discussion`} component={Discussion} />
              <ErrorBoundaryRoute path={`${match.url}note`} component={Note} />
              <ErrorBoundaryRoute path={`${match.url}problem`} component={Problem} />
            </motion.div>
          </Switch>
        </LeftSidebar>
      </Route>
      {/* <Route
        path='/document'>
        <ErrorBoundaryRoute path={`${match.url}document`} component={Document}/>
      </Route> */}
      <>
        {/*<Switch>*/}
        {/*  <Route exact path="/dashboard" component={Dashboard}/>*/}
        {/*  <Route path={`${match.url}project`} component={Project}/>*/}
        {/*  <Route path={`${match.url}sprint`} component={Sprint}/>*/}
        {/*  <Route path={`${match.url}task`} component={Task}/>*/}
        {/*  <Route path={`${match.url}document`} component={Document}/>*/}
        {/*  <Route path={`${match.url}discussion`} component={Discussion}/>*/}
        {/*  <Route path={`${match.url}note`} component={Note}/>*/}
        {/*  <Route path={`${match.url}problem`} component={Problem}/>*/}
        {/*  /!*<Redirect to="*"/>*!/*/}
        {/*</Switch>*/}
      </>
    </>
  );
};

export { tokenConfig, returnErrors, Selector }


export default Routes;
