import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import GaugeChart from 'react-gauge-chart';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container className="text-center mb-3">
        <Grid
          item
          xs={6}
          md={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              percent={0.86}
              textColor={'#333'}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <GaugeChart
              id="gauge-chart3"
              nrOfLevels={30}
              colors={['#FF5F6D', '#FFC371']}
              arcWidth={0.3}
              percent={0.37}
              textColor={'#333'}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <GaugeChart
              id="gauge-chart4"
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              percent={0.6}
              textColor={'#333'}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              textColor={'#333'}
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
