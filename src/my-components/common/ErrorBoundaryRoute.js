import React from 'react';
import {Route} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

export const ErrorBoundaryRoute = ({component: Component, ...rest}) => {
  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest).path}`);

  return <Route {...rest} render={encloseInErrorBoundary}/>;
};

export default ErrorBoundaryRoute;
