import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  Box,
  Typography,
  Tabs,
  Tab,
  Badge,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

import { Briefcase, Layers } from 'react-feather';

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
  const chart16Options = {
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
  const chart16Data = [
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
        <Grid item xs={12} lg={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4">
                <div className="card-header">
                  <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                    Reports
                  </h4>
                </div>
                <CardContent className="p-3">
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Stats</b>
                      <div className="text-black-50">Last month targets</div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      $1,23M
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Payments</b>
                      <div className="text-black-50">Week's expenses</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      - $123,305
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Orders</b>
                      <div className="text-black-50">
                        Total products ordered
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      65
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4">
                <div className="card-header">
                  <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                    Statistics
                  </h4>
                </div>
                <CardContent className="p-3">
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Reports</b>
                      <div className="text-black-50">Monthly sales reports</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      <CountUp
                        start={0}
                        end={2.363}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>User</b>
                      <div className="text-black-50">Visitors last week</div>
                    </div>
                    <div className="font-weight-bold text-success font-size-xl">
                      <CountUp
                        start={0}
                        end={584}
                        duration={6}
                        deplay={2}
                        separator=""
                        prefix="+"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="d-flex align-items-center justify-content-between p-3">
                    <div>
                      <b>Sales</b>
                      <div className="text-black-50">
                        Total average weekly report
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      <CountUp
                        start={0}
                        end={483}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4">
                <div className="card-header">
                  <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                    Latest issues
                  </h4>
                </div>
                <CardContent className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <Briefcase className="h1 d-block mr-3 text-success" />
                      <div>
                        <b>User</b>
                        <div className="text-black-50">Visitors last week</div>
                      </div>
                    </div>
                    <div className="font-weight-bold text-success font-size-lg">
                      <CountUp
                        start={0}
                        end={643}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <Layers className="h1 d-block mr-3 text-first" />
                      <div>
                        <b>Stats</b>
                        <div className="text-black-50">Last month targets</div>
                      </div>
                    </div>
                    <div className="font-weight-bold text-first font-size-lg">
                      {' '}
                      $1,23M
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="card-box mb-4">
                <div className="card-header">
                  <div className="card-header--title">
                    <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                      Users list
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
                <CardContent className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar2} className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Inez Conley
                          </a>
                          <span className="text-black-50 d-block">
                            Project Manager
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="font-weight-bold text-danger font-size-lg pr-2">
                        <CountUp
                          start={0}
                          end={584}
                          duration={6}
                          deplay={2}
                          separator=""
                          prefix="+"
                          decimals={0}
                          decimal=","
                        />
                      </div>
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="font-size-sm text-danger opacity-5"
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar4} className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Beck Simpson
                          </a>
                          <span className="text-black-50 d-block">
                            Senior Consultant
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="font-weight-bold text-first font-size-lg pr-2">
                        {' '}
                        $12,23M
                      </div>
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="font-size-sm text-first opacity-5"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
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
                      options={chart16Options}
                      series={chart16Data}
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
