import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Badge,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

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

  const chart24Options = {
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
        columnWidth: '65%'
      }
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#7a7b97', 'rgba(122, 123, 151, 0.15)'],
    fill: {
      opacity: 1
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
    legend: {
      show: false
    }
  };
  const chart24Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              height={250}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title py-2 font-size-lg">
                Tasks for today
              </div>
              <div className="card-header--actions">
                <Box>
                  <Button variant="outlined" color="primary" size="small">
                    Actions
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </Button>
                </Box>
              </div>
            </div>
            <div className="bg-composed-wrapper bg-midnight-bloom border-0 text-center rounded-sm m-2">
              <div className="bg-composed-img-3 bg-composed-wrapper--image"></div>
              <div className="bg-composed-wrapper--content text-light px-2 py-4">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Notifications
                </h4>
                <p className="opacity-8 mb-0">
                  You have <b className="text-success">472</b> new messages
                </p>
              </div>
            </div>
            <div className="mx-2">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}>
                <Tab className="py-3" label="Timeline" />
                <Tab className="py-3" label="Tasks" />
                <Tab className="py-3" label="Reports" />
              </Tabs>
            </div>
            <div className="height-280">
              <PerfectScrollbar>
                <TabPanel value={value} index={0}>
                  <div className="timeline-list timeline-list-offset timeline-list-offset-dot">
                    <div className="timeline-item">
                      <div className="timeline-item-offset">9:25</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon"></div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1991
                        </h4>
                        <p>
                          The World Wide Web goes live with its first web page.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">9:25</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon"></div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Java exam day
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                        <div className="avatar-wrapper-overlap mt-2 mb-1">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">9:25</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon"></div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Business investor meeting
                        </h4>
                        <p>
                          Mosaic, the first graphical browser, is introduced to
                          the average consumer.
                        </p>
                        <div className="mt-3">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded mr-3 shadow-sm"
                              src={people1}
                              width="70"
                            />
                          </a>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded shadow-sm"
                              src={people3}
                              width="70"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">9:25</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon"></div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Learning round table gathering
                        </h4>
                        <p>First ever iPod launches.</p>
                        <div className="mt-2">
                          <Button
                            size="small"
                            variant="contained"
                            color="primary">
                            Submit Report
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">9:25</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon"></div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          2003
                        </h4>
                        <p>MySpace becomes the most popular social network.</p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="text-center my-2">
                    <div className="avatar-icon-wrapper rounded-circle m-0">
                      <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="d-flex align-self-center display-3"
                        />
                      </div>
                    </div>
                    <h6 className="font-weight-bold font-size-lg mb-1 mt-4 text-black">
                      Incoming messages
                    </h6>
                    <p className="text-black-50 mb-0">
                      You have pending actions to take care of.
                    </p>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="text-center text-black font-size-lg pb-1 font-weight-bold">
                    Total Sales
                    <small className="d-block text-black-50">
                      Total performance for selected period
                    </small>
                  </div>
                  <div className="px-2 pb-3 pt-2">
                    <Chart
                      options={chart24Options}
                      series={chart24Data}
                      type="bar"
                      height={148}
                    />
                  </div>
                </TabPanel>
              </PerfectScrollbar>
            </div>
            <Divider />
            <div className="text-center py-3">
              <Badge
                color="error"
                variant="dot"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}>
                <Button color="primary" variant="contained" className="px-4">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </Badge>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
