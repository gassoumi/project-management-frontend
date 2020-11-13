import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={5}>
            <img
              alt="..."
              className="rounded-left img-fit-container"
              src={stock1}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="p-5">
              <img
                alt="..."
                className="w-25 d-block img-fluid"
                src={svgImage1}
              />
              <h1 className="display-4 my-3 font-weight-bold">
                Wonderful serenity has possession
              </h1>
              <p className="font-size-lg text-black">
                A free hour, when our power of choice is untrammelled and when
                nothing prevents.
              </p>
              <p className="font-size-sm mb-3 text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </p>
              <Button color="primary" variant="contained">
                Continue reading
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
