import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              lg={6}
              className="d-flex align-items-center text-center text-xl-left">
              <div className="mb-5 mb-xl-0">
                <div className="mb-4">
                  <span className="badge badge-warning badge-pill">
                    Latest release
                  </span>
                  <h1 className="display-3 mt-3 font-weight-bold">Carolina</h1>
                  <div className="divider border-2 mx-auto mx-xl-0 my-3 border-light w-43" />
                  <p className="font-size-lg text-black-50">
                    Travelling day in and day out. Doing business like this
                    takes much more effort than doing your own business.
                  </p>
                </div>
                <div>
                  <Button color="secondary" variant="contained">
                    <span className="btn-wrapper--label">Read more</span>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    className="ml-3"
                    title="View documentation">
                    <span>Documentation</span>
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card className="shadow-xxl p-3">
                <Card
                  className="card-box demo-img-wrapper"
                  style={{ height: 350 }}>
                  <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
