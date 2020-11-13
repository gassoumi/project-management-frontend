import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-plum-plate">
        <div className="flex-grow-1 w-100 d-flex align-items-center pb-5">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={7}>
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                      New release
                    </span>
                    <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!">
                      <span className="text-white-50 pl-3">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="text-white mt-3">
                    <h1 className="display-3 mb-3 font-weight-bold">
                      Pleasure rationally encounter consequences
                    </h1>
                    <p className="font-size-lg text-white-50">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="divider border-2 my-5 border-light opacity-2 rounded-circle w-25" />
                    <div>
                      <Button size="large" color="primary" variant="contained">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button
                        color="inherit"
                        variant="outlined"
                        className="text-light ml-3">
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className="d-none d-xl-flex align-items-center">
                  <Card className="card-box demo-img-wrapper demo-img-wrapper-discrete w-50 mx-auto h-50">
                    <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                  </Card>
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
