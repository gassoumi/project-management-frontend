import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  Checkbox,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
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
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <div className="divider-v divider-v-md" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">$693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="divider-v divider-v-md" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'lightbulb']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">345</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">124</b>
                        <span className="text-black-50 d-block">orders</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <div className="divider-v divider-v-md" />
                <Grid container spacing={4}>
                  <Grid item xs={12} className="d-flex justify-content-center">
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="display-4 text-info"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">$369</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={4}>
                  <Grid item xs={12} className="d-flex justify-content-center">
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="display-4 text-success"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">245</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-top">
                <div className="badge badge-info">NEW</div>
              </div>
              <div className="bg-composed-wrapper bg-vicious-stance border-0">
                <div className="bg-composed-img-3 bg-composed-wrapper--image" />
                <div className="bg-composed-wrapper--content text-center text-light p-5">
                  <h1 className="display-4 pt-3 pb-1 font-weight-bold mb-0">
                    Users statistics
                  </h1>
                  <p className="text-white-50 mb-3">
                    Example heading description line here...
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
              <Box className="pb-4">
                <Button size="large" color="secondary" variant="contained">
                  Send us a message
                </Button>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-warning"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'lemon']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$3,586</b>
                      <span className="text-black-50 d-block">sales</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="table-responsive">
                <table className="table text-left text-nowrap mt-4 table-alternate mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Inez Conley
                            </a>
                            <span className="text-black-50 d-block">
                              Project Manager
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$18,386</span>
                      </td>
                      <td className="text-center">
                        <span className="text-danger font-weight-bold">
                          -6,310
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-warning">Pending</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            <CountUp
                              start={0}
                              end={584}
                              duration={6}
                              deplay={2}
                              separator=""
                              decimals={0}
                              decimal=","
                            />
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-down']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Adyan Sosa
                            </a>
                            <span className="text-black-50 d-block">
                              User Experience Designer
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$6,356</span>
                      </td>
                      <td className="text-center">
                        <span className="text-warning">-374</span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-first">Waiting</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            <CountUp
                              start={0}
                              end={483}
                              duration={6}
                              deplay={2}
                              separator=""
                              decimals={0}
                              decimal=","
                            />
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Beck Simpson
                            </a>
                            <span className="text-black-50 d-block">
                              Senior Consultant
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$16,281</span>
                      </td>
                      <td className="text-center">
                        <span className="text-success">+684</span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-success">Done</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            {' '}
                            $12,23M
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Niyah Crossley
                            </a>
                            <span className="text-black-50 d-block">
                              Development Team Lead
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$5,373</span>
                      </td>
                      <td className="text-center">
                        <span className="text-success">+47</span>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-danger">Failed</div>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            {' '}
                            $346,457
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
