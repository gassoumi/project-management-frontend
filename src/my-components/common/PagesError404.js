import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  Grid,
  Button,
} from '@material-ui/core';

import svgImage3 from '../../assets/images/illustrations/404.svg';

import {NavLink as RouterLink} from 'react-router-dom';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
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
                        <Button
                          component={RouterLink}
                          to="/"
                          size="large"
                          color="secondary"
                          variant="contained"
                          className="text-white">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'arrow-left']}/>
                            </span>
                          <span className="btn-wrapper--label">Retour au dashboard</span>
                        </Button>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
