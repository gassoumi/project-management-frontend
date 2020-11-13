import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';

import { Grid } from '@material-ui/core';

const Container = () => (
  <div>
    <div className="text-center">
      <Box />
    </div>
    <div className="divider my-4" />
    <Grid container spacing={4}>
      <Grid item lg={6} className="d-flex justify-content-center">
        <Dustbin greedy={true}>
          <Dustbin greedy={true}>
            <Dustbin greedy={true} />
          </Dustbin>
        </Dustbin>
      </Grid>
      <Grid item lg={6} className="d-flex justify-content-center">
        <Dustbin>
          <Dustbin>
            <Dustbin />
          </Dustbin>
        </Dustbin>
      </Grid>
    </Grid>
  </div>
);
export default Container;
