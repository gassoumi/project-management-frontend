import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Fab, Badge, Card } from '@material-ui/core';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4 p-5">
        <Grid container spacing={4} className="mb-4">
          <Grid item xs={12} md={6} lg={4}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="primary">
                    <FontAwesomeIcon icon={['fas', 'play-circle']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img alt="..." className="card-img-top rounded" src={people1} />
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="font-size-xxl d-block my-4">
              New order has been received
            </a>
            <p className="text-black-50 font-size-lg">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <p className="text-black-50 font-size-lg mb-0">
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat
              volutpat.
            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <div>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold text-black"
                  title="...">
                  Shanelle Wynn
                </a>
                <span className="text-black-50 d-block">
                  Web Developer, Apple Inc.
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="primary">
                    <FontAwesomeIcon icon={['fas', 'play-circle']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badgestop">
                <Badge color="secondary">New</Badge>
              </div>
              <img alt="..." className="card-img-top rounded" src={people2} />
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="font-size-xxl d-block my-4">
              New report file has been uploaded
            </a>
            <p className="text-black-50 font-size-lg mb-0">
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat
              volutpat.
            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                <div className="avatar-icon">
                  <img alt="..." src={avatar3} />
                </div>
              </div>
              <div>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold text-black"
                  title="...">
                  Aaran Mitchell
                </a>
                <span className="text-black-50 d-block">
                  UI Engineer, Google
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
