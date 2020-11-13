import React, { Fragment } from 'react';

import { Grid, Container } from '@material-ui/core';

import svgImage5 from '../../../assets/images/illustrations/experience_design.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-box py-5">
        <Container className="py-5">
          <Grid item xl={7} md={9} className="px-0">
            <h1 className="display-3 mb-3 font-weight-bold">
              Wonderful serenity has possession
            </h1>
            <p className="font-size-lg text-black-50">
              A free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best.
            </p>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={6} xl={4}>
              <div className="py-2 py-xl-5">
                <div className="d-block pl-0 pl-xl-3 mt-4">
                  <div className="feature-box mb-4 pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Components
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system.
                    </p>
                  </div>
                  <div className="feature-box mb-4 pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Widgets
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      Expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness. No one
                      rejects, dislikes, or avoids pleasure itself.
                    </p>
                  </div>
                  <div className="feature-box pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Elements
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      No one rejects, dislikes, or avoids pleasure itself,
                      because it is pleasure, but because those who do not know
                      how to pursue pleasure rationally.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xl={8}
              className="d-flex pt-5 pt-xl-0 align-items-start align-items-xl-center">
              <img src={svgImage5} className="img-fluid" alt="..." />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
