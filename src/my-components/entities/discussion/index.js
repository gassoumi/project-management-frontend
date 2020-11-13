import React from 'react';
import {Switch} from 'react-router-dom';
import Discussion from './Discussion';
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';
import DiscussionDetail from './DiscussionDetail';

const Routes = ({match}) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DiscussionDetail}/>
      <ErrorBoundaryRoute excat path={match.url} component={Discussion}/>
    </Switch>
  </>
);

export default Routes;
