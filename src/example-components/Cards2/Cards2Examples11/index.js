import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  LinearProgress,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import { Line } from 'react-chartjs-2';
import Chart from 'react-apexcharts';

const data3Dark = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      backgroundColor: 'rgba(65, 145, 255, 0.4)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 3,
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
      data: [65, 59, 80, 81, 56, 55, 40],
      datalabels: {
        display: false
      },
      label: 'Series A'
    },
    {
      backgroundColor: 'rgba(27, 201, 67, 0.3)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 3,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      data: [28, 48, 40, 19, 86, 27, 90],
      datalabels: {
        display: false
      },
      label: 'Series B'
    }
  ]
};
const data3DarkOptions = {
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

const data2Success = {
  labels: [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7',
    'Day 8',
    'Day 9',
    'Day 10',
    'Day 11',
    'Day 12'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 3,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      data: [
        {
          x: 10,
          y: 20
        },
        {
          x: 15,
          y: 10
        },
        {
          x: 21,
          y: 18
        },
        {
          x: 12,
          y: 15
        },
        {
          x: 18,
          y: 8
        },
        {
          x: 9,
          y: 12
        },
        {
          x: 21,
          y: 18
        },
        {
          x: 17,
          y: 6
        },
        {
          x: 10,
          y: 20
        },
        {
          x: 15,
          y: 10
        },
        {
          x: 12,
          y: 15
        },
        {
          x: 18,
          y: 8
        }
      ]
    }
  ]
};
const data2SuccessOptions = {
  legend: {
    display: false
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 0
    }
  },
  responsive: true,
  maintainAspectRatio: false,
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
  }
};

export default function LivePreviewExample() {
  const chart13Options = {
    chart: {
      toolbar: {
        show: true
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4191ff', '#f83245'],
    fill: {
      opacity: 1,
      colors: ['#4191ff', '#f83245']
    },
    stroke: {
      curve: 'smooth'
    },
    strokeDashArray: '5',
    borderColor: 'rgba(125, 138, 156, 0.3)',
    legend: {
      show: true
    }
  };
  const chart13Data = [
    {
      name: 'Net Profit',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Net Loss',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  const chart14Options = {
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
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      width: 0
    },
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart14Data = [
    {
      name: 'Orders',
      data: [47, 38, 56, 24, 43, 24, 56, 56, 24, 65]
    }
  ];

  const chart15Options = {
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
    colors: ['#1bc943'],
    stroke: {
      color: '#1bc943',
      width: 0
    },
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart15Data = [
    {
      name: 'Orders',
      data: [38, 43, 24, 56, 43, 24, 56, 35, 56, 65]
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Weekly Sales
                </h6>
                <p className="text-black-50 mb-0">
                  Reports for what we sold this week.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <Fab color="primary" size="small" className="font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </Fab>
              </div>
            </div>
            <Divider />
            <div className="sparkline-full-wrapper px-5 pt-3 m-0 bg-secondary">
              <Line data={data2Success} options={data2SuccessOptions} />
            </div>
            <Divider />
            <div className="p-4">
              <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                  <div className="mb-1 font-weight-bold font-size-xl">76%</div>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={76}
                  />
                  <div className="text-muted pt-1">Sales</div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="mb-1 font-weight-bold font-size-xl">23%</div>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={23}
                  />
                  <div className="text-muted pt-1">Profiles</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="mb-1 font-weight-bold font-size-xl">51%</div>
                  <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={51}
                  />
                  <div className="text-muted pt-1">Tickets</div>
                </Grid>
              </Grid>
            </div>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Finance statistics
              </h6>
            </div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Chart
                  options={chart13Options}
                  series={chart13Data}
                  type="area"
                  height={265}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="mb-4 pr-4">
                  <div className="font-size-xl font-weight-bold">$3485</div>
                  <div className="font-size-md font-weight-bold text-black-50">
                    Income
                  </div>
                  <Chart
                    options={chart14Options}
                    series={chart14Data}
                    type="area"
                    height={60}
                  />
                </div>
                <div className="mb-4 pr-4">
                  <div className="font-size-xl font-weight-bold">$784</div>
                  <div className="font-size-md font-weight-bold text-black-50">
                    Expenses
                  </div>
                  <Chart
                    options={chart15Options}
                    series={chart15Data}
                    type="area"
                    height={60}
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h6 className="font-size-lg mb-3 text-dark">Sales statistics</h6>
            </div>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--xxl px-4 m-0">
              <Line data={data3Dark} options={data3DarkOptions} />
            </div>
            <div className="bg-neutral-dark mt-4 text-center py-3">
              <div className="btn-group btn-group-sm" role="group">
                <Button className="mx-1" variant="contained" color="primary">
                  Last week
                </Button>
                <Button className="mx-1" color="primary">
                  Last month
                </Button>
                <Button className="mx-1" color="primary">
                  Last year
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Performance
              </h6>
              <p className="text-black-50 mb-0">
                Portfolio performance for selected period.
              </p>
            </div>
            <Divider />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <div className="p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="font-weight-bold">Orders</div>
                    <div className="font-size-lg font-weight-bold text-danger">
                      345
                    </div>
                  </div>
                  <div>
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={65}
                    />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="font-weight-bold">Customers</div>
                    <div className="font-size-lg font-weight-bold text-warning">
                      435
                    </div>
                  </div>
                  <div>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={44}
                    />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
