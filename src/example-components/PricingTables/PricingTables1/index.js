import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, ButtonGroup, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-premium-dark py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <div className="mb-5 text-center">
            <h1 className="display-3 text-white mb-2 font-weight-bold">
              Plans & pricing
            </h1>
            <p className="font-size-lg text-white-50">
              Indignation and dislike men who are so beguiled and demoralized.
            </p>
            <ButtonGroup color="primary" className="mt-3" variant="contained">
              <Button>Monthly plans</Button>
              <Button>Yearly plans</Button>
            </ButtonGroup>
          </div>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                md={6}
                className="order-2 order-xl-1 d-flex align-items-center">
                <Card className="bg-secondary w-100 p-5 br-xl-right-0">
                  <h5 className="font-size-xl">
                    Standard License
                    <strong className="pt-2 font-weight-bold d-block">
                      $69
                      <small className="opacity-5">one time fee</small>
                    </strong>
                  </h5>
                  <ul className="list-unstyled text-left my-4 font-weight-bold">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      All Integrations
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'times-circle']}
                        className="text-danger font-size-lg mr-2"
                      />
                      Premium support
                    </li>
                  </ul>
                  <Button size="large" variant="contained" color="primary">
                    Buy now
                  </Button>
                  <div className="mt-3">
                    <Button
                      color="primary"
                      size="small"
                      title="Licenses Details">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Licenses Details
                      </span>
                    </Button>
                  </div>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="order-1 mb-4 mb-xl-0 order-xl-2">
                <Card className="w-100 shadow-lg p-5 text-white p-5 bg-plum-plate">
                  <div className="py-4">
                    <h5 className="font-size-xl">
                      Extended License
                      <strong className="pt-2 font-weight-bold d-block">
                        $99
                        <small className="opacity-5">one time fee</small>
                      </strong>
                    </h5>
                    <ul className="list-unstyled text-left my-4 font-weight-bold">
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        Unlimited Tasks
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        Unlimited Teams
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        All Integrations
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'times-circle']}
                          className="text-danger font-size-lg mr-2"
                        />
                        Premium support
                      </li>
                    </ul>
                    <Button size="large" variant="contained" color="secondary">
                      Buy now
                    </Button>
                    <div className="mt-3">
                      <Button
                        color="primary"
                        className="text-white"
                        size="small"
                        title="Licenses Details">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'question-circle']} />
                        </span>
                        <span className="btn-wrapper--label">
                          Licenses Details
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
}
