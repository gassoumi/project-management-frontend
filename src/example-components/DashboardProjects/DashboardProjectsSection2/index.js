import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import Circle from 'react-circle';
import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart25Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    colors: ['#f4772e'],
    fill: {
      opacity: 1
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart25Data = [
    {
      name: 'Sales',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Projects status
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <Grid
              container
              spacing={4}
              className="text-uppercase font-size-sm my-2">
              <Grid
                item
                xs={6}
                className="d-flex align-items-center justify-content-end">
                <span>Available</span>
                <div className="badge badge-success badge-circle mx-2">
                  Completed
                </div>
              </Grid>
              <Grid item xs={6} className="d-flex align-items-center text-left">
                <span className="badge-circle mx-2 badge badge-dark">
                  total projects
                </span>
                <span>Total</span>
              </Grid>
            </Grid>
            <div className="mx-auto text-center">
              <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="3s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={176} // Number: Defines the size of the circle.
                lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                progress={65.3} // Number: Update to change the progress and percentage.
                progressColor="#070919" // String: Color of "progress" portion of circle.
                bgColor="#1bc943" // String: Color of "empty" portion of circle.
                textColor="rgba(0,0,0,.85)" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true}
                textStyle={{
                  fontSize: '80px'
                }} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
            </div>
            <Divider className="my-3" />
            <div className="text-center mb-3">
              <Button size="small" variant="contained" color="primary">
                View all projects
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={7} lg={4}>
          <Card className="card-box p-4 mb-4">
            <div className="card-header-alt d-flex justify-content-between pb-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Available storage
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="d-flex align-items-start">
              <FontAwesomeIcon
                icon={['far', 'object-group']}
                className="display-1"
              />
              <div className="flex-grow-1 pl-4">
                <div className="d-block mb-2 mt-1">
                  <b>5GB</b> used out of <b>25GB</b>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={39}
                />
              </div>
            </div>
            <small className="d-block mt-3">
              <span className="d-block pb-3">
                Get <b>1 GB</b> of free storage if you take advantage of our
                premium plans.
              </span>
              <Button color="primary" className="text-first">
                View details
              </Button>
            </small>
            <div className="rounded-sm mt-3 bg-secondary p-3 d-flex align-items-center">
              <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="3s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={84} // Number: Defines the size of the circle.
                lineWidth={26} // Number: Defines the thickness of the circle's stroke.
                progress={74} // Number: Update to change the progress and percentage.
                progressColor="#1bc943" // String: Color of "progress" portion of circle.
                bgColor="rgba(0,0,0,.25)" // String: Color of "empty" portion of circle.
                textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                textStyle={{
                  fontSize: '60px',
                  fontWeight: 'bold'
                }}
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="pl-3">
                <div className="text-black-50">Stocks trading</div>
                <div className="font-weight-bold display-4 py-1 text-success">
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
                </div>
                <div className="text-black-50 font-size-sm">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-up']}
                    className="font-size-sm pr-1"
                  />
                  15% increase this week
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-body pb-1">
              <Grid container spacing={4}>
                <Grid item sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart25Options}
                  series={chart25Data}
                  type="line"
                  height={95}
                />
              </div>
            </div>
            <Divider />
            <div className="my-2 text-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="text-danger"
              />
              <span className="text-danger px-1">15.4%</span>
              <span className="text-black-50">new sales today</span>
            </div>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">View latest sales</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
