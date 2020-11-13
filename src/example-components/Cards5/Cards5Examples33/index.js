import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  Box,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import CountUp from 'react-countup';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                Latest issues
              </h4>
            </div>
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <Settings className="h1 d-block mr-3 text-warning" />
                  <div>
                    <b>Reports</b>
                    <div className="text-black-50">Monthly sales reports</div>
                  </div>
                </div>
                <div className="font-weight-bold text-danger font-size-lg">
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
                  <Users className="h1 d-block mr-3 text-danger" />
                  <div>
                    <b>Sales</b>
                    <div className="text-black-50">
                      Total average weekly report
                    </div>
                  </div>
                </div>
                <div className="font-weight-bold text-warning font-size-lg">
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
        <Grid item xs={12} lg={6}>
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
                    <Avatar alt="..." src={avatar1} className="mr-2" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Isaiah Ruiz
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Web Developer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="font-weight-bold text-success font-size-lg pr-2">
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
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-down']}
                    className="font-size-sm text-success opacity-5"
                  />
                </div>
              </div>
              <Divider className="my-3" />
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
                    <Avatar alt="..." src={avatar3} className="mr-2" />
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Adyan Sosa
                      </a>
                      <span className="text-black-50 d-block">
                        User Experience Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="font-weight-bold text-warning font-size-lg pr-2">
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
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="font-size-sm text-warning opacity-5"
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
    </Fragment>
  );
}
