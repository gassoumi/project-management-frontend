import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  const chart2Options = {
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
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
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
  const chart2Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const chart3Options = {
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
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '90%'
      }
    },
    colors: ['#4191ff', 'rgba(65, 145, 255, 0.35)'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
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
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
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
  const chart3Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const chart4Options = {
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
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: 'rounded',
        columnWidth: '98%'
      }
    },
    colors: ['#1bc943', 'rgba(27, 201, 67, 0.35)'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
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
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
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
  const chart4Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">Laptops sales</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['far', 'dot-circle']}
                  className="text-warning mr-2"
                />
                $589
                <span className="text-success pl-2 font-size-md">+ 54</span>
              </div>
            </div>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="area"
              height={150}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">Stacked columns</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-2"
                />
                $
                <span>
                  <CountUp
                    start={0}
                    end={687}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-danger pl-2 font-size-md">- 20%</span>
              </div>
            </div>
            <div className="p-1">
              <Chart
                options={chart3Options}
                series={chart3Data}
                type="bar"
                height={142}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">Horizontal bars</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-danger mr-2"
                />
                $589
                <span className="text-info pl-2 font-size-md">+ 56</span>
              </div>
            </div>
            <div className="p-1">
              <Chart
                options={chart4Options}
                series={chart4Data}
                type="bar"
                height={142}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
