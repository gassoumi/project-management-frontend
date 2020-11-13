import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={3}>
              <div className="feature-box text-center mb-4">
                <div className="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Widgets</h3>
                <p className="text-black-50 mb-3">
                  It takes a trivial example, which of us ever undertakes.
                </p>
                <Button color="primary" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <div className="feature-box text-center mb-4">
                <div className="bg-primary text-white font-size-xl mx-auto d-50 rounded mb-1">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">
                  Components
                </h3>
                <p className="text-black-50 mb-2">
                  Pleasure that has no annoying consequences of the moment.
                </p>
                <Button color="primary" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <div className="feature-box text-center mb-4">
                <div className="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded mb-1">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Blocks</h3>
                <p className="text-black-50 mb-2">
                  So blinded by desire, that they cannot foresee.
                </p>
                <Button color="primary" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <div className="feature-box text-center mb-4">
                <div className="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded mb-1">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Pages</h3>
                <p className="text-black-50 mb-2">
                  But I must explain to you how all this mistaken.
                </p>
                <Button color="primary" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
