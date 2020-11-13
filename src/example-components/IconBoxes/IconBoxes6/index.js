import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section">
        <Container className="py-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="feature-box my-5 text-center">
                <div className="bg-deep-blue text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-black-50 mt-2 px-2">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you.
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box my-5 text-center">
                <div className="bg-grow-early text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Components
                </h3>
                <p className="text-black-50 mt-2 px-2">
                  The master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box my-5 text-center">
                <div className="bg-strong-bliss text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                <p className="text-black-50 mt-2 px-2">
                  Who are so beguiled and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee.
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box my-5 text-center">
                <div className="bg-plum-plate text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Pages</h3>
                <p className="text-black-50 mt-2 px-2">
                  Which toil and pain can procure him some great pleasure. To
                  take a trivial example, which of us avoids pleasure.
                </p>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
