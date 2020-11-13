import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
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

  const chart20Options = {
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
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#f4772e',
      width: 0
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
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
  const chart20Data = [
    {
      name: 'Orders',
      data: [47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart21Options = {
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
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#1bc943',
      width: 3
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
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
  const chart21Data = [
    {
      name: 'Orders',
      data: [0, 10, 22, 46, 47, 26, 24, 45]
    }
  ];

  const chart22Options = {
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
    colors: ['#4191ff'],
    stroke: {
      color: '#4191ff',
      width: 3
    },
    markers: {
      size: 0
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
  const chart22Data = [
    {
      name: 'Orders',
      data: [0, 7, 18, 28, 23, 24, 65, 43]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <Card className="px-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5 flex-grow-1 text-nowrap">
                <div className="text-uppercase font-weight-bold font-size-xs mb-2">
                  Customers
                </div>
                <div className="font-weight-bold">
                  <div className="font-size-xxl mb-1">345</div>
                  <div className="text-success">
                    <span>54%</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-2 px-3">
                <Chart
                  options={chart20Options}
                  series={chart20Data}
                  type="bar"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card className="pl-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5 flex-grow-1 text-nowrap">
                <div className="text-uppercase font-weight-bold font-size-xs mb-2">
                  Orders
                </div>
                <div className="font-weight-bold">
                  <div className="font-size-xxl mb-1">54</div>
                  <div className="text-success">
                    <span>67%</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-2">
                <Chart
                  options={chart21Options}
                  series={chart21Data}
                  type="area"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card className="px-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5 flex-grow-1 text-nowrap">
                <div className="text-uppercase font-weight-bold font-size-xs mb-2">
                  Growth
                </div>
                <div className="font-weight-bold">
                  <div className="font-size-xxl mb-1">$456</div>
                  <div className="text-danger">
                    <span>32%</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-down']}
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-2 px-3">
                <Chart
                  options={chart21Options}
                  series={chart21Data}
                  type="bar"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card className="pl-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5 flex-grow-1 text-nowrap">
                <div className="text-uppercase font-weight-bold font-size-xs mb-2">
                  Expenses
                </div>
                <div className="font-weight-bold">
                  <div className="font-size-xxl mb-1">$674</div>
                  <div className="text-danger">
                    <span>21%</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-down']}
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-2">
                <Chart
                  options={chart22Options}
                  series={chart22Data}
                  type="area"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
