import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import CountUp from 'react-countup';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-danger card-shadow-danger mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-3">
                <div className="text-muted text-uppercase pb-2 font-size-sm">
                  Accounts
                </div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-up']}
                    className="font-size-lg mr-2 text-success"
                  />
                  <span>
                    <CountUp
                      start={0}
                      end={34}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </span>
                  <small className="opacity-6 pl-1 text-black-50">%</small>
                </h3>
              </div>
              <div className="pr-3">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={60} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
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
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-success card-shadow-success mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-3">
                <div className="text-muted text-uppercase pb-2 font-size-sm">
                  Subscriptions
                </div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <span className="font-size-lg mr-2 text-success font-weight-bold">
                    +
                  </span>
                  <CountUp start={0} end={35} />
                  <small className="opacity-6 pl-1 text-black-50">sales</small>
                </h3>
              </div>
              <div className="pr-3">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={60} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
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
                  showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-warning card-shadow-warning mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-3">
                <div className="text-muted text-uppercase pb-2 font-size-sm">
                  Expenses
                </div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <span className="font-size-lg mr-2 text-black-50 font-weight-bold">
                    $
                  </span>
                  <span>1,25M</span>
                </h3>
              </div>
              <div className="pr-3">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={60} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                  progress={5} // Number: Update to change the progress and percentage.
                  progressColor="#f4772e" // String: Color of "progress" portion of circle.
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
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box card-box-border-bottom border-info card-shadow-info mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-3">
                <div className="text-muted text-uppercase pb-2 font-size-sm">
                  Income
                </div>
                <h3 className="font-weight-bold display-4 mb-0 text-black">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-down']}
                    className="font-size-lg mr-2 text-danger"
                  />
                  <span>
                    <CountUp
                      start={0}
                      end={82}
                      duration={6}
                      deplay={2}
                      separator=" "
                      decimals={0}
                      decimal=","
                      prefix=""
                      suffix=""
                    />
                  </span>
                  <small className="opacity-6 pl-1 text-black-50">%</small>
                </h3>
              </div>
              <div className="pr-3">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={60} // Number: Defines the size of the circle.
                  lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                  progress={5} // Number: Update to change the progress and percentage.
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
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
