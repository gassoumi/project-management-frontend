import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Fab, Card, Button } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-transparent mb-4">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="primary" className="mr-1">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </Fab>
                  <Fab color="primary" className="ml-1">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-transparent mb-4">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <div className="card-title mb-2">Sheldon Fischer</div>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-2">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'download']} />
                    </span>
                    <span className="btn-wrapper--label">View Profile</span>
                  </Button>
                </div>
              </div>
              <div className="card-badges">
                <span className="text-info badge badge-neutral-info badge-pill">
                  Info
                </span>
              </div>
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-transparent mb-4">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="secondary" className="mr-1">
                    <FontAwesomeIcon icon={['far', 'comment-dots']} />
                  </Fab>
                  <Fab color="secondary" className="ml-1">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-danger">Danger</div>
              </div>
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
