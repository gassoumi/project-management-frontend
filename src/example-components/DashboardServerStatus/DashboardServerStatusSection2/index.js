import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart50Options = {
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
      color: '#11c5db',
      width: 3
    },
    colors: ['#11c5db'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    markers: {
      size: 0
    },
    yaxis: {
      min: 0
    }
  };
  const chart50Data = [
    {
      name: 'Orders',
      data: [0, 10, 22, 43, 46, 26, 24, 45]
    }
  ];

  const chart51Options = {
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
      color: '#1bc943',
      width: 3
    },
    colors: ['#1bc943'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    markers: {
      size: 0
    },
    yaxis: {
      min: 0
    }
  };
  const chart51Data = [
    {
      name: 'Orders',
      data: [0, 43, 24, 56, 35, 56, 65]
    }
  ];

  const chart52Options = {
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
      width: 3
    },
    colors: ['#4191ff'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    markers: {
      size: 0
    },
    yaxis: {
      min: 0
    }
  };
  const chart52Data = [
    {
      name: 'Orders',
      data: [0, 7, 18, 28, 23, 24, 62, 43]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="pl-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-4 flex-grow-1 text-nowrap">
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
                  options={chart50Options}
                  series={chart50Data}
                  type="area"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="pl-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-4 flex-grow-1 text-nowrap">
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
              <div className="d-flex align-items-center pt-2">
                <Chart
                  options={chart51Options}
                  series={chart51Data}
                  type="area"
                  height={104}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="pl-3 pt-3 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-4 flex-grow-1 text-nowrap">
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
                  options={chart52Options}
                  series={chart52Data}
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
