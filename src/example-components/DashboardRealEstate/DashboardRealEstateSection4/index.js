import React, { Fragment } from 'react';

import { Grid, LinearProgress, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="text-black-50 pb-2">Expenses</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0 text-black">
                <small className="pr-1 text-black-50">$</small>
                <span className="text-success">
                  <CountUp
                    start={0}
                    end={4.986}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
              </h3>
              <div className="text-success font-weight-bold">+34%</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="text-black-50 pb-2">Sales</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0 text-black">
                <small className="pr-1 text-black-50">$</small>
                <span className="text-warning">
                  <CountUp
                    start={0}
                    end={4.546}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h3>
              <div className="text-first font-weight-bold">0%</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="align-box-row">
              <div className="text-first font-size-xl font-weight-bold pr-2">
                55%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="progress-sm"
                  color="primary"
                  value={55}
                />
              </div>
            </div>
            <div className="text-black-50 pt-2">Expenses target</div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="align-box-row">
              <div className="text-success font-size-xl font-weight-bold pr-2">
                76%
              </div>
              <div className="flex-grow-1">
                <LinearProgress
                  className="progress-sm"
                  color="secondary"
                  value={76}
                />
              </div>
            </div>
            <div className="text-black-50 pt-2">Sales target</div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
