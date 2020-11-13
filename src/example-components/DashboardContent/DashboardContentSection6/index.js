import React, { Fragment } from 'react';

import { Grid, Avatar, Card, CardContent, Button } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <div className="card-badges">
              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                Blog Posts
              </span>
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                <h3 className="display-4 font-weight-bold m-0 text-white">
                  Medieval military methods
                </h3>
              </div>
              <img alt="..." className="card-img-top" src={stock2} />
            </a>
            <CardContent className="p-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar2} className="mr-2" />
                  <div>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Shanelle Wynn
                    </a>
                    <span className="text-black-50 d-block">
                      UI Engineer, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="py-1 px-2 font-weight-bold">
                    <span className="text-success pr-1">23</span>
                    <span className="d-block opacity-6 text-black font-size-xs">
                      Reviews
                    </span>
                  </Button>
                </div>
              </div>
              <p className="card-text">
                Costs for the walls depended on the material used. Wood would
                cost very little and was quick to build, but was weak.
              </p>
              <p className="card-text">
                Stone was strong but very expensive and time-consuming to
                construct
              </p>
              <div className="d-flex justify-content-between pt-3">
                <Button size="small" variant="contained" color="primary">
                  Learn more
                </Button>
                <Button size="small" className="text-danger">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <div className="card-badges">
              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                Blog Posts
              </span>
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                <h3 className="display-4 font-weight-bold m-0 text-white">
                  Medieval military methods
                </h3>
              </div>
              <img alt="..." className="card-img-top" src={stock1} />
            </a>
            <CardContent className="p-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar3} className="mr-2" />
                  <div>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Eboni O'Quinn
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="py-1 px-2 font-weight-bold">
                    <span className="text-success pr-1">8</span>
                    <span className="d-block opacity-6 text-black font-size-xs">
                      Reviews
                    </span>
                  </Button>
                </div>
              </div>
              <p className="card-text">
                To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it?
              </p>
              <p className="card-text">
                But who has any right to find fault with a man who chooses to
                enjoy a pleasure that has no annoying.
              </p>
              <div className="d-flex justify-content-between pt-3">
                <Button size="small" variant="contained" color="primary">
                  Learn more
                </Button>
                <Button size="small" className="text-danger">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="mb-4">
            <div className="card-badges">
              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                Blog Posts
              </span>
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                <h3 className="display-4 font-weight-bold m-0 text-white">
                  Medieval military methods
                </h3>
              </div>
              <img alt="..." className="card-img-top" src={stock3} />
            </a>
            <CardContent className="p-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar1} className="mr-2" />
                  <div>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Gordon Barnett
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="py-1 px-2 font-weight-bold">
                    <span className="text-success pr-1">87</span>
                    <span className="d-block opacity-6 text-black font-size-xs">
                      Reviews
                    </span>
                  </Button>
                </div>
              </div>
              <p className="card-text">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized.
              </p>
              <p className="card-text">
                By the charms of pleasure of the moment, so blinded by desire,
                that they cannot foresee.
              </p>
              <div className="d-flex justify-content-between pt-3">
                <Button size="small" variant="contained" color="primary">
                  Learn more
                </Button>
                <Button size="small" className="text-danger">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
