import React from 'react';
import {Switch} from 'react-router-dom';
import Sprint from './Sprint';
import CalendarSprint from "./CalendarSprint";
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';

const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={match.url} component={Sprint}/>
      <ErrorBoundaryRoute exact path={`${match.url}/calendar`} component={CalendarSprint}/>
    </Switch>
  </>
);

export default Routes;
