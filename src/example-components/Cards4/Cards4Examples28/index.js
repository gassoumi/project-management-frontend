import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Badge,
  Card,
  CardContent,
  Button,
  Tooltip,
  TextField,
  Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Chart from 'react-apexcharts';

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
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Messenger</small>
                <b>Talking to Kate</b>
              </div>
              <div className="card-header--actions">
                <Tooltip arrow title="Send new message">
                  <Fab size="small" color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'plus']}
                      className="font-size-sm"
                    />
                  </Fab>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <div className="scroll-area shadow-overflow">
                <PerfectScrollbar>
                  <div className="chat-wrapper">
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Hello, John.</p>
                            <p>This is Kenny. How are you?</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item chat-item-reverse p-2 mb-2">
                      <div className="align-box-row flex-row-reverse">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Hey, Kate.</p>
                            <p>
                              I'm attaching the pictures you requested below:
                            </p>
                            <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                              <div>
                                <a href="#/" onClick={e => e.preventDefault()}>
                                  <img
                                    alt="..."
                                    className="img-fluid rounded m-1 shadow-sm"
                                    src={people1}
                                    width="54"
                                  />
                                </a>
                                <a href="#/" onClick={e => e.preventDefault()}>
                                  <img
                                    alt="..."
                                    className="img-fluid rounded m-1 shadow-sm"
                                    src={people2}
                                    width="54"
                                  />
                                </a>
                              </div>
                            </Card>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Thanks.</p>
                            <p>Really appreciate it!</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Bye for now, talk to you later.</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item chat-item-reverse p-2 mb-2">
                      <div className="align-box-row flex-row-reverse">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Almost forgot about your tasks.</p>
                            <p>
                              <b>Check the links below:</b>
                            </p>
                            <Card className="bg-premium-dark p-2 mt-3 mb-2">
                              <div className="text-center py-2">
                                <Tooltip arrow title="Menu Example">
                                  <IconButton
                                    color="primary"
                                    className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                    <FontAwesomeIcon icon={['fas', 'lemon']} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip arrow title="Menu Example">
                                  <IconButton
                                    color="primary"
                                    className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                    <AddCircleTwoToneIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip arrow title="Menu Example">
                                  <IconButton
                                    color="primary"
                                    className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                    <FontAwesomeIcon icon={['far', 'gem']} />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </Card>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:03 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </CardContent>
            <div className="card-footer bg-light p-4">
              <div>
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  placeholder="Write your message and hit enter to send..."
                />
              </div>
              <div className="align-box-row mt-3">
                <div className="align-items-center">
                  <Tooltip arrow title="Add audio file">
                    <IconButton color="default" className="text-success">
                      <FontAwesomeIcon
                        icon={['far', 'file-audio']}
                        className="font-size-xl"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Add video file">
                    <IconButton color="default" className="text-danger">
                      <FontAwesomeIcon
                        icon={['far', 'file-video']}
                        className="font-size-xl"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Upload Documents">
                    <IconButton color="default" className="text-info">
                      <FontAwesomeIcon
                        icon={['far', 'file-excel']}
                        className="font-size-xl"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="ml-auto">
                  <Button size="small" variant="contained" color="primary">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
