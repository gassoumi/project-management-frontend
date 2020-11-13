import React, { Fragment } from 'react';

import { Divider } from '@material-ui/core';

import Slider from 'react-slick';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Slider slidesToShow={1} slidesToScroll={1} dots={true}>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Reports</b>
              <div className="text-black-50">Monthly sales reports</div>
            </div>
            <div className="font-weight-bold text-danger font-size-xl">
              <CountUp
                start={0}
                end={2.363}
                duration={6}
                deplay={2}
                separator=""
                decimals={3}
                decimal=","
              />
            </div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>User</b>
              <div className="text-black-50">Visitors last week</div>
            </div>
            <div className="font-weight-bold text-success font-size-xl">
              <CountUp
                start={0}
                end={584}
                duration={6}
                deplay={2}
                separator=""
                prefix="+"
                decimals={0}
                decimal=","
              />
            </div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Sales</b>
              <div className="text-black-50">Total average weekly report</div>
            </div>
            <div className="font-weight-bold text-warning font-size-xl">
              <CountUp
                start={0}
                end={483}
                duration={6}
                deplay={2}
                separator=""
                decimals={0}
                decimal=","
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Deliveries</b>
              <div className="text-black-50">Deliveries total report</div>
            </div>
            <div className="font-weight-bold text-info font-size-xl">
              $33,1k
            </div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Tasks</b>
              <div className="text-black-50">Pending task actions</div>
            </div>
            <div className="font-weight-bold text-success font-size-xl">34</div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Issues</b>
              <div className="text-black-50">Server errors and issues</div>
            </div>
            <div className="font-weight-bold text-danger font-size-xl">346</div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Stats</b>
              <div className="text-black-50">Last month targets</div>
            </div>
            <div className="font-weight-bold text-warning font-size-xl">
              $1,23M
            </div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Payments</b>
              <div className="text-black-50">Week's expenses</div>
            </div>
            <div className="font-weight-bold text-danger font-size-xl">
              - $123,305
            </div>
          </div>
          <Divider className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <b>Orders</b>
              <div className="text-black-50">Total products ordered</div>
            </div>
            <div className="font-weight-bold text-warning font-size-xl">65</div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
}
