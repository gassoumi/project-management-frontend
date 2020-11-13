import React, { Fragment } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../../assets/images/stock-logos/6.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-malibu-beach py-5">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="text-center text-xl-right text-white mb-4 mb-xl-0 pt-0 pt-xl-4 pr-0 pr-xl-4">
                <h1 className="display-2 mb-0 font-weight-bold">Partners</h1>
                <div className="divider border-2 my-4 border-white bg-white opacity-2 rounded-circle w-100" />
                <Button color="primary" variant="contained" size="large">
                  View case studies
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Grid container spacing={4}>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage15} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage16} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage17} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage18} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage19} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
                <Grid item md={6} className="d-flex align-items-stretch">
                  <div className="p-4 card mb-4 w-100">
                    <img src={svgImage20} className="w-50 m-auto" alt="..." />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
