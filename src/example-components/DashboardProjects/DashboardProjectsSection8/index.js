import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Divider
} from '@material-ui/core';

import { Line } from 'react-chartjs-2';
import Chart from 'react-apexcharts';

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
  const chart7Options = {
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
    markers: {
      size: 0
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      width: 3
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
  const chart7Data = [
    {
      name: 'Orders',
      data: [47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart8Options = {
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
    markers: {
      size: 0
    },
    colors: ['#11c5db'],
    stroke: {
      color: '#11c5db',
      width: 3
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
  const chart8Data = [
    {
      name: 'Orders',
      data: [38, 44, 56, 47, 26, 24, 45]
    }
  ];

  const chart9Options = {
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
    markers: {
      size: 0
    },
    colors: ['#1bc943'],
    stroke: {
      color: '#1bc943',
      width: 3
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
  const chart9Data = [
    {
      name: 'Ethereum price:',
      data: [38, 43, 24, 56, 35, 56, 65]
    }
  ];

  const chart10Options = {
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
    markers: {
      size: 0
    },
    colors: ['#4191ff'],
    stroke: {
      color: '#4191ff',
      width: 3
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
  const chart10Data = [
    {
      name: 'Ripple price:',
      data: [33, 56, 24, 23, 24, 65, 43]
    }
  ];

  const chart11Options = {
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
    markers: {
      size: 0
    },
    colors: ['#f83245'],
    stroke: {
      color: '#f83245',
      width: 3
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
  const chart11Data = [
    {
      name: 'Tether price:',
      data: [32, 43, 33, 61, 23, 24, 39]
    }
  ];

  const chart12Options = {
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
    markers: {
      size: 0
    },
    colors: ['#070919'],
    stroke: {
      color: '#070919',
      width: 3
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
  const chart12Data = [
    {
      name: 'Litecoin price:',
      data: [24, 33, 24, 56, 23, 65, 43]
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
              <Box className="d-flex align-items-center">
                <IconButton color="primary" className="font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </IconButton>
              </Box>
            </div>
            <Divider />
            <div className="sparkline-full-wrapper sparkline-full-wrapper--xl px-5 pt-3 m-0 bg-secondary">
              <Line data={data2Success} options={data2SuccessOptions} />
            </div>
            <Divider />
            <div className="p-4">
              <Grid container spacing={4}>
                <Grid item md={4}>
                  <div className="mb-1 font-weight-bold font-size-xl">76%</div>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={76}
                  />
                  <div className="text-muted pt-1">Sales</div>
                </Grid>
                <Grid item md={4}>
                  <div className="mb-1 font-weight-bold font-size-xl">23%</div>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={23}
                  />
                  <div className="text-muted pt-1">Profiles</div>
                </Grid>
                <Grid item md={4}>
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
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Bitcoin
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-success">
                        <span>54%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">$8,764</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart7Options}
                      series={chart7Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Cardano
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-success">
                        <span>67%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">$6,324</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart8Options}
                      series={chart8Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Ethereum
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-danger">
                        <span>32%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-down']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">$456</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart9Options}
                      series={chart9Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Ripple
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-danger">
                        <span>21%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-down']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">$674</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart10Options}
                      series={chart10Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Tether
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-success">
                        <span>15%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">$12</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart11Options}
                      series={chart11Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="px-3 pt-3 mb-4">
                <div className="d-flex justify-content-between">
                  <div className="pr-5 flex-grow-1 text-nowrap">
                    <div className="text-uppercase text-muted font-weight-bold font-size-sm mb-2">
                      Litecoin
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-warning">
                        <span>0%</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="ml-2"
                        />
                      </div>
                      <div className="font-size-xl mb-0">76</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2 px-3">
                    <Chart
                      options={chart12Options}
                      series={chart12Data}
                      type="line"
                      height={90}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
