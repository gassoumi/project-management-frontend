import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Card, Button, Tooltip } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img alt="..." className="card-img-top" src={stock1} />
            </div>
            <div className="card-body text-center card-body-avatar">
              <div className="avatar-icon-wrapper border-white overflow-hidden rounded border-3">
                <div className="avatar-icon rounded-0">
                  <img alt="..." src={avatar4} />
                </div>
              </div>
              <h3 className="font-weight-bold font-size-lg mt-1 mb-2">
                Zara Wagstaff
              </h3>
              <p className="text-black-50 mb-0">
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter.
              </p>
              <div className="pt-4">
                <Tooltip arrow title="Facebook">
                  <Button
                    size="small"
                    color="default"
                    className="text-facebook">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Dribbble">
                  <Button
                    size="small"
                    color="default"
                    className="text-dribbble mr-2 ml-2">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'dribbble']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Twitter">
                  <Button size="small" color="default" className="text-twitter">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges">
                <span className="mr-1 badge badge-success badge-pill">
                  Success
                </span>
                <span className="text-info badge badge-neutral-info badge-pill">
                  Info
                </span>
              </div>
              <img alt="..." className="card-img-top" src={stock2} />
            </div>
            <div className="card-body card-body-avatar">
              <div className="avatar-icon-wrapper border-white rounded border-2">
                <div className="avatar-icon rounded">
                  <img alt="..." src={avatar5} />
                </div>
              </div>
              <h3 className="font-weight-bold font-size-lg mt-3 mb-2">
                Bradleigh Whitmore
              </h3>
              <p className="text-black-50 mb-0">
                The 1914 Loeb Edition inspired a graphic designer, it's
                admittedly an odd way for Cicero to sail into the 21st century.
              </p>

              <Button color="secondary" className="mt-4">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'comment-dots']} />
                </span>
                <span className="btn-wrapper--label">Send Message</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img alt="..." className="card-img-top" src={stock3} />
            </div>
            <div className="card-body text-center card-body-avatar">
              <div className="avatar-icon-wrapper d-120">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
              <h3 className="font-weight-bold mt-1 mb-3">Bryn Frost</h3>
              <p className="card-text mb-3">
                Here is the classic lorem ipsum passage followed by Boparai's
                odd, yet mesmerizing version.
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-github">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-instagram">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-google">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
