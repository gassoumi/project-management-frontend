import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button
} from '@material-ui/core';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4 p-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar-icon-wrapper rounded-circle mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar6} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Kate Winchester
                </a>
                <span className="text-black-50 d-block">
                  Freelance Designer, Mutual Inc.
                </span>
                <div className="d-flex align-items-center pt-1">
                  <LinearProgress
                    variant="determinate"
                    className="flex-grow-1 progress-animated-alt"
                    color="primary"
                    value={56}
                  />
                  <div className="font-weight-bold text-black-50 pl-2">56%</div>
                </div>
              </div>
            </div>
            <p className="text-black-50 font-size-md mb-0">
              From its medieval origins to the digital era, learn everything
              there is to know about the ubiquitous.
            </p>
            <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">russotry@russo.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Project Manager</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">San Francisco, USA</span>
              </div>
            </div>
            <Button
              variant="outlined"
              color="secondary"
              className="text-uppercase w-100 font-size-xs">
              <small className="font-weight-bold">View Complete Profile</small>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4 p-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="d-flex align-items-center mb-3">
              <div
                className="avatar-icon-wrapper rounded-circle mr-3"
                title="Online">
                <span className="badge-position badge-position--bottom-center badge-circle badge badge-success">
                  Online
                </span>
                <div className="rounded-circle overflow-hidden d-100 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                  <span>KA</span>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Kris Alexander
                </a>
                <span className="text-black-50 d-block">
                  Project Manager, Apple Inc.
                </span>
                <div className="d-flex align-items-center pt-1">
                  <LinearProgress
                    variant="determinate"
                    className="flex-grow-1"
                    color="secondary"
                    value={42}
                  />
                  <div className="font-weight-bold text-black-50 pl-2">42%</div>
                </div>
              </div>
            </div>
            <p className="text-black-50 font-size-md mb-0">
              Creation timelines for the standard lorem ipsum passage vary, with
              some citing the 15th century and others the 20th.
            </p>
            <div className="divider mt-4" />
            <div className="font-size-sm py-3 rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">krisa@example.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Project Manager</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">Montreal, CA</span>
              </div>
            </div>
            <div className="divider mb-4" />
            <Button
              variant="outlined"
              color="secondary"
              className="text-uppercase w-100 font-size-xs">
              <small className="font-weight-bold">View Complete Profile</small>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4 p-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar-icon-wrapper rounded-circle mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar2} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Matteo Mcphee
                </a>
                <span className="text-black-50 d-block">
                  Frontend Developer, Stripe Inc.
                </span>
                <div className="d-flex align-items-center pt-1">
                  <LinearProgress
                    variant="determinate"
                    className="flex-grow-1"
                    color="primary"
                    value={31}
                  />
                  <div className="font-weight-bold text-black-50 pl-2">31%</div>
                </div>
              </div>
            </div>
            <p className="text-black-50 font-size-md mb-0">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century.
            </p>
            <div className="font-size-sm p-3 my-4 bg-light rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">matteo@mophee.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Frontend Developer</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">London, UK</span>
              </div>
            </div>
            <Button
              variant="outlined"
              color="primary"
              className="text-uppercase w-100 font-size-xs">
              <small className="font-weight-bold">View Complete Profile</small>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
