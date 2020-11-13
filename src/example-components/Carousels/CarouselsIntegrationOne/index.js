import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Fab, Button, Tooltip } from '@material-ui/core';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="card card-box d-block mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Statistics</small>
            <b>Last quarter report</b>
          </div>
          <div className="card-header--actions">
            <Tooltip arrow title="View details">
              <Fab size="small" color="primary">
                <FontAwesomeIcon icon={['fas', 'plus']} />
              </Fab>
            </Tooltip>
          </div>
        </div>
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          className="pb-4">
          <div>
            <div className="pt-3">
              <Grid container spacing={4} className="mt-3 mb-2">
                <Grid item xs={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="p-4 text-center">
              <Button variant="outlined" color="primary" className="mb-1">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'angle-right']} />
                </span>
              </Button>
            </div>
          </div>
          <div>
            <div className="card-body pb-0 text-center">
              <div className="font-weight-bold">
                <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                  New Accounts
                </small>
                <span className="font-size-xxl ">586,356</span>
              </div>
              <div className="mt-1">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-danger"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-black-50">increase this month</span>
              </div>
              <div className="mt-4">
                <Button variant="outlined" color="primary" className="mb-3">
                  <span className="btn-wrapper--label">
                    View complete report
                  </span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
}
