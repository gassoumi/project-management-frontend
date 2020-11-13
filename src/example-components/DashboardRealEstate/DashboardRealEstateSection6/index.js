import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Box,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  const chart47Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#1bc943',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#1bc943'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart47Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="mb-4">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Weekly Sales
                </h6>
                <p className="text-black-50 mb-0">
                  Reports for what we sold this week.
                </p>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton
                  color="primary"
                  className="text-second font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </IconButton>
              </Box>
            </div>
            <div className="mx-4 divider" />
            <div className="mx-4 divider" />
            <div className="px-5 pt-4 pb-3">
              <h1 className="display-2 font-weight-bold mb-4">
                $
                <span className="pl-1">
                  <CountUp
                    start={0}
                    end={477.693}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h1>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div>
                    <span className="font-size-xl font-weight-bold">76%</span>
                  </div>
                  <LinearProgress
                    value={76}
                    className="mb-2"
                    color="secondary"
                  />
                  <div className="text-dark">Orders</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div>
                    <span className="font-size-xl font-weight-bold">34%</span>
                  </div>
                  <LinearProgress value={34} color="primary" className="mb-2" />
                  <div className="text-dark">Deliveries</div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <span className="font-size-xl font-weight-bold">49%</span>
                  </div>
                  <LinearProgress
                    value={49}
                    color="secondary"
                    className="mb-2"
                  />
                  <div className="text-dark">Products</div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Chart
                options={chart47Options}
                series={chart47Data}
                type="area"
                height={100}
              />
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="small" variant="outlined" color="secondary">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar7} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={61}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar5} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={44}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={29}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={38}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">Generate reports</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
