import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
            <div>
              <div className="display-3 font-weight-bold">56</div>
              <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
              <div className="font-weight-bold text-black-50 font-size-sm text-uppercase">
                Tasks done
              </div>
            </div>
            <div className="ml-auto card-hover-indicator align-self-center">
              <FontAwesomeIcon
                icon={['fas', 'chevron-right']}
                className="font-size-xl"
              />
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box card-box-hover-rise card-box-hover text-black align-box-row align-items-start mb-4 p-4">
            <div>
              <div className="display-3 font-weight-bold text-danger">18</div>
              <div className="divider mt-2 mb-3 border-2 w-25 bg-danger rounded border-danger" />
              <div className="font-weight-bold text-black-50 font-size-sm text-uppercase">
                Requests
              </div>
            </div>
            <div className="ml-auto card-hover-indicator align-self-center">
              <FontAwesomeIcon
                icon={['fas', 'chevron-right']}
                className="font-size-xl"
              />
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box text-black-50 mb-4 p-4">
            <div className="display-3 text-black font-weight-bold">29</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Bugfixes
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box text-black-50 mb-4 p-4">
            <div className="display-3 text-black font-weight-bold">768</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Tickets
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
