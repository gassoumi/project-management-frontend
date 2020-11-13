import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  Card,
  Button,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box p-4 mb-4">
            <Box className="card-tr-actions">
              <IconButton size="small" color="primary">
                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
              </IconButton>
            </Box>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar1} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Shania O'Brien</h3>
              <div className="mt-1 mb-4 text-success font-size-md px-4 py-1 h-auto badge badge-neutral-success">
                User online
              </div>
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
                    color="default"
                    className="d-50 m-2 text-instagram">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <IconButton color="default" className="d-50 m-2 text-google">
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
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box p-4 bg-night-sky text-white mb-4">
            <Box className="card-tr-actions">
              <IconButton size="small" color="inherit">
                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
              </IconButton>
            </Box>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar2} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Akeem Griffith</h3>
              <div className="mt-1 mb-4 font-size-md px-4 py-1 h-auto badge badge-warning">
                Pending
              </div>
              <p className="mb-0 text-white-50">
                {' '}
                I am alone, and feel the charm, which was created for mine.
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box bg-midnight-bloom text-white p-4 mb-4">
            <Box className="card-tr-actions">
              <IconButton size="small" color="inherit">
                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
              </IconButton>
            </Box>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar3} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Abigayle Hicks</h3>
              <div className="mt-1 mb-4 font-size-md px-4 py-1 h-auto badge badge-danger">
                Offline
              </div>
              <p className="mb-0 text-white-50">
                Exquisite sense of mere tranquil existence.
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <Button color="inherit" className="d-50 m-1">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
