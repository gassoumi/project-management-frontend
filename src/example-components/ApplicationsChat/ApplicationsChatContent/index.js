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
  TextField
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

const LivePreviewExample = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  return (
    <Fragment>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
          <Fab onClick={toggleSidebarMenu} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Fab>
          <Fab onClick={toggleSidebarMenu2} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </Fab>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__lg order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="px-4 pt-4">
              <Typography
                color="primary"
                component="div"
                className="d-flex align-items-center">
                <div className="text-uppercase font-size-sm text-first font-weight-bold">
                  Channels tags
                </div>
                <div className="ml-auto font-size-xs">
                  <Tooltip arrow title="Add new channel" placement="left">
                    <IconButton size="small" className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'plus-circle']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </Typography>
              <List>
                <ListItem button className="rounded-sm">
                  # development
                </ListItem>
                <ListItem button className="rounded-sm">
                  # angular_themes
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span># react_templates</span>
                  <span className="ml-auto badge badge-first">23</span>
                </ListItem>
                <ListItem button className="rounded-sm">
                  # vue_dashboards
                </ListItem>
              </List>
              <div className="divider my-3" />
              <Typography
                color="primary"
                component="div"
                className="d-flex align-items-center">
                <div className="text-uppercase font-size-sm text-first font-weight-bold">
                  Members list
                </div>
              </Typography>
              <List>
                <ListItem button className="rounded-sm">
                  <div className="align-box-row w-100">
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <span className="badge-circle badge badge-success">
                        Online
                      </span>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block">
                        Adella Galen
                        <small className="d-block text-black-50">
                          (Galen@example.com)
                        </small>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="text-right d-block font-size-sm"
                      />
                    </div>
                  </div>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <div className="align-box-row w-100">
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <div className="badge badge-primary badge-circle">
                        Offline
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block">
                        Mandy Erle
                        <small className="d-block text-black-50">
                          (Mandyrle@gma.com)
                        </small>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="text-right d-block font-size-sm"
                      />
                    </div>
                  </div>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <div className="align-box-row w-100">
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <span className="badge-circle badge badge-success">
                        Online
                      </span>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block">
                        John Doe
                        <small className="d-block text-black-50">
                          (Galen@example.com)
                        </small>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="text-right d-block font-size-sm"
                      />
                    </div>
                  </div>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <div className="align-box-row w-100">
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <span className="badge-circle badge badge-warning">
                        Idle
                      </span>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block">
                        Napoleon Stacey
                        <small className="d-block text-black-50">
                          (Napoleon@test.com)
                        </small>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="text-right d-block font-size-sm"
                      />
                    </div>
                  </div>
                </ListItem>
              </List>
              <div className="divider my-3" />
              <Typography
                color="primary"
                component="div"
                className="d-flex pb-3 align-items-center">
                <div className="text-uppercase font-size-sm text-first font-weight-bold">
                  Stats
                </div>
              </Typography>
              <Grid container spacing={4} className="font-size-xs">
                <Grid item xs={6}>
                  <Card className="bg-secondary text-center mb-4 p-3">
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
                  <Card className="bg-secondary text-center mb-4 p-3">
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
              <Card className="bg-secondary card-box mb-4">
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
              <Card className="bg-secondary card-box mb-4">
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
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <div className="card-header app-inner-content-layout--main__header rounded-0 bg-white p-4 border-bottom">
            <div className="card-header--title">
              <small>Messenger</small>
              <b>Talking to Kate</b>
            </div>
            <div className="card-header--actions">
              <Tooltip arrow title="Send new message">
                <Fab size="small" color="secondary">
                  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </Fab>
              </Tooltip>
            </div>
          </div>
          <PerfectScrollbar>
            <div className="chat-wrapper p-3">
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Hello, John.</p>
                      <p>This is Kenny. How are you?</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Hey, Kate.</p>
                      <p>I'm attaching the pictures you requested below:</p>
                      <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                        <div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded m-1 shadow-sm"
                              src={people1}
                              width="54"
                            />
                          </a>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded m-1 shadow-sm"
                              src={people2}
                              width="54"
                            />
                          </a>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Thanks.</p>
                      <p>Really appreciate it!</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Bye for now, talk to you later.</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Almost forgot about your tasks.</p>
                      <p>
                        <b>Check the links below:</b>
                      </p>
                      <Card className="bg-premium-dark p-2 mt-3 mb-2">
                        <div className="text-center py-2">
                          <Tooltip arrow title="Menu Example">
                            <IconButton
                              color="primary"
                              className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['fas', 'lemon']} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Menu Example">
                            <IconButton
                              color="primary"
                              className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <AddCircleTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Menu Example">
                            <IconButton
                              color="primary"
                              className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'gem']} />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:03 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
          <div className="card-footer bg-white p-4">
            <div>
              <TextField
                variant="outlined"
                margin="dense"
                fullWidth
                placeholder="Write your message and hit enter to send..."
              />
            </div>
            <div className="align-box-row mt-3">
              <div className="align-items-center">
                <Tooltip arrow title="Add audio file">
                  <IconButton color="default" className="text-success">
                    <FontAwesomeIcon
                      icon={['far', 'file-audio']}
                      className="font-size-xl"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Add video file">
                  <IconButton color="default" className="text-danger">
                    <FontAwesomeIcon
                      icon={['far', 'file-video']}
                      className="font-size-xl"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Upload Documents">
                  <IconButton color="default" className="text-info">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="font-size-xl"
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="ml-auto">
                <Button size="small" variant="contained" color="primary">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar pos-r order-2 order-lg-3 bg-white app-inner-content-layout--sidebar__sm',
            { 'layout-sidebar-open': isSidebarMenuOpen2 }
          )}>
          <Typography
            color="primary"
            component="div"
            className="d-flex p-3 align-items-center">
            <div className="text-uppercase font-size-sm text-first font-weight-bold">
              Friends list
            </div>
            <div className="ml-auto font-size-xs">
              <Tooltip arrow title="Add new channel" placement="left">
                <IconButton size="small" className="text-success">
                  <FontAwesomeIcon
                    icon={['fas', 'plus-circle']}
                    className="font-size-sm"
                  />
                </IconButton>
              </Tooltip>
            </div>
          </Typography>
          <PerfectScrollbar>
            <List>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="badge badge-primary badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Mandy Erle
                      <div className="d-block text-black-50">3 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      John Doe
                      <div className="d-block text-black-50">2 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-warning">
                      Idle
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Napoleon Stacey
                      <small className="d-block text-black-50">
                        (Napoleon@test.com)
                      </small>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="badge badge-primary badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Mandy Erle
                      <div className="d-block text-black-50">3 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Adella Galen
                      <div className="d-block text-black-50">5 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="badge badge-primary badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Mandy Erle
                      <div className="d-block text-black-50">3 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      John Doe
                      <div className="d-block text-black-50">2 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-warning">
                      Idle
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Napoleon Stacey
                      <small className="d-block text-black-50">
                        (Napoleon@test.com)
                      </small>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="badge badge-primary badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      Mandy Erle
                      <div className="d-block text-black-50">3 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem button>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <span className="badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black">
                      John Doe
                      <div className="d-block text-black-50">2 hours ago</div>
                    </span>
                  </div>
                </div>
              </ListItem>
            </List>
          </PerfectScrollbar>
          <div className="app-content--sidebar__footer p-2 d-none d-lg-block">
            <Typography
              color="primary"
              component="div"
              className="d-flex pt-2 align-items-center">
              <div className="text-uppercase font-size-sm text-first font-weight-bold">
                Quick actions
              </div>
            </Typography>
            <List>
              <ListItem button className="rounded-sm py-0 px-2">
                <div className="nav-link-icon d-40 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={['far', 'file-alt']} />
                </div>
                <span>Receive files</span>
              </ListItem>
              <ListItem button className="rounded-sm py-0 px-2">
                <div className="nav-link-icon d-40 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <span>Recent messages</span>
              </ListItem>
              <ListItem button className="rounded-sm text-danger py-0 px-2">
                <div className="nav-link-icon d-40 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={['far', 'trash-alt']} />
                </div>
                <span>Clear conversation</span>
              </ListItem>
            </List>
          </div>
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
