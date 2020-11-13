import React, {Fragment} from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
} from '@material-ui/core';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SidebarUserbox = props => {
  const {sidebarToggle, sidebarHover, user} = props;

  return (
    <Fragment>
      <Box
        className={clsx('app-sidebar-userbox', {
          'app-sidebar-userbox--collapsed': sidebarToggle && !sidebarHover
        })}>
        <Avatar
          alt={user.username}
          src={user.userProfile && user.userProfile.photo || ""}
          className="app-sidebar-userbox-avatar"
        />
        <Box className="app-sidebar-userbox-name">
          <Box>
            <b>{user.username}</b>
          </Box>
          {/*<Box className="app-sidebar-userbox-description">*/}
          {/*  Senior Web Developer*/}
          {/*</Box>*/}
          <Box className="app-sidebar-userbox-btn-profile pt-2">
            <Button
              size="small"
              color="secondary"
              variant="contained"
              className="text-white"
              href="/PagesProfile">
              View profile
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

SidebarUserbox.prototype = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarHover: state.ThemeOptions.sidebarHover,
  user: state.auth.user,
});

export default connect(mapStateToProps)(SidebarUserbox);
