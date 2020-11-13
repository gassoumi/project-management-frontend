import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  IconButton,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-second py-5">
        <Container className="py-5">
          <Grid container spacing={4} className="text-center text-xl-left">
            <Grid item xs={12} lg={5} className="d-flex align-items-center">
              <div className="mb-5 mb-xl-0 w-100">
                <div
                  className="nav-logo bg-white rounded-circle d-40 mx-auto mx-xl-0"
                  title="Welcome to UiFort 😀">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="d-block"
                    title="Carolina React Admin Dashboard with Material-UI PRO">
                    <i className="bg-transparent m-0 d-40">
                      <img
                        alt="Carolina React Admin Dashboard with Material-UI PRO"
                        src={projectLogo}
                      />
                    </i>
                  </a>
                </div>
                <p className="my-4 text-white-50">
                  I will give you a complete account of the system, and expound
                  the actual teachings.
                </p>
                <div>
                  <Button
                    color="secondary"
                    variant="contained"
                    className="mr-3">
                    Contact us
                  </Button>
                  <Button variant="contained" color="secondary">
                    Affiliates
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              className="d-none d-md-flex align-items-center">
              <Grid container spacing={4} className="w-100">
                <Grid item xs={12} md={4}>
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-3">
                    <h6 className="text-white font-weight-bold mb-3 px-3 text-center">
                      Services
                    </h6>
                    <List className="py-0">
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Products
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Services
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          About us
                        </Button>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-3">
                    <h6 className="text-white font-weight-bold mb-3 px-3 text-center">
                      Support
                    </h6>
                    <List className="py-0">
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Support center
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Affiliates
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Contact us
                        </Button>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="pl-3">
                    <h6 className="text-white font-weight-bold mb-3 px-3 text-center">
                      UI Themes
                    </h6>
                    <List className="py-0">
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          React themes
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          HTML5 themes
                        </Button>
                      </ListItem>
                      <ListItem className="py-1 d-block">
                        <Button
                          className="rounded-sm w-100 text-capitalize text-white-50"
                          color="inherit">
                          Angular themes
                        </Button>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="divider border-2 d-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-5 w-50" />
          <div className="d-flex justify-content-center">
            <Tooltip arrow title="Facebook">
              <IconButton
                color="primary"
                size="medium"
                variant="outlined"
                className="text-white">
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="font-size-lg"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Twitter">
              <IconButton
                color="primary"
                size="medium"
                variant="outlined"
                className="text-white">
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="font-size-lg"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Google">
              <IconButton
                color="primary"
                size="medium"
                variant="outlined"
                className="text-white">
                <FontAwesomeIcon
                  icon={['fab', 'google']}
                  className="font-size-lg"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Instagram">
              <IconButton
                color="primary"
                size="medium"
                variant="outlined"
                className="text-white">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="font-size-lg"
                />
              </IconButton>
            </Tooltip>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
