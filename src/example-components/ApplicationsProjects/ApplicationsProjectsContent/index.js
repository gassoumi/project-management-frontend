import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  InputAdornment,
  Avatar,
  IconButton,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField,
  Divider
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Trend from 'react-trend';
import CountUp from 'react-countup';

import { Users, Layers } from 'react-feather';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const LivePreviewExample = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div>
          <div className="d-block p-3 d-md-flex justify-content-between align-items-center text-center text-md-left">
            <div className="d-flex flex-md-row flex-column align-items-center">
              <div className="font-size-lg font-weight-bold">Projects</div>
              <div className="mx-3 d-none d-md-block">
                <div className="divider-v position-relative" />
                <div className="divider-v position-relative" />
              </div>
              <span className="text-black-50 font-size-md pr-3">
                345 in total
              </span>
              <div>
                <TextField
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            </div>
            <div className="d-block d-md-flex align-items-center">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="font-weight-bold px-3">
                Add project
              </Button>
              <Tooltip arrow title="Remove">
                <IconButton
                  variant="outlined"
                  size="small"
                  className="ml-3 border-danger text-danger">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                  </span>
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <Divider />
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            onChange={handleChange}>
            <Tab label="List columns 1" />
            <Tab label="List columns 2" />
            <Tab label="List columns 3" />
            <Tab label="Tables examples" />
          </Tabs>
        </div>
      </Card>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 pt-4">
              <div className="card-tr-actions">
                <Checkbox />
              </div>
              <div className="d-flex align-items-center px-4 mb-3">
                <div className="avatar-icon-wrapper rounded mr-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <div className="rounded overflow-hidden">
                      <img alt="..." className="img-fluid" src={people1} />
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold font-size-lg"
                    title="...">
                    Build stuff
                  </a>
                  <span className="text-black-50 d-block pb-1">
                    Project description here...
                  </span>
                  <div className="d-flex align-items-center pt-2">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className="mr-3">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      className="text-danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">Deadline:</span>
                  <span className="text-black-50">23 August 2020</span>
                </div>
                <div className="d-flex justify-content-between pt-2">
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
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold">Members</div>
                      <div className="font-size-sm mb-1 opacity-8">
                        Active users
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
                      <div className="font-size-sm mb-1 opacity-8">
                        Pending items
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 pt-4">
              <div className="card-tr-actions">
                <Checkbox />
              </div>
              <div className="d-flex align-items-center px-4 mb-3">
                <div className="avatar-icon-wrapper rounded mr-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <div className="rounded overflow-hidden">
                      <img alt="..." className="img-fluid" src={people2} />
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold font-size-lg"
                    title="...">
                    Create new business
                  </a>
                  <span className="text-black-50 d-block pb-1">
                    Project description here...
                  </span>
                  <div className="d-flex align-items-center pt-2">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className="mr-3">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      className="text-danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">Deadline:</span>
                  <span className="text-black-50">26 August 2021</span>
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <span className="font-weight-bold">Location:</span>
                  <span className="text-black-50">London, UK</span>
                </div>
              </div>
              <div className="d-flex flex-wrap mb-1 mx-2">
                <div className="w-50 p-3">
                  <Button
                    color="primary"
                    className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                    <div>
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold">Members</div>
                      <div className="font-size-sm mb-1 opacity-8">
                        Active users
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
                      <div className="font-size-sm mb-1 opacity-8">
                        Pending items
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 pt-4">
              <div className="card-tr-actions">
                <Checkbox />
              </div>
              <div className="d-flex align-items-center px-4 mb-3">
                <div className="avatar-icon-wrapper rounded mr-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <div className="rounded overflow-hidden">
                      <img alt="..." className="img-fluid" src={people3} />
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold font-size-lg"
                    title="...">
                    Upload documents
                  </a>
                  <span className="text-black-50 d-block pb-1">
                    Project description here...
                  </span>
                  <div className="d-flex align-items-center pt-2">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className="mr-3">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      className="text-danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">Deadline:</span>
                  <span className="text-black-50">15 June 2023</span>
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <span className="font-weight-bold">Location:</span>
                  <span className="text-black-50">Barcelona, Spain</span>
                </div>
              </div>
              <div className="d-flex flex-wrap mb-1 mx-2">
                <div className="w-50 p-3">
                  <Button
                    color="primary"
                    className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                    <div>
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold">Members</div>
                      <div className="font-size-sm mb-1 opacity-8">
                        Active users
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
                      <div className="font-size-sm mb-1 opacity-8">
                        Pending items
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 pt-4">
              <div className="card-tr-actions">
                <Checkbox />
              </div>
              <div className="d-flex align-items-center px-4 mb-3">
                <div className="avatar-icon-wrapper rounded mr-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <div className="rounded overflow-hidden">
                      <img alt="..." className="img-fluid" src={people1} />
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold font-size-lg"
                    title="...">
                    Generate reports
                  </a>
                  <span className="text-black-50 d-block pb-1">
                    Project description here...
                  </span>
                  <div className="d-flex align-items-center pt-2">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className="mr-3">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      className="text-danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">Deadline:</span>
                  <span className="text-black-50">17 August 2024</span>
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <span className="font-weight-bold">Location:</span>
                  <span className="text-black-50">Bucharest, Romania</span>
                </div>
              </div>
              <div className="d-flex flex-wrap mb-1 mx-2">
                <div className="w-50 p-3">
                  <Button
                    color="primary"
                    className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                    <div>
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold">Members</div>
                      <div className="font-size-sm mb-1 opacity-8">
                        Active users
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
                      <div className="font-size-sm mb-1 opacity-8">
                        Pending items
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card className="card-box p-4 mb-4">
              <Box className="card-tr-actions">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
              <div className="text-center">
                <div className="avatar-icon-wrapper rounded-circle m-0">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                    <div className="rounded-circle overflow-hidden">
                      <img alt="..." className="img-fluid" src={people2} />
                    </div>
                  </div>
                </div>
                <h3 className="font-weight-bold mt-3">Build stuff</h3>
                <div className="badge mt-1 mb-4 badge-neutral-success text-success font-weight-normal font-size-lg px-4 py-1 h-auto">
                  <span className="font-weight-bold pr-1">25</span> active tasks
                </div>
                <p className="mb-0 text-black-50">
                  A wonderful serenity has taken possession of my entire soul.
                </p>
                <div className="pt-3">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View tasks">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fas', 'bars']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View members">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View reports">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className="card-box p-4 mb-4">
              <Box className="card-tr-actions">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
              <div className="text-center">
                <div className="avatar-icon-wrapper rounded-circle m-0">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                    <div className="rounded-circle overflow-hidden">
                      <img alt="..." className="img-fluid" src={people1} />
                    </div>
                  </div>
                </div>
                <h3 className="font-weight-bold mt-3">Create new business</h3>
                <div className="badge mt-1 mb-4 badge-neutral-danger text-danger font-weight-normal font-size-lg px-4 py-1 h-auto">
                  <span className="font-weight-bold pr-1">99+</span> pending
                  tasks
                </div>
                <p className="mb-0 text-black-50">
                  A wonderful serenity has taken possession of my entire soul.
                </p>
                <div className="pt-3">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View tasks">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fas', 'bars']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View members">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View reports">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className="card-box p-4 mb-4">
              <Box className="card-tr-actions">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
              <div className="text-center">
                <div className="avatar-icon-wrapper rounded-circle m-0">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                    <div className="rounded-circle overflow-hidden">
                      <img alt="..." className="img-fluid" src={people3} />
                    </div>
                  </div>
                </div>
                <h3 className="font-weight-bold mt-3">Upload documents</h3>
                <div className="badge mt-1 mb-4 badge-neutral-success text-success font-weight-normal font-size-lg px-4 py-1 h-auto">
                  <span className="font-weight-bold pr-1">5</span> active tasks
                </div>
                <p className="mb-0 text-black-50">
                  A wonderful serenity has taken possession of my entire soul.
                </p>
                <div className="pt-3">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View tasks">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fas', 'bars']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View members">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"
                    title="View reports">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="mt-4">
          <Card className="card-box">
            <List>
              <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-center">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper mr-0 mr-md-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <span className="badge-circle p-top-a badge badge-success">
                      Online
                    </span>
                    <div className="rounded overflow-hidden">
                      <img alt="..." className="img-fluid" src={avatar6} />
                    </div>
                  </div>
                </a>
                <div className="d-flex flex-grow-1 pl-1 flex-column">
                  <div className="d-flex flex-column flex-xl-row justify-content-between">
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold btn text-black p-0">
                        Trystan Russo
                      </a>
                      <div className="d-block d-md-flex align-items-center my-2">
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="mr-2"
                        />
                        <span className="text-black-50 pr-4">
                          russotry@russo.com
                        </span>

                        <FontAwesomeIcon
                          icon={['far', 'address-card']}
                          className="mr-2"
                        />
                        <span className="text-black-50 pr-4">
                          Project Manager
                        </span>

                        <FontAwesomeIcon
                          icon={['far', 'map']}
                          className="mr-2"
                        />
                        <span className="text-black-50">
                          San Francisco, USA
                        </span>
                      </div>
                    </div>
                    <div className="pb-3 pt-1 py-xl-0">
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        className="mr-2 font-size-xs font-weight-bold">
                        Chat
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="text-uppercase font-size-xs font-weight-bold">
                        Profile
                      </Button>
                    </div>
                  </div>
                  <div className="d-block d-xl-flex justify-content-between align-items-center">
                    <p className="text-black-50 mb-0 font-size-sm pr-0 pr-xl-4">
                      McClintock's eye for detail certainly helped narrow the
                      whereabouts.
                    </p>
                    <div className="d-flex flex-grow-1 pl-0 pl-xl-5 align-items-center">
                      <div className="text-black-50">Progress</div>
                      <LinearProgress
                        className="flex-grow-1 mx-2"
                        color="primary"
                        value={56}
                      />
                      <div className="font-weight-bold font-size-lg">56%</div>
                    </div>
                  </div>
                </div>
              </ListItem>
              <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-center">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper mr-0 mr-md-3">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                    <span className="badge-position badge-position--bottom-right badge-circle badge badge-info">
                      Offline
                    </span>
                    <div className="rounded overflow-hidden bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                      <span>HS</span>
                    </div>
                  </div>
                </a>
                <div className="d-flex flex-grow-1 pl-1 flex-column">
                  <div className="d-flex flex-column flex-xl-row justify-content-between">
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold btn text-black p-0">
                        Zara Wagstaff
                      </a>
                      <div className="d-block d-md-flex align-items-center my-2">
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="mr-2"
                        />
                        <span className="text-black-50 pr-4">
                          zara@wags.com
                        </span>

                        <FontAwesomeIcon
                          icon={['far', 'address-card']}
                          className="mr-2"
                        />
                        <span className="text-black-50 pr-4">
                          UX Consultant
                        </span>

                        <FontAwesomeIcon
                          icon={['far', 'map']}
                          className="mr-2"
                        />
                        <span className="text-black-50">London, UK</span>
                      </div>
                    </div>
                    <div className="pb-3 pt-1 py-xl-0">
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        className="mr-2 font-size-xs font-weight-bold">
                        Chat
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="text-uppercase font-size-xs font-weight-bold">
                        Profile
                      </Button>
                    </div>
                  </div>
                  <div className="d-block d-xl-flex justify-content-between align-items-center">
                    <p className="text-black-50 mb-0 font-size-sm pr-0 pr-xl-4">
                      A 1914 English translation by Harris Rackham reads.
                    </p>
                    <div className="d-flex flex-grow-1 pl-0 pl-xl-5 align-items-center">
                      <div className="text-black-50">Progress</div>
                      <LinearProgress
                        className="flex-grow-1 mx-2"
                        color="secondary"
                        value={32}
                      />
                      <div className="font-weight-bold font-size-lg">32%</div>
                    </div>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card className="card-box p-2 mb-4">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}></th>
                  <th>Company</th>
                  <th>Date</th>
                  <th className="text-center" style={{ width: '20%' }}>
                    Status
                  </th>
                  <th>Employee</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox4"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="View Facebook Profile">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-facebook">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Facebook</b>
                        <span className="text-black-50 d-block">
                          Social media company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">16 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-warning">
                      Pending
                    </div>
                  </td>
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
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox5"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Github">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-github">
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Github</b>
                        <span className="text-black-50 d-block">
                          Recommended company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row text-danger">
                      <b>17 September 2020</b>
                      <div className="text-info ml-2 badge badge-neutral-info">
                        Due
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success h-auto py-0 px-3">
                      Completed
                    </div>
                  </td>
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
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox1"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Instagram">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-instagram">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Instagram</b>
                        <span className="text-black-50 d-block">
                          Sharing images since 2000
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">18 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-danger">
                      Declined
                    </div>
                  </td>
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
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox2"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Twitter">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-twitter">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Twitter</b>
                        <span className="text-black-50 d-block">
                          140 characters at a time
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">19 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-info">
                      Review
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Finnlay Haney
                        </a>
                        <span className="text-black-50 d-block">
                          Professional Ingineer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider />
        </Card>
        <Card className="card-box mb-4">
          <div className="card-header-alt p-4">
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              Projects status
            </h6>
            <p className="text-black-50 mb-0">
              Reports regarding the status of all available projects.
            </p>
          </div>
          <Divider />
          <div className="card-body pt-2 px-4 pb-4">
            <div className="table-responsive">
              <table className="text-nowrap table-alternate mb-0 table table-borderless table-hover">
                <thead>
                  <tr>
                    <th>Software</th>
                    <th className="text-center">Income</th>
                    <th className="text-center">Expenses</th>
                    <th className="text-left">Status</th>
                    <th className="text-center" style={{ width: '15%' }}>
                      Trends
                    </th>
                    <th className="text-right">Totals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
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
                    <td className="text-left">
                      <span className="badge badge-danger">Overdue</span>
                    </td>
                    <td>
                      <Trend
                        data={[0, 10, 5, 22, 3.6, 11]}
                        autoDraw
                        autoDrawDuration={3000}
                        autoDrawEasing="ease-in"
                        radius={15}
                        smooth
                        stroke="var(--danger)"
                        strokeLinecap="round"
                        strokeWidth={5}
                      />
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
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">$18,386</span>
                    </td>
                    <td className="text-center">
                      <span className="text-danger font-weight-bold">
                        -6,310
                      </span>
                    </td>
                    <td className="text-left">
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td>
                      <Trend
                        data={[3, 12, 5, 9, 8, 19, 4.6, 5]}
                        autoDraw
                        autoDrawDuration={3000}
                        autoDrawEasing="ease-in"
                        radius={15}
                        smooth
                        stroke="var(--success)"
                        strokeLinecap="round"
                        strokeWidth={5}
                      />
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
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">$6,356</span>
                    </td>
                    <td className="text-center">
                      <span className="text-warning">-374</span>
                    </td>
                    <td className="text-left">
                      <span className="badge badge-first">Waiting</span>
                    </td>
                    <td>
                      <Trend
                        data={[0, 10, 12, 14, 5, 22, 3.6, 11]}
                        autoDraw
                        autoDrawDuration={3000}
                        autoDrawEasing="ease-in"
                        radius={15}
                        smooth
                        stroke="var(--warning)"
                        strokeLinecap="round"
                        strokeWidth={5}
                      />
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
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">$16,281</span>
                    </td>
                    <td className="text-center">
                      <span className="text-success">+684</span>
                    </td>
                    <td className="text-left">
                      <span className="badge badge-success">Done</span>
                    </td>
                    <td>
                      <Trend
                        data={[9, 8, 19, 4.6, 3, 12, 5, 5]}
                        autoDraw
                        autoDrawDuration={3000}
                        autoDrawEasing="ease-in"
                        radius={15}
                        smooth
                        stroke="var(--first)"
                        strokeLinecap="round"
                        strokeWidth={5}
                      />
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
      </TabPanel>
    </Fragment>
  );
};

export default LivePreviewExample;
