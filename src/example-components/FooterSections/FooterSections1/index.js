import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button, List, ListItem } from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-5">
        <Container className="py-5">
          <Grid container spacing={4} className="text-center text-xl-left">
            <Grid item xs={12} lg={5} className="d-flex align-items-center">
              <div className="mb-5 mb-xl-0 w-100">
                <div
                  className="nav-logo bg-light rounded-sm d-50 mx-auto mx-xl-0"
                  title="Welcome to UiFort 😀">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="d-block"
                    title="Carolina React Admin Dashboard with Material-UI PRO">
                    <i className="m-0 d-50">
                      <img
                        alt="Carolina React Admin Dashboard with Material-UI PRO"
                        src={projectLogo}
                      />
                    </i>
                  </a>
                </div>
                <p className="text-black-50 font-size-lg my-3">
                  The home of perfectly built UI kits, dashboards, themes &
                  templates.
                </p>
                <div className="divider border-1 rounded-circle border-dark bg-dark opacity-2 mx-auto mx-xl-0 mb-4 w-25" />
                <div className="d-flex justify-content-center justify-content-xl-start">
                  <Button
                    variant="outlined"
                    className="text-facebook py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'facebook']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-twitter py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'twitter']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-google py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-instagram py-2 px-2"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
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
                    <h6 className="text-dark font-weight-bold mb-3 px-3 text-center text-lg-left">
                      Services
                    </h6>
                    <List className="py-0">
                      <ListItem button className="rounded-sm">
                        Products
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        Services
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        About us
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-3">
                    <h6 className="text-dark font-weight-bold mb-3 px-3 text-center text-lg-left">
                      Support
                    </h6>
                    <List className="py-0">
                      <ListItem button className="rounded-sm">
                        Support center
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        Affiliates
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        Contact us
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="pl-3">
                    <h6 className="text-dark font-weight-bold mb-3 px-3 text-center text-lg-left">
                      UI Themes
                    </h6>
                    <List className="py-0">
                      <ListItem button className="rounded-sm">
                        React themes
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        HTML5 themes
                      </ListItem>
                      <ListItem button className="rounded-sm">
                        Angular themes
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="divider border-1 d-none d-md-block rounded-circle border-dark bg-dark opacity-2 mx-auto my-5 w-25" />
          <div className="text-center d-block text-black-50">
            Copyright &copy; 2020 - uiFort.com
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
