import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Box,
  LinearProgress,
  Card,
  Button,
  Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart5Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '80%'
      }
    },
    colors: ['#7fe4a6', '#7fe2ec', '#7fc8fd', '#ff98a4'],
    fill: {
      opacity: 1
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month'
    ]
  };
  const chart5Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1]
    },
    {
      name: 'Weekly Stats',
      data: [2.3, 3.1, 5.1, 3.6, 4.0, 4.0, 3.8, 3.6, 3.8]
    },
    {
      name: 'Sales reports',
      data: [2.3, 3.1, 5.1, 3.6, 4.0, 4.0, 3.8, 3.6, 3.8]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1]
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Revenue progress
                </h6>
                <p className="text-black-50 mb-0">
                  Our company revenues, split by progress.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <Button variant="outlined" color="secondary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-down']} />
                  </span>
                  <span className="btn-wrapper--label">Download report</span>
                </Button>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <div className="p-4">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="p-5 mb-4 rounded bg-secondary">
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          54,126
                        </span>
                        <span className="text-muted">dribbble.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={50}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          12,345
                        </span>
                        <span className="text-muted">amazon.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={76}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          76%
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          34,985
                        </span>
                        <span className="text-muted">facebook.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={87}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          87%
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="line-height-1">
                        <span className="font-size-lg font-weight-bold pr-3">
                          76,381
                        </span>
                        <span className="text-muted">youtube.com</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="flex-grow-1">
                          <LinearProgress
                            value={59}
                            color="primary"
                            variant="determinate"
                          />
                        </div>
                        <div className="text-dark font-weight-bold pl-3">
                          59%
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Chart
                    options={chart5Options}
                    series={chart5Data}
                    type="bar"
                    height={330}
                  />
                </Grid>
              </Grid>
              <Divider />
              <Divider />
            </div>
            <div className="text-center mb-4">
              <Button size="large" color="primary">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Timeline progress
                </h6>
                <p className="text-black-50 mb-0">
                  Latest news split by events.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <Button
                  variant="outlined"
                  color="secondary"
                  title="View details">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <PerfectScrollbar className="scroll-area-lg shadow-overflow">
              <div className="p-4">
                <div className="timeline-list mb-0">
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">
                        <AddCircleTwoToneIcon />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                        <span className="text-info ml-2 badge badge-neutral-info">
                          New
                        </span>
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-3">
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded mr-3 shadow-sm"
                            src={people3}
                            width="70"
                          />
                        </a>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded shadow-sm"
                            src={people2}
                            width="70"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-amy-crisp text-white">
                        <FontAwesomeIcon icon={['far', 'keyboard']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        2003
                      </h4>
                      <p>MySpace becomes the most popular social network.</p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">
                        <AddCircleTwoToneIcon />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PerfectScrollbar>
            <div className="text-center my-4">
              <Button size="large" color="primary">
                <span className="btn-wrapper--label">View more events</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
