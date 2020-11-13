import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  InputAdornment,
  Button,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

import svgImage23 from '../../../assets/images/illustrations/modern_professional.svg';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white border-light border-1">
        <div className="header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light bg-secondary border-bottom">
          <div className="text-center w-100 d-block font-weight-bold text-black-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div className="bg-composed-wrapper--content py-5">
            <Container>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="pl-0 d-none d-xl-flex align-items-center">
                  <img
                    src={svgImage23}
                    className="w-100 mx-auto d-block img-fluid"
                    alt="..."
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="pr-0 d-flex align-items-center">
                  <div className="pl-4">
                    <div className="text-black mt-3">
                      <h1 className="display-3 mb-3 font-weight-bold">
                        Pleasure rationally encounter consequences
                      </h1>
                      <p className="font-size-lg mb-4 text-black-50">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized.
                      </p>
                      <div>
                        <form>
                          <Grid container spacing={4}>
                            <Grid xs={12} sm={8} item>
                              <TextField
                                fullWidth
                                className="mt-0"
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailOutlineTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </Grid>
                            <Grid xs={12} sm={4} item>
                              <Button
                                variant="contained"
                                size="large"
                                className="w-100"
                                color="primary">
                                <span className="btn-wrapper--label">
                                  Signup
                                </span>
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                      <small className="d-block text-black-50 pt-3">
                        It takes less than 20 seconds to create your account!
                      </small>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pb-4">
          <small className="text-black-50">
            Example description for hero footer section here !
          </small>
        </div>
      </div>
      <div className="hero-wrapper bg-composed-wrapper feature-section bg-asteroid">
        <div
          className="bg-composed-wrapper--image opacity-3"
          style={{ backgroundImage: 'url(' + hero5 + ')' }}
        />
        <div className="bg-composed-wrapper--bg bg-second opacity-1" />
        <Container className="bg-composed-wrapper--content pt-5">
          <Grid container spacing={4} className="py-5">
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-strong-bliss text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                <p className="text-white-50 mt-2">
                  Who are so beguiled and demoralized by the charms of pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-plum-plate text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Pages</h3>
                <p className="text-white-50 mt-2">
                  Which toil and pain can procure him some great pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box px-3 text-white mb-4">
                <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'eye-dropper']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-white-50 mt-2">
                  To take a trivial example, which of us avoids pleasure, some
                  great pleasure.
                </p>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="mt-3">
                  Continue reading
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
