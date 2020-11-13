import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Button, Tooltip } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-light pt-4">
        <Container className="py-3">
          <div className="card shadow-xxl mb-4">
            <div className="p-3 p-xl-5">
              <div className="d-flex flex-xl-row flex-column align-items-center">
                <div className="feature-box-img p-4 p-xl-0 mb-4 mb-xl-0">
                  <img src={stock1} className="img-fluid" alt="..." />
                </div>
                <div className="pl-0 pl-xl-5 py-0 py-xl-2 text-center text-xl-left">
                  <div className="mb-4">
                    <span className="badge badge-success badge-pill">
                      New Release
                    </span>
                    <h1 className="display-4 mt-3 font-weight-bold">
                      Volutpat pretium libero.
                    </h1>
                    <div className="d-flex align-items-center justify-content-center justify-content-xl-start my-4">
                      <Tooltip arrow title="Menu Example">
                        <Button
                          color="primary"
                          variant="outlined"
                          className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                          <FontAwesomeIcon
                            icon={['far', 'building']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <Tooltip arrow title="Menu Example">
                        <Button
                          color="primary"
                          variant="outlined"
                          className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                          <FontAwesomeIcon
                            icon={['far', 'lightbulb']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <Tooltip arrow title="Menu Example">
                        <Button
                          color="primary"
                          variant="outlined"
                          className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                          <FontAwesomeIcon
                            icon={['far', 'object-group']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                    </div>
                    <p className="font-size-lg text-black-50">
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin.
                    </p>
                  </div>
                  <div>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      className="mr-2">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">View Details</span>
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      color="secondary"
                      title="View documentation">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">Documentation</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
