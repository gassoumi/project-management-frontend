import React, { Fragment } from 'react';

import { Container } from '@material-ui/core';

import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../../assets/images/stock-logos/6.svg';
import svgImage21 from '../../../assets/images/stock-logos/7.svg';
import svgImage22 from '../../../assets/images/stock-logos/8.svg';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      }
    ]
  };

  return (
    <Fragment>
      <div className="py-5">
        <Container>
          <div className="text-black text-center mb-4">
            <h1 className="display-2 mb-1 px-4 font-weight-bold">Partners</h1>
            <h3 className="font-size-xl line-height-md font-weight-light d-block mb-0 text-black-50">
              Our products are used by a lot of big companies
            </h3>
          </div>
          <Slider {...settings}>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage15}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage16}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage17}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage18}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage19}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage20}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage21}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div className="p-4 card card-box bg-light mx-4 d-flex align-self-stretch">
                <img
                  src={svgImage22}
                  style={{ height: 60 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </Fragment>
  );
}
