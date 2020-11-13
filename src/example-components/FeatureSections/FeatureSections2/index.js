import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card } from '@material-ui/core';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-box bg-slick-carbon py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} className="d-flex align-items-center">
              <Card className="card-box flex-fill mb-4 mb-xl-0 demo-img-wrapper demo-img-wrapper-dark">
                <FontAwesomeIcon icon={['fas', 'camera-retro']} />
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="py-0 py-xl-5">
                <div className="pl-0 pl-xl-5 text-white">
                  <h1 className="display-3 mb-3 font-weight-bold">
                    Pleasure rationally encounter consequences
                  </h1>
                  <p className="font-size-xl text-white-50">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized.
                  </p>
                  <div className="d-block mt-4">
                    <Slider
                      slidesToShow={2}
                      slidesToScroll={2}
                      dots={true}
                      className="slick-slider slick-slider-left">
                      <div>
                        <div className="feature-box pr-4">
                          <h3 className="font-size-lg font-weight-bold my-3">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-white">
                              Elements
                            </a>
                          </h3>
                          <p className="text-white-50 mb-3">
                            It takes a trivial example, which of us ever
                            undertakes.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="feature-box pr-4">
                          <h3 className="font-size-lg font-weight-bold my-3">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-white">
                              Widgets
                            </a>
                          </h3>
                          <p className="text-white-50 mb-3">
                            Occur in which toil and pain can procure him some
                            great pleasure.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="feature-box pr-4">
                          <h3 className="font-size-lg font-weight-bold my-3">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-white">
                              Components
                            </a>
                          </h3>
                          <p className="text-white-50 mb-3">
                            Nor again is there anyone who loves or pursues or
                            desires.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="feature-box pr-4">
                          <h3 className="font-size-lg font-weight-bold my-3">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-white">
                              Pages
                            </a>
                          </h3>
                          <p className="text-white-50 mb-3">
                            On the other hand, we denounce with righteous
                            indignation.
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
