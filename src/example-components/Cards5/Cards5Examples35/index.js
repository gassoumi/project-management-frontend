import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  Card,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';


export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header bg-white pr-1">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Targets</small>
                <b>Monthly Stats</b>
              </div>
              <div className="card-header--actions">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mr-3">
                  Today
                </Button>
                <Button size="small" color="primary" className="mr-3">
                  Last week
                </Button>
              </div>
            </div>
            <List>
              <ListItem className="py-4 d-block">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock1}
                            style={{width: 140}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Meeting minutes
                      </b>
                      <p className="text-black-50 mb-0">
                        Learn more about these example boxes.
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">23 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3">
                      <span className="font-weight-bold font-size-lg">583</span>
                      <span className="text-black-50 d-block">customers</span>
                    </div>
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        12,349
                      </span>
                      <span className="text-black-50 d-block">visits</span>
                    </div>
                  </div>
                </div>
              </ListItem>
              <ListItem className="py-4 d-block">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock2}
                            style={{width: 140}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Sales reports for this week
                      </b>
                      <p className="text-black-50 mb-0">
                        The passage experienced a surge in popularity during the
                        1960s.
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">24 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3 pl-3">
                      <span className="font-weight-bold font-size-lg text-danger">
                        345
                      </span>
                      <span className="text-black-50 d-block">reports</span>
                    </div>
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        1,456
                      </span>
                      <span className="text-black-50 d-block">customers</span>
                    </div>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer d-flex justify-content-between">
              <Button size="small" color="primary" variant="contained">
                View details
              </Button>
              <Button size="small" variant="outlined" color="secondary">
                <span>Delete</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-tr-actions">
              <Fab color="primary" size="small" className="p-0">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Fab>
            </div>
            <div className="card-header-alt d-flex justify-content-center px-4 pt-4">
              <div className="text-center">
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Shopping Cart
                </h6>
                <p className="text-black-50 mb-0">Checkout is almost done!</p>
              </div>
            </div>
            <div className="divider mt-4"/>
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <div className="d-flex p-4 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock1}
                            style={{width: 120}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-3">
                      <b className="font-weight-bold font-size-lg text-black">
                        Asus Vivobook
                      </b>
                      <div className="d-flex pt-1 align-items-center">
                        <Tooltip arrow title="Add">
                          <Fab size="small" color="primary" className="mr-2">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <Tooltip arrow title="Remove">
                          <Fab size="small" color="secondary" className="mr-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <b>1</b>
                      </div>
                    </div>
                  </div>
                  <div className="font-weight-bold font-size-xl text-muted">
                    $56
                  </div>
                </div>
                <div className="divider opacity-7"/>
                <div className="d-flex p-4 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock2}
                            style={{width: 120}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-3">
                      <b className="font-weight-bold font-size-lg text-black">
                        Lenovo Laptop
                      </b>
                      <div className="d-flex pt-1 align-items-center">
                        <Tooltip arrow title="Add">
                          <Fab size="small" color="primary" className="mr-2">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <Tooltip arrow title="Remove">
                          <Fab size="small" color="secondary" className="mr-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <b>1</b>
                      </div>
                    </div>
                  </div>
                  <div className="font-weight-bold font-size-xl text-muted">
                    $38
                  </div>
                </div>
                <div className="divider opacity-7"/>
                <div className="d-flex p-4 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock3}
                            style={{width: 120}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-3">
                      <b className="font-weight-bold font-size-lg text-black">
                        Dell Inspire
                      </b>
                      <div className="d-flex pt-1 align-items-center">
                        <Tooltip arrow title="Add">
                          <Fab size="small" color="primary" className="mr-2">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <Tooltip arrow title="Remove">
                          <Fab size="small" color="secondary" className="mr-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <b>1</b>
                      </div>
                    </div>
                  </div>
                  <div className="font-weight-bold font-size-xl text-muted">
                    $21
                  </div>
                </div>
                <div className="divider opacity-7"/>
                <div className="d-flex p-4 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock1}
                            style={{width: 120}}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-3">
                      <b className="font-weight-bold font-size-lg text-black">
                        Asus Vivobook
                      </b>
                      <div className="d-flex pt-1 align-items-center">
                        <Tooltip arrow title="Add">
                          <Fab size="small" color="primary" className="mr-2">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <Tooltip arrow title="Remove">
                          <Fab size="small" color="secondary" className="mr-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-sm"
                              />
                            </span>
                          </Fab>
                        </Tooltip>
                        <b>1</b>
                      </div>
                    </div>
                  </div>
                  <div className="font-weight-bold font-size-xl text-muted">
                    $56
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
            <Divider/>
            <div className="bg-secondary font-size-lg p-4">
              <div className="d-flex justify-content-between">
                <div>Total</div>
                <div className="font-weight-bold">$456</div>
              </div>
            </div>
            <Divider/>
            <div className="p-4">
              <Button
                size="large"
                variant="contained"
                color="primary"
                className="w-100">
                Proceed to checkout
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
