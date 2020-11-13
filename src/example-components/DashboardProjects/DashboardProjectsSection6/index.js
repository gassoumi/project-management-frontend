import React, { Fragment } from 'react';

import { Grid, Card, Divider } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box py-4 mb-4">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="divider-v divider-v-lg" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>Reports</b>
                <div className="text-black-50">Monthly sales reports</div>
              </div>
              <div className="font-weight-bold text-danger font-size-xl">
                <CountUp
                  start={0}
                  end={2.363}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={3}
                  decimal=","
                />
              </div>
            </div>
            <Divider className="my-3" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>User</b>
                <div className="text-black-50">Visitors last week</div>
              </div>
              <div className="font-weight-bold text-success font-size-xl">
                <CountUp
                  start={0}
                  end={987}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
            <Divider className="my-3" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>Sales</b>
                <div className="text-black-50">Total average weekly report</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
                <CountUp
                  start={0}
                  end={483}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>Stats</b>
                <div className="text-black-50">Last month targets</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
                $1,23M
              </div>
            </div>
            <Divider className="my-3" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>Payments</b>
                <div className="text-black-50">Week's expenses</div>
              </div>
              <div className="font-weight-bold text-danger font-size-xl">
                - $123,305
              </div>
            </div>
            <Divider className="my-3" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <div>
                <b>Orders</b>
                <div className="text-black-50">Total products ordered</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
                65
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
