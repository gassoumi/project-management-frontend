import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  IconButton,
  Box,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import Trend from 'react-trend';
import { Line } from 'react-chartjs-2';

const data3Danger = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(248, 50, 69, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f83245',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f83245',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f83245',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3DangerOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const data3Success = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(27, 201, 67, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3SuccessOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const data3Warning = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(244, 119, 46, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f4772e',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f4772e',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3WarningOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

export default function LivePreviewExample() {
  const chart23Options = {
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
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#4191ff'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 0
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
  const chart23Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Card className="mb-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Weekly Sales
              </h6>
              <p className="text-black-50 mb-0">
                Reports for what we sold this week.
              </p>
            </div>
            <div>
              <Chart
                options={chart23Options}
                series={chart23Data}
                type="area"
                height={125}
              />
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
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
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <Divider className="opacity-6" />
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
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
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <Divider className="opacity-6" />
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
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
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <Divider className="opacity-6" />
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </ListItem>
                  <Divider className="opacity-6" />
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" color="primary" variant="contained">
                <span className="btn-wrapper--label">View all employees</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4">
                <div className="card-header-alt px-4 pt-4 pb-0 d-flex align-items-start justify-content-between">
                  <div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <CountUp
                        start={0}
                        end={895}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </h3>
                    <p className="font-size-lg text-black-50 mb-0">
                      Total Orders
                    </p>
                  </div>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    className="text-uppercase font-size-xs">
                    Details
                  </Button>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 10, 5, 13, 5.6, 8, 5, 5.6, 11]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--primary)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
              <Card className="card-box bg-midnight-bloom mb-4">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={586}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Visitors
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[6, 8, 5, 5, 5.6, 13, 5.6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="card-box bg-danger mb-4">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={183.954}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Deliveries
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 8, 5.6, 13, 5.6, 8, 6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
              <Card className="card-box bg-night-sky mb-4">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={13.253}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Budget
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 5.6, 13, 5.6, 8, 6, 8, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Bandwidth allocation
                </div>
                <Box>
                  <Button size="small" variant="outlined" color="primary">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </Button>
                </Box>
              </div>
              <div className="mt-5">
                <span className="display-3 text-first font-weight-bold d-block">
                  12,56k
                </span>
                <span className="text-black-50">
                  Successful production deployments
                </span>
              </div>
            </CardContent>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--sm">
              <Line data={data3Success} options={data3SuccessOptions} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Production servers
                </div>
                <Box>
                  <Button size="small" variant="outlined" color="secondary">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </Button>
                </Box>
              </div>
              <div className="mt-5">
                <span className="display-3 text-danger font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={35}
                    duration={6}
                    deplay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-black-50">Returning clients reports</span>
              </div>
            </CardContent>
            <div className="sparkline-full-wrapper">
              <Line data={data3Danger} options={data3DangerOptions} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Returning customers
                </div>
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="opacity-8"
                    />
                  </span>
                  <span className="btn-wrapper--label">Generate</span>
                </Button>
              </div>
              <div className="mt-5">
                <span className="display-3 text-warning font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={1253}
                    duration={6}
                    deplay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-warning opacity-7">
                  Pending services integrations
                </span>
              </div>
            </CardContent>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--lg">
              <Line data={data3Warning} options={data3WarningOptions} />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
