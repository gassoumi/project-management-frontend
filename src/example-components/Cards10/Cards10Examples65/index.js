import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4 pt-4">
            <div className="card-tr-actions">
              <Checkbox />
            </div>
            <div className="d-flex align-items-center px-4 mb-3">
              <div className="avatar-icon-wrapper rounded mr-3">
                <Tooltip arrow title="Offline">
                  <span className="badge-position badge-position--top-right badge-circle-inner badge badge-danger">
                    Offline
                  </span>
                </Tooltip>
                <div className="rounded overflow-hidden d-100 bg-neutral-first font-size-lg text-center font-weight-bold text-first d-flex justify-content-center flex-column">
                  <span>TY</span>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Kris Alexander
                </a>
                <span className="text-black-50 d-block pb-1">
                  Project Manager, Apple Inc.
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
            <Divider className="my-3" />
            <div className="font-size-sm px-4 rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">krisa@example.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Project Manager</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">Montreal, CA</span>
              </div>
            </div>
            <div className="divider mt-3 mb-2" />
            <List className="py-0">
              <ListItem button className="bg-white border-0 align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-neutral-success text-center text-success font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold d-block">Sales</div>
                    <small className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-success mr-1"
                      />
                      <span>15.4% increase</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem button className="bg-white border-0 align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-neutral-danger text-danger text-center font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold d-block">Income</div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger mr-1"
                      />
                      <span>5.2% decrease</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem button className="bg-white border-0 align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-neutral-warning text-warning text-center font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold d-block">Expenses</div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-warning mr-1"
                      />
                      <span>5.2% down</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4 pt-4 pb-2">
            <div className="card-tr-actions">
              <Checkbox />
            </div>
            <div className="d-flex align-items-center px-4 mb-3">
              <div className="avatar-icon-wrapper rounded mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar3} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Matteo Mcphee
                </a>
                <span className="text-black-50 d-block pb-1">
                  Frontend Developer, Stripe Inc.
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
            <div className="font-size-sm p-3 my-3 bg-neutral-dark mx-4 rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">matteo@mophee.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Frontend Developer</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">London, UK</span>
              </div>
            </div>
            <List className="pb-0">
              <ListItem button className="px-2">
                <div className="nav-link-icon opacity-6">
                  <AddCircleTwoToneIcon />
                </div>
                <span>Dashboard</span>
              </ListItem>
              <Divider />
              <ListItem button className="px-2">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Layouts</span>
                <span className="ml-auto badge badge-warning">512</span>
              </ListItem>
              <Divider />
              <ListItem button className="px-2">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'user-circle']} />
                </div>
                <span>Reports</span>
              </ListItem>
              <Divider />
              <ListItem button className="px-2">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Components</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12}>
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
