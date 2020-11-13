import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Note from './Note';
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';

const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={match.url} component={Note}/>
    </Switch>
  </>
);

export default Routes;
