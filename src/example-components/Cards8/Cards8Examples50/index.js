import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Avatar, IconButton, Box, Badge, Card } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

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

  const chart42Options = {
    chart: {
      toolbar: {
        show: true
      },
      sparkline: {
        enabled: false
      },
      shadow: {
        enabled: false,
        color: '#bbb',
        top: 3,
        left: 2,
        blur: 3,
        opacity: 1
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },
    markers: {
      size: 6,
      opacity: 0.9,
      colors: ['#FFA41B'],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 10
      }
    },
    grid: {
      borderColor: 'rgba(125, 138, 156, 0.4)'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FFA41B'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    colors: ['#1bc943'],
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001'
      ]
    }
  };
  const chart42Data = [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
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
              height={365}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4 p-4 text-center">
            <Chart
              options={chart42Options}
              series={chart42Data}
              type="line"
              height={320}
            />

            <Grid container spacing={4} className="mb-3">
              <Grid item xs={12} sm={6}>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={180} // Number: Defines the size of the circle.
                  lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                  progress={32.51} // Number: Update to change the progress and percentage.
                  progressColor="#11c5db" // String: Color of "progress" portion of circle.
                  bgColor="#e5e6ef" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={180} // Number: Defines the size of the circle.
                  lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                  progress={54.23} // Number: Update to change the progress and percentage.
                  progressColor="#f83245" // String: Color of "progress" portion of circle.
                  bgColor="#e5e6ef" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={12} xl={6}>
                <Card className="rounded-lg p-4 text-left bg-secondary">
                  <Box className="card-tr-actions">
                    <IconButton color="secondary" className="font-size-xl">
                      <FontAwesomeIcon
                        icon={['fas', 'ellipsis-h']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Box>
                  <div className="d-flex align-items-center mb-4">
                    <Avatar alt="..." src={avatar2} className="mr-2" />
                    <div>
                      <div className="font-weight-bold text-dark text-uppercase font-size-sm opacity-7 pb-1">
                        Top customer
                      </div>
                      <span className="text-black font-size-lg d-block">
                        Demi-Lee Bouvet
                      </span>
                    </div>
                  </div>
                  <div className="align-bottom">
                    <span className="font-size-xl font-weight-bold">1748</span>
                    <span className="text-dark font-weight-bold font-size-sm opacity-7">
                      {' '}
                      / purchases
                    </span>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={12} xl={6}>
                <Card className="rounded-lg p-4 text-left bg-secondary">
                  <Box className="card-tr-actions">
                    <IconButton color="secondary" className="font-size-xl">
                      <FontAwesomeIcon
                        icon={['fas', 'ellipsis-h']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Box>
                  <div className="d-flex align-items-center mb-4">
                    <Avatar alt="..." src={avatar1} className="mr-2" />
                    <div>
                      <div className="font-weight-bold text-dark text-uppercase font-size-sm opacity-7 pb-1">
                        Top client
                      </div>
                      <span className="text-black font-size-lg d-block">
                        Brayden Ball
                      </span>
                    </div>
                  </div>
                  <div className="align-bottom">
                    <span className="font-size-xl font-weight-bold">456</span>
                    <span className="text-dark font-weight-bold font-size-sm opacity-7">
                      {' '}
                      / visits
                    </span>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
