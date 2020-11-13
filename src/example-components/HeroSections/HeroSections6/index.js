import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  IconButton,
  Button,
  Tooltip
} from '@material-ui/core';

import svgImage12 from '../../../assets/images/illustrations/process.svg';

import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <div className="header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light">
          <div className="text-center w-100 d-block font-weight-bold text-black-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-4"
            style={{ backgroundImage: 'url(' + hero2 + ')' }}
          />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-success badge-pill">
                      New version
                    </span>
                    <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!">
                      <span className="text-black-50 pl-3">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="text-black mt-3">
                    <h1 className="display-3 mb-3 font-weight-bold">
                      Pleasure rationally encounter consequences
                    </h1>
                    <p className="font-size-lg text-black-50">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />
                    <div>
                      <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        className="d-block d-sm-inline-block">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button
                        size="large"
                        variant="outlined"
                        color="primary"
                        className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3">
                        <span>Plans & pricing</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-xl-flex align-items-center">
                  <img
                    src={svgImage12}
                    className="w-100 mx-auto d-block img-fluid"
                    alt="..."
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pb-4">
          <Tooltip arrow title="Facebook">
            <IconButton
              color="primary"
              size="medium"
              variant="outlined"
              className="text-facebook">
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className="font-size-md"
              />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Twitter">
            <IconButton
              color="primary"
              size="medium"
              variant="outlined"
              className="text-twitter">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="font-size-md"
              />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Google">
            <IconButton
              color="primary"
              size="medium"
              variant="outlined"
              className="text-google">
              <FontAwesomeIcon
                icon={['fab', 'google']}
                className="font-size-md"
              />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Instagram">
            <IconButton
              color="primary"
              size="medium"
              variant="outlined"
              className="text-instagram">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="font-size-md"
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Fragment>
  );
}
