import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Card, Button, Tooltip } from '@material-ui/core';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <div className="hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded-left">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded-left"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-left" />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className="px-4">
                  <span className="btn-wrapper--label">Continue reading</span>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center pt-4">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar7} />
                  </div>
                </div>
              </div>
              <div>
                <span className="my-2 text-success font-size-md px-4 py-1 h-auto badge badge-neutral-success">
                  Online
                </span>
              </div>
              <h3 className="font-weight-bold mt-3">Lacie-Mae Mckay</h3>
              <p className="mb-0 text-black-50">
                Senior Frontend Developer at <b>Google Inc.</b>
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-github">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-instagram">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-google">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="d-flex p-4 bg-secondary card-footer mt-4 flex-wrap">
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Settings className="h1 d-block my-2 text-warning" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Reports
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Monthly Stats
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Briefcase className="h1 d-block my-2 text-success" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Statistics
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Customers stats
                      </div>
                    </div>
                  </button>
                </div>
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
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
