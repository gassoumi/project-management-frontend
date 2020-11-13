import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Card className="card-box bg-primary border-primary p-4 text-white mb-4">
            <span className="ribbon-angle ribbon-angle--top-right ribbon-success">
              <small>Best</small>
            </span>
            <h5 className="display-5 font-weight-bold mb-4">
              Active subscription
            </h5>
            <Grid container spacing={4}>
              <Grid
                item
                md={6}
                className="d-flex align-items-center flex-column">
                <div className="divider-v bg-white opacity-3 divider-v-md" />
                <div>
                  <div className="mb-3">
                    <span className="display-2 font-weight-bold">$29</span>
                    <span className="opacity-8">/ month</span>
                  </div>
                  <ul className="p-0 opacity-7 m-0">
                    <li>Commercial license</li>
                    <li>Multiple developers</li>
                  </ul>
                </div>
              </Grid>
              <Grid
                item
                md={6}
                className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <div className="mb-3 font-size-lg font-weight-bold">
                    License active for next <b>65</b> days
                  </div>

                  <Button size="small" color="inherit">
                    Renew now
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card className="card-box bg-warning border-warning card-shadow-warning text-center p-4 text-white mb-4">
            <span className="ribbon-vertical ribbon-vertical--second ribbon-vertical--right text-uppercase">
              <span>-30%</span>
            </span>
            <h5 className="display-5 font-weight-bold mb-4">
              Active subscription
            </h5>
            <div className="divider bg-white mb-4 opacity-3" />
            <div>
              <div className="mb-2">
                <span className="display-2 font-weight-bold">$29</span>
                <span className="opacity-8">/ month</span>
              </div>
              <ul className="list-unstyled opacity-6 mb-4">
                <li>Commercial license included</li>
              </ul>
            </div>
            <div className="divider bg-white mb-4 opacity-3" />
            <div className="mb-3 font-size-lg font-weight-bold">
              License active for next <b>65</b> days
            </div>
            <Button color="primary" variant="contained" className="w-100">
              Renew now
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
