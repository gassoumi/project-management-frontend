import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  FormControl,
  Divider
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import { Users, Layers } from 'react-feather';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={4}>{children}</Box>}
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

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Card className="card-box bg-white p-3 mb-4">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab className="py-3" label="Timeline" />
              <Tab className="py-3" label="Tasks" />
              <Tab className="py-3" label="Reports" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                    <div className="display-3 text-black font-weight-bold">
                      31
                    </div>
                    <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
                    <div className="font-weight-bold font-size-sm text-uppercase">
                      Implemented
                      <br />
                      bugfixes
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                    <div className="display-3 text-black font-weight-bold">
                      68
                    </div>
                    <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                    <div className="font-weight-bold font-size-sm text-uppercase">
                      Unresolved
                      <br />
                      tickets
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                    <div className="display-3 text-black font-weight-bold">
                      57
                    </div>
                    <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                    <div className="font-weight-bold font-size-sm text-uppercase">
                      Support
                      <br />
                      requests
                    </div>
                  </Card>
                </Grid>
              </Grid>
              <Card className="card-box bg-secondary mb-4">
                <CardContent className="p-3">
                  <div className="text-left">
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={['fas', 'lemon']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg text-black">3,568</b>
                      <span className="text-black-50 pl-1">clicks</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <LinearProgress color="primary" value={85} />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center">
                <Button variant="outlined" color="primary">
                  Create new report
                </Button>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card className="m-0 bg-secondary border-0">
                <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                  <div className="text-muted text-center mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="text-center">
                    <Button variant="outlined" className="mr-2 text-facebook">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </span>
                      <span className="btn-wrapper--label">Facebook</span>
                    </Button>
                    <Button variant="outlined" className="ml-2 text-twitter">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </span>
                      <span className="btn-wrapper--label">Twitter</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="text-center text-black-50 mb-3">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form className="px-5">
                    <div className="mb-3">
                      <FormControl className="w-100">
                        <InputLabel htmlFor="input-with-icon-adornment">
                          Email address
                        </InputLabel>
                        <Input
                          fullWidth
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <MailOutlineTwoToneIcon />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div className="mb-3">
                      <FormControl className="w-100">
                        <InputLabel htmlFor="standard-adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          fullWidth
                          type="password"
                          startAdornment={
                            <InputAdornment position="start">
                              <LockTwoToneIcon />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div className="w-100">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked1}
                            onChange={handleChange1}
                            value="checked1"
                            color="primary"
                          />
                        }
                        label="Remember me"
                      />
                    </div>
                    <div className="text-center">
                      <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        className="my-2">
                        Sign in
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card className="card-box bg-secondary mb-4">
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="card-box bg-secondary mb-4">
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
                </Grid>
              </Grid>
              <div className="timeline-list">
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-danger text-white">
                      <FontAwesomeIcon icon={['far', 'gem']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      1998
                    </h4>
                    <p>Bill Clinton's presidential scandal makes it online.</p>
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
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
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
                      <span className="text-info ml-2 badge badge-neutral-info">
                        New
                      </span>
                    </h4>
                    <p>
                      Mosaic, the first graphical browser, is introduced to the
                      average consumer.
                    </p>
                    <div className="mt-2">
                      <Button size="small" variant="contained" color="primary">
                        Submit Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <h5 className="mb-0 py-2 font-weight-bold">Latest actions</h5>
              </div>
              <div className="card-header--actions">
                <Box>
                  <Button color="primary" size="small">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </Button>
                </Box>
              </div>
            </div>
            <CardContent className="p-0">
              <List className="mb-2">
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'bell']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        Customers
                      </div>
                      <div className="text-dark opacity-5">
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        New articles
                      </div>
                      <div className="text-dark opacity-5">
                        I am alone, and feel the charm of existence in this
                        spot.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="py-3 border-0">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold d-block opacity-8">
                        Blog posts
                      </div>
                      <div className="text-dark opacity-5">
                        When, while the lovely valley teems with vapour around
                        me.
                      </div>
                    </div>
                  </div>
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <Card className="bg-night-sky border-0 mb-4 p-4 bg-white">
            <div className="d-flex flex-wrap">
              <div className="w-50 p-2">
                <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold font-size-lg text-black">
                      Projects
                    </div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Manage servers
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-50 p-2">
                <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                  <div>
                    <Layers className="h1 d-block my-2 text-white" />
                    <div className="font-weight-bold font-size-lg text-black">
                      Tasks
                    </div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Pending items
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LivePreviewExample;
