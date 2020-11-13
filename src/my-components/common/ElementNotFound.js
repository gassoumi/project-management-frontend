import React, {Fragment} from 'react';
import {
  Grid,
} from '@material-ui/core';

import svgImage3 from '../../assets/images/illustrations/404.svg';

export default function ElementNotFound() {
  return (
    <Fragment>
      <div className="app-inner-content-layout--main">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <Grid
            item
            lg={6}
            md={9}
            className="px-4 px-lg-0 mx-auto text-center text-black">
            <img
              src={svgImage3}
              className="w-50 mx-auto d-block my-5 img-fluid"
              alt="..."
            />
            <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
              La page que vous recherchez n'existe pas.
            </h3>
            <p className="mb-4">
              Vous avez peut-être mal saisi l'adresse ou la page peut avoir
              déplacé.
            </p>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}
