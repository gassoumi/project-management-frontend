import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  Box,
  Checkbox,
  Badge,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>File Manager</small>
                <b>My saved documents</b>
              </div>
              <Box className="card-header--actions">
                <Tooltip arrow title="View options">
                  <Fab color="primary" size="small">
                    <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                  </Fab>
                </Tooltip>
              </Box>
            </div>
            <CardContent className="p-0">
              <div className="scroll-area shadow-overflow">
                <PerfectScrollbar>
                  <div className="file-manager-wrapper p-4">
                    <div className="card-body pt-0 pb-2">
                      <Grid container spacing={4}>
                        <Grid item xs={6}>
                          <small className="text-uppercase text-muted">
                            <b>File name</b>
                          </small>
                        </Grid>
                        <Grid item xs={6} className="text-right">
                          <small className="text-uppercase text-muted">
                            <b>Edited</b>
                          </small>
                        </Grid>
                      </Grid>
                    </div>
                    <Card className="card-box">
                      <List>
                        <ListItem className="file-manager-item">
                          <div className="align-box-row w-100">
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['far', 'folder']}
                                className="font-size-lg text-warning mr-2"
                              />
                              <a href="#/" onClick={e => e.preventDefault()}>
                                Finance
                              </a>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar2} />
                                </div>
                              </div>
                              <small className="text-black-50">1d</small>
                            </div>
                          </div>
                        </ListItem>
                        <Divider />
                        <ListItem className="file-manager-item d-block">
                          <div className="align-box-row w-100">
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['far', 'folder']}
                                className="font-size-lg text-warning mr-2"
                              />
                              <a href="#/" onClick={e => e.preventDefault()}>
                                Bookmarks
                              </a>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar2} />
                                </div>
                              </div>
                              <small className="text-black-50">41m</small>
                            </div>
                          </div>
                          <Card className="card-box mt-3 mb-2">
                            <List>
                              <ListItem className="d-flex justify-content-between align-items-center">
                                <div className="w-100">
                                  <div className="d-flex flex-wrap justify-content-between mb-2">
                                    <small className="line-height-xs text-uppercase text-muted">
                                      Nov 12, 11:25am
                                    </small>
                                    <small className="line-height-xs text-uppercase text-success">
                                      Due in 12 days
                                    </small>
                                  </div>
                                  <h6 className="pt-1 pb-1">
                                    <a
                                      href="#/"
                                      onClick={e => e.preventDefault()}>
                                      #56 - Deploy new website
                                    </a>
                                  </h6>
                                  <p className="mb-3">
                                    This is a dummy text acting like a small
                                    description for the above title...
                                  </p>
                                  <div className="d-flex mt-1 justify-content-between align-items-center">
                                    <div className="avatar-wrapper-overlap">
                                      <div className="avatar-icon-wrapper">
                                        <div className="avatar-icon">
                                          <img alt="..." src={avatar1} />
                                        </div>
                                      </div>
                                      <div className="avatar-icon-wrapper">
                                        <div className="avatar-icon">
                                          <img alt="..." src={avatar7} />
                                        </div>
                                      </div>
                                      <div className="avatar-icon-wrapper">
                                        <div className="avatar-icon">
                                          <img alt="..." src={avatar6} />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <Button size="small" color="primary">
                                        <span className="btn-wrapper--icon">
                                          <FontAwesomeIcon
                                            icon={['fas', 'plus']}
                                            className="font-size-sm"
                                          />
                                        </span>
                                        <span className="btn-wrapper--label">
                                          Add
                                        </span>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </ListItem>
                              <ListItem className="d-flex justify-content-between align-items-center">
                                <div className="w-100">
                                  <div className="d-flex flex-wrap justify-content-between mb-2">
                                    <small className="line-height-xs text-uppercase text-muted">
                                      Nov 12, 11:25am
                                    </small>
                                    <small className="line-height-xs text-uppercase text-success">
                                      Due in 12 days
                                    </small>
                                  </div>
                                  <h6 className="pt-1 pb-1">
                                    <Badge
                                      color="secondary"
                                      className="text-warning">
                                      New report generated
                                    </Badge>
                                  </h6>
                                  <p className="mb-3">
                                    This is a dummy text acting like a small
                                    description for the above title...
                                  </p>
                                  <div className="mb-1">
                                    <a
                                      href="#/"
                                      onClick={e => e.preventDefault()}>
                                      <img
                                        alt="..."
                                        className="img-fluid rounded m-2 shadow-sm"
                                        src={people1}
                                        width="70"
                                      />
                                    </a>
                                    <a
                                      href="#/"
                                      onClick={e => e.preventDefault()}>
                                      <img
                                        alt="..."
                                        className="img-fluid rounded m-2 shadow-sm"
                                        src={people2}
                                        width="70"
                                      />
                                    </a>
                                    <a
                                      href="#/"
                                      onClick={e => e.preventDefault()}>
                                      <img
                                        alt="..."
                                        className="img-fluid rounded shadow-sm"
                                        src={people3}
                                        width="70"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </ListItem>
                              <ListItem className="d-flex justify-content-between align-items-center align-content-center">
                                <Tooltip
                                  arrow
                                  title="There are 653 new comments available!"
                                  placement="top">
                                  <Button size="small" color="primary">
                                    <span className="btn-wrapper--icon">
                                      <FontAwesomeIcon
                                        icon={['far', 'comments']}
                                      />
                                    </span>
                                    <span className="btn-wrapper--label ml-1">
                                      653
                                    </span>
                                  </Button>
                                </Tooltip>
                                <div>
                                  <small className="text-muted mr-1">
                                    (21)
                                  </small>
                                  <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="text-warning"
                                  />
                                  <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="text-warning"
                                  />
                                  <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="text-warning"
                                  />
                                  <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="text-warning"
                                  />
                                  <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="text-warning"
                                  />
                                </div>
                              </ListItem>
                            </List>
                          </Card>
                        </ListItem>
                        <Divider />
                        <ListItem className="file-manager-item">
                          <div className="align-box-row w-100">
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['far', 'folder']}
                                className="font-size-lg text-warning mr-2"
                              />
                              <a href="#/" onClick={e => e.preventDefault()}>
                                Business
                              </a>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar2} />
                                </div>
                              </div>
                              <small className="text-black-50">5d</small>
                            </div>
                          </div>
                        </ListItem>
                        <Divider />
                        <ListItem className="file-manager-item">
                          <div className="align-box-row w-100">
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['far', 'folder']}
                                className="font-size-lg text-warning mr-2"
                              />
                              <a href="#/" onClick={e => e.preventDefault()}>
                                Images
                              </a>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-sm">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar2} />
                                </div>
                              </div>
                              <small className="text-black-50">21h</small>
                            </div>
                          </div>
                        </ListItem>
                      </List>
                    </Card>
                  </div>
                </PerfectScrollbar>
              </div>
            </CardContent>
            <div className="card-footer bg-secondary p-4">
              <input
                accept="image/*"
                className="d-none"
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file" className="w-100 mb-0">
                <Button
                  variant="contained"
                  color="primary"
                  className="d-block w-100 text-center"
                  component="div">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className="d-none"
                id="text-button-file"
                multiple
                type="file"
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  Users list
                </h4>
              </div>
              <div className="card-header--actions">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mr-3">
                  <span className="btn-wrapper--label">View details</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                  </span>
                </Button>
                <Button variant="outlined" color="secondary" size="small">
                  <span className="btn-wrapper--label">Tools</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="font-size-sm"
                    />
                  </span>
                </Button>
              </div>
            </div>
            <div className="card-body px-0 pt-2 pb-3">
              <table className="table table-hover table-borderless table-alternate mb-0">
                <thead>
                  <tr>
                    <th>Software</th>
                    <th className="text-center">Income</th>
                    <th className="text-center">Expenses</th>
                    <th className="text-center">Status</th>
                    <th className="text-right">Totals</th>
                  </tr>
                </thead>
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
                            Isaiah Ruiz
                          </a>
                          <span className="text-black-50 d-block">
                            Senior Web Developer
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold text-danger">
                        -$254
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="text-danger font-weight-bold">
                        -2,374
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="badge badge-danger">Overdue</span>
                    </td>
                    <td className="text-right">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="font-weight-bold font-size-lg pr-2">
                          <CountUp
                            start={0}
                            end={3465}
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
                      <span className="font-weight-bold">$7,361</span>
                    </td>
                    <td className="text-center">
                      <span className="text-danger">-23</span>
                    </td>
                    <td className="text-center">
                      <span className="badge badge-danger">Overdue</span>
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
                            Beverley Morton
                          </a>
                          <span className="text-black-50 d-block">
                            Lead UI Developer
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
                          $32,234
                        </div>
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="font-size-sm opacity-5"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
