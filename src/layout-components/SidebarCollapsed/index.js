import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Hidden,
  Drawer,
  IconButton,
  AppBar,
  Paper,
  Box,
  Button,
  Tooltip
} from '@material-ui/core';

import {connect} from 'react-redux';
import {setSidebarToggleMobile} from '../../redux/reducers/ThemeOptions';

import SidebarHeader from '../SidebarHeader';
import SidebarUserbox from '../SidebarUserbox';
import SidebarMenu from '../SidebarMenu';

import navItems from '../Sidebar/navItems';

import {NavLink as RouterLink} from 'react-router-dom';

import projectLogo from '../../assets/images/logo.png';

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoteIcon from '@material-ui/icons/Note';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatIcon from '@material-ui/icons/ChatOutlined';

const SidebarCollapsed = props => {
  const closeDrawer = () => setSidebarToggleMobile(!sidebarToggleMobile);

  const sidebarMenuContent = (
    <div>
      {navItems.map(list => (
        <SidebarMenu
          component="div"
          key={list.label}
          pages={list.content}
          title={list.label}
        />
      ))}
    </div>
  );

  const {setSidebarToggleMobile, sidebarToggleMobile} = props;

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          className="app-sidebar-wrapper-lg">
          <SidebarHeader/>
          <PerfectScrollbar>
            <SidebarUserbox/>
            {sidebarMenuContent}
          </PerfectScrollbar>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper elevation={7} square className="app-sidebar-collapsed-wrapper">
          <AppBar color="secondary" position="relative" elevation={0}>
            <div className="sidebar-collapsed-logo">
              <Box
                className="header-logo-wrapper"
                title="Digital sprint">
                <Link
                  to="/dashboard"
                  className="header-logo-wrapper-link">
                  <IconButton
                    color="primary"
                    size="medium"
                    className="header-logo-wrapper-btn">
                    <img
                      className="app-sidebar-logo"
                      alt="Digital sprint"
                      src={projectLogo}
                    />
                  </IconButton>
                </Link>
              </Box>
            </div>
          </AppBar>
          <div className="app-sidebar--content">
            <PerfectScrollbar>
              <ul className="sidebar-menu-collapsed">
                <li>
                  <Tooltip arrow placement="right" title="Dashboard">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/dashboard">
                      <span>
                        <DashboardTwoToneIcon
                          // className="app-sidebar-btn-icon"
                        />
                        {/*<Settings className="app-sidebar-btn-icon"/>*/}
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Projets">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/project">
                      <span>
                        {/*<CloudDrizzle className="app-sidebar-btn-icon"/>*/}
                        <LockOpenIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Sprint">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/sprint">
                      <span>
                        {/*<Search className="app-sidebar-btn-icon"/>*/}
                        <EventNoteIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Taches">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/task">
                      <span>
                        {/*<Briefcase className="app-sidebar-btn-icon"/>*/}
                        <AssignmentIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Story">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/note">
                      <span>
                        {/*<Users className="app-sidebar-btn-icon"/>*/}
                        <NoteIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Problems">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/problem">
                      <span>
                        {/*<LifeBuoy className="app-sidebar-btn-icon"/>*/}
                        <ErrorIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Documents">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/document">
                      <span>
                        {/*<Coffee className="app-sidebar-btn-icon"/>*/}
                        <DescriptionIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Discussion">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/discussion">
                      <span>
                        {/*<Bell className="app-sidebar-btn-icon"/>*/}
                        <ChatIcon
                          // className="app-sidebar-btn-icon"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
              </ul>
              <div className="text-center mb-2">
                <Tooltip arrow placement="right" title="Retour au dashboard">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="text-white text-center font-size-lg d-40"
                    component={RouterLink}
                    to="/dashboard">
                    <FontAwesomeIcon icon={['fas', 'arrow-left']}/>
                  </Button>
                </Tooltip>
              </div>
            </PerfectScrollbar>
          </div>
        </Paper>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarShadow: state.ThemeOptions.sidebarShadow,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollapsed);
