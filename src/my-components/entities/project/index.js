import React from 'react';
import {Switch} from 'react-router-dom';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import ProjectUpdate from './ProjectUpdate';
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';

const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/create`} component={ProjectUpdate}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ProjectDetail}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ProjectUpdate}/>
      <ErrorBoundaryRoute path={match.url} component={Project}/>
    </Switch>
  </>
);

export default Routes;
