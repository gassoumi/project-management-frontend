import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-royal">
        <div className="header-nav-wrapper header-nav-wrapper-lg px-4 w-100 bg-white-50 navbar-dark">
          <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-2"
            style={{ backgroundImage: 'url(' + hero4 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-primary opacity-1" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="d-none d-xl-flex align-items-center">
                  <Card className="card-box demo-img-wrapper demo-img-wrapper-discrete w-50 mx-auto h-50">
                    <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div className="py-0 pb-5 py-xl-5">
                    <div className="pl-0 pl-xl-5 text-white">
                      <h1 className="display-2 mb-3 font-weight-bold">
                        Pleasure rationally encounter
                      </h1>
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
                                Occur in which toil and pain can procure him
                                some great pleasure.
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
                                Nor again is there anyone who loves or pursues
                                or desires.
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
                      <div className="mt-5">
                        <Button
                          size="large"
                          color="primary"
                          variant="contained">
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
                        <Tooltip arrow title="Find out more about this website">
                          <span className="text-white-50 ml-2">
                            <FontAwesomeIcon
                              icon={['far', 'question-circle']}
                            />
                          </span>
                        </Tooltip>
                      </div>
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
