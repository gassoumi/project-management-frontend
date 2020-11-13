import React, { Fragment } from 'react';

import {
  Grid,
  Avatar,
  IconButton,
  Checkbox,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
  Divider
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import CountUp from 'react-countup';

import { Settings, Briefcase, Bell, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} ml={6} lg={8}>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <div className="p-4">
                  <div className="divider-v divider-v-lg d-none d-xl-block" />
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <b>Reports</b>
                          <div className="text-black-50">
                            Monthly sales reports
                          </div>
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
                      <Divider className="my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <b>User</b>
                          <div className="text-black-50">
                            Visitors last week
                          </div>
                        </div>
                        <div className="font-weight-bold text-success font-size-xl">
                          <CountUp
                            start={0}
                            end={987}
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
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="p-4">
                  <div className="divider-v divider-v-lg d-none d-xl-block" />
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <b>Stats</b>
                          <div className="text-black-50">
                            Last month targets
                          </div>
                        </div>
                        <div className="font-weight-bold text-warning font-size-xl">
                          $1,23M
                        </div>
                      </div>
                      <Divider className="my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <b>Payments</b>
                          <div className="text-black-50">Week's expenses</div>
                        </div>
                        <div className="font-weight-bold text-danger font-size-xl">
                          - $123,305
                        </div>
                      </div>
                      <Divider className="my-3" />
                      <div className="d-flex align-items-center justify-content-between">
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
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#32</span> Global
                competition
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <AvatarGroup>
                  <Avatar alt="..." src={avatar1} />
                  <Avatar alt="..." src={avatar2} />
                  <Avatar alt="..." src={avatar3} />
                  <Avatar alt="..." src={avatar4} />
                  <Tooltip title="Shanelle Wynn • Beck Simpson">
                    <Avatar>+2</Avatar>
                  </Tooltip>
                </AvatarGroup>
                <Tooltip arrow title="View All Participants">
                  <IconButton color="primary" className="ml-3">
                    <AddCircleTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <Grid container spacing={4}>
                <Grid item lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item lg={4} md={6}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4} className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-danger">-12</span>
                    </div>
                    <LinearProgress variant="determinate" value={67} />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className="card-box mb-4 d-flex flex-row flex-wrap justify-content-center">
            <div className="py-4 px-5 d-flex align-items-center">
              <Bell className="d-50 text-dark opacity-2 mr-3" />
              <div>
                <span className="d-block opacity-7">Expenses</span>
                <span className="font-weight-bold font-size-lg text-danger">
                  <small className="opacity-6 pr-1">$</small>1,693
                </span>
              </div>
            </div>
            <div className="py-4 px-5 d-flex align-items-center">
              <Settings className="d-50 text-dark opacity-2 mr-3" />
              <div>
                <span className="d-block opacity-7">Revenue</span>
                <span className="font-weight-bold font-size-lg">
                  <small className="opacity-6 pr-1">$</small>54,233
                </span>
              </div>
            </div>
            <div className="py-4 px-5 d-flex align-items-center">
              <Briefcase className="d-50 text-dark opacity-2 mr-3" />
              <div>
                <span className="d-block opacity-7">Income</span>
                <span className="font-weight-bold font-size-lg">
                  <small className="opacity-6 pr-1">$</small>3,217
                </span>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} ml={6} lg={4}>
          <Card className="card-box mb-4 pt-4">
            <div className="card-tr-actions">
              <Checkbox />
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
                  className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                  <div>
                    <Settings className="h1 d-block my-2 text-warning" />
                    <div className="font-weight-bold">Reports</div>
                    <div className="font-size-sm text-capitalize mb-1 opacity-8">
                      Stats
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient text-white bg-midnight-bloom text-left px-4 py-3 w-100 rounded-lg">
                  <div>
                    <Briefcase className="h1 d-block my-2 text-success" />
                    <div className="font-weight-bold">Statistics</div>
                    <div className="font-size-sm text-capitalize mb-1 opacity-8">
                      Customers
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient text-white bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold">Projects</div>
                    <div className="font-size-sm text-capitalize mb-1 opacity-8">
                      Servers
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
                    <div className="font-size-sm text-capitalize mb-1 opacity-8">
                      Items
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
