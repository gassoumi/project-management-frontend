import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button
} from '@material-ui/core';

import svgImage4 from '../../../assets/images/illustrations/maps.svg';

import CountUp from 'react-countup';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card className="card-box bg-primary border-primary p-4 text-white mb-4">
            <span className="ribbon-angle ribbon-angle--top-right ribbon-success">
              <small>Best</small>
            </span>
            <h5 className="display-5 font-weight-bold mb-4">
              Active subscription
            </h5>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sm={6}
                className="d-flex align-items-center flex-column">
                <div>
                  <div className="mb-3">
                    <span className="display-2 font-weight-bold">$29</span>
                    <span className="opacity-8">/ month</span>
                  </div>
                  <ul className="p-0 opacity-7 m-0">
                    <li>Commercial license</li>
                    <li>Multiple developers</li>
                  </ul>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <div className="mb-3 font-size-lg font-weight-bold">
                    <b>65</b> days ago
                  </div>

                  <Button
                    size="small"
                    variant="outlined"
                    className="px-3"
                    color="inherit">
                    Renew now
                  </Button>
                </div>
              </Grid>
            </Grid>

            <div className="divider opacity-5 my-4" />

            <div className="text-center">
              <Button size="medium" variant="contained" color="secondary">
                View license details
              </Button>
            </div>
          </Card>
          <Card className="card-box bg-midnight-bloom p-4 mb-4">
            <div className="d-flex justify-content-between">
              <div className="pr-5">
                <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle mb-4 mt-1">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <h4 className="font-size-xl text-white font-weight-bold mb-2">
                  He lay on his armour-like back, and if he lifted his head.
                </h4>
                <Button color="secondary" className="text-white">
                  <span className="btn-wrapper--label">
                    <small className="font-weight-bold">View details</small>
                  </span>
                  <span className="btn-wrapper--icon">
                    <small>
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </small>
                  </span>
                </Button>
              </div>
              <div className="w-43 d-flex align-items-center">
                <img alt="..." className="d-block img-fluid" src={svgImage4} />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
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
                    size={230} // Number: Defines the size of the circle.
                    lineWidth={26} // Number: Defines the thickness of the circle's stroke.
                    progress={68.4} // Number: Update to change the progress and percentage.
                    progressColor="#f4772e" // String: Color of "progress" portion of circle.
                    bgColor="#edeef1" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '60px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>

                <div className="px-4 pb-4">
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
                  <Button color="primary" className="w-100">
                    Increase limit
                  </Button>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  <Button color="primary" className="text-first">
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
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </div>
                    <div className="text-black-50 font-size-sm">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="font-size-sm pr-1"
                      />
                      15% increase this month
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
          <Card className="p-3 mb-4">
            <Grid container spacing={4} className="d-flex align-items-center">
              <Grid item xs={12} sm={6}>
                <div className="text-black-50 font-weight-bold pb-4">
                  Project management
                </div>
                <div className="d-flex justify-content-center">
                  <div>
                    <div className="text-center font-size-lg px-5">
                      <span className="font-weight-bold">456</span>
                      <small className="text-black-50 d-block">Visitors</small>
                    </div>
                  </div>
                  <div>
                    <div className="text-center font-size-lg px-5">
                      <span className="font-weight-bold">56%</span>
                      <small className="text-black-50 d-block">Increase</small>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="text-black-50 font-weight-bold pb-4">
                  Current progress
                </div>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={34}
                />
                <div className="align-box-row mt-1 text-muted">
                  <div className="font-weight-bold">Orders</div>
                  <div className="ml-auto">
                    <div className="font-size-lg font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
