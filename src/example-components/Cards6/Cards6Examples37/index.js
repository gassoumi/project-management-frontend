import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box p-4 mb-4">
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <h4 className="font-weight-bold mt-4">
                Are you sure you want to delete this entry?
              </h4>
              <p className="mb-0 font-size-lg text-muted">
                You cannot undo this operation.
              </p>
              <div className="pt-4">
                <Button variant="outlined" color="secondary" className="mx-1">
                  <span className="btn-wrapper--label">Cancel</span>
                </Button>
                <Button variant="contained" color="primary" className="mx-1">
                  <span className="btn-wrapper--label">Delete</span>
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box p-4 mb-4">
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-success text-success m-0 d-130">
                  <FontAwesomeIcon
                    icon={['far', 'lightbulb']}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <h4 className="font-weight-bold mt-4">
                Do you want to create this?
              </h4>
              <p className="mb-0 font-size-lg text-muted">
                You can later review your options.
              </p>
              <div className="pt-4">
                <Button variant="outlined" color="secondary" className="mx-1">
                  <span className="btn-wrapper--label">Cancel</span>
                </Button>
                <Button variant="contained" color="primary" className="mx-1">
                  <span className="btn-wrapper--label">Create</span>
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box p-4 mb-4">
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first text-first m-0 d-130">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <h4 className="font-weight-bold mt-4">Are you sure?</h4>
              <p className="mb-0 text-black-50">
                You can change your mind later.
              </p>
              <div className="pt-4">
                <Button
                  variant="outlined"
                  color="secondary"
                  className="text-danger mx-1">
                  <span className="btn-wrapper--label">Cancel</span>
                </Button>
                <Button variant="contained" color="primary" className="mx-1">
                  <span className="btn-wrapper--label">Add</span>
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
