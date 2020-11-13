import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section bg-vicious-stance">
        <Container className="pt-5">
          <Grid container spacing={4} className="py-5">
            <Grid item xs={12} md={6}>
              <div className="feature-box text-white mb-4">
                <div className="bg-deep-blue text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-white-50 mt-2">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and account of
                  the system.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-1">
                  Continue reading
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box text-white mb-4">
                <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Components
                </h3>
                <p className="text-white-50 mt-2">
                  The master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-1">
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
