import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  Checkbox,
  Card,
  Button,
  Tooltip
} from '@material-ui/core';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import CountUp from 'react-countup';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-top">
                <div className="badge badge-info">NEW</div>
              </div>
              <div className="bg-composed-wrapper bg-vicious-stance border-0">
                <div className="bg-composed-img-3 bg-composed-wrapper--image" />
                <div className="bg-composed-wrapper--content text-center text-light p-5">
                  <h1 className="display-4 pt-3 pb-1 font-weight-bold mb-0">
                    Knowledgebase
                  </h1>
                  <p className="text-white-50 mb-3">
                    Example heading description line here...
                  </p>
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
                <table className="table table-hover table-borderless text-left text-nowrap mt-4 table-alternate mb-0">
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
                              Niyah Crossley
                            </a>
                            <span className="text-black-50 d-block">
                              Development Team Lead
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="font-weight-bold">$5,373</span>
                      </td>
                      <td className="text-center">
                        <span className="text-success">+47</span>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-danger">Failed</div>
                      </td>
                      <td className="text-right">
                        <div className="d-flex align-items-center justify-content-end">
                          <div className="font-weight-bold font-size-lg pr-2">
                            {' '}
                            $346,457
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
        <Grid item xs={12} lg={6}>
          <Card className="card-box pt-4 mb-4">
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar7} />
                  </div>
                </div>
              </div>
              <div>
                <span className="my-2 text-success font-size-md px-4 py-1 h-auto badge badge-neutral-success">
                  Online
                </span>
              </div>
              <h3 className="font-weight-bold mb-1 mt-3">Lacie-Mae Mckay</h3>
              <p className="mb-0 text-black-50">
                Senior Frontend Developer at <b>Google Inc.</b>
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-github">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-instagram">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-google">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="d-flex p-4 bg-secondary card-footer mt-4 flex-wrap">
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Settings className="h1 d-block my-2 text-warning" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Reports
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Monthly Stats
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Briefcase className="h1 d-block my-2 text-success" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Statistics
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Customers stats
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Projects
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Manage servers
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Layers className="h1 d-block my-2 text-white" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Tasks
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Pending items
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
