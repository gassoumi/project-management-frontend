import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart40Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#1bc943',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#1bc943'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart40Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress color="primary" value={52} />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="primary"
                          value={38}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={34}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Tyrell Macleod
                        </a>
                        <span className="text-black-50 d-block">
                          DevOps, Netflix
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={836}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="primary"
                          value={83}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Huw Conley
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Dribbble
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={236}
                                duration={6}
                                deplay={2}
                                separator=""
                                prefix="+"
                                suffix="%"
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={62}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Weekly Sales
                </h6>
                <p className="text-black-50 mb-0">
                  Reports for what we sold this week.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton
                  color="primary"
                  className="text-second font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </IconButton>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <div className="px-5 pt-5 pb-3">
              <h1 className="display-2 font-weight-bold mb-4">
                $
                <span className="pl-1">
                  <CountUp
                    start={0}
                    end={477.693}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h1>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">76%</span>
                  </div>
                  <LinearProgress
                    value={76}
                    className="mb-2"
                    color="secondary"
                  />
                  <div className="text-dark">Orders</div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">34%</span>
                  </div>
                  <LinearProgress value={34} color="primary" className="mb-2" />
                  <div className="text-dark">Deliveries</div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">49%</span>
                  </div>
                  <LinearProgress
                    value={49}
                    color="secondary"
                    className="mb-2"
                  />
                  <div className="text-dark">Products</div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Chart
                options={chart40Options}
                series={chart40Data}
                type="area"
                height={80}
              />
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" variant="outlined" color="secondary">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
