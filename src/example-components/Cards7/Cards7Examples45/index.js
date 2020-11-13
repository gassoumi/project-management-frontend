import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, CardContent, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <div className="card card-box-alt card-box-hover-rise card-box-hover mb-4">
            <CardContent className="p-3">
              <div className="bg-deep-blue text-white display-4 card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'envelope']} />
              </div>
              <h3 className="heading-6 mt-4 mb-4">Lightweight</h3>
              <p className="card-text mb-4">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button
                color="primary"
                className="mt-1"
                variant="contained"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="card card-box-alt card-box-hover-rise card-box-hover mb-4">
            <CardContent className="p-3">
              <div className="bg-sunny-morning text-white display-4 card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <h3 className="heading-6 mt-4 mb-4">Simple to use</h3>
              <p className="card-text mb-4">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button
                color="primary"
                className="mt-1"
                variant="contained"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card card-box-alt card-box-hover-rise card-box-hover mb-4">
            <CardContent className="p-3">
              <div className="bg-grow-early text-white display-4 card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'address-card']} />
              </div>
              <h3 className="heading-6 mt-4 mb-4">Starter Templates</h3>
              <p className="card-text mb-4">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button
                color="primary"
                className="mt-1"
                variant="contained"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
