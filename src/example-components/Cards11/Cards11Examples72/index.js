import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Box,
  LinearProgress,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import { Line } from 'react-chartjs-2';

const data4MultipleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#7a7b97',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#7a7b97',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#7a7b97',
      data: [65, 59, 80, 81, 56, 55, 40],
      datalabels: {
        display: false
      },
      label: "Today's Earnings"
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#4191ff',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#4191ff',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#4191ff',
      data: [65, 81, 56, 59, 80, 55, 40],
      datalabels: {
        display: false
      },
      label: 'Current Week'
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#f4772e',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f4772e',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e',
      data: [28, 48, 19, 86, 27, 40, 90],
      datalabels: {
        display: false
      },
      label: 'Previous Week'
    }
  ]
};
const data4MultipleOptions = {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: '#eeeff8',
          drawBorder: true
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: '#eeeff8',
          drawBorder: true
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
  const chart5Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '80%'
      }
    },
    colors: ['#7fe4a6', '#7fe2ec', '#7fc8fd', '#ff98a4'],
    fill: {
      opacity: 1
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month'
    ]
  };
  const chart5Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1]
    },
    {
      name: 'Weekly Stats',
      data: [2.3, 3.1, 5.1, 3.6, 4.0, 4.0, 3.8, 3.6, 3.8]
    },
    {
      name: 'Sales reports',
      data: [2.3, 3.1, 5.1, 3.6, 4.0, 4.0, 3.8, 3.6, 3.8]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Revenue progress
                </h6>
                <p className="text-black-50 mb-0">
                  Our company revenues, split by progress.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <Button variant="outlined" color="secondary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-down']} />
                  </span>
                  <span className="btn-wrapper--label">Download report</span>
                </Button>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <div className="p-4">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="p-5 mb-4 rounded bg-secondary">
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          54,126
                        </span>
                        <span className="text-muted">dribbble.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={50}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          12,345
                        </span>
                        <span className="text-muted">amazon.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={76}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          76%
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          34,985
                        </span>
                        <span className="text-muted">facebook.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={87}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          87%
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          76,381
                        </span>
                        <span className="text-muted">youtube.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={59}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          59%
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Chart
                    options={chart5Options}
                    series={chart5Data}
                    type="bar"
                    height={330}
                  />
                </Grid>
              </Grid>
              <Divider />
              <Divider />
            </div>
            <div className="text-center mb-4">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Sales
                </h6>
                <p className="text-black-50 mb-0">
                  Last 7 days sales statistics report
                </p>
              </div>
            </div>

            <div className="rounded mx-4 my-2 p-4 bg-secondary text-center border-light border-1">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <div className="text-dark pb-1">Today's Earnings</div>
                  <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                    <span className="mr-2 badge badge-circle badge-dark">
                      Badge dark
                    </span>
                    <small className="opacity-6 pr-1">$</small>
                    <span>
                      <CountUp
                        start={0}
                        end={8.49}
                        duration={4}
                        separator=""
                        decimals={3}
                        decimal=","
                        prefix=""
                        suffix=""
                      />
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-dark pb-1">Current Week</div>
                  <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                    <span className="mr-2 badge-circle badge badge-first">
                      Badge first
                    </span>
                    <small className="opacity-6 pr-1">$</small>
                    <span>
                      <CountUp
                        start={0}
                        end={34.543}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className="text-dark pb-1">Previous Week</div>
                  <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                    <span className="mr-2 badge badge-circle badge-warning">
                      Badge warning
                    </span>
                    <small className="opacity-6 pr-1">$</small>
                    <span>
                      <CountUp
                        start={0}
                        end={76.645}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div className="d-block p-4">
              <Line
                data={data4MultipleData}
                height={255}
                options={data4MultipleOptions}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
