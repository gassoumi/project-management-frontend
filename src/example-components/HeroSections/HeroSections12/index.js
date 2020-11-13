import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Fab, Container, Tooltip } from '@material-ui/core';

import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

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
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xl={8} className="px-0 mx-auto text-center">
                  <div className="text-white mt-3">
                    <h1 className="display-2 mb-3 px-4 font-weight-bold">
                      Pleasure rationally encounter consequences
                    </h1>
                    <h3 className="font-size-lg line-height-md font-weight-light d-block px-3 mb-4 text-white-50">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized.
                    </h3>
                    <div className="pb-5 d-flex justify-content-center align-items-center">
                      <Tooltip arrow title="Play Video">
                        <Fab
                          size="large"
                          className="rounded-circle d-flex justify-content-center align-items-center d-80"
                          color="primary">
                          <FontAwesomeIcon
                            icon={['fas', 'play-circle']}
                            className="font-size-xxl"
                          />
                        </Fab>
                      </Tooltip>
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
