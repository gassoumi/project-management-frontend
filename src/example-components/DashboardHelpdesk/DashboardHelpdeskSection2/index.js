import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  const chart46Options = {
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
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#1bc943',
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
    colors: ['#1bc943'],
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
  const chart46Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid item xs={6} className="d-flex align-items-center">
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
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress color="primary" value={52} />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid item xs={6} className="d-flex align-items-center">
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
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="primary"
                          value={38}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid item xs={6} className="d-flex align-items-center">
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
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={34}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid item xs={6} className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Gordon Barnett
                        </a>
                        <span className="text-black-50 d-block">
                          UI Developer, UiFort
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={683}
                                duration={6}
                                deplay={2}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={48}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Card>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card className="card-box card-box-border-bottom border-danger card-shadow-danger mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-3">
                    <div className="text-muted text-uppercase pb-2 font-size-sm">
                      Accounts
                    </div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="font-size-lg mr-2 text-success"
                      />
                      <span>
                        <CountUp
                          start={0}
                          end={34}
                          duration={6}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <small className="opacity-6 pl-1 text-black-50">%</small>
                    </h3>
                  </div>
                  <div className="pr-3">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="3s" //String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size={60} // Number: Defines the size of the circle.
                      lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                      progress={34} // Number: Update to change the progress and percentage.
                      progressColor="#f83245" // String: Color of "progress" portion of circle.
                      bgColor="rgba(248, 50, 69, 0.15)" // String: Color of "empty" portion of circle.
                      textColor="#f83245" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true}
                      textStyle={{
                        fontSize: '60px',
                        fontWeight: 'bold'
                      }} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                    />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="card-box card-box-border-bottom border-success card-shadow-success mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-3">
                    <div className="text-muted text-uppercase pb-2 font-size-sm">
                      Subscriptions
                    </div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <span className="font-size-lg mr-2 text-success font-weight-bold">
                        +
                      </span>
                      <CountUp start={0} end={35} />
                      <small className="opacity-6 pl-1 text-black-50">
                        sales
                      </small>
                    </h3>
                  </div>
                  <div className="pr-3">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="3s" //String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size={60} // Number: Defines the size of the circle.
                      lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                      progress={43} // Number: Update to change the progress and percentage.
                      progressColor="#1bc943" // String: Color of "progress" portion of circle.
                      bgColor="rgba(27, 201, 67, 0.15)" // String: Color of "empty" portion of circle.
                      textColor="#1bc943" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true}
                      textStyle={{
                        fontSize: '60px',
                        fontWeight: 'bold'
                      }} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Weekly Sales
                </h6>
                <p className="text-black-50 mb-0">
                  Reports for what we sold this week.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton
                  color="primary"
                  className="text-second font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </IconButton>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <div className="px-5 pt-5 pb-3">
              <h1 className="display-2 font-weight-bold mb-4">
                $
                <span className="pl-1">
                  <CountUp
                    start={0}
                    end={477.693}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h1>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">76%</span>
                  </div>
                  <LinearProgress
                    value={76}
                    className="mb-2"
                    color="secondary"
                  />
                  <div className="text-dark">Orders</div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">34%</span>
                  </div>
                  <LinearProgress value={34} color="primary" className="mb-2" />
                  <div className="text-dark">Deliveries</div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <span className="font-size-xl font-weight-bold">49%</span>
                  </div>
                  <LinearProgress
                    value={49}
                    color="secondary"
                    className="mb-2"
                  />
                  <div className="text-dark">Products</div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Chart
                options={chart46Options}
                series={chart46Data}
                type="area"
                height={120}
              />
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" variant="outlined" color="secondary">
                <span className="btn-wrapper--label">View complete report</span>
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
