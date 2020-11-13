import React, { Fragment } from 'react';

import { CardContent } from '@material-ui/core';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 940,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <Fragment>
      <Slider {...settings}>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">1</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">2</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">3</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">4</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">5</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">6</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">7</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">8</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">9</div>
          </CardContent>
        </div>
        <div>
          <CardContent className="p-3">
            <div className="slider-item">10</div>
          </CardContent>
        </div>
      </Slider>
    </Fragment>
  );
}
