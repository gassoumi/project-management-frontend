import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Card, CardContent } from '@material-ui/core';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Slider from 'react-slick';

export default function LivePreviewExample() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <Fragment>
      <Container className="py-5">
        <div className="text-center">
          <h1 className="display-2 text-black mb-3 font-weight-bold">
            Our customer stories
          </h1>
          <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
            Read how customers around the world use our services to build their
            projects
          </p>
        </div>
        <Slider {...settings} className="w-100 p-2">
          <div>
            <Card className="m-4">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div>
                    <Card className="card-transparent">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <img
                          src={people1}
                          className="card-img-top rounded-circle"
                          style={{ width: 80 }}
                          alt="..."
                        />
                      </a>
                    </Card>
                  </div>
                  <div className="pl-4">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-primary font-size-xxl"
                    />
                    <div className="my-3 text-warning font-size-lg">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                    </div>
                    <blockquote className="my-3 text-black-50 blockquote">
                      I will give you a complete account of the system, and
                      expound the actual teachings.
                    </blockquote>
                    <div className="font-size-lg font-weight-bold">
                      John Doe,
                      <small className="text-black-50">ACME Company</small>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="m-4">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div>
                    <Card className="card-transparent">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <img
                          src={people2}
                          className="card-img-top rounded-circle"
                          style={{ width: 80 }}
                          alt="..."
                        />
                      </a>
                    </Card>
                  </div>
                  <div className="pl-4">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-primary font-size-xxl"
                    />
                    <div className="my-3 text-warning font-size-lg">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </div>
                    <blockquote className="my-3 text-black-50 blockquote">
                      But who has any right to find fault with a man who chooses
                      to enjoy a pleasure that has.
                    </blockquote>
                    <div className="font-size-lg font-weight-bold">
                      Alexandros Hebert,
                      <small className="text-black-50">Bailey Company</small>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="m-4">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div>
                    <Card className="card-transparent">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <img
                          src={people3}
                          className="card-img-top rounded-circle"
                          style={{ width: 80 }}
                          alt="..."
                        />
                      </a>
                    </Card>
                  </div>
                  <div className="pl-4">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-primary font-size-xxl"
                    />
                    <div className="my-3 text-warning font-size-lg">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
                    </div>
                    <blockquote className="my-3 text-black-50 blockquote">
                      Nor again is there anyone who loves or pursues or desires
                      to obtain pain of itself.
                    </blockquote>
                    <div className="font-size-lg font-weight-bold">
                      Jimi Tomlinson,
                      <small className="text-black-50">Wood Company</small>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="m-4">
              <CardContent className="p-3">
                <div className="align-box-row align-items-start">
                  <div>
                    <Card className="card-transparent">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="card-img-wrapper rounded">
                        <img
                          src={people1}
                          className="card-img-top rounded-circle"
                          style={{ width: 80 }}
                          alt="..."
                        />
                      </a>
                    </Card>
                  </div>
                  <div className="pl-4">
                    <FontAwesomeIcon
                      icon={['fas', 'quote-right']}
                      className="text-primary font-size-xxl"
                    />
                    <div className="my-3 text-warning font-size-lg">
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    </div>
                    <blockquote className="my-3 text-black-50 blockquote">
                      I will give you a complete account of the system, and
                      expound the actual teachings.
                    </blockquote>
                    <div className="font-size-lg font-weight-bold">
                      Kaylee Magana,
                      <small className="text-black-50">Espinosa Company</small>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </Container>
    </Fragment>
  );
}
