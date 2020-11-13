import React, { Fragment } from 'react';

import { Grid, Card } from '@material-ui/core';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box text-center p-4 mb-4">
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
              moment; and yet I feel that I never was a greater artist than now.
            </p>

            <div className="d-flex justify-content-between text-center line-height-sm font-size-lg text-black-50">
              <div>
                <div className="text-second font-weight-bold">86%</div>
                <small>Profile completion</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">$1,864</div>
                <small>Lifetime earnings</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">241</div>
                <small>Projects completed</small>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box text-center p-4 mb-4">
            <div className="avatar-icon-wrapper rounded-circle mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-danger">
                <div className="rounded-circle border-3 border-white overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <h4 className="font-size-lg font-weight-bold my-2">
              Charlotte Vasquez
            </h4>
            <div className="text-center my-4">
              <span className="text-success mx-1 badge badge-neutral-success badge-pill">
                UX Designer
              </span>
              <span className="text-danger mx-1 badge badge-neutral-danger badge-pill">
                Software Architect
              </span>
              <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                React
              </span>
            </div>

            <p className="text-muted mb-4">
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is.
            </p>

            <div className="d-flex justify-content-between text-center line-height-sm font-size-lg text-black-50">
              <div>
                <div className="text-second font-weight-bold">44%</div>
                <small>Profile completion</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">$12,547</div>
                <small>Lifetime earnings</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">347</div>
                <small>Projects completed</small>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box text-center p-4 mb-4">
            <div className="avatar-icon-wrapper rounded-circle mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-success">
                <div className="rounded-circle border-3 border-white overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar3} />
                </div>
              </div>
            </div>
            <h4 className="font-size-lg font-weight-bold my-2">
              Sidney Pearson
            </h4>
            <div className="text-center my-4">
              <span className="text-dark mx-1 badge badge-neutral-dark badge-pill">
                Project Manager
              </span>
              <span className="text-info mx-1 badge badge-neutral-info badge-pill">
                ECMA Script
              </span>
              <span className="text-warning mx-1 badge badge-neutral-warning badge-pill">
                Vue,js
              </span>
            </div>

            <p className="text-muted mb-4">
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular than that of the individual
              languages.
            </p>

            <div className="d-flex justify-content-between text-center line-height-sm font-size-lg text-black-50">
              <div>
                <div className="text-second font-weight-bold">64%</div>
                <small>Profile completion</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">$764</div>
                <small>Lifetime earnings</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">226</div>
                <small>Projects completed</small>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
