import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Grid, LinearProgress, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover bg-premium-dark text-white align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 font-weight-bold">56</div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
                  <div className="font-weight-bold text-white-50 font-size-sm text-uppercase">
                    Tasks done
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover bg-vicious-stance text-white align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 font-weight-bold">18</div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-danger rounded border-danger" />
                  <div className="font-weight-bold text-white-50 font-size-sm text-uppercase">
                    Requests
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover bg-midnight-bloom text-white align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 font-weight-bold">29</div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                  <div className="font-weight-bold text-white-50 font-size-sm text-uppercase">
                    Bugfixes
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box card-box-hover-rise card-box-hover bg-night-sky text-white align-box-row align-items-start mb-4 p-4">
                <div>
                  <div className="display-3 font-weight-bold">768</div>
                  <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-success" />
                  <div className="font-weight-bold text-white-50 font-size-sm text-uppercase">
                    Tickets
                  </div>
                </div>

                <div className="ml-auto card-hover-indicator align-self-center">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </a>
            </Grid>
          </Grid>
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
            <PerfectScrollbar className="scroll-area">
              <div className="table-responsive">
                <table className="text-nowrap mb-0 table table-borderless table-hover">
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
