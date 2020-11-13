import React from 'react';
import {Switch} from 'react-router-dom';
import Problem from './Problem';
import ProblemUpdate from "./ProblemUpdate";
import ProblemDetail from './ProblemDetail';
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';


const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={match.url} component={Problem}/>
      <ErrorBoundaryRoute exact path={`${match.url}/create`} component={ProblemUpdate}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ProblemUpdate}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ProblemDetail}/>
    </Switch>
  </>
);

export default Routes;
