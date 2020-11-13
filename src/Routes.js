import React, {Suspense, Fragment} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

import {ThemeProvider} from '@material-ui/styles';

import {ClimbingBoxLoader} from 'react-spinners';

import MuiTheme from './theme';

// Layout Blueprints
import {
  MinimalLayout,
} from './layout-blueprints';
// Example Pages
// import PagesProfile from './example-pages/PagesProfile';

import MyPageError404 from './my-components/common/PagesError404';
import PrivateRoute from "./my-components/common/PrivateRoute";
import Entities from './my-components/entities';
import Login from './my-components/account/Login';

import ErrorBoundaryRoute from './my-components/common/ErrorBoundaryRoute';

export const SuspenseLoading = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
        <div className="d-flex align-items-center flex-column px-4">
          <ClimbingBoxLoader color={'#5383ff'} loading={true}/>
        </div>
        <div className="text-muted font-size-xl text-center pt-3">
          Veuillez patienter pendant le chargement
        </div>
      </div>
    </Fragment>
  );
};

const Routes = () => {
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
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading/>}>
          <Switch>
            <Redirect exact from="/" to="/dashboard"/>
            <Route
              path={[
                '/login',
              ]}>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <ErrorBoundaryRoute path="/login" component={Login}/>
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
            <Route path={[
              '/dashboard',
              '/project',
              '/sprint',
              '/task',
              '/document',
              '/discussion',
              '/note',
              '/problem',
            ]}>
              <PrivateRoute path="/" component={Entities}/>
            </Route>
            <Route
              path='*'
            >
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <ErrorBoundaryRoute path="*" component={MyPageError404}/>
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
