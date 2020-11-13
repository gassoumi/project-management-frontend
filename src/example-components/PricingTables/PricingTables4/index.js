import React, { Fragment } from 'react';

import { Grid, Container, ButtonGroup, Card, Button } from '@material-ui/core';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import svgImage13 from '../../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../../assets/images/illustrations/powerful.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-royal py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Card className="modal-content">
            <div className="card-header bg-light d-flex justify-content-center">
              <div className="text-center my-4">
                <h1 className="display-4 text-black mb-2 font-weight-bold">
                  Plans & pricing
                </h1>
                <p className="font-size-lg mb-1 text-black-50">
                  Indignation and dislike men who are so beguiled and
                  demoralized.
                </p>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="d-flex justify-content-center">
                <ButtonGroup
                  color="primary"
                  className="my-3"
                  variant="contained">
                  <Button>Monthly plans</Button>
                  <Button>Yearly payments</Button>
                </ButtonGroup>
              </div>
              <div className="container-fluid">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6} lg={4}>
                    <div className="divider-v divider-v-lg" />
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-4">
                        <img
                          src={svgImage1}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Standard
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          variant="outlined"
                          color="primary"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
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
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <div className="divider-v divider-v-lg" />
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-4">
                        <img
                          src={svgImage13}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Business
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          color="primary"
                          variant="contained"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
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
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-4">
                        <img
                          src={svgImage14}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Enterprise
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          variant="outlined"
                          color="primary"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
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
                  </Grid>
                </Grid>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
}
