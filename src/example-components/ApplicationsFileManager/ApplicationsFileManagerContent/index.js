import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  Box,
  Typography,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const LivePreviewExample = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="d-flex bg-secondary d-lg-none p-4 order-0 justify-content-between align-items-center">
          <Fab onClick={toggleSidebarMenu} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Fab>
          <Fab onClick={toggleSidebarMenu2} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </Fab>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__sm',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <div className="p-4">
            <Button
              variant="contained"
              size="small"
              color="secondary"
              className="w-100">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'upload']} />
              </span>
              <span className="btn-wrapper--label">Upload</span>
            </Button>
          </div>
          <PerfectScrollbar className="px-4">
            <List>
              <Typography
                component="div"
                className="d-flex text-uppercase text-black-50 pb-1 align-items-center">
                <div className="font-size-xs">My storage drive</div>
              </Typography>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="mx-auto"
                  />
                </span>
                All files
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'building']}
                    className="mx-auto"
                  />
                </span>
                Connected devices
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="mx-auto"
                  />
                </span>
                Recent files
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'trash-alt']}
                    className="mx-auto"
                  />
                </span>
                Deleted files
              </ListItem>
              <Typography
                component="div"
                className="d-flex text-uppercase pt-2 text-black-50 pb-1 align-items-center">
                <div className="font-size-xs">Content library</div>
              </Typography>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-image']}
                    className="mx-auto"
                  />
                </span>
                Images
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="mx-auto"
                  />
                </span>
                Documents
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-video']}
                    className="mx-auto"
                  />
                </span>
                Videos
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-archive']}
                    className="mx-auto"
                  />
                </span>
                Archive files
              </ListItem>
              <ListItem button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'file-audio']}
                    className="mx-auto"
                  />
                </span>
                Audio
              </ListItem>
            </List>
          </PerfectScrollbar>
          <div className="app-content--sidebar__footer px-4 py-2">
            <Typography
              component="div"
              className="d-flex text-uppercase pt-2 text-black-50 pb-1 align-items-center">
              <div className="font-size-xs">Available storage</div>
            </Typography>
            <div className="d-flex align-items-center">
              <div className="display-3">
                <FontAwesomeIcon icon={['far', 'object-group']} />
              </div>
              <div className="pl-3">
                <small className="d-block mb-2">
                  <b>5GB</b> used out of <b>25GB</b>
                </small>
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={87}
                />
              </div>
            </div>
            <small className="d-block mt-2">
              <span className="d-block pb-2">
                Get <b>1 GB</b> of free storage if you take advantage of our
                premium plans.
              </span>
              <Button
                className="font-weight-bold font-size-xs text-first"
                size="small"
                title="Learn more">
                View details
              </Button>
            </small>
          </div>
        </div>
        <div className="app-inner-content-layout--main bg-secondary">
          <div>
            <div className="px-5 py-4 bg-light text-center text-xl-left">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={7}>
                  <div>
                    <h5 className="display-4 mt-1 mb-2 font-weight-bold">
                      File manager
                    </h5>
                    <p className="text-black-50 mb-0">
                      This is an example page created with this template!
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className="d-flex align-items-center justify-content-start justify-content-xl-end">
                  <div className="mx-auto mx-xl-0">
                    <Button
                      color="primary"
                      variant="contained"
                      className="d-block d-sm-inline-block"
                      title="Upload">
                      <span className="btn-wrapper--label">Upload</span>
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="divider bg-dark opacity-2" />
          </div>
          <PerfectScrollbar>
            <div className="px-5">
              <h5 className="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">
                Latest files added
              </h5>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-word']}
                            className="display-2 text-first mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>Example_WordFile.doc</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            15.2MB
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">12.06.2020</span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-excel']}
                            className="display-2 text-warning mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>Excel_2002.xls</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            3.1MB
                          </small>
                          <small className="opacity-6">
                            Modified:{' '}
                            <span className="text-black-50">5 hours ago</span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-archive']}
                            className="display-2 text-danger mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>AllPhotos.zip</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            15.2MB
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">
                              5 January 2000
                            </span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-image']}
                            className="display-2 text-info mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>IMG_063037.jpg</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            2.2mb
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">12.06.2020</span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-audio']}
                            className="display-2 text-second mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>Audio.mp3</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            745,3 kb
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">22.11.2019</span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-word']}
                            className="display-2 text-first mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>Example_WordFile.doc</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            15.2MB
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">12.06.2020</span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-archive']}
                            className="display-2 text-danger mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>AllPhotos.zip</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            15.2MB
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">
                              5 January 2000
                            </span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Card className="card-box mb-4">
                    <CardContent className="p-3">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-top">
                          <Fab color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
                          </Fab>
                        </div>
                        <div className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'file-archive']}
                            className="display-2 text-danger mx-auto"
                          />
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <b>AllPhotos.zip</b>
                        </a>
                        <div>
                          <small className="d-block text-black-50 pb-2">
                            15.2MB
                          </small>
                          <small className="opacity-6">
                            Modified on:{' '}
                            <span className="text-black-50">
                              5 January 2000
                            </span>
                          </small>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <h5 className="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">
                Recent folders
              </h5>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'folder-open']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md">Downloads</span>
                          <span className="text-warning ml-2 badge badge-neutral-warning">
                            OLD
                          </span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>5 files</b>, 15 mb
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md">Image album</span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>125 files</b>, 564 mb
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md">Reports</span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>45 files</b>, 345 mb
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-warning display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'file-excel']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md">Other files</span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>55 files</b>, 2,3 GB
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'folder-open']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md">Websites</span>
                          <span className="ml-2 badge badge-success">New</span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>3 directories</b>, 45,23 GB
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box btn rounded text-left mb-4 p-3">
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                      <div>
                        <div className="text-center text-danger display-2 d-50 rounded-circle mb-3 mb-sm-2">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </div>
                      </div>
                      <div className="pl-0 pl-sm-3">
                        <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md text-danger">
                            <b>Overdue</b>
                          </span>
                        </div>
                        <p className="text-black-50 opacity-8 mb-0">
                          <b>3 files</b>, 34 mb
                        </p>
                      </div>
                    </div>
                  </a>
                </Grid>
              </Grid>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar app-inner-content-layout--sidebar__lg pos-r bg-white border-right',
            { 'layout-sidebar-open': isSidebarMenuOpen2 }
          )}>
          <PerfectScrollbar>
            <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="Details" />
              <Tab label="Activity" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="text-center pt-1">
                <h3 className="font-size-xl line-height-sm my-2 text-black font-weight-bold">
                  All tasks completed{' '}
                  <span role="img" aria-label="Smiley">
                    😀
                  </span>
                </h3>
                <p className="font-size-md text-black-50 mb-4">
                  You have no modifications active!
                </p>
              </div>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card card-box mb-4 card-box-border-bottom border-danger">
                <CardContent className="p-3">
                  <div className="align-box-row align-items-center">
                    <div className="mr-3">
                      <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'keyboard']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <small className="text-black-50 d-block mb-1 text-uppercase">
                          Orders
                        </small>
                        <span className="font-size-xxl text-danger mt-1">
                          345
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </a>
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Performance
              </h6>
              <p className="text-black-50 mb-0">
                Portfolio performance for selected period.
              </p>
              <div className="pt-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="font-weight-bold">Orders</div>
                  <div className="font-size-lg font-weight-bold text-first">
                    345
                  </div>
                </div>
                <div>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={65}
                  />
                  <div className="align-box-row progress-bar--label mt-2 text-muted">
                    <div>Target</div>
                    <div className="ml-auto">100%</div>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="font-weight-bold">Customers</div>
                  <div className="font-size-lg font-weight-bold text-warning">
                    435
                  </div>
                </div>
                <div>
                  <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={44}
                  />
                  <div className="align-box-row progress-bar--label mt-2 text-muted">
                    <div>Target</div>
                    <div className="ml-auto">100%</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="timeline-list">
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      1991
                    </h4>
                    <p>The World Wide Web goes live with its first web page.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Java exam day
                    </h4>
                    <p>Bill Clinton's presidential scandal makes it online.</p>
                    <div className="avatar-wrapper-overlap mt-2 mb-1">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Business investor meeting
                    </h4>
                    <p>
                      Mosaic, the first graphical browser, is introduced to the
                      average consumer.
                    </p>
                    <div className="mt-3">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-fluid rounded mr-3 shadow-sm"
                          src={people1}
                          width="70"
                        />
                      </a>
                      <a href="#/" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-fluid rounded shadow-sm"
                          src={people3}
                          width="70"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Learning round table gathering
                    </h4>
                    <p>First ever iPod launches.</p>
                    <div className="mt-2">
                      <Button size="small" variant="contained" color="primary">
                        Submit Report
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      2003
                    </h4>
                    <p>MySpace becomes the most popular social network.</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </PerfectScrollbar>
        </div>
        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
        <div
          onClick={toggleSidebarMenu2}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen2
          })}
        />
      </div>
    </Fragment>
  );
};
export default LivePreviewExample;
