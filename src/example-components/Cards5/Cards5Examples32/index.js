import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Fab, Card, Button, List, ListItem, Tooltip } from '@material-ui/core';

import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header bg-white">
          <div className="card-header--title">
            <small className="d-block text-uppercase mt-1">Blogs</small>
            <b>Latest articles</b>
          </div>
          <div className="card-header--actions">
            <Button size="small" color="primary">
              Reports
            </Button>
          </div>
        </div>
        <List className="pb-0">
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
                        <Fab
                          size="small"
                          color="secondary"
                          className="mx-auto d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={['fas', 'plus-circle']}
                            className="font-size-lg"
                          />
                        </Fab>
                      </div>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top rounded"
                      src={stock3}
                      style={{ width: 160 }}
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
                    Meeting minutes
                  </a>
                </div>
                <div>
                  <div className="text-info badge badge-neutral-info">
                    Articles
                  </div>
                  <div className="text-danger ml-2 badge badge-neutral-danger">
                    Posts
                  </div>
                </div>
                <p className="mb-0 mt-2 text-black-50">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings ...
                </p>
              </div>
            </div>
          </ListItem>
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
                        <Fab
                          size="small"
                          color="secondary"
                          className="mx-auto d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={['fas', 'plus-circle']}
                            className="font-size-lg"
                          />
                        </Fab>
                      </div>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top rounded"
                      src={stock2}
                      style={{ width: 160 }}
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
                    Sales reports for this week
                  </a>
                </div>
                <div>
                  <div className="text-success badge badge-neutral-success">
                    Blog
                  </div>
                </div>
                <p className="mt-2 text-black-50">
                  Who formed us in his own image, and the breath ...
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
              <Button color="default" className="text-dribbble mr-2 ml-2">
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
    </Fragment>
  );
}
