import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Card, CardContent, Button } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-night-sky pt-5">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-first opacity-1" />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="pt-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} className="d-flex align-items-center">
                  <div className="text-center text-xl-right pt-0 pt-xl-4 pb-5 pb-xl-0 mx-auto">
                    <h1 className="display-2 text-white mb-3 font-weight-bold">
                      Our customer stories
                    </h1>
                    <p className="font-size-lg mb-4 text-white-50">
                      Read how customers around the world use our services to
                      build their projects
                    </p>
                    <Button color="secondary" variant="contained" size="large">
                      Read all stories
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <div className="pl-0 pl-xl-5">
                    <Card className="mb-4">
                      <CardContent className="p-3">
                        <div className="pl-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="text-warning font-size-lg">
                              <FontAwesomeIcon icon={['fas', 'star']} />
                              <FontAwesomeIcon icon={['fas', 'star']} />
                              <FontAwesomeIcon icon={['fas', 'star']} />
                              <FontAwesomeIcon icon={['fas', 'star']} />
                              <FontAwesomeIcon icon={['fas', 'star']} />
                            </div>
                            <div>
                              <FontAwesomeIcon
                                icon={['fas', 'quote-right']}
                                className="text-dark font-size-xxl"
                              />
                            </div>
                          </div>
                          <blockquote className="mb-3 mt-2 font-size-lg text-black-50 blockquote">
                            But I must explain to you how all this mistaken idea
                            was born and I will give you a complete account of
                            the system, and expound the actual teachings of the
                            great explorer of the truth.
                          </blockquote>
                          <div className="align-box-row">
                            <div className="avatar-icon-wrapper avatar-icon-lg">
                              <div className="avatar-icon rounded-circle">
                                <img src={avatar1} alt="..." />
                              </div>
                            </div>
                            <div className="pl-2">
                              <span className="d-block font-size-lg">
                                Mandy Erle
                                <small className="d-block text-black-50">
                                  Mandy Company
                                </small>
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="mb-4">
                      <CardContent className="p-3">
                        <div className="align-box-row align-items-start">
                          <div className="pl-4">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="text-warning font-size-lg">
                                <FontAwesomeIcon icon={['fas', 'star']} />
                                <FontAwesomeIcon icon={['fas', 'star']} />
                                <FontAwesomeIcon icon={['fas', 'star']} />
                                <FontAwesomeIcon icon={['fas', 'star']} />
                                <FontAwesomeIcon
                                  icon={['fas', 'star-half-alt']}
                                />
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={['fas', 'quote-right']}
                                  className="text-dark font-size-xxl"
                                />
                              </div>
                            </div>
                            <blockquote className="mb-3 mt-2 font-size-lg text-black-50 blockquote">
                              To take a trivial example, which of us ever
                              undertakes laborious physical exercise, except to
                              obtain some advantage from it? But who has any
                              right to find fault with a man.
                            </blockquote>
                            <div className="align-box-row">
                              <div className="avatar-icon-wrapper avatar-icon-lg">
                                <div className="avatar-icon rounded-circle">
                                  <img src={avatar5} alt="..." />
                                </div>
                              </div>
                              <div className="pl-2">
                                <span className="d-block font-size-lg">
                                  Napoleon Stacey
                                  <small className="d-block text-black-50">
                                    ACME Inc.
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
