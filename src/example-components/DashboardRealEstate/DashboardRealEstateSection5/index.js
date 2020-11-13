import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Card, Button, Tooltip } from '@material-ui/core';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box pt-4 mb-4">
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center">
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
              <div className="py-4">
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
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box pt-4 mb-4">
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="secondary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar4} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Leopold Magana</h3>
              <span className="mt-1 mb-4 text-warning font-size-md px-4 py-1 h-auto badge badge-neutral-warning">
                Idle for 5 minutes
              </span>
              <div className="my-3 rounded mx-4 bg-secondary p-3">
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
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box p-4 mb-4">
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Boyd Hardin</h3>
              <span className="mt-1 mb-4 text-danger font-size-md px-4 py-1 h-auto badge badge-neutral-danger">
                Offline
              </span>
              <p className="mb-0 text-black-50">
                A wonderful serenity has taken possession of my entire soul.
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
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
