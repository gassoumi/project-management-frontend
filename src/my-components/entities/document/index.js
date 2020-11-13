import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import DocumentDetail from './DocumentDetail';
import DocumentUpdate from './DocumentUpdate';
import Document from './Document';
import {CollapsedSidebar, LeftSidebar} from "../../../layout-blueprints";
import {motion} from "framer-motion";
import ErrorBoundaryRoute from '../../common/ErrorBoundaryRoute';

const Routes = ({match}) => {
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
      <>
        {/*<Switch>*/}
        {/*  <Route exact path={`${match.url}/create`} component={DocumentUpdate}/>*/}
        {/*  <Route exact path={`${match.url}/:id`} component={DocumentDetail}/>*/}
        {/*  <Route exact path={`${match.url}/:id/edit`} component={DocumentUpdate}/>*/}
        {/*  <Route excat path={match.url} component={DocumentByProject}/>*/}
        {/*</Switch>*/}
      </>
      <Route exact
             path={match.url}>
        <CollapsedSidebar>
          <Switch location={location} key={location.pathname}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
              <ErrorBoundaryRoute excat path={match.url} component={Document}/>
            </motion.div>
          </Switch>
        </CollapsedSidebar>
      </Route>
      <Route
        path={[
          `${match.url}/create`,
          `${match.url}/:id`,
          `${match.url}/:id/edit`,
        ]}>
        <LeftSidebar>
          <Switch location={location} key={location.pathname}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
              <ErrorBoundaryRoute exact path={`${match.url}/create`} component={DocumentUpdate}/>
              <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DocumentDetail}/>
              <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DocumentUpdate}/>
            </motion.div>
          </Switch>
        </LeftSidebar>
      </Route>
    </>
  )
};

export default Routes;
