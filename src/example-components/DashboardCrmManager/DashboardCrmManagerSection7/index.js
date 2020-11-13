import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  Box,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart17Options = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    colors: ['#f4772e'],
    fill: {
      color: '#f4772e',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart17Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const chart36Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 4
    },
    colors: ['#1bc943'],
    fill: {
      color: '1bc943',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart36Data = [
    {
      name: 'Monthly Analytics',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Last quarter report</b>
              </div>
              <div className="card-header--actions">
                <Tooltip arrow title="View details">
                  <Fab size="small" color="primary">
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                  </Fab>
                </Tooltip>
              </div>
            </div>
            <div className="pt-3">
              <Grid container spacing={4} className="mt-3 mb-2">
                <Grid item xs={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div>
                <Chart
                  options={chart17Options}
                  series={chart17Data}
                  type="area"
                  height={150}
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <Button variant="outlined" color="primary" className="mb-1">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'angle-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Users overview</b>
              </div>
              <Box className="card-header--actions">
                <Tooltip arrow title="View options">
                  <Fab color="primary" size="small">
                    <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                  </Fab>
                </Tooltip>
              </Box>
            </div>
            <CardContent className="pb-0">
              <div className="align-box-row">
                <div className="font-weight-bold">
                  <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl ">586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle align-items-center d-flex justify-content-center">
                    <AddCircleTwoToneIcon />
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-danger"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-black-50">increase this month</span>
              </div>
              <div className="mt-4">
                <Button variant="outlined" color="primary" className="mb-3">
                  <span className="btn-wrapper--label">
                    View complete report
                  </span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </Button>
              </div>
            </CardContent>
            <Chart
              options={chart36Options}
              series={chart36Data}
              type="area"
              height={172}
            />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
