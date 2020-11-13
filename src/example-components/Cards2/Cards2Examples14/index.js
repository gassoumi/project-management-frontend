import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import Circle from 'react-circle';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Storage status
              </h6>

              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="mx-auto text-center">
              <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="3s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={190} // Number: Defines the size of the circle.
                lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                progress={68.4} // Number: Update to change the progress and percentage.
                progressColor="#f4772e" // String: Color of "progress" portion of circle.
                bgColor="#d1d2db" // String: Color of "empty" portion of circle.
                textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true}
                textStyle={{
                  fontSize: '60px'
                }} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
              />
            </div>

            <div className="p-4">
              <Grid
                container
                spacing={0}
                className=" text-uppercase font-size-sm mb-4">
                <Grid
                  item
                  xs={6}
                  className="d-flex align-items-center justify-content-end">
                  <span>Available</span>
                  <div className="badge badge-warning badge-circle mx-2">
                    available
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="d-flex align-items-center text-left">
                  <div className="badge badge-primary badge-circle mx-2">
                    total
                  </div>
                  <span>Total</span>
                </Grid>
              </Grid>
              <Button color="primary" variant="contained" className="w-100">
                Increase limit
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box p-4 mb-4">
            <div className="card-header-alt d-flex justify-content-between pb-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Available storage
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="d-flex align-items-start">
              <FontAwesomeIcon
                icon={['far', 'object-group']}
                className="display-1"
              />
              <div className="flex-grow-1 pl-4">
                <div className="d-block mb-2 mt-1">
                  <b>5GB</b> used out of <b>25GB</b>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={39}
                />
              </div>
            </div>
            <small className="d-block mt-3">
              <span className="d-block pb-3">
                Get <b>1 GB</b> of free storage if you take advantage of our
                premium plans.
              </span>
              <Button color="primary" variant="contained">
                View details
              </Button>
            </small>
          </Card>
          <Card className="card-box p-3 mb-4">
            <div className="d-flex align-items-center">
              <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="3s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={80} // Number: Defines the size of the circle.
                lineWidth={26} // Number: Defines the thickness of the circle's stroke.
                progress={74} // Number: Update to change the progress and percentage.
                progressColor="#1bc943" // String: Color of "progress" portion of circle.
                bgColor="#edeef1" // String: Color of "empty" portion of circle.
                textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                textStyle={{
                  fontSize: '60px',
                  fontWeight: 'bold'
                }}
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="pl-3">
                <div className="text-black-50">Stocks trading</div>
                <div className="font-weight-bold display-4 py-1 text-success">
                  $
                  <span>
                    <CountUp
                      start={0}
                      end={687}
                      duration={6}
                      delay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Open tickets
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="px-3 pb-3">
              <div className="scroll-area rounded bg-secondary shadow-overflow">
                <PerfectScrollbar>
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Wrong product price
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Nazim Kidd
                          </a>
                          <span className="pl-2 text-muted">
                            opened 20 minutes ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Active IE8 issues
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Charlton Oconnell
                          </a>
                          <span className="pl-2 text-muted">
                            opened two hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            My account doesn't work
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Isha Rollins
                          </a>
                          <span className="pl-2 text-muted">
                            opened three hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Unpaid invoice status
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar4} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened 3 days ag0
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-warning">Pending</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Mobile app problems
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar5} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Kush Malone
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-danger">Rejected</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Responsive issues on Firefox
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
