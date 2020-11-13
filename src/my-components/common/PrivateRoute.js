import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ErrorBoundary from './ErrorBoundary';

const PrivateRoute = ({component: Component, auth, ...rest}) => {

  return (<Route
    {...rest}
    render={(props) => {
      if (!auth.isAuthenticated) {
        return <Redirect to={{
          pathname: '/login',
          search: props.location.search,
          state: {from: props.location},
        }}/>;
      } else {
        return (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        )
      }
    }}
/>
)
  ;
};


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
