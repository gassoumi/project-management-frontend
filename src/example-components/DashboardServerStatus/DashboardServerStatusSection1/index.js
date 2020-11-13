import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Box, Card } from '@material-ui/core';

import Circle from 'react-circle';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box p-3 mb-4">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="text-black-50">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-sm"
                />
              </IconButton>
            </Box>
            <div className="text-black-50 font-size-lg pb-3">Customers</div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={80} // Number: Defines the size of the circle.
                  lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                  progress={34} // Number: Update to change the progress and percentage.
                  progressColor="#f83245" // String: Color of "progress" portion of circle.
                  bgColor="rgba(248, 50, 69, 0.15)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-right">
                <h3 className="font-weight-bold display-4 mb-1 text-black">
                  <CountUp
                    start={0}
                    end={547}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </h3>
                <span className="text-muted">Last week</span>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box p-3 mb-4">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="text-black-50">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-sm"
                />
              </IconButton>
            </Box>
            <div className="text-black-50 font-size-lg pb-3">Orders</div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={80} // Number: Defines the size of the circle.
                  lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                  progress={43} // Number: Update to change the progress and percentage.
                  progressColor="#1bc943" // String: Color of "progress" portion of circle.
                  bgColor="rgba(27, 201, 67, 0.15)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-right">
                <h3 className="font-weight-bold display-4 mb-1 text-black">
                  <CountUp
                    start={0}
                    end={456}
                    duration={6}
                    deplay={2}
                    separator=" "
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </h3>
                <span className="text-muted">Last month</span>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box p-3 mb-4">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="text-black-50">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-sm"
                />
              </IconButton>
            </Box>
            <div className="text-black-50 font-size-lg pb-3">Visitors</div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={80} // Number: Defines the size of the circle.
                  lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                  progress={69} // Number: Update to change the progress and percentage.
                  progressColor="#f4772e" // String: Color of "progress" portion of circle.
                  bgColor="rgba(244, 119, 46, 0.15)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-right">
                <h3 className="font-weight-bold display-4 mb-1 text-black">
                  <CountUp
                    start={0}
                    end={362}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </h3>
                <span className="text-muted">Last year</span>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box p-3 mb-4">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="text-black-50">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-sm"
                />
              </IconButton>
            </Box>
            <div className="text-black-50 font-size-lg pb-3">Deliveries</div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={80} // Number: Defines the size of the circle.
                  lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                  progress={56} // Number: Update to change the progress and percentage.
                  progressColor="#11c5db" // String: Color of "progress" portion of circle.
                  bgColor="rgba(17, 197, 219, 0.15)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-right">
                <h3 className="font-weight-bold display-4 mb-1 text-black">
                  <CountUp
                    start={0}
                    end={43}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </h3>
                <span className="text-muted">Last day</span>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
