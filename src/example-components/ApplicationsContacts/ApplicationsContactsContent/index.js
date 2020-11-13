import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';
import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';
import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';

import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';

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
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className="app-inner-content-layout app-inner-content-layout-fixed bg-white">
        <div className="d-flex d-lg-none p-4 bg-secondary order-0 justify-content-end align-items-center">
          <Fab onClick={toggleSidebarMenu2} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </Fab>
        </div>
        <div className="app-inner-content-layout--main">
          <PerfectScrollbar>
            <div className="p-4">
              <h5 className="display-3 mb-3 font-weight-bold text-center">
                Contacts
              </h5>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                onChange={handleChange}>
                <Tab label="Followers" />
                <Tab label="Subscribers" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={people1} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">Patrick Hills</h3>
                        <p className="card-text mb-3">
                          Junior Software Developer
                        </p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={people2} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">Carol Parker</h3>
                        <p className="card-text mb-3">Lead UI Designer</p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={people3} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">Robert Pose</h3>
                        <p className="card-text mb-3">
                          Senior Software Developer
                        </p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={hero3} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">Kate Taylor</h3>
                        <p className="card-text mb-3">Frontend Developer</p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={hero4} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">
                          Napoleon Stacey
                        </h3>
                        <p className="card-text mb-3">QA Engineer</p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="mb-4">
                      <div className="card-img-wrapper">
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </div>
                        <img alt="..." className="card-img-top" src={hero8} />
                      </div>
                      <div className="card-body text-center card-body-avatar">
                        <div className="avatar-icon-wrapper avatar-icon-xl">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <h3 className="card-title mt-4 mb-1">Mandy Karol</h3>
                        <p className="card-text mb-3">Software Developer</p>
                        <div>
                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-facebook mr-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </span>
                          </IconButton>

                          <IconButton
                            variant="outlined"
                            className="d-50 p-0 text-twitter ml-1">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={people2}
                        />
                      </a>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={people1}
                        />
                      </a>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={people3}
                        />
                      </a>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={hero4}
                        />
                      </a>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={hero3}
                        />
                      </a>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card-transparent mb-4">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <Tooltip arrow title="View messages">
                              <Fab color="secondary" className="mr-1">
                                <FontAwesomeIcon
                                  icon={['far', 'comment-dots']}
                                />
                              </Fab>
                            </Tooltip>
                            <Tooltip arrow title="Send email">
                              <Fab color="secondary" className="ml-1">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge badge-danger">Danger</div>
                        </div>
                        <img
                          alt="..."
                          className="card-img-top rounded"
                          src={hero2}
                        />
                      </a>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar mr-0 rounded-sm my-0 mr-lg-3 my-lg-3 app-inner-content-layout--sidebar__lg pos-r bg-white',
            { 'layout-sidebar-open': isSidebarMenuOpen2 }
          )}>
          <PerfectScrollbar>
            <div className="p-4">
              <Typography
                color="primary"
                component="div"
                className="d-flex pb-3 align-items-center">
                <div className="text-first font-weight-bold">
                  Latest subscribers
                </div>
                <div className="ml-auto font-size-xs">
                  <Tooltip arrow title="Refresh stats" placement="left">
                    <IconButton size="small" className="text-primary">
                      <FontAwesomeIcon
                        icon={['fas', 'plus-circle']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </Typography>
              <div className="py-2">
                <div className="align-box-row">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar1} />
                    </div>
                  </a>
                  <div className="pl-2">
                    <span className="d-block">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Adella Galen
                      </a>
                      <small className="d-block text-black-50">
                        (Galen@example.com)
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="align-box-row">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="avatar-icon-wrapper avatar-icon-md">
                    <div className="badge badge-primary badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </a>
                  <div className="pl-2">
                    <span className="d-block">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Mandy Erle
                      </a>
                      <small className="d-block text-black-50">
                        (Mandyrle@gma.com)
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="align-box-row">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </a>
                  <div className="pl-2">
                    <span className="d-block">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        John Doe
                      </a>
                      <small className="d-block text-black-50">
                        (Galen@example.com)
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="align-box-row">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-warning">
                      Idle
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </a>
                  <div className="pl-2">
                    <span className="d-block">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        Napoleon Stacey
                      </a>
                      <small className="d-block text-black-50">
                        (Napoleon@test.com)
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="divider my-4" />
              <Typography
                color="primary"
                component="div"
                className="d-flex pb-3 align-items-center">
                <div className="text-first font-weight-bold">Positions</div>
                <div className="ml-auto font-size-xs">
                  <Tooltip arrow title="Refresh stats" placement="left">
                    <IconButton size="small" className="text-primary">
                      <FontAwesomeIcon
                        icon={['fas', 'plus-circle']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </Typography>
              <div className="py-2">
                <div className="d-flex justify-content-between">
                  <span className="d-block">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      Software developer
                    </a>
                  </span>
                  <span className="badge badge-dark">22</span>
                </div>
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between">
                  <span className="d-block">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      QA Engineer
                    </a>
                  </span>
                  <span className="badge badge-dark">23</span>
                </div>
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between">
                  <span className="d-block">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      UX Specialist
                    </a>
                  </span>
                  <span className="badge badge-dark">22</span>
                </div>
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between">
                  <span className="d-block">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      Frontend Architect
                    </a>
                  </span>
                  <span className="badge badge-dark">15</span>
                </div>
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between">
                  <span className="d-block">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      DevOps Manager
                    </a>
                  </span>
                  <span className="badge badge-dark">5</span>
                </div>
              </div>
              <div className="divider my-4" />
              <Card className="card-box mt-4 bg-midnight-bloom text-light">
                <CardContent className="p-3">
                  <div className="align-box-row align-items-start">
                    <div className="font-weight-bold">
                      <small className="text-white-50 d-block mb-1 text-uppercase">
                        Contacts
                      </small>
                      <span className="font-size-xxl mt-1">23,274</span>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-white text-center text-primary font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="text-warning"
                    />
                    <span className="text-warning px-1">7.4%</span>
                    <span className="text-white-50">same as before</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </PerfectScrollbar>
        </div>
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
