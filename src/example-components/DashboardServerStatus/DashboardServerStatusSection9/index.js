import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import svgImage5 from '../../../assets/images/illustrations/experience_design.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box p-4 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  He lay on his armour-like back, and if he lifted his head.
                </h4>
                <Button color="primary" className="text-first">
                  <span className="btn-wrapper--label">
                    <small className="font-weight-bold">View details</small>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-25 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage1} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box p-4 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
                <h4 className="font-size-xl font-weight-bold mb-2">
                  It was popularised in the 1960s with Letraset sheets.
                </h4>
                <Button color="primary" className="text-warning">
                  <span className="btn-wrapper--label">
                    <small className="font-weight-bold">View details</small>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage5} />
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
