import React, { Fragment } from 'react';

import { Grid, Container } from '@material-ui/core';

import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-primary py-5">
        <Container className="pt-5">
          <div className="text-white text-center">
            <h1 className="display-2 mb-2 px-4 font-weight-bold">Partners</h1>
            <h3 className="font-size-xl line-height-md font-weight-light d-block mb-0 text-white-50">
              Our products are used by a lot of big companies
            </h3>
          </div>
          <div className="divider border-2 mt-4 mb-4 mx-auto border-white bg-white opacity-2 rounded-circle w-50" />
          <Grid container spacing={4}>
            <Grid
              item
              md={6}
              xs={12}
              lg={3}
              className="d-flex align-items-stretch">
              <div className="p-4 card mb-4 w-100">
                <img src={svgImage15} className="w-75 m-auto" alt="..." />
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              lg={3}
              className="d-flex align-items-stretch">
              <div className="p-4 card mb-4 w-100">
                <img src={svgImage16} className="w-75 m-auto" alt="..." />
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              lg={3}
              className="d-flex align-items-stretch">
              <div className="p-4 card mb-4 w-100">
                <img src={svgImage17} className="w-75 m-auto" alt="..." />
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              lg={3}
              className="d-flex align-items-stretch">
              <div className="p-4 card mb-4 w-100">
                <img src={svgImage18} className="w-75 m-auto" alt="..." />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
