import React, { Fragment, Component } from 'react';

import { Grid, Card, CardContent, Button, Divider } from '@material-ui/core';

import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import Cropper from 'react-cropper';

class LivePreviewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: stock3,
      image: '',
      imageLoaded: false,
      image1: '',
      imageL1oaded: false,
      image2: '',
      image2Loaded: false,
      image3: '',
      image3Loaded: false,
      image4: '',
      image4Loaded: false,
      image4BeforeLoaded: false,
      image4Values: ''
    };
  }

  handleImageLoaded(state) {
    this.setState({
      [state + 'Loaded']: true
    });
  }

  handleBeforeImageLoad(state) {
    this.setState({
      [state + 'BeforeLoaded']: true
    });
  }

  handleClick(state) {
    let node = this[state];
    this.setState({
      [state]: node.crop()
    });
  }

  handleChange(state, values) {
    this.setState({
      [state + 'Values']: values
    });
  }

  handleGetValues(state) {
    let node = this[state];
    this.setState({
      [state + 'Values']: node.values()
    });
  }

  render() {
    return (
      <Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4">
              <div className="card-header">Simple</div>
              <CardContent className="p-3">
                <Cropper
                  src={this.state.imgSrc}
                  ref={ref => {
                    this.image = ref;
                  }}
                  onImgLoad={() => this.handleImageLoaded('image')}
                />
                <Divider />
                <div className="text-center">
                  {this.state.imageLoaded ? (
                    <div className="text-center">
                      <Button
                        color="primary"
                        onClick={() => this.handleClick('image')}>
                        Crop Selection
                      </Button>
                    </div>
                  ) : null}

                  {this.state.image ? (
                    <div>
                      <Divider />
                      <div>
                        <h6>Cropped Result</h6>
                      </div>
                      <img
                        className="after-img rounded"
                        src={this.state.image}
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
            <Card className="card-box mb-4">
              <div className="card-header">Predefined start X, Y origins</div>
              <CardContent className="p-3">
                <Cropper
                  src={this.state.imgSrc}
                  originX={100}
                  originY={100}
                  ref={ref => {
                    this.image1 = ref;
                  }}
                  onImgLoad={() => this.handleImageLoaded('image1')}
                />
                <Divider />
                <div className="text-center">
                  {this.state.image1Loaded ? (
                    <div className="text-center">
                      <Button
                        color="primary"
                        onClick={() => this.handleClick('image1')}>
                        Crop Selection
                      </Button>
                    </div>
                  ) : null}
                  {this.state.image1 ? (
                    <div>
                      <Divider />
                      <div>
                        <h6>Cropped Result</h6>
                      </div>
                      <img
                        className="after-img rounded"
                        src={this.state.image1}
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
            <Card className="card-box mb-4">
              <div className="card-header">Disabled</div>
              <CardContent className="p-3">
                <Cropper
                  src={this.state.imgSrc}
                  ref={ref => {
                    this.image3 = ref;
                  }}
                  disabled
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4">
              <div className="card-header">Predefined Ratio</div>
              <CardContent className="p-3">
                <Cropper
                  src={this.state.imgSrc}
                  ratio={16 / 9}
                  width={300}
                  ref={ref => {
                    this.image2 = ref;
                  }}
                  onImgLoad={() => this.handleImageLoaded('image2')}
                />
                <Divider />
                {this.state.image2Loaded ? (
                  <div className="text-center">
                    <Button
                      color="primary"
                      onClick={() => this.handleClick('image2')}>
                      Crop Selection
                    </Button>
                  </div>
                ) : null}

                {this.state.image2 ? (
                  <div>
                    <Divider />
                    <div>
                      <h6>Cropped Result</h6>
                    </div>
                    <img
                      className="after-img rounded"
                      src={this.state.image2}
                      alt=""
                    />
                  </div>
                ) : null}
              </CardContent>
            </Card>
            <Card className="card-box mb-4">
              <div className="card-header">Custom Styles</div>
              <CardContent className="p-3">
                <Cropper
                  src={this.state.imgSrc}
                  width={200}
                  height={500}
                  originX={200}
                  originY={50}
                  fixedRatio={false}
                  allowNewSelection={false}
                  onChange={values => this.handleChange('image4', values)}
                  styles={{
                    source_img: {
                      WebkitFilter: 'blur(3.5px)',
                      filter: 'blur(3.5px)'
                    },
                    modal: {
                      opacity: 0.5,
                      backgroundColor: '#fff'
                    },
                    dotInner: {
                      borderColor: '#ff0000'
                    },
                    dotInnerCenterVertical: {
                      backgroundColor: '#ff0000'
                    },
                    dotInnerCenterHorizontal: {
                      backgroundColor: '#ff0000'
                    }
                  }}
                  ref={ref => {
                    this.image4 = ref;
                  }}
                  onImgLoad={() => this.handleImageLoaded('image4')}
                  beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                />
                <Divider />
                <div className="text-center">
                  {this.state.image4Loaded ? (
                    <Button
                      color="primary"
                      onClick={() => this.handleClick('image4')}>
                      Crop Selection
                    </Button>
                  ) : null}
                  {this.state.image4 ? (
                    <div>
                      <Divider />
                      <div>
                        <h6>Cropped Result</h6>
                      </div>
                      <img
                        className="after-img rounded"
                        src={this.state.image4}
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default LivePreviewExample;
