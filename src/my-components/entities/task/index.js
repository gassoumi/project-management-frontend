import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Task from './Task';
import TaskUpdate from './TaskUpdate'
import TaskDetail from "./TaskDetail";
import Task from './Task';
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';

const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={match.url} component={Task}/>
      <ErrorBoundaryRoute exact path={`${match.url}/create`} component={TaskUpdate}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TaskDetail}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TaskUpdate}/>
    </Switch>
  </>
);

export default Routes;
