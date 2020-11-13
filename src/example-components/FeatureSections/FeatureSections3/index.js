import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Card, Button } from '@material-ui/core';

import svgImage6 from '../../../assets/images/illustrations/data_points.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Container className="py-1 py-xl-3">
        <Card className="shadow-xxl mb-4">
          <div className="p-3 p-xl-5">
            <div className="d-flex flex-column flex-xl-row align-items-center">
              <div className="pl-0 pl-xl-4 py-0 py-md-2 text-center text-xl-left">
                <div className="mb-4">
                  <span className="badge badge-warning badge-pill">
                    Latest release
                  </span>
                  <h1 className="display-3 my-3 font-weight-bold">
                    Volutpat pretium
                  </h1>
                  <p className="font-size-lg text-black-50">
                    One morning, when Gregor Samsa woke from troubled dreams.
                  </p>
                </div>
                <div>
                  <Button size="large" variant="outlined" color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Read more</span>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <img src={svgImage6} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Fragment>
  );
}
