import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Box, Card, CardContent, Button } from '@material-ui/core';

import CountUp from 'react-countup';
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
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
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
        <Grid item xs={12} md={6} lg={4}>
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
        <Grid item xs={12} lg={4}>
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
