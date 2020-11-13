import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button } from '@material-ui/core';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-vicious-stance min-vh-100">
        <div className="header-nav-wrapper header-nav-wrapper-xl bg-white-50 w-100 navbar-dark">
          <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-3"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-1" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="text-center py-5">
              <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                Hero Section
              </span>
              <div className="text-white mt-3 px-2 px-xl-5">
                <h1 className="display-3 py-3 px-2 px-xl-5 font-weight-bold">
                  Pleasure rationally encounter consequences
                </h1>
                <p className="font-size-lg text-white-50 mt-2 mb-4 d-block px-2 px-xl-5">
                  On the other hand, we denounce with righteous indignation and
                  dislike.
                </p>
                <div className="divider border-2 my-5 border-light opacity-2 mx-auto rounded-circle w-25" />
                <div>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    className="px-4">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </span>
                    <span className="btn-wrapper--label">
                      Plans &amp; Pricing
                    </span>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="hero-footer">
          <Container>
            <Grid container spacing={4} className="pt-3">
              <Grid item xs={12} md={4}>
                <div className="feature-box text-white mb-4 text-center">
                  <div className="bg-deep-blue text-center text-white font-size-xl mx-auto d-50 rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'bomb']} />
                  </div>
                  <h3 className="font-size-lg font-weight-bold mt-4">
                    Widgets
                  </h3>
                  <p className="text-white-50 mt-2">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and account
                    of the system.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                    Continue reading
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="feature-box text-white mb-4 text-center">
                  <div className="bg-grow-early text-center text-white font-size-xl mx-auto d-50 rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'network-wired']} />
                  </div>
                  <h3 className="font-size-lg font-weight-bold mt-4">
                    Components
                  </h3>
                  <p className="text-white-50 mt-2">
                    The master-builder of human happiness. No one rejects,
                    dislikes, or avoids pleasure itself, because it is pleasure.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                    Continue reading
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="feature-box text-white mb-4 text-center">
                  <div className="bg-strong-bliss text-white font-size-xl mx-auto d-50 rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                  </div>
                  <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                  <p className="text-white-50 mt-2">
                    Who are so beguiled and demoralized by the charms of
                    pleasure of the moment, so blinded by desire, that they
                    cannot foresee.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                    Continue reading
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
