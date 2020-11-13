import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="mb-4 card-box card-box-border-bottom border-success">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-xxl text-success"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">2,345</b>
                  <span className="text-black-50">users</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="mb-4 card-box card-box-border-bottom border-danger">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="font-size-xxl text-danger"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">3,568</b>
                  <span className="text-black-50">clicks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="mb-4 card-box card-box-border-bottom border-warning">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="font-size-xxl text-warning"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">$9,693</b>
                  <span className="text-black-50">revenue</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="mb-4 card-box card-box-border-bottom border-info">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'building']}
                    className="font-size-xxl text-info"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">431</b>
                  <span className="text-black-50">sales</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
