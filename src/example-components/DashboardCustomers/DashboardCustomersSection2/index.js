import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

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
    stroke: {
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    colors: ['#f4772e'],
    fill: {
      color: '#f4772e'
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

  const chart18Options = {
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
        endingShape: 'rounded',
        columnWidth: '70%'
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#3c44b1', 'rgba(122, 123, 151, 0.4)'],
    fill: {
      opacity: 1
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
      'Sunday'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart18Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.1, 2.6, 1.2]
    }
  ];

  const chart19Options = {
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
      curve: 'smooth',
      width: 2
    },
    colors: ['#1bc943'],
    fill: {
      color: '#1bc943',
      opacity: 0.3
    },
    legend: {
      show: false
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
  const chart19Data = [
    {
      name: 'New accounts per day',
      data: [47, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <div className="card-content-overlay text-center py-4">
              <div className="d-60 rounded-circle bg-neutral-warning text-warning mx-auto text-center">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="font-size-xxl"
                />
              </div>
              <div className="font-weight-bold display-2 mt-3">45,765</div>
              <div className="text-black-50 font-size-lg pb-3">
                Laptops sales
              </div>
              <div className="text-success font-weight-bold">+ 145%</div>
            </div>
            <div className="card-chart-overlay">
              <div>
                <Chart
                  options={chart17Options}
                  series={chart17Data}
                  type="area"
                  height={150}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <div className="card-content-overlay text-center py-4">
              <div className="d-60 rounded-circle bg-neutral-first text-first mx-auto text-center">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-xxl"
                />
              </div>
              <div className="font-weight-bold display-2 mt-3">
                <CountUp
                  start={0}
                  end={568.764}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={3}
                  decimal=","
                />
              </div>
              <div className="text-black-50 font-size-lg pb-3">Total sales</div>
              <div className="text-black">
                Down by <b className="text-danger">23%</b> last quarter
              </div>
            </div>
            <div className="card-chart-overlay opacity-1">
              <Chart
                options={chart18Options}
                series={chart18Data}
                type="bar"
                height={211}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box mb-4">
            <div className="card-content-overlay text-center py-4">
              <div className="d-50 rounded bg-success text-white mx-auto text-center">
                <FontAwesomeIcon
                  icon={['far', 'user']}
                  className="font-size-lg"
                />
              </div>
              <div className="font-weight-bold display-2 mt-3">
                <CountUp
                  start={0}
                  end={568.764}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={3}
                  decimal=","
                />
              </div>
              <div className="text-black-50 font-size-lg pb-3">
                New accounts
              </div>
              <span className="h-auto py-1 font-size-sm px-4 badge badge-warning">
                24% down
              </span>
            </div>
            <div className="card-chart-overlay opacity-2">
              <Chart
                options={chart19Options}
                series={chart19Data}
                type="area"
                height={196}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
