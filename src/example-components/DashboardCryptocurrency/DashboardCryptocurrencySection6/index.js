import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  Avatar,
  IconButton,
  Card,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="font-size-lg px-3 py-4 font-weight-bold">
              Transactions history
            </div>
            <div className="table-responsive">
              <table className="table table-borderless text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase bg-secondary">Application</th>
                    <th className="text-uppercase bg-secondary">Date</th>
                    <th className="text-uppercase bg-secondary">Payouts</th>
                    <th className="text-uppercase bg-secondary">Status</th>
                    <th className="text-uppercase bg-secondary text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>File Manager</td>
                    <td>Aug 11, 2020</td>
                    <td>$45,567</td>
                    <td>
                      <span className="badge badge-success">Paid</span>
                    </td>
                    <td className="text-center">
                      <Tooltip arrow title="Edit entry">
                        <Fab size="small" color="primary">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Fab>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Calendar App</td>
                    <td>Nov 12, 2020</td>
                    <td>$586,567</td>
                    <td>
                      <span className="badge badge-success">Paid</span>
                    </td>
                    <td className="text-center">
                      <Tooltip arrow title="Edit entry">
                        <Fab size="small" color="primary">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Fab>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Tasks Management</td>
                    <td>Nov 13, 2020</td>
                    <td>$657</td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td className="text-center">
                      <Tooltip arrow title="Edit entry">
                        <Fab size="small" color="primary">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Fab>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Tickets App</td>
                    <td>Nov 22, 2020</td>
                    <td>$12,478</td>
                    <td>
                      <span className="badge badge-danger">Overdue</span>
                    </td>
                    <td className="text-center">
                      <Tooltip arrow title="Edit entry">
                        <Fab size="small" color="primary">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Fab>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Dashboard App</td>
                    <td>Aug 15, 2020</td>
                    <td>$45,57</td>
                    <td>
                      <span className="badge badge-success">Paid</span>
                    </td>
                    <td className="text-center">
                      <Tooltip arrow title="Edit entry">
                        <Fab size="small" color="primary">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Fab>
                      </Tooltip>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="font-size-lg px-3 py-4 font-weight-bold">
              Exchange
            </div>
            <div className="table-responsive">
              <table className="table table-borderless text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase bg-secondary">Profile</th>
                    <th className="text-uppercase bg-secondary">Currency</th>
                    <th className="text-uppercase bg-secondary">Balance</th>
                    <th className="text-uppercase bg-secondary">
                      Reserved in Orders
                    </th>
                    <th className="text-uppercase bg-secondary text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar1} className="mr-3" />
                        <div>
                          Brody Dixon
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2016
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">BTC</td>
                    <td>0.000458 BTC</td>
                    <td>0.000073 BTC</td>
                    <td className="text-center">
                      <Tooltip arrow title="Add">
                        <IconButton className="text-success">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Remove">
                        <IconButton className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar2} className="mr-3" />
                        <div>
                          Arvin Weston
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2017
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">ETH</td>
                    <td>3.435456 ETH</td>
                    <td>1.234555 ETH</td>
                    <td className="text-center">
                      <Tooltip arrow title="Add">
                        <IconButton className="text-success">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Remove">
                        <IconButton className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar3} className="mr-3" />
                        <div>
                          Elin Paine
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2018
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">EUR</td>
                    <td>34 EUR</td>
                    <td>6 EUR</td>
                    <td className="text-center">
                      <Tooltip arrow title="Add">
                        <IconButton className="text-success">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Remove">
                        <IconButton className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar4} className="mr-3" />
                        <div>
                          Sheena Hampton
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2019
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">CNY</td>
                    <td>66.20 CNY</td>
                    <td>23.40 CNY</td>
                    <td className="text-center">
                      <Tooltip arrow title="Add">
                        <IconButton className="text-success">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Remove">
                        <IconButton className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
