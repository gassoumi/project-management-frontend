import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  Badge,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-badges">
              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                Blog Posts
              </span>
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                <h3 className="display-4 font-weight-bold m-0 text-white">
                  Medieval military methods
                </h3>
              </div>
              <img alt="..." className="card-img-top" src={stock2} />
            </a>
            <CardContent className="p-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar2} className="mr-2" />
                  <div>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Shanelle Wynn
                    </a>
                    <span className="text-black-50 d-block">
                      UI Engineer, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="py-1 px-2 font-weight-bold">
                    <span className="text-success pr-1">23</span>
                    <span className="d-block opacity-6 text-black font-size-xs">
                      Reviews
                    </span>
                  </Button>
                </div>
              </div>
              <p className="card-text">
                Costs for the walls depended on the material used. Wood would
                cost very little and was quick to build, but was weak.
              </p>
              <p className="card-text">
                Stone was strong but very expensive and time-consuming to
                construct
              </p>
              <div className="d-flex justify-content-between pt-3">
                <Button size="small" variant="contained" color="primary">
                  Learn more
                </Button>
                <Button size="small" className="text-danger">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Cards</small>
                <b>Example scrolling card</b>
              </div>
              <div className="card-header--actions">
                <Button size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </div>
            </div>
            <div className="scroll-area-lg shadow-overflow">
              <PerfectScrollbar>
                <CardContent className="p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <div className="badge badge-primary badge-circle">
                          Offline
                        </div>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Kate Winchester
                        </a>
                        <span className="text-black-50 d-block">
                          Freelance Designer, Mutual Inc.
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-success text-success px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Successful
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitous lorem ipsum
                    passage learn everything there is.
                  </p>
                </CardContent>
                <Divider />
                <CardContent className="p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <span className="badge-circle badge badge-success">
                          Online
                        </span>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Solomon Mora
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="opacity-7 mr-1"
                          />
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-warning text-warning px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Pending
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text (sentence, paragraph, page, etc.) that doesn't
                    distract from the layout.
                  </p>
                  <p className="text-black-50 mb-0">
                    A practice not without controversy, laying out pages with
                    meaningless filler text can be very useful when the focus is
                    meant to be on design, not content.
                  </p>
                </CardContent>
                <Divider />
                <CardContent className="p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <div className="badge badge-danger badge-circle">
                          Offline
                        </div>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Milly Dougherty
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'calendar-alt']}
                            className="opacity-7 mr-1"
                          />
                          15 August 2021
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-first text-first px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Investigation
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text from the layout laying out pages with
                    meaningless filler.
                  </p>
                </CardContent>
                <Divider />
                <CardContent className="p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <Badge
                          color="secondary"
                          className="badge-position badge-position--bottom-center badge-circle-inner">
                          Idle
                        </Badge>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Amy-Louise Mccaffrey
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="opacity-7 mr-1"
                          />
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-danger text-danger px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Declined
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    A practice not without controversy, laying out pages with
                    meaningless filler text can be very useful when the focus is
                    meant to be on design, not content.
                  </p>
                </CardContent>
                <Divider />
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-block text-center bg-light p-3">
              <Button
                color="primary"
                className="m-2 p-0 d-inline-block text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-xl text-white"
                />
              </Button>
              <Button
                color="secondary"
                className="m-2 p-0 d-inline-block text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-xl text-white"
                />
              </Button>
              <Button
                color="primary"
                className="m-2 p-0 d-inline-block text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'user-circle']}
                  className="font-size-xl text-white"
                />
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
