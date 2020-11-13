import React, { Fragment } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import svgImage13 from '../../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../../assets/images/illustrations/powerful.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage1}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3">Widgets</h3>
                <p className="text-black-50 mb-3">
                  But I must explain to you how all this mistaken.
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage13}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3">
                  Components
                </h3>
                <p className="text-black-50 mb-3">
                  So blinded by desire, that they cannot foresee.
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage14}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3">Blocks</h3>
                <p className="text-black-50 mb-3">
                  It takes a trivial example, which of us.
                </p>
                <Button color="primary" size="small" title="Learn more">
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
