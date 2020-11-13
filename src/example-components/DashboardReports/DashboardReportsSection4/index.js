import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Box, Badge, Card } from '@material-ui/core';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  const chart41Options = {
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
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    fill: {
      opacity: 0.85,
      colors: ['#f4772e', '#4191ff']
    },
    colors: ['#f4772e', '#4191ff'],
    legend: {
      show: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
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
  const chart41Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  const chart34Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      },
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '50%'
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#f83245', '#1bc943'],
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      '1 Sep',
      '2 Sep',
      '3 Sep',
      '4 Sep',
      '5 Sep',
      '6 Sep',
      '7 Sep',
      '8 Sep',
      '9 Sep',
      '10 Sep',
      '11 Sep'
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
  const chart34Data = [
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
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4 px-4 pt-4 text-center">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-header-alt">
              <div className="font-weight-bold font-size-lg mb-0 text-black">
                Financial year
              </div>
              <p className="text-black-50">Expenses statistics to date</p>
            </div>
            <div className="divider my-4" />
            <h3 className="mb-0 display-3 mt-1 font-weight-bold">
              $
              <span className="pr-1">
                <CountUp
                  start={0}
                  end={458.695}
                  duration={4}
                  separator=""
                  delay={3}
                  decimals={3}
                  decimal=","
                  prefix=""
                  suffix=""
                />
              </span>
            </h3>
            <div className="divider my-4" />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <span className="opacity-6 pb-2">Current month</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6 pr-1">$</small>
                    46,362
                  </span>
                  <Badge color="secondary" className="ml-2 text-danger">
                    -8%
                  </Badge>
                </div>
              </Grid>
              <Grid item xs={6}>
                <span className="opacity-6 pb-2">Last year</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6 pr-1">$</small>
                    34,546
                  </span>
                  <Badge color="secondary" className="text-success ml-2">
                    +13%
                  </Badge>
                </div>
              </Grid>
            </Grid>
            <div className="font-weight-bold font-size-lg mt-4 mb-3 text-black">
              Monthly report
            </div>
            <Chart
              options={chart41Options}
              series={chart41Data}
              type="bar"
              height={280}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box p-4 text-center mb-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <h6 className="text-uppercase font-weight-bold mb-1 text-black">
              Visitors locations
            </h6>

            <div className="py-3">
              <Chart
                options={chart34Options}
                series={chart34Data}
                type="bar"
                height={325}
              />
            </div>

            <Grid container spacing={4}>
              <Grid item xs={6} className="d-flex justify-content-center">
                <div className="divider-v divider-v-lg" />
                <div>
                  <div className="d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                    <span className="badge-circle mr-2 badge badge-danger">
                      total
                    </span>
                    <span>Gross revenue</span>
                  </div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={160} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={34.8} // Number: Update to change the progress and percentage.
                    progressColor="#1bc943" // String: Color of "progress" portion of circle.
                    bgColor="#e8e9ef" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '60px',
                      fontWeight: 'bold'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="d-flex justify-content-center">
                <div>
                  <div className="d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                    <span className="badge-circle mr-2 badge badge-success">
                      available
                    </span>
                    <span>Net Revenue</span>
                  </div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={160} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={65.3} // Number: Update to change the progress and percentage.
                    progressColor="#f83245" // String: Color of "progress" portion of circle.
                    bgColor="#e8e9ef" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '60px',
                      fontWeight: 'bold'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
