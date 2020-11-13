import React, { Fragment, Component } from 'react';

import { Grid, Button } from '@material-ui/core';

import { BlockPicker, TwitterPicker } from 'react-color';

export default class LivePreviewExample extends Component {
  state = {
    displayColorPicker: false,
    displayColorPicker2: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleClick2 = () => {
    this.setState({ displayColorPicker2: !this.state.displayColorPicker2 });
  };

  handleClose2 = () => {
    this.setState({ displayColorPicker2: false });
  };
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
      top: '48px',
      opacity: '1',
      visibility: 'visible'
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    };

    return (
      <Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Button
              color="primary"
              variant="contained"
              className="w-100"
              onClick={this.handleClick}>
              Custom Picker Wrapper 1
            </Button>
            {this.state.displayColorPicker ? (
              <div className="dropdown-menu p-0 m-0" style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <TwitterPicker />
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              color="primary"
              variant="contained"
              className="w-100"
              onClick={this.handleClick2}>
              Custom Picker Wrapper 2
            </Button>
            {this.state.displayColorPicker2 ? (
              <div className="dropdown-menu p-0 m-0" style={popover}>
                <div style={cover} onClick={this.handleClose2} />
                <BlockPicker className="m-0 border-0 w-100 mx-auto" />
              </div>
            ) : null}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
