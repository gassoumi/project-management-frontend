import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';
import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';
import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';
import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';
import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';
import hero6 from '../../../assets/images/hero-bg/hero-6.jpg';

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
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <div className="bg-midnight-bloom p-3 rounded text-white h-100">
            <div className="d-flex align-items-start justify-content-between">
              <div className="avatar-icon-wrapper d-100">
                <span className="badge-circle badge badge-success">Online</span>
                <div className="avatar-icon d-100">
                  <img alt="..." src={avatar7} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold font-size-lg d-flex align-items-center mt-2 mb-0">
              <span>Kate Stacey</span>
            </div>
            <p className="mb-4 font-size-md text-white-50">@kateST</p>
            <Button
              size="medium"
              variant="contained"
              color="default"
              className="mr-3">
              Send message
            </Button>
            <Tooltip arrow title="Add to favourites">
              <Fab size="small" color="primary">
                <FontAwesomeIcon icon={['fas', 'star']} />
              </Fab>
            </Tooltip>
            <p className="text-white-50 mb-0 py-4">
              Short profile bio description here. Pleasure of the moment, so
              blinded by desire, that they cannot foresee...{' '}
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="text-white">
                Read more
              </a>
            </p>

            <div className="pt-3 pb-4">
              <Grid container spacing={4} className=" text-center">
                <Grid xs={4} item>
                  <b className="d-block font-weight-bold font-size-lg">456</b>
                  <small className="text-uppercase text-white-50">
                    friends
                  </small>
                </Grid>
                <Grid xs={4} item>
                  <b className="d-block font-weight-bold font-size-lg">1.3k</b>
                  <small className="text-uppercase text-white-50">
                    updates
                  </small>
                </Grid>
                <Grid xs={4} item>
                  <b className="d-block font-weight-bold font-size-lg">34</b>
                  <small className="text-uppercase text-white-50">
                    followers
                  </small>
                </Grid>
              </Grid>
            </div>
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Followers</span>
              <div className="ml-auto font-size-xs">
                <Tooltip arrow title="Add new subscriber">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="py-2">
              <div className="align-box-row">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <span className="badge-circle badge badge-success">
                    Online
                  </span>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar1} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Adella Galen
                    </a>
                    <small className="d-block text-white-50">
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
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <div className="badge badge-primary badge-circle">
                    Offline
                  </div>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar2} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Mandy Erle
                    </a>
                    <small className="d-block text-white-50">
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
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <span className="badge-circle badge badge-success">
                    Online
                  </span>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar3} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      John Doe
                    </a>
                    <small className="d-block text-white-50">
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
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <span className="badge-circle badge badge-warning">Idle</span>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar4} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Napoleon Stacey
                    </a>
                    <small className="d-block text-white-50">
                      (Napoleon@test.com)
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="divider opacity-2 my-4" />
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Mutual connections</span>
            </div>
            <div className="py-2">
              <div className="avatar-wrapper-overlap mb-3">
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar7} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar6} />
                  </div>
                </div>
              </div>
            </div>
            <small className="text-white-50">
              <b className="d-block pb-1 text-white-50">
                You have 25 mutual connections
              </b>
              You and John both know Kate Erle, Napoleon Stacey, and 23 others
            </small>
            <div className="divider opacity-2 my-4" />
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Job titles</span>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    Software developer
                  </a>
                </span>
                <span className="badge badge-dark">22</span>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    QA Engineer
                  </a>
                </span>
                <span className="badge badge-dark">23</span>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    UX Specialist
                  </a>
                </span>
                <span className="badge badge-dark">22</span>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    Frontend Architect
                  </a>
                </span>
                <span className="badge badge-dark">15</span>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    DevOps Manager
                  </a>
                </span>
                <span className="badge badge-dark">5</span>
              </div>
            </div>
            <div className="divider opacity-3 my-4" />
            <Card className="card-box mt-4 mb-4 bg-white text-light">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Contacts
                    </small>
                    <span className="font-size-xxl text-black mt-1">
                      23,274
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-midnight-bloom text-center d-flex align-items-center justify-content-center text-white font-size-xl d-50 rounded-circle">
                      <AddCircleTwoToneIcon />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-warning"
                  />
                  <span className="text-warning px-1">12.1%</span>
                  <span className="text-black-50">same as before</span>
                </div>
              </CardContent>
            </Card>
            <Grid container spacing={4} className="font-size-xs">
              <Grid item xs={6}>
                <Card className="text-center my-2 p-3">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg text-black">345</b>
                    <span className="text-black-50 d-block">friends</span>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className="text-center my-2 p-3">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-danger"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg text-black">2,693</b>
                    <span className="text-black-50 d-block">messages</span>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            onChange={handleChange}>
            <Tab label="Updates" />
            <Tab label="New posts" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container spacing={4} className="mt-3">
              <Grid item xs={12} lg={6}>
                <div className="rounded card card-box bg-white mb-4">
                  <div className="p-4">
                    <div className="align-box-row">
                      <div className="font-weight-bold">
                        <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                          New Accounts
                        </small>
                        <span className="font-size-xxl ">586,356</span>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle align-items-center d-flex justify-content-center">
                          <FontAwesomeIcon icon={['far', 'lightbulb']} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger"
                      />
                      <span className="text-success pr-1">15.4%</span>
                      <span className="text-black-50">increase</span>
                    </div>
                    <div className="mt-4">
                      <Button variant="outlined" color="primary">
                        <span className="btn-wrapper--label">View report</span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'angle-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className="rounded card card-box bg-white mb-4">
                  <div className="p-4">
                    <div className="align-box-row">
                      <div className="font-weight-bold">
                        <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                          New followers
                        </small>
                        <span className="font-size-xxl ">4,725</span>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle align-items-center d-flex justify-content-center">
                          <FontAwesomeIcon icon={['far', 'thumbs-up']} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger"
                      />
                      <span className="text-warning pr-1">-5.34%</span>
                      <span className="text-black-50">decrease</span>
                    </div>
                    <div className="mt-4">
                      <Button variant="outlined" color="primary">
                        <span className="btn-wrapper--label">View report</span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'angle-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Card className="card-box bg-white mb-4">
              <CardContent className="p-3">
                <Grid container spacing={4}>
                  <Grid item xs={6} lg={3}>
                    <div className="text-center">
                      <span className="text-black-50 d-block">Users</span>
                      <b className="font-size-xxl">1,466</b>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <div className="text-center">
                      <span className="text-black-50 d-block">Revenue</span>
                      <b className="font-size-xxl text-danger">$6,465</b>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3} className="align-box-row">
                    <div className="w-100 mt-3 mt-md-0">
                      <div className="mb-1">
                        <span className="text-black-50">Progress:</span>
                        <span className="text-warning">-5</span>
                      </div>
                      <div className="progress">
                        <div
                          aria-valuemax="100"
                          aria-valuemin="0"
                          aria-valuenow="43"
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: '43%' }}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <span>Profiles</span>
                  <b className="font-size-lg d-flex align-items-center">
                    Latest activities
                  </b>
                </div>
                <Box className="card-header--actions">
                  <Tooltip arrow title="View options">
                    <Fab color="primary" size="small">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </Fab>
                  </Tooltip>
                </Box>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="align-box-row">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-md text-white">
                      <span className="badge-circle badge badge-success">
                        Online
                      </span>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar1} />
                      </div>
                    </a>
                    <div className="pl-2">
                      <span className="d-block">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-back">
                          Adella Galen
                        </a>
                        <span className="d-block text-back-50">
                          (Galen@example.com)
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="ml-auto text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="opacity-6 mr-2"
                    />
                    12 hours ago
                  </span>
                </div>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure.
                </p>

                <p>
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it?
                </p>

                <div className="rounded p-4 bg-secondary">
                  <b className="d-block pb-1">Job description title</b>
                  <p>But who has any right to find fault with a man.</p>
                  <span className="d-block text-black-50">
                    Posted in San Francisco, CA
                  </span>
                </div>
              </CardContent>
              <div className="card-footer d-flex justify-content-between align-items-center align-content-center">
                <Tooltip
                  arrow
                  title="There are 653 new comments available!"
                  placement="top">
                  <Button size="small" color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'comments']} />
                    </span>
                    <span className="btn-wrapper--label ml-1">653</span>
                  </Button>
                </Tooltip>
                <div>
                  <span className="text-muted mr-1">(21)</span>
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning"
                  />
                </div>
              </div>
            </Card>
            <Card className="card-box">
              <div className="card-header">
                <div className="card-header--title">
                  <span>Companies</span>
                  <b className="font-size-lg d-flex align-items-center">
                    Social interests
                  </b>
                </div>
                <Box className="card-header--actions">
                  <Tooltip arrow title="View options">
                    <Fab color="primary" size="small">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </Fab>
                  </Tooltip>
                </Box>
              </div>
              <div className="px-5 pt-5">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={12} lg={6}>
                    <div className="feature-box d-flex align-items-start text-black mb-4">
                      <div>
                        <div className="bg-brand-facebook text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </div>
                      </div>
                      <div className="pl-3">
                        <h3 className="font-size-lg font-weight-bold">
                          Facebook
                        </h3>
                        <p className="text-black-50 mt-2">
                          Who are so beguiled and demoralized by the charms of
                          pleasure.
                        </p>
                        <Button size="small" variant="outlined" color="primary">
                          View profile
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} lg={6}>
                    <div className="feature-box d-flex align-items-start text-black mb-4">
                      <div>
                        <div className="bg-brand-github text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['fab', 'github']} />
                        </div>
                      </div>
                      <div className="pl-3">
                        <h3 className="font-size-lg font-weight-bold">
                          Github
                        </h3>
                        <p className="text-black-50 mt-2">
                          Which toil and pain can procure him some great
                          pleasure.
                        </p>
                        <Button size="small" variant="outlined" color="primary">
                          View profile
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} lg={6}>
                    <div className="feature-box d-flex align-items-start text-black mb-4">
                      <div>
                        <div className="bg-brand-twitter text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </div>
                      </div>
                      <div className="pl-3">
                        <h3 className="font-size-lg font-weight-bold">
                          Twitter
                        </h3>
                        <p className="text-black-50 mt-2">
                          To take a trivial example, which of us avoids
                          pleasure, some great pleasure.
                        </p>
                        <Button size="small" variant="outlined" color="primary">
                          View profile
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} lg={6}>
                    <div className="feature-box d-flex align-items-start text-black mb-4">
                      <div>
                        <div className="bg-brand-dribbble text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['fab', 'dribbble']} />
                        </div>
                      </div>
                      <div className="pl-3">
                        <h3 className="font-size-lg font-weight-bold">
                          Dribbble
                        </h3>
                        <p className="text-black-50 mt-2">
                          To take a trivial example, which of us avoids
                          pleasure, some great pleasure.
                        </p>
                        <Button size="small" variant="outlined" color="primary">
                          View profile
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="text-left mt-3 mb-4">
              <h1 className="display-4 text-black mb-2 font-weight-bold">
                Blog posts
              </h1>
              <p className="font-size-lg text-black-50 mb-3">
                Indignation and dislike men who are so beguiled and demoralized.
              </p>
            </div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <div className="badge badge-warning badge-pill">
                      Warning
                    </div>
                  </div>
                  <img alt="..." className="card-img-top" src={hero6} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">added moments ago</span>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <span className="badge badge-success badge-pill mr-1">
                      Success
                    </span>
                    <span className="text-info badge badge-neutral-info badge-pill">
                      Info
                    </span>
                  </div>
                  <img alt="..." className="card-img-top" src={hero5} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <small className="text-muted">added moments ago</small>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <div className="badge badge-danger">Danger</div>
                  </div>
                  <img alt="..." className="card-img-top" src={hero4} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">added moments ago</span>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <div className="badge badge-warning badge-pill">
                      Warning
                    </div>
                  </div>
                  <img alt="..." className="card-img-top" src={hero3} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">added moments ago</span>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <span className="badge badge-success badge-pill mr-1">
                      Success
                    </span>
                    <span className="text-info badge badge-neutral-info badge-pill">
                      Info
                    </span>
                  </div>
                  <img alt="..." className="card-img-top" src={hero2} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">added moments ago</span>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="card card-box-hover-rise mb-4">
                  <div className="card-badges">
                    <div className="badge badge-danger">Danger</div>
                  </div>
                  <img alt="..." className="card-img-top" src={hero1} />
                  <div className="card-body card-body-avatar">
                    <div className="avatar-icon-wrapper">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="card-date mt-2">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">added moments ago</span>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
            <div className="text-center my-5">
              <h1 className="display-4 text-black mb-2 font-weight-bold">
                Alternate blog posts
              </h1>
              <p className="font-size-lg text-black-50">
                Indignation and dislike men who are so beguiled and demoralized.
              </p>
            </div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card className="mb-4">
                  <div className="card-img-wrapper">
                    <div className="card-badges card-badges-bottom">
                      <div className="badge badge-warning badge-pill">
                        Warning
                      </div>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top rounded"
                      src={stock1}
                    />
                  </div>
                  <div className="card-body text-black text-center">
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text text-black-50">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="mt-1">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="mb-4">
                  <div className="card-img-wrapper">
                    <div className="card-badges card-badges-bottom">
                      <span className="badge badge-success badge-pill mr-1">
                        Success
                      </span>
                      <span className="text-info badge badge-neutral-info badge-pill">
                        Info
                      </span>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top rounded"
                      src={stock2}
                    />
                  </div>
                  <div className="card-body text-black text-center">
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text text-black-50">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="mt-1">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="mb-4">
                  <div className="card-img-wrapper">
                    <div className="card-badges card-badges-bottom">
                      <div className="badge badge-danger">Danger</div>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top rounded"
                      src={stock3}
                    />
                  </div>
                  <div className="card-body text-black text-center">
                    <h5 className="card-title font-weight-bold font-size-lg">
                      Card title
                    </h5>
                    <p className="card-text text-black-50">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="mt-1">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
      <div className="sidebar-inner-layout-overlay" />
    </Fragment>
  );
};

export default LivePreviewExample;
