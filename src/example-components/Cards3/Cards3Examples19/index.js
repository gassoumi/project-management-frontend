import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

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
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
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
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46]
    }
  ]
};
const data3DangerOptions = {
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 0
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
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
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
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48]
    }
  ]
};
const data3SuccessOptions = {
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 0
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

const data2Warning = {
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
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
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
      data: [33, 44, 21, 37, 52, 53, 21, 39, 27]
    }
  ]
};
const data2WarningOptions = {
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 0
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

const data2Info = {
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
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#11c5db',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#11c5db',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#11c5db',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [33, 44, 21, 21, 27, 37, 52, 39, 53]
    }
  ]
};
const data2InfoOptions = {
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 0
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
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-danger card-shadow-danger mb-4">
            <div className="card-tr-actions">
              <Button
                size="small"
                className="text-uppercase px-4 font-size-xs"
                variant="outlined"
                color="secondary">
                Add
              </Button>
            </div>
            <div className="card-header-alt px-5 pt-5 pb-0 d-flex align-items-start justify-content-between">
              <div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <small className="opacity-6 pr-1">$</small>
                  <span>
                    <CountUp
                      start={0}
                      end={895}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </span>
                </h3>
                <p className="text-black-50 mb-0">sales last month</p>
              </div>
            </div>
            <div className="px-5">
              <div className="sparkline-full-wrapper">
                <Line data={data3Danger} options={data3DangerOptions} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-success card-shadow-success mb-4">
            <div className="card-tr-actions">
              <Button
                size="small"
                className="text-uppercase px-4 font-size-xs"
                variant="outlined"
                color="secondary">
                Add
              </Button>
            </div>
            <div className="card-header-alt px-5 pt-5 pb-0 d-flex align-items-start justify-content-between">
              <div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <small className="opacity-6 pr-1">$</small>
                  <span>
                    <CountUp
                      start={0}
                      end={98.245}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    />
                  </span>
                </h3>
                <p className="text-black-50 mb-0">sales this quarter</p>
              </div>
            </div>
            <div className="px-5">
              <div className="sparkline-full-wrapper">
                <Line data={data3Success} options={data3SuccessOptions} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-warning card-shadow-warning mb-4">
            <div className="card-tr-actions">
              <Button
                size="small"
                className="text-uppercase px-4 font-size-xs"
                variant="outlined"
                color="secondary">
                Add
              </Button>
            </div>
            <div className="card-header-alt px-5 pt-5 pb-0 d-flex align-items-start justify-content-between">
              <div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <small className="opacity-6 pr-1">$</small>
                  <span>
                    <CountUp
                      start={0}
                      end={375}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </span>
                </h3>
                <p className="text-black-50 mb-0">sales today</p>
              </div>
            </div>
            <div className="px-5">
              <div className="sparkline-full-wrapper">
                <Line data={data2Warning} options={data2WarningOptions} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-info card-shadow-info mb-4">
            <div className="card-tr-actions">
              <Button
                size="small"
                className="text-uppercase px-4 font-size-xs"
                variant="outlined"
                color="secondary">
                Add
              </Button>
            </div>
            <div className="card-header-alt px-5 pt-5 pb-0 d-flex align-items-start justify-content-between">
              <div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <small className="opacity-6 pr-1">$</small>
                  <span>
                    <CountUp
                      start={0}
                      end={4575}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </span>
                </h3>
                <p className="text-black-50 mb-0">total sales</p>
              </div>
            </div>
            <div className="px-5">
              <div className="sparkline-full-wrapper">
                <Line data={data2Info} options={data2InfoOptions} />
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
