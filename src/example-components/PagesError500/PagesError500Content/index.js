import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Button, Tooltip } from '@material-ui/core';

import svgImage7 from '../../../assets/images/illustrations/500.svg';

import { NavLink as RouterLink } from 'react-router-dom';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-light">
        <div className="app-main">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <Grid
                        item
                        lg={6}
                        md={9}
                        className="px-4 mx-auto text-center text-black">
                        <img
                          src={svgImage7}
                          className="w-50 mx-auto d-block my-5 img-fluid"
                          alt="..."
                        />

                        <h1 className="display-1 mb-3 px-4 font-weight-bold">
                          500 Internal Server Error
                        </h1>
                        <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                          There was an error, please try again later.
                        </h3>
                        <p>
                          The server encountered an internal server error and
                          was unable to complete your request.
                        </p>
                        <Button
                          component={RouterLink}
                          to="/DashboardDefault"
                          size="large"
                          color="primary"
                          variant="contained"
                          className="text-white mt-4">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Back to dashboard
                          </span>
                        </Button>
                      </Grid>
                    </div>
                    <div className="hero-footer py-4">
                      <Tooltip arrow title="Facebook">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-facebook">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Twitter">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-twitter">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Google">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-google">
                          <FontAwesomeIcon
                            icon={['fab', 'google']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Instagram">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-instagram">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
