import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, CardContent } from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box mb-4">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="mr-3">
                  <div className="bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'dot-circle']} />
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Sales
                    </small>
                    <span className="font-size-xxl mt-2">23,274</span>
                  </div>
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="text-success"
                    />
                    <span className="text-success px-1">15.4%</span>
                    <span className="text-black-50">increase</span>
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </div>
            </CardContent>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box mb-4 bg-night-sky text-white border-0">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="mr-3">
                  <div className="bg-white text-center text-success font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                    <AddCircleTwoToneIcon />
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold">
                    <small className="text-white-50 d-block mb-1 text-uppercase">
                      New Accounts
                    </small>
                    <span className="font-size-xxl mt-2">586,356</span>
                  </div>
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="text-success"
                    />
                    <span className="text-success px-1">15.4%</span>
                    <span className="text-white-50">increase</span>
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </div>
            </CardContent>
          </a>
        </Grid>
        <Grid item xs={12} lg={4}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box mb-4 card-box-border-bottom border-danger">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="mr-3">
                  <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'keyboard']} />
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Orders
                    </small>
                    <span className="font-size-xxl text-danger mt-1">345</span>
                  </div>
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-down']}
                      className="text-danger"
                    />
                    <span className="text-danger px-1">5.9%</span>
                    <span className="text-black-50">less orders</span>
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </div>
            </CardContent>
          </a>
        </Grid>
      </Grid>
    </Fragment>
  );
}
