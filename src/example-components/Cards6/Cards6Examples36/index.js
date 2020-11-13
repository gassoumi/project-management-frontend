import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  IconButton,
  Box,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h5 className="mb-0 py-2 font-weight-bold">Latest actions</h5>
              </div>
              <div className="card-header--actions">
                <Box>
                  <Button color="primary" size="small">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </Button>
                </Box>
              </div>
            </div>
            <CardContent className="p-0">
              <List className="mb-2">
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'bell']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        Customers
                      </div>
                      <div className="text-dark opacity-5">
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        New articles
                      </div>
                      <div className="text-dark opacity-5">
                        I am alone, and feel the charm of existence in this
                        spot.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        Blog posts
                      </div>
                      <div className="text-dark opacity-5">
                        When, while the lovely valley teems with vapour around
                        me.
                      </div>
                    </div>
                  </div>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h5 className="mb-0 py-2 font-weight-bold">Pricing Plans</h5>
              </div>
              <div className="card-header--actions">
                <Button size="small" variant="contained" color="secondary">
                  Add new
                </Button>
              </div>
            </div>
            <CardContent className="p-0">
              <List className="my-3">
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
                      <IconButton className="bg-white text-first d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle p-0 ml-1">
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
                      <IconButton className="bg-white text-first d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle p-0 ml-1">
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
                      <IconButton className="bg-white text-first d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4">
            <List>
              <ListItem className="pt-4 pb-4 d-block">
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <div className="bg-premium-dark text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                  <div className="pl-0 pl-sm-4">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg">Business</span>
                      <span className="text-info ml-2 badge badge-neutral-info">
                        New
                      </span>
                    </div>
                    <p className="text-black-50 mb-0">
                      Grow familiar with the countless...
                    </p>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto">
                    <Fab color="secondary">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'comment-dots']} />
                      </span>
                    </Fab>
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="pt-4 pb-4 d-block">
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </div>
                  </div>
                  <div className="pl-0 pl-sm-4">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg">Images</span>
                    </div>
                    <p className="text-black-50 mb-0">
                      Absorbed in the exquisite sense...
                    </p>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto">
                    <Fab color="secondary">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </span>
                    </Fab>
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="pt-4 pb-4 d-block">
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <div className="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                      <FontAwesomeIcon icon={['fas', 'lemon']} />
                    </div>
                  </div>
                  <div className="pl-0 pl-sm-4">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg">Finance</span>
                    </div>
                    <p className="text-black-50 mb-0">
                      A wonderful serenity has taken ...
                    </p>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto">
                    <Fab color="primary">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'lemon']} />
                      </span>
                    </Fab>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
