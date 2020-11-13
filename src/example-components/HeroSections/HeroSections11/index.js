import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-slick-carbon">
        <div className="header-nav-wrapper header-nav-wrapper-xl w-100 navbar-dark">
          <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-3"
            style={{ backgroundImage: 'url(' + hero8 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xl={8} className="mx-auto text-center">
                  <div className="text-white mt-3">
                    <h1 className="display-3 mb-3 font-weight-bold">
                      Pleasure rationally encounter consequences
                    </h1>
                    <p className="font-size-lg d-block mb-5 text-white-50">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized.
                    </p>
                    <div>
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        className="mr-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'gem']} />
                        </span>
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                      </Button>
                      <Button size="large" variant="outlined" color="primary">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'download']} />
                        </span>
                        <span className="btn-wrapper--label">My downloads</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-indicator animated font-size-xxl text-white opacity-10">
          <FontAwesomeIcon icon={['fas', 'arrow-down']} />
        </div>
      </div>
    </Fragment>
  );
}
