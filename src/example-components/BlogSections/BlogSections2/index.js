import React, { Fragment } from 'react';

import { Grid, Container, Card, Button } from '@material-ui/core';

import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-5 bg-secondary">
        <div className="text-center my-5">
          <h1 className="display-4 text-black mb-3 font-weight-bold">
            Latest blog posts
          </h1>
          <p className="font-size-lg text-black-50">
            Indignation and dislike men who are so beguiled and demoralized.
          </p>
        </div>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="mb-4">
                <div className="card-img-wrapper">
                  <div className="card-badges">
                    <span className="mr-2 badge badge-success badge-pill">
                      Success
                    </span>
                    <span className="text-info badge badge-neutral-info badge-pill">
                      Info
                    </span>
                  </div>
                  <img src={stock3} className="card-img-top" alt="..." />
                </div>
                <div className="card-body card-body-avatar">
                  <div className="avatar-icon-wrapper avatar-icon-xl">
                    <div className="avatar-icon border-2 border-white rounded">
                      <img src={avatar2} alt="..." />
                    </div>
                  </div>
                  <h5 className="display-4 my-4">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      These cases are perfectly simple and easy to distinguish.
                    </a>
                  </h5>
                  <p className="card-text mb-4">
                    Obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever.
                  </p>

                  <Button variant="outlined" color="primary">
                    <span className="btn-wrapper--label">Read more</span>
                  </Button>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="mb-4">
                <div className="card-img-wrapper">
                  <div className="card-badges">
                    <span className="mr-2 badge badge-first badge-pill">
                      Latest
                    </span>
                    <div className="badge badge-danger">NEW</div>
                  </div>
                  <img src={stock2} className="card-img-top" alt="..." />
                </div>
                <div className="card-body card-body-avatar">
                  <div className="avatar-icon-wrapper avatar-icon-xl">
                    <div className="avatar-icon border-2 border-white rounded">
                      <img src={avatar2} alt="..." />
                    </div>
                  </div>
                  <h5 className="display-4 my-4">
                    <a href="#/" onClick={e => e.preventDefault()}>
                      Occasionally circumstances occur in which toil and pain
                      can procure
                    </a>
                  </h5>
                  <p className="card-text mb-4">
                    Dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>

                  <Button variant="outlined" color="primary">
                    <span className="btn-wrapper--label">Read more</span>
                  </Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
