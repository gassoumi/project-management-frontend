import React, { Fragment } from 'react';

import { Grid, Container, ButtonGroup, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-light py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <div className="d-block d-xl-flex mb-4 justify-content-between">
            <div>
              <h1 className="display-3 text-dark mb-2 font-weight-bold">
                Plans & pricing
              </h1>
              <p className="font-size-lg text-black">
                Indignation and dislike men who are so beguiled and demoralized.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <ButtonGroup color="secondary" variant="outlined">
                <Button>Monthly</Button>
                <Button>Yearly</Button>
              </ButtonGroup>
            </div>
          </div>
          <Grid container spacing={4} className="d-flex align-items-center">
            <Grid item xs={12} md={6} lg={4}>
              <Card className="mb-4 card-box-hover-rise card-box-hover">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-3 font-weight-bold text-dark">
                    Standard
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    69
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    className="font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <span className="badge-circle-inner mr-2 badge badge-danger">
                        Danger
                      </span>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card className="card-box shadow-xxl border-3 border-success mb-4">
                <div className="card-body px-5 pb-5 pt-4 text-center">
                  <h3 className="display-3 my-3 font-weight-bold text-black">
                    Business
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    139
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    size="large"
                    color="secondary"
                    variant="contained"
                    block
                    className="font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <span className="badge-circle-inner mr-2 badge badge-danger">
                        Danger
                      </span>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card className="mb-4 card-box-hover-rise card-box-hover">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-3 font-weight-bold text-dark">
                    Enterprise
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    99
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    className="font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <span className="badge-circle-inner mr-2 badge badge-success">
                        Success
                      </span>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <span className="badge-circle-inner mr-2 badge badge-danger">
                        Danger
                      </span>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
