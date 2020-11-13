import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box-hover-rise-alt mb-4">
            <CardContent className="p-3">
              <div className="bg-deep-blue text-center text-white display-4 d-60 rounded-circle">
                <FontAwesomeIcon icon={['far', 'envelope']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Lightweight
              </h3>
              <p className="card-text mb-3">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button color="primary" title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box-hover-rise-alt mb-4">
            <CardContent className="p-3">
              <div className="bg-sunny-morning text-center text-white display-4 d-60 rounded-circle">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Simple to use
              </h3>
              <p className="card-text mb-3">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button color="primary" title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box-hover-rise-alt mb-4">
            <CardContent className="p-3">
              <div className="bg-grow-early text-center text-white display-4 d-60 rounded-circle">
                <FontAwesomeIcon icon={['far', 'address-card']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Starter Templates
              </h3>
              <p className="card-text mb-3">
                Bamburgh is a free UI Kit that enhances the standard Bootstrap 4
                styles and components.
              </p>
              <Button color="primary" title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
