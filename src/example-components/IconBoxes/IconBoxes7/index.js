import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section bg-asteroid mb-3">
        <Container className="pt-5">
          <Grid container spacing={4} className="py-5">
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-strong-bliss text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                <p className="text-white-50 mt-2">
                  Who are so beguiled and demoralized by the charms of pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-plum-plate text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Pages</h3>
                <p className="text-white-50 mt-2">
                  Which toil and pain can procure him some great pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'eye-dropper']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-white-50 mt-2">
                  To take a trivial example, which of us avoids pleasure, some
                  great pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
