import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-night-sky">
        <div className="header-nav-wrapper header-nav-wrapper-lg w-100 navbar-dark bg-royal">
          <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-first opacity-1" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6} className="d-flex align-items-center">
                  <div>
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
                        Pleasure rationally encounter
                      </h1>
                      <p className="font-size-lg text-white-50">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized.
                      </p>
                      <div className="divider border-2 my-5 border-light opacity-2 rounded-circle w-25" />
                      <div>
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
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="d-flex mt-5 mt-xl-0 align-items-center">
                  <Card className="card-box d-block pb-3">
                    <Slider
                      slidesToShow={1}
                      slidesToScroll={1}
                      dots={false}
                      className="w-100 p-2">
                      <div>
                        <CardContent className="p-3">
                          <Card
                            className="card-box demo-img-wrapper"
                            style={{ height: 350 }}>
                            <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                          </Card>
                        </CardContent>
                      </div>
                      <div>
                        <CardContent className="p-3">
                          <Card
                            className="card-box demo-img-wrapper"
                            style={{ height: 350 }}>
                            <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                          </Card>
                        </CardContent>
                      </div>
                      <div>
                        <CardContent className="p-3">
                          <Card
                            className="card-box demo-img-wrapper"
                            style={{ height: 350 }}>
                            <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                          </Card>
                        </CardContent>
                      </div>
                      <div>
                        <CardContent className="p-3">
                          <Card
                            className="card-box demo-img-wrapper"
                            style={{ height: 350 }}>
                            <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                          </Card>
                        </CardContent>
                      </div>
                    </Slider>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer w-100 py-3 text-white-50">
          <div className="text-center">
            This is an example hero footer, that can house any elements from
            this UI Kit.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
