import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  Card,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-5 bg-night-sky">
        <div className="text-center my-5">
          <h1 className="display-4 text-white mb-3 font-weight-bold">
            Latest blog posts
          </h1>
          <p className="font-size-lg text-white-50">
            Indignation and dislike men who are so beguiled and demoralized.
          </p>
        </div>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={12} xl={4}>
              <Card className="card-box mb-4">
                <List className="py-0">
                  <ListItem className="d-block py-4">
                    <div className="align-box-column">
                      <div>
                        <Card className="card-transparent">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'play-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              src={stock2}
                              className="card-img-top rounded img-fluid"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="mt-4">
                        <div className="mb-1">
                          <a
                            className="font-size-lg"
                            href="#/"
                            onClick={e => e.preventDefault()}>
                            These cases are perfectly simple and easy to
                            distinguish.
                          </a>
                        </div>
                        <div className="my-3">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-success badge badge-neutral-success">
                            Blog
                          </a>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-primary mx-2 badge badge-neutral-primary">
                            Articles
                          </a>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-warning badge badge-neutral-warning">
                            Tutorials
                          </a>
                        </div>
                        <p className="pt-3 pb-2 text-black-50">
                          Obtain pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain.
                        </p>
                        <p className="pb-3">
                          Procure him some great pleasure to take a trivial
                          example, which of us ever.
                        </p>
                        <div>
                          <Button
                            size="small"
                            variant="outlined"
                            color="primary">
                            <span>Read more</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={12} xl={8}>
              <Card className="card-box mb-4">
                <List className="py-0">
                  <ListItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'play-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              src={stock1}
                              className="card-img-top rounded w-100"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            className="font-size-lg"
                            href="#/"
                            onClick={e => e.preventDefault()}>
                            These cases are perfectly simple and easy to
                            distinguish.
                          </a>
                        </div>
                        <div>
                          <div className="text-success badge badge-neutral-success">
                            Blog
                          </div>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          Who formed us in his own image, and the breath some
                          great pleasure to take a trivial example, which of us
                          ever.
                        </p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="bg-secondary d-block text-center p-3">
                    <Tooltip arrow title="Facebook">
                      <Button color="default" className="text-facebook">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </span>
                      </Button>
                    </Tooltip>
                    <Tooltip arrow title="Dribbble">
                      <Button
                        color="default"
                        className="text-dribbble mr-2 ml-2">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'dribbble']} />
                        </span>
                      </Button>
                    </Tooltip>
                    <Tooltip arrow title="Twitter">
                      <Button color="default" className="text-twitter">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </span>
                      </Button>
                    </Tooltip>
                  </ListItem>
                </List>
              </Card>
              <Card className="card-box mb-4">
                <List className="py-0">
                  <ListItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'play-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              src={stock3}
                              className="card-img-top rounded w-100"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="display-4">
                            Occasionally circumstances occur in which toil and
                            pain can procure
                          </a>
                        </div>
                        <div className="my-3">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-white badge badge-success">
                            Blog
                          </a>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-white mx-2 badge badge-primary">
                            Articles
                          </a>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-white badge badge-warning">
                            Tutorials
                          </a>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          Dislike men who are so beguiled and demoralized by the
                          charms of pleasure of the moment, so blinded by
                          desire, that they cannot foresee the pain...
                        </p>
                        <Button variant="outlined" color="primary">
                          <span>Read more</span>
                        </Button>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
