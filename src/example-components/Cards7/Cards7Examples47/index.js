import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'lightbulb']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">2,345</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">1,024</b>
                        <span className="text-black-50 d-block">orders</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="display-4 text-info"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="display-4 text-success"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">2,345</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
