import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent, Divider } from '@material-ui/core';

import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';

const data2Danger = {
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
const data2DangerOptions = {
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

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                Updates
              </h4>
            </div>
            <CardContent className="px-5 pt-5">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'comment-dots']}
                    className="font-size-lg d-block mr-3 text-dark opacity-5"
                  />
                  <b className="text-dark">Reports</b>
                </div>
                <div className="font-weight-bold text-danger font-size-lg">
                  <CountUp
                    start={0}
                    end={2.363}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </div>
              </div>
              <Divider className="my-3" />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="font-size-lg d-block mr-3 text-dark opacity-5"
                  />
                  <b className="text-dark">User</b>
                </div>
                <div className="font-weight-bold text-success font-size-lg">
                  <CountUp
                    start={0}
                    end={643}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </div>
              </div>
              <Divider className="my-3" />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'address-card']}
                    className="font-size-lg d-block mr-3 text-dark opacity-5"
                  />
                  <b className="text-dark">Sales</b>
                </div>
                <div className="font-weight-bold text-warning font-size-lg">
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
              </div>
              <Divider className="my-3" />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'object-group']}
                    className="font-size-lg d-block mr-3 text-dark opacity-5"
                  />
                  <b className="text-dark">Stats</b>
                </div>
                <div className="font-weight-bold text-first font-size-lg">
                  {' '}
                  $1,23M
                </div>
              </div>
            </CardContent>
            <div className="sparkline-full-wrapper">
              <Line data={data3Success} options={data3SuccessOptions} />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                Reports
              </h4>
            </div>
            <CardContent className="pb-0">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <div className="divider-v divider-v-md" />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Reports</b>
                      <div className="text-black-50">Monthly sales reports</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      <CountUp
                        start={0}
                        end={2.363}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>User</b>
                      <div className="text-black-50">Visitors last week</div>
                    </div>
                    <div className="font-weight-bold text-success font-size-xl">
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
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Sales</b>
                      <div className="text-black-50">
                        Total average weekly report
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
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
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Stats</b>
                      <div className="text-black-50">Last month targets</div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      $1,23M
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Payments</b>
                      <div className="text-black-50">Week's expenses</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      - $123,305
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Orders</b>
                      <div className="text-black-50">
                        Total products ordered
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      65
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
            <div className="sparkline-full-wrapper">
              <Line data={data2Danger} options={data2DangerOptions} />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
