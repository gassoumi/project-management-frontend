import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Badge, Card, CardContent } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-first" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Presentation site UX
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="badge badge-primary px-3">On Hold</div>
                <div className="font-size-sm text-danger px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  14:22
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-info" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Implement in Vuejs
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Badge color="primary" className="px-3">
                  Processed
                </Badge>
                <div className="font-size-sm text-dark px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17:56
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-success" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Create UI mockups
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="px-3 badge badge-success">Fixed</div>
                <div className="font-size-sm text-dark px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  09:41
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-warning" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  UX research
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <span className="px-3 badge badge-warning">Scheduled</span>
                <div className="font-size-sm text-danger px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  11:35
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
