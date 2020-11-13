import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Card,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 text-first font-weight-bold">
                    56
                  </div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
                  <div className="font-weight-bold font-size-sm text-uppercase">
                    Tasks done
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 font-weight-bold text-danger">
                    18
                  </div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-danger rounded border-danger" />
                  <div className="font-weight-bold font-size-sm text-uppercase">
                    Requests
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 text-success font-weight-bold">
                    29
                  </div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                  <div className="font-weight-bold font-size-sm text-uppercase">
                    Bugfixes
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 text-warning font-weight-bold">
                    768
                  </div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-warning" />
                  <div className="font-weight-bold font-size-sm text-uppercase">
                    Tickets
                  </div>
                </div>

                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header bg-secondary">
              <div className="card-header--title mb-1">
                <h5 className="mb-0 py-2 font-weight-bold">Pricing Plans</h5>
              </div>
              <div className="card-header--actions">
                <Button size="small" variant="contained" color="secondary">
                  Add new
                </Button>
              </div>
            </div>
            <div className="card-body px-0 py-1">
              <List className="my-2">
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-success">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Basic</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">3847</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$176.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-danger">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Premium</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">346</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$567.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-danger">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Ultra</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">1,659</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$893.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
              </List>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
