import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Card } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <div className="card-body px-3 py-3">
              <div className="font-size-lg pb-3">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Sketch mockups creation
                </a>
              </div>
              <div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-warning shadow-none">
                    JK
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-dark shadow-none">
                    HA
                  </div>
                  <span className="badge-circle badge badge-success">
                    Online
                  </span>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar1} />
                  </div>
                  <span className="badge-circle badge badge-warning">Idle</span>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center p-2 justify-content-between">
              <div>
                <IconButton
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="rounded-sm border-0">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </IconButton>
                <span
                  className="font-size-sm text-black-50 px-2"
                  title="Total downloads">
                  <FontAwesomeIcon icon={['fas', 'link']} className="mr-1" />
                  55
                </span>
                <span
                  className="font-size-sm text-black-50 px-2"
                  title="Total views">
                  <FontAwesomeIcon icon={['far', 'eye']} className="mr-1" />
                  344
                </span>
              </div>
              <div className="font-size-sm px-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                Today - 11:35
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4 bg-royal text-white border-0">
            <div className="card-body px-3 py-3">
              <div className="font-size-lg pb-3">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="text-white">
                  Photoshop design
                </a>
              </div>
              <div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-warning shadow-none">
                    JK
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-dark shadow-none">
                    HA
                  </div>
                  <span className="badge-circle badge badge-success">
                    Online
                  </span>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar1} />
                  </div>
                  <span className="badge-circle badge badge-warning">Idle</span>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center px-2 pb-2 pt-0 bg-royal border-0 justify-content-between">
              <div>
                <IconButton
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="text-white rounded-sm border-0">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </IconButton>
                <span
                  className="font-size-sm text-white-50 px-2"
                  title="Total downloads">
                  <FontAwesomeIcon icon={['fas', 'link']} className="mr-1" />
                  55
                </span>
                <span
                  className="font-size-sm text-white-50 px-2"
                  title="Total views">
                  <FontAwesomeIcon icon={['far', 'eye']} className="mr-1" />
                  344
                </span>
              </div>
              <div className="font-size-sm px-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                Today - 11:35
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box mb-4 text-dark card-box-border-bottom border-warning">
            <div className="card-body px-3 py-3">
              <div className="font-size-lg pb-3">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Angular implementation
                </a>
              </div>
              <div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-warning shadow-none">
                    JK
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                  <div className="avatar-icon rounded text-white bg-dark shadow-none">
                    HA
                  </div>
                  <span className="badge-circle badge badge-success">
                    Online
                  </span>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper avatar-icon-sm">
                  <div className="avatar-icon rounded shadow-none">
                    <img alt="..." src={avatar1} />
                  </div>
                  <span className="badge-circle badge badge-warning">Idle</span>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center bg-transparent p-2 justify-content-between">
              <div>
                <IconButton
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="rounded-sm border-0">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </IconButton>
                <span
                  className="font-size-sm text-black-50 px-2"
                  title="Total downloads">
                  <FontAwesomeIcon icon={['fas', 'link']} className="mr-1" />
                  55
                </span>
                <span
                  className="font-size-sm text-black-50 px-2"
                  title="Total views">
                  <FontAwesomeIcon icon={['far', 'eye']} className="mr-1" />
                  344
                </span>
              </div>
              <div className="font-size-sm px-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                Today - 11:35
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
