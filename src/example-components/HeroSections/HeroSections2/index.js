import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Fab,
  Container,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import projectLogo from '../../../assets/images/react.svg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const LivePreviewExample = () => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom overflow-hidden">
        <div className="header-nav-wrapper px-4 w-100 bg-white shadow-sm-dark navbar-light">
          <div className="header-nav-logo">
            <div className="nav-logo">
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                title="Carolina React Admin Dashboard with Material-UI PRO">
                <i className="bg-white">
                  <img
                    alt="Carolina React Admin Dashboard with Material-UI PRO"
                    src={projectLogo}
                  />
                </i>
                <span>Carolina</span>
              </a>
            </div>
          </div>
          <div className="header-nav-menu d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <Button
                color="inherit"
                className="text-dark px-4 py-2 text-capitalize">
                Elements
              </Button>
              <Button
                color="inherit"
                className="text-dark px-4 py-2 text-capitalize">
                Widgets
              </Button>
              <Button
                color="inherit"
                className="text-dark px-4 py-2 text-capitalize">
                Blocks
              </Button>
            </div>
          </div>
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button color="primary" variant="outlined">
                My account
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <Fab
                onClick={toggleDrawer('right', true)}
                color="primary"
                size="medium">
                <MenuRoundedIcon />
              </Fab>
            </span>
          </div>
          <Drawer
            variant="temporary"
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
            elevation={11}>
            <List className="py-0">
              <ListItem className="d-block bg-secondary py-2 px-3">
                <div className="d-flex w-100 justify-content-between navbar-light align-content-center">
                  <div className="header-nav-logo justify-content-start">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="navbar-brand d-flex align-items-center d-40"
                      title="Carolina React Admin Dashboard with Material-UI PRO">
                      <img
                        alt="Carolina React Admin Dashboard with Material-UI PRO"
                        className="d-block img-fluid"
                        src={projectLogo}
                      />
                    </a>
                  </div>
                  <IconButton
                    onClick={toggleDrawer('right', false)}
                    color="primary">
                    <MenuRoundedIcon />
                  </IconButton>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <a
                  className="d-flex px-3 align-items-center dropdown-item rounded"
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-strong-bliss text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'shapes']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        UI Elements
                      </div>
                      <small className="text-black-50">Easy to customise</small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-lg"
                      />
                    </div>
                  </div>
                </a>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <a
                  className="d-flex px-3 align-items-center dropdown-item rounded"
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-plum-plate text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'car-battery']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Form widgets
                      </div>
                      <small className="text-black-50">
                        Multiple options available
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-lg"
                      />
                    </div>
                  </div>
                </a>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <a
                  className="d-flex px-3 align-items-center dropdown-item rounded"
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-grow-early text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'table']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Tables
                      </div>
                      <small className="text-black-50">
                        Dynamic and sortable examples
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-lg"
                      />
                    </div>
                  </div>
                </a>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <a
                  className="d-flex px-3 align-items-center dropdown-item rounded"
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-ripe-malin text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Maps
                      </div>
                      <small className="text-black-50">
                        Everything you'll need, included
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-lg"
                      />
                    </div>
                  </div>
                </a>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <a
                  className="d-flex px-3 align-items-center dropdown-item rounded"
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-malibu-beach text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'cubes']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Presentation blocks
                      </div>
                      <small className="text-black-50">
                        Build perfect websites today
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-lg"
                      />
                    </div>
                  </div>
                </a>
              </ListItem>
              <Divider />
              <ListItem className="d-block py-3 px-2">
                <Button
                  color="inherit"
                  variant="outlined"
                  className="text-white">
                  My account
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </div>

        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero3 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-primary opacity-2" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="text-center py-5">
              <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                Hero Section
              </span>
              <div className="text-white mt-3 px-2 px-xl-5">
                <h1 className="display-3 py-4 px-2 px-xl-5 mb-0 font-weight-bold">
                  Pleasure rationally encounter consequences
                </h1>
                <p className="font-size-lg text-white-50 pb-5 my-0 d-block px-2 px-xl-5">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized.
                </p>
                <div>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    className="px-4">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </span>
                    <span className="btn-wrapper--label">
                      Plans &amp; Pricing
                    </span>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="hero-indicator animated font-size-xxl text-white opacity-10">
          <FontAwesomeIcon icon={['fas', 'arrow-down']} />
        </div>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
