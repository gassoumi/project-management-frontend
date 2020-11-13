import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Open tickets
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="px-3 pb-3">
              <div className="scroll-area rounded bg-secondary shadow-overflow">
                <PerfectScrollbar>
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Wrong product price
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Nazim Kidd
                          </a>
                          <span className="pl-2 text-muted">
                            opened 20 minutes ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Active IE8 issues
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Charlton Oconnell
                          </a>
                          <span className="pl-2 text-muted">
                            opened two hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            My account doesn't work
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Isha Rollins
                          </a>
                          <span className="pl-2 text-muted">
                            opened three hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Unpaid invoice status
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar4} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened 3 days ag0
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-warning">Pending</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Mobile app problems
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar5} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Kush Malone
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-danger">Rejected</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Responsive issues on Firefox
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box bg-white mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Traders overview
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="px-3 pb-3">
              <div className="scroll-area rounded bg-secondary shadow-overflow">
                <PerfectScrollbar>
                  <div className="p-3">
                    <List>
                      <ListItem>
                        <div className="align-box-row w-100">
                          <div className="mr-4">
                            <Tooltip
                              arrow
                              title="View details"
                              placement="right">
                              <a
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="avatar-icon-wrapper avatar-icon-lg m-0">
                                <div className="dot-badge" />
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar7} />
                                </div>
                              </a>
                            </Tooltip>
                          </div>
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="secondary"
                              variant="determinate"
                              value={61}
                            />
                          </div>
                          <div className="line-height-sm text-center ml-4">
                            <small className="text-black-50 d-block text-uppercase">
                              Totals
                            </small>
                            <b className="font-size-lg text-success">
                              <small className="pr-1 text-black-50">$</small>
                              1,628
                            </b>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="align-box-row w-100">
                          <div className="mr-4">
                            <Tooltip
                              arrow
                              title="View details"
                              placement="right">
                              <a
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="avatar-icon-wrapper avatar-icon-lg m-0">
                                <div className="dot-badge" />
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar5} />
                                </div>
                              </a>
                            </Tooltip>
                          </div>
                          <div className="flex-grow-1">
                            <LinearProgress
                              variant="determinate"
                              color="primary"
                              value={44}
                            />
                          </div>
                          <div className="line-height-sm text-center ml-4">
                            <small className="text-black-50 d-block text-uppercase">
                              Totals
                            </small>
                            <b className="font-size-lg text-info">
                              <small className="text-black-50 pr-1">$</small>
                              7,389
                            </b>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="align-box-row w-100">
                          <div className="mr-4">
                            <Tooltip
                              arrow
                              title="View details"
                              placement="right">
                              <a
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="avatar-icon-wrapper avatar-icon-lg m-0">
                                <div className="dot-badge" />
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </a>
                            </Tooltip>
                          </div>
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="primary"
                              variant="determinate"
                              value={29}
                            />
                          </div>
                          <div className="line-height-sm text-center ml-4">
                            <small className="text-black-50 d-block text-uppercase">
                              Totals
                            </small>
                            <b className="font-size-lg text-danger">
                              <small className="text-black-50 pr-1">$</small>
                              8,493
                            </b>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="align-box-row w-100">
                          <div className="mr-4">
                            <Tooltip
                              arrow
                              title="View details"
                              placement="right">
                              <a
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="avatar-icon-wrapper avatar-icon-lg m-0">
                                <div className="dot-badge" />
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar2} />
                                </div>
                              </a>
                            </Tooltip>
                          </div>
                          <div className="flex-grow-1">
                            <LinearProgress
                              color="secondary"
                              variant="determinate"
                              value={38}
                            />
                          </div>
                          <div className="line-height-sm text-center ml-4">
                            <small className="text-black-50 d-block text-uppercase">
                              Totals
                            </small>
                            <b className="font-size-lg text-warning">
                              <small className="text-black-50 pr-1">$</small>
                              2,594
                            </b>
                          </div>
                        </div>
                      </ListItem>
                    </List>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
