import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import svgImage11 from '../../../assets/images/illustrations/tree_swing.svg';

import hero7 from '../../../assets/images/hero-bg/hero-7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <div className="header-nav-wrapper header-nav-wrapper-lg w-100 navbar-dark">
          <div className="text-center w-100 d-block font-weight-bold text-white-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + hero7 + ')' }}
          />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="pb-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6} className="d-flex align-items-center">
                  <div>
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
                      <h1 className="display-2 mb-3 font-weight-bold">
                        Carolina React Admin Dashboard with Material-UI PRO
                      </h1>
                      <p className="font-size-lg text-black-50">
                        Bamburgh is a <b>Free Bootstrap 4 UI Kit</b> that
                        enhances the standard Bootstrap styles and components.
                      </p>
                      <p className="text-black-50">
                        In addition, it contains extra customized widgets, pages
                        and multiple landing pages.
                      </p>
                      <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25" />
                      <div>
                        <Button
                          size="large"
                          color="secondary"
                          variant="contained"
                          className="d-block d-sm-inline-block mr-3">
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
                          color="secondary">
                          <span>Plans & pricing</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-xl-flex align-items-center">
                  <img
                    src={svgImage11}
                    className="w-100 mx-auto d-block img-fluid"
                    alt="..."
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pt-5">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-success mb-4 pb-4">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Lightweight
                  </h3>
                  <p className="card-text px-4 mb-4">
                    Insects and flies, then I feel the presence of the
                    indescribable forms Almighty, who formed us in his own
                    image.
                  </p>
                  <Button
                    color="primary"
                    className="text-first mb-2"
                    title="Find out more">
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-first mb-4 pb-4">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Simple to use
                  </h3>
                  <p className="card-text px-4 mb-4">
                    When, while the lovely valley teems with vapour present
                    moment around me, and the meridian sun strike.
                  </p>
                  <Button
                    color="primary"
                    className="text-first mb-2"
                    title="Find out more">
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <h3 className="font-size-xl font-weight-bold mt-5 mb-4">
                    Starter Templates
                  </h3>
                  <p className="card-text px-4 mb-4">
                    Exquisite sense of mere tranquil existence, that I neglect
                    my foliage world trickling tree artist talents.
                  </p>
                  <Button
                    color="primary"
                    className="text-first mb-2"
                    title="Find out more">
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
