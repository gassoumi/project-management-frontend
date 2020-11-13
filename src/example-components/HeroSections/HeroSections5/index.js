import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  InputAdornment,
  IconButton,
  Card,
  Button,
  Tooltip,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-arielle-smile overflow-hidden">
        <div className="header-nav-wrapper px-4 w-100 bg-secondary shadow-sm-dark navbar-light">
          <div className="text-center w-100 d-block font-weight-bold text-black-50 text-uppercase">
            Header menu placeholder
          </div>
        </div>
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="text-center py-5">
              <div className="text-white mt-3 px-5">
                <h1 className="display-3 font-weight-bold">
                  Pleasure rationally encounter consequences
                </h1>
                <p className="font-size-lg text-white-50 px-2 px-xl-5 my-4 d-block">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized.
                </p>
                <div className="divider border-2 my-5 mx-auto border-light opacity-2 rounded w-50" />
                <div className="px-5">
                  <Card className="p-2">
                    <form>
                      <Grid container spacing={4}>
                        <Grid
                          item
                          xs={12}
                          lg={4}
                          className="d-flex align-items-center justify-content-center">
                          <TextField
                            fullWidth
                            className="mt-0"
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailOutlineTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={4}
                          className="d-flex align-items-center justify-content-center">
                          <TextField
                            fullWidth
                            className="mt-0"
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailOutlineTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={4}
                          className="d-flex align-items-center justify-content-center">
                          <Button
                            color="secondary"
                            variant="contained"
                            className="w-100">
                            <span className="btn-wrapper--label">
                              Create account
                            </span>
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Card>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="hero-footer pb-4">
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
      </div>
    </Fragment>
  );
}
