import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button
} from '@material-ui/core';

import Chart from 'react-apexcharts';
import Circle from 'react-circle';

export default function LivePreviewExample() {
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
  return (
    <Fragment>
      <Grid container spacing={4}>
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
                height={250}
              />
            </div>

            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sm={6}
                className="d-flex justify-content-center">
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
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className="d-flex justify-content-center">
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
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box text-center mb-4">
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
                height={300}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
