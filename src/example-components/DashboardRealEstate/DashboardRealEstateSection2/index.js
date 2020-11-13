import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  IconButton,
  Box,
  Checkbox,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import Circle from 'react-circle';
import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

import { Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  const chart39Options = {
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
      enabled: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '95%'
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      opacity: 1
    },
    colors: ['#3c44b1', 'rgba(60, 68, 177, 0.35)'],
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
  const chart39Data = [
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
        <Grid item xs={12} lg={7}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Tables</small>
                <b>This table card has custom content</b>
              </div>
              <Box className="card-header--actions">
                <IconButton
                  size="small"
                  color="primary"
                  className="text-primary"
                  title="View details">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="font-size-lg"
                  />
                </IconButton>
              </Box>
            </div>
            <CardContent className="p-0">
              <div className="table-responsive">
                <table className="table table-striped table-hover mb-0">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ width: '40%' }}>Employee</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
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
                      </td>
                      <td className="text-center">
                        <div className="h-auto py-0 px-3 badge badge-warning">
                          Pending
                        </div>
                      </td>
                      <td className="text-center">
                        <Box>
                          <IconButton color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                          </IconButton>
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Avatar alt="..." src={avatar1} className="mr-2" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Beck Simpson
                            </a>
                            <span className="text-black-50 d-block">
                              Frontend Developer
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-success h-auto py-0 px-3">
                          Completed
                        </div>
                      </td>
                      <td className="text-center">
                        <Box>
                          <IconButton color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                          </IconButton>
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Avatar alt="..." src={avatar3} className="mr-2" />
                          <div>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Regan Norris
                            </a>
                            <span className="text-black-50 d-block">
                              Senior Project Manager
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="h-auto py-0 px-3 badge badge-danger">
                          Declined
                        </div>
                      </td>
                      <td className="text-center">
                        <Box>
                          <IconButton color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                          </IconButton>
                        </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <Card className="card-box mb-4 pt-4">
            <div className="card-tr-actions">
              <Checkbox className="p-0" />
            </div>
            <div className="d-flex align-items-center px-4 mb-3">
              <div className="avatar-icon-wrapper rounded mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar1} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Kate Winchester
                </a>
                <span className="text-black-50 d-block pb-1">
                  Freelance Designer, Mutual Inc.
                </span>
                <div className="d-flex align-items-center pt-2">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="mr-3">
                    Chat
                  </Button>
                  <Button size="small" variant="outlined" color="secondary">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">russotry@russo.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Project Manager</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">San Francisco, USA</span>
              </div>
            </div>
            <div className="d-flex flex-wrap mb-1 mx-2">
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient text-white bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold">Projects</div>
                    <div className="font-size-sm mb-1 opacity-8">
                      Manage servers
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient text-white bg-royal text-left px-4 py-3 w-100 rounded-lg">
                  <div>
                    <Layers className="h1 d-block my-2 text-white" />
                    <div className="font-weight-bold">Tasks</div>
                    <div className="font-size-sm mb-1 opacity-8">
                      Pending items
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4">
            <div className="card-header pr-2">
              <div className="card-header--title py-2 font-size-lg font-weight-bold">
                Portfolio performance
              </div>
              <Box className="card-header--actions">
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="mr-2 rounded-sm">
                    <FontAwesomeIcon icon={['far', 'lightbulb']} />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
            <Card className="card-box rounded-sm p-3 mt-4 mx-4">
              <div className="d-flex align-items-center">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={80} // Number: Defines the size of the circle.
                  lineWidth={26} // Number: Defines the thickness of the circle's stroke.
                  progress={74} // Number: Update to change the progress and percentage.
                  progressColor="#1bc943" // String: Color of "progress" portion of circle.
                  bgColor="#edeef1" // String: Color of "empty" portion of circle.
                  textColor="#1bc943" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }}
                  roundedStroke={true} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
                <div className="pl-3">
                  <div className="text-black-50">Stocks trading</div>
                  <div className="font-weight-bold display-4 py-1 text-success">
                    $
                    <span>
                      <CountUp
                        start={0}
                        end={23.874}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </div>
                  <div className="text-black-50 font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-up']}
                      className="font-size-sm pr-1"
                    />
                    15% increase compared to 2020
                  </div>
                </div>
              </div>
            </Card>
            <Card className="card-box rounded-sm text-danger p-3 mx-4 my-4">
              <div className="d-flex align-items-center">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={84} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                  progress={35} // Number: Update to change the progress and percentage.
                  progressColor="#f83245" // String: Color of "progress" portion of circle.
                  bgColor="#e8bbbf" // String: Color of "empty" portion of circle.
                  textColor="#f83245" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
                <div className="pl-3">
                  <div className="text-black-50">Bonds investments</div>
                  <div className="font-weight-bold display-4 py-1">
                    $
                    <span>
                      <CountUp
                        start={0}
                        end={284}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </span>
                  </div>
                  <div className="opacity-7 font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="font-size-sm pr-1"
                    />
                    43% lost last quarter
                  </div>
                </div>
              </div>
            </Card>
            <Card className="card-box rounded-sm p-3 mx-4">
              <div className="d-flex align-items-center">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={84} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                  progress={52} // Number: Update to change the progress and percentage.
                  progressColor="#4191ff" // String: Color of "progress" portion of circle.
                  bgColor="#edeef1" // String: Color of "empty" portion of circle.
                  textColor="#4191ff" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
                <div className="pl-3">
                  <div className="text-black-50">Trading overview</div>
                  <div className="font-weight-bold text-first display-4 py-1">
                    $
                    <span>
                      <CountUp
                        start={0}
                        end={75.326}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </div>
                  <div className="opacity-7 font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-up']}
                      className="font-size-sm pr-1"
                    />
                    22% more profit this year
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center text-black font-size-xl py-3 font-weight-bold">
              Total Sales
              <small className="d-block text-black-50">
                Total performance for selected period
              </small>
            </div>
            <div className="p-1">
              <Chart
                options={chart39Options}
                series={chart39Data}
                type="bar"
                height={175}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
