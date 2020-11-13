import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Avatar, Badge, Card, Button, Tooltip } from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="p-4 text-center">
              <div className="avatar-icon-wrapper rounded-circle mx-auto">
                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                  <div className="rounded-circle border-3 border-white overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h4 className="font-size-lg font-weight-bold my-2">
                Marion Devine
              </h4>
              <div className="text-center my-4">
                <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                  Web developer
                </span>
                <span className="text-warning mx-1 badge badge-neutral-warning badge-pill">
                  Javascript
                </span>
                <span className="text-danger mx-1 badge badge-neutral-danger badge-pill">
                  Angular
                </span>
              </div>

              <p className="text-muted mb-4">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <div className="divider my-4" />
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Current month</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      46,362
                    </span>
                    <Badge color="secondary" className="ml-2 text-danger">
                      -8%
                    </Badge>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Last year</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      34,546
                    </span>
                    <Badge color="secondary" className="text-success ml-2">
                      +13%
                    </Badge>
                  </div>
                </Grid>
              </Grid>
              <div className="divider my-4" />
              <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                Team members
              </div>
              <AvatarGroup className="mb-3 d-flex justify-content-center">
                <Avatar alt="..." src={avatar1} />
                <Avatar alt="..." src={avatar2} />
                <Avatar alt="..." src={avatar3} />
                <Avatar alt="..." src={avatar4} />
                <Tooltip title="Shanelle Wynn • Beck Simpson">
                  <Avatar>+2</Avatar>
                </Tooltip>
              </AvatarGroup>
              <div className="divider my-4" />
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className="mt-2">
                View complete profile
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + people3 + ')' }}
                />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white mt-0 mt-xl-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button color="primary" variant="contained" size="large">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
