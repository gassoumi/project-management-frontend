import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="p-5 mb-4">
            <div className="card-badges">
              <span className="shadow-none badge badge-danger badge-pill">
                27
              </span>
            </div>
            <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded">
              <FontAwesomeIcon icon={['far', 'map']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Sales statistics
            </h3>
            <p className="text-black-50 mt-2">
              We've included only the most popular solutions included ...
            </p>
            <Button variant="outlined" color="primary" className="mt-1 w-100">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="p-5 mb-4">
            <div className="card-badges">
              <span className="shadow-none mr-1 badge badge-warning badge-pill">
                Promo
              </span>
              <span className="shadow-none badge badge-info badge-pill">
                Special
              </span>
            </div>
            <div className="bg-night-sky text-center text-white font-size-xl d-50 rounded">
              <FontAwesomeIcon icon={['far', 'chart-bar']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Generated reports
            </h3>
            <p className="text-black-50 mt-2">
              Mosaic, the first graphical browser, is introduced to the ...
            </p>
            <Button variant="outlined" color="primary" className="mt-1 w-100">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="p-5 mb-4">
            <div className="card-badges">
              <span className="shadow-none text-danger badge badge-neutral-danger badge-pill">
                Overdue
              </span>
            </div>
            <div className="bg-vicious-stance text-center text-white font-size-xl d-50 rounded">
              <FontAwesomeIcon icon={['far', 'object-group']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Pricing plans
            </h3>
            <p className="text-black-50 mt-2">
              Bill Clinton's presidential scandal makes it online for the ...
            </p>
            <Button variant="outlined" color="primary" className="mt-1 w-100">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
