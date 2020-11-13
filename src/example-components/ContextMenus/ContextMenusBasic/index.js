import React, { Fragment } from 'react';
import { Typography, Button, ListItem, Divider } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const attributes = {
  className: 'rounded'
};
export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="text-center">
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger1">
            <Button color="primary" className="m-2">
              Right click menu 1
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container bg-white shadow-lg rounded p-3 dropdown-menu-lg"
            id="ContextMenuTrigger1">
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Dashboard</span>
              </ListItem>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'building']} />
                </div>
                <span>Accounts</span>
              </ListItem>
            </MenuItem>
            <MenuItem divider />
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <span>Reports</span>
              </ListItem>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Deliveries</span>
              </ListItem>
            </MenuItem>
          </ContextMenu>
        </span>
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger2">
            <Button color="primary" className="m-2">
              Right click menu 2
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container bg-white shadow-sm rounded-sm dropdown-menu-lg p-3"
            id="ContextMenuTrigger2">
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <span>My Account</span>
              </ListItem>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <ListItem button className="rounded-sm">
                <span>Profile settings</span>
                <span className="ml-auto badge badge-first">23</span>
              </ListItem>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <Typography
                className="text-black py-2 px-3 text-left font-weight-bold"
                variant="body2"
                component="div">
                Heading
              </Typography>
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </ListItem>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <Divider className="my-2" />
              <ListItem button className="rounded-sm">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </ListItem>
            </MenuItem>
          </ContextMenu>
        </span>
      </div>
    </Fragment>
  );
}
