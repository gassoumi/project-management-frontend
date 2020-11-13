import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Grid, LinearProgress, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title font-weight-bold">
                Analytics
              </div>
              <div className="card-header--actions">
                <Button variant="outlined" color="secondary" size="small">
                  <span className="btn-wrapper--label">Select period</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </span>
                </Button>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-sm mb-2">
              <div className="table-responsive">
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td className="text-center font-size-lg">1 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-warning">596</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            45%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">2 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">3,465</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-danger">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-down']}
                              className="mr-1"
                            />
                            35%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">3 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">12,364</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            45%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">4 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-warning">346</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            66%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">5 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">765</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-danger">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-down']}
                              className="mr-1"
                            />
                            64%
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title font-weight-bold">
                Countries
              </div>
              <div className="card-header--actions">
                <span className="my-1 badge badge-neutral-first badge-pill">
                  Updates available
                </span>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-sm mb-2">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 150 }}>Country</th>
                      <th>Visits</th>
                      <th>% Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="us"></flag-icon>
                          <span>USA</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 t2xt-success"
                          />
                          <small className="text-black-50 d-block">
                            45,235
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={55}
                            />
                          </div>
                          <div className="text-dark pl-2">55%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="it"></flag-icon>
                          <span>Italy</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 2ext-success"
                          />
                          <small className="text-black-50 d-block">3,772</small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={65}
                            />
                          </div>
                          <div className="text-dark pl-2">65%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="fr"></flag-icon>
                          <span>France</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-down']}
                            className="mr-2 text-danger"
                          />
                          <small className="text-black-50 d-block">
                            56,235
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={87}
                            />
                          </div>
                          <div className="text-dark pl-2">87%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="ch"></flag-icon>
                          <span>Switzerland</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-down']}
                            className="mr-2 text-warning"
                          />
                          <small className="text-black-50 d-block">6,346</small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={29}
                            />
                          </div>
                          <div className="text-dark pl-2">29%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="de"></flag-icon>
                          <span>Germany</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 t2xt-success"
                          />
                          <small className="text-black-50 d-block">
                            15,366
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={33}
                            />
                          </div>
                          <div className="text-dark pl-2">33%</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
