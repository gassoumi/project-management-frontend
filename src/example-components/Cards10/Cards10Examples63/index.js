import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Avatar, Box, Checkbox, Card, Button } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <div className="bg-composed-wrapper bg-midnight-bloom border-0">
                <div className="bg-composed-img-2 bg-composed-wrapper--image rounded" />
                <div className="bg-composed-wrapper--content text-light p-5">
                  <h4 className="font-size-xl font-weight-bold mb-2">
                    Knowledge Base Software
                  </h4>
                  <p className="opacity-6 font-size-md mb-3">
                    {' '}
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.{' '}
                  </p>
                  <Button color="secondary" variant="contained">
                    <small className="font-weight-bold">Contact us</small>
                  </Button>
                </div>
              </div>
            </div>
            <div className="card-body text-center card-body-avatar">
              <div className="avatar-icon-wrapper d-120">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table-alternate text-nowrap text-left mb-0 table table-borderless table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th className="pt-0" style={{ width: '40%' }}>
                        Employee
                      </th>
                      <th className="pt-0 text-center">Status</th>
                      <th className="pt-0 text-center">Actions</th>
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
                        <Button size="small" variant="outlined" color="primary">
                          Chat
                        </Button>
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
                        <Button size="small" variant="outlined" color="primary">
                          Chat
                        </Button>
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
                        <Button size="small" variant="outlined" color="primary">
                          Chat
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-top">
                <div className="badge badge-info">NEW</div>
              </div>
              <div className="bg-composed-wrapper bg-vicious-stance border-0">
                <div className="bg-composed-img-3 bg-composed-wrapper--image" />
                <div className="bg-composed-wrapper--content text-center text-light p-5">
                  <h1 className="display-3 font-weight-bold mb-0">
                    Knowledgebase
                  </h1>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
              <Box className="pb-4">
                <Button size="large" color="secondary" variant="contained">
                  Send us a message
                </Button>
              </Box>
              <Grid container spacing={4}>
                <Grid xs={12} sm={4} item>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-warning"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4} item>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'lemon']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$3,586</b>
                      <span className="text-black-50 d-block">sales</span>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4} item>
                  <div className="bg-secondary p-3 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="table-responsive">
                <table className="table text-left mt-4 text-nowrap table-alternate  mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
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
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$18,386</span>
                      </td>
                      <td className="text-center">
                        <span className="text-danger font-weight-bold">
                          -6,310
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-warning">Pending</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            <CountUp
                              start={0}
                              end={584}
                              duration={6}
                              deplay={2}
                              separator=""
                              decimals={0}
                              decimal=","
                            />
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-down']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
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
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$6,356</span>
                      </td>
                      <td className="text-center">
                        <span className="text-warning">-374</span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-first">Waiting</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
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
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <Checkbox className="align-self-center mr-3" />
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
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$16,281</span>
                      </td>
                      <td className="text-center">
                        <span className="text-success">+684</span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-success">Done</span>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            {' '}
                            $12,23M
                          </div>
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="font-size-sm opacity-5"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
