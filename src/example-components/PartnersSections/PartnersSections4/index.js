import React, { Fragment } from 'react';

import { Grid, Container } from '@material-ui/core';

import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../../assets/images/stock-logos/6.svg';
import svgImage21 from '../../../assets/images/stock-logos/7.svg';
import svgImage22 from '../../../assets/images/stock-logos/8.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-5">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage15}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage16}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage17}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage18}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage19}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage20}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage21}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} lg={3}>
              <div className="p-3 mb-4 d-flex align-self-stretch">
                <img
                  src={svgImage22}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
