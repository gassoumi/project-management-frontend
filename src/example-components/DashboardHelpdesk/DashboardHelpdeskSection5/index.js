import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

import Trend from 'react-trend';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0 d-flex align-items-start justify-content-between">
              <div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <CountUp
                    start={0}
                    end={895}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </h3>
                <p className="font-size-lg text-black-50 mb-0">Total Orders</p>
              </div>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                className="text-uppercase font-size-xs">
                Details
              </Button>
            </div>
            <div className="pr-5 pb-3">
              <Trend
                data={[5, 10, 5, 13, 5.6, 8, 5, 5.6, 11]}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                height={100}
                radius={15}
                smooth
                stroke="var(--primary)"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </div>
          </Card>
          <Card className="card-box bg-midnight-bloom mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h3 className="font-weight-bold display-4 mb-0 text-white">
                <CountUp
                  start={0}
                  end={586}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </h3>
              <p className="font-size-lg text-white-50 mb-0">Total Visitors</p>
            </div>
            <div className="pr-5 pb-3">
              <Trend
                data={[6, 8, 5, 5, 5.6, 13, 5.6, 12, 10]}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                height={100}
                radius={15}
                smooth
                stroke="var(--white)"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-danger mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h3 className="font-weight-bold display-4 mb-0 text-white">
                <CountUp
                  start={0}
                  end={183954}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </h3>
              <p className="font-size-lg text-white-50 mb-0">
                Total Deliveries
              </p>
            </div>
            <div className="pr-5 pb-3">
              <Trend
                data={[5, 8, 5.6, 13, 5.6, 8, 6, 12, 10]}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                height={100}
                radius={15}
                smooth
                stroke="var(--white)"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </div>
          </Card>
          <Card className="card-box bg-night-sky mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h3 className="font-weight-bold display-4 mb-0 text-white">
                <CountUp
                  start={0}
                  end={13253}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </h3>
              <p className="font-size-lg text-white-50 mb-0">Total Budget</p>
            </div>
            <div className="pr-5 pb-3">
              <Trend
                data={[5, 5.6, 13, 5.6, 8, 6, 8, 12, 10]}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                height={100}
                radius={15}
                smooth
                stroke="var(--white)"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
