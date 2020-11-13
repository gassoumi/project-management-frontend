import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <a
            className="card card-box-hover-rise mb-4"
            href="#/"
            onClick={e => e.preventDefault()}>
            <div className="card-badges">
              <div className="badge badge-warning badge-pill">Warning</div>
            </div>
            <img alt="..." className="card-img-top" src={stock1} />
            <div className="card-body card-body-avatar">
              <div className="avatar-icon-wrapper avatar-icon-wrapper--sm">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-date mt-2">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="text-muted mr-1"
                />
                <small className="text-muted">added moments ago</small>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            className="card card-box-hover-rise mb-4"
            href="#/"
            onClick={e => e.preventDefault()}>
            <div className="card-badges">
              <span className="badge badge-success badge-pill mr-1">
                Success
              </span>
              <span className="text-info badge badge-neutral-info badge-pill">
                Info
              </span>
            </div>
            <img alt="..." className="card-img-top" src={stock2} />
            <div className="card-body card-body-avatar">
              <div className="avatar-icon-wrapper avatar-icon-wrapper--sm">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-date mt-2">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="text-muted mr-1"
                />
                <small className="text-muted">added moments ago</small>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a
            className="card card-box-hover-rise mb-4"
            href="#/"
            onClick={e => e.preventDefault()}>
            <div className="card-badges">
              <div className="badge badge-danger">Danger</div>
            </div>
            <img alt="..." className="card-img-top" src={stock3} />
            <div className="card-body card-body-avatar">
              <div className="avatar-icon-wrapper avatar-icon-wrapper--sm">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-date mt-2">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="text-muted mr-1"
                />
                <small className="text-muted">added moments ago</small>
              </div>
            </div>
          </a>
        </Grid>
      </Grid>
    </Fragment>
  );
}
