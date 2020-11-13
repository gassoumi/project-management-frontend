import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';

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

  return (
    <Fragment>
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
    </Fragment>
  );
}
