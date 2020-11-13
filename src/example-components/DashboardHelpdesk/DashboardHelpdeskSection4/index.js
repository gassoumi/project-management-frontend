import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  IconButton,
  Box,
  Card,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import Chart from 'react-apexcharts';
import Circle from 'react-circle';
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
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '70%'
      }
    },
    stroke: {
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e',
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

  const chart54Options = {
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
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
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
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
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
  const chart54Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];

  const chart37Options = {
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
  const chart37Data = [
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
            <div className="card-header pr-2">
              <div className="card-header--title py-2 font-size-lg font-weight-bold">
                Top grossing products
              </div>
              <Box className="card-header--actions">
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="mr-2 rounded-sm">
                    <FontAwesomeIcon icon={['far', 'lightbulb']} />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
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
            <div className="divider bg-warning" />
            <div className="text-uppercase px-3 pt-3 pb-1 text-black-50">
              Top sellers
            </div>
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                        progress={63} // Number: Update to change the progress and percentage.
                        progressColor="#f83245" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={587}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-danger pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                        progress={91} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shawn Galloway
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={76} // Number: Update to change the progress and percentage.
                        progressColor="1bc943" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Latisha Allison
                        </a>
                        <span className="text-black-50 d-block">
                          UX Designer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={762}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={49} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Lilly-Mae White
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={5743}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-warning pl-1">
                        <FontAwesomeIcon
                          icon={['far', 'dot-circle']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={87} // Number: Update to change the progress and percentage.
                        progressColor="#5383ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Julie Prosser
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={46} // Number: Update to change the progress and percentage.
                        progressColor="#f4772e" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Amin Hamer
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={1587}
                          duration={6}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <span className="text-danger pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" variant="contained" color="primary">
                <span className="btn-wrapper--label">All products</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header pr-2">
              <div className="card-header--title py-2 font-size-lg font-weight-bold">
                Top sellers
              </div>
              <div className="card-header--actions">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mr-3">
                  View more
                </Button>
              </div>
            </div>
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
                options={chart37Options}
                series={chart37Data}
                type="bar"
                height={132}
              />
            </div>
            <div className="divider mt-2" />
            <div className="text-uppercase px-3 pt-3 pb-1 text-black-50">
              Top sellers
            </div>
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={83.2} // Number: Update to change the progress and percentage.
                        progressColor="#f83245" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$168</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={587}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-danger pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={54.2} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shawn Galloway
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$567</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={73.8} // Number: Update to change the progress and percentage.
                        progressColor="#1bc943" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Latisha Allison
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$937</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={762}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={83.7} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Lilly-Mae White
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$367</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={5743}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-warning pl-2">
                        <FontAwesomeIcon
                          icon={['far', 'dot-circle']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={87.9} // Number: Update to change the progress and percentage.
                        progressColor="#edeef1" // String: Color of "progress" portion of circle.
                        bgColor="#5383ff" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Julie Prosser
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$283</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={46} // Number: Update to change the progress and percentage.
                        progressColor="#f4772e" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Amin Hamer
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$793</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={1587}
                          duration={6}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <span className="text-danger pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" color="primary" variant="contained">
                <span className="btn-wrapper--label">View details</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Weekly Sales
              </h6>
              <p className="text-black-50 mb-0">
                Reports for what we sold this week.
              </p>
            </div>
            <div>
              <Chart
                options={chart54Options}
                series={chart54Data}
                type="area"
                height={313}
              />
            </div>
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Izabela Rodriquez
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar6} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Autumn Ballard
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar7} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Niyah Crossley
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Caspar Hough
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" color="primary" variant="contained">
                <span className="btn-wrapper--label">View all employees</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
