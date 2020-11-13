import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Box,
  LinearProgress,
  Card,
  CardContent,
  Button
} from '@material-ui/core';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart6Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#4191ff'],
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chart6Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  const chart29Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4191ff', 'rgba(65, 145, 255, 0.35)'],
    fill: {
      opacity: 0.85,
      colors: ['#4191ff', 'rgba(65, 145, 255, 0.35)']
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chart29Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  Income Reports
                </h4>
              </div>
              <div className="card-header--actions">
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
            </div>
            <div className="card-body pb-1 font-weight-bold">
              <Grid container spacing={4} className="pt-3">
                <Grid item md={5}>
                  <div className="pb-4 px-3">
                    <span className="text-dark pb-4">YoY Income</span>
                    <span className="font-size-lg d-block">
                      <small>$</small> 165,239
                    </span>
                  </div>
                  <div className="pb-4 px-3">
                    <span className="text-dark pb-4">Orders Volume</span>
                    <span className="font-size-lg d-block">
                      <small>$</small> 384
                    </span>
                  </div>
                </Grid>
                <Grid item md={7}>
                  <div className="pb-4 px-3">
                    <span className="text-dark pb-4">Best Seller</span>
                    <span className="font-size-lg d-block">
                      Personal Computer
                    </span>
                  </div>
                  <div className="pb-4 px-3">
                    <span className="text-dark pb-4">Sales Target</span>
                    <span className="d-flex align-items-center font-size-lg d-block">
                      <LinearProgress
                        value={65}
                        color="secondary"
                        className="flex-grow-1"
                      />
                      <span className="pl-3">65%</span>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <Chart
                options={chart6Options}
                series={chart6Data}
                type="area"
                height={311}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  Users list
                </h4>
              </div>
              <div className="card-header--actions">
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
            </div>
            <CardContent className="p-3">
              <Chart
                options={chart29Options}
                series={chart29Data}
                type="bar"
                height={280}
              />
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="p-3">
                    <div className="mb-1 font-weight-bold">Orders</div>
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={34}
                    />
                    <div className="align-box-row progress-bar--label mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="p-3">
                    <div className="mb-1 font-weight-bold">Sales</div>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={51}
                    />
                    <div className="align-box-row progress-bar--label mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="p-3">
                    <div className="mb-1 font-weight-bold">Users</div>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={29}
                    />
                    <div className="align-box-row progress-bar--label mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="p-3">
                    <div className="mb-1 font-weight-bold">Customers</div>
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={76}
                    />
                    <div className="align-box-row progress-bar--label mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
