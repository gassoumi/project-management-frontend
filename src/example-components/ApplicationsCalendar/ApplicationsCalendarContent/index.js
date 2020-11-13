import React, { Fragment, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  IconButton,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import CalendarsFullWidthBasic from '../../../example-components/Calendars/CalendarsFullWidthBasic';

const LivePreviewExample = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  return (
    <Fragment>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
          <Fab onClick={toggleSidebarMenu} color="primary" size="small">
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-v']}
              className="font-size-sm"
            />
          </Fab>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar app-inner-content-layout--sidebar__lg bg-secondary border-right',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="px-4 pt-4 pb-3">
              <Typography
                color="primary"
                component="div"
                className="d-flex align-items-center">
                <div className="text-first font-weight-bold">
                  Calendar Events
                </div>
                <div className="ml-auto font-size-xs">
                  <Fab size="small" color="secondary">
                    <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                  </Fab>
                </div>
              </Typography>
              <List>
                <ListItem button className="rounded-sm">
                  <span className="badge-circle-inner border-0 mr-2 badge badge-success">
                    1
                  </span>
                  Upcoming events
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span className="badge-circle-inner border-0 mr-2 badge badge-warning">
                    2
                  </span>
                  Planned holidays
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span className="badge-circle-inner border-0 mr-2 badge badge-first">
                    3
                  </span>
                  Meetups near you
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span className="badge-circle-inner border-0 mr-2 badge badge-danger">
                    4
                  </span>
                  Other events
                </ListItem>
              </List>
            </div>
            <div className="divider mt-2" />
            <div className="p-4 bg-white">
              <Typography
                color="primary"
                component="div"
                className="d-flex pb-3 align-items-center">
                <div className="text-first font-weight-bold">Statistics</div>
                <div className="ml-auto font-size-xs">
                  <Tooltip arrow title="Refresh stats" placement="left">
                    <IconButton size="small" className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'cog']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </Typography>
              <Grid container spacing={4} className="font-size-xs">
                <Grid item xs={6}>
                  <Card className="bg-light text-center my-2 p-3">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">345</b>
                      <span className="text-black-50 d-block">friends</span>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className="bg-light text-center my-2 p-3">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,693</b>
                      <span className="text-black-50 d-block">messages</span>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
            <Divider />
            <div className="p-4">
              <Typography
                color="primary"
                component="div"
                className="d-flex align-items-center">
                <div className="text-first font-weight-bold">
                  Upcoming meetups
                </div>
              </Typography>
              <Card className="card-box mt-3 mb-4">
                <div className="card-indicator bg-first" />
                <CardContent className="px-4 py-3">
                  <div className="pb-3 d-flex justify-content-between">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      Presentation site design
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="badge badge-primary px-3">On Hold</div>
                    <div className="font-size-sm text-danger px-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1"
                      />
                      14:22
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-box mb-4">
                <div className="card-indicator bg-success" />
                <CardContent className="px-4 py-3">
                  <div className="pb-3 d-flex justify-content-between">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      Create UI mockups
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="px-3 badge badge-success">Fixed</div>
                    <div className="font-size-sm text-dark px-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1"
                      />
                      09:41
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="contained"
                className="w-100"
                size="small"
                color="primary">
                Add more events
              </Button>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main bg-white p-0 card-box">
          <div className="app-inner-content-layout--main__header rounded-0 card-header bg-white p-4 border-bottom">
            <div className="card-header--title">
              <small>Events</small>
              <b className="font-size-lg">Events calendar</b>
            </div>
            <div className="card-header--actions">
              <Tooltip placement="left" title="Add new event">
                <IconButton size="medium" color="primary">
                  <FontAwesomeIcon
                    icon={['fas', 'plus']}
                    className="font-size-md"
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <PerfectScrollbar>
            <div className="p-4">
              <CalendarsFullWidthBasic />
            </div>
          </PerfectScrollbar>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
