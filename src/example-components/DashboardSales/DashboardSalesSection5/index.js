import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  IconButton,
  LinearProgress,
  Card,
  Button,
  Tooltip
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title font-size-lg font-weight-bold">
            Tasks management
          </div>
          <div className="card-header--actions">
            <Tooltip arrow title="Add new">
              <IconButton color="primary">
                <FontAwesomeIcon
                  icon={['fas', 'plus-circle']}
                  className="text-dark font-size-sm"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Close">
              <IconButton className="text-danger">
                <FontAwesomeIcon
                  icon={['fas', 'times']}
                  className="text-danger font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover text-nowrap mb-0">
            <thead>
              <tr>
                <th className="text-left" style={{ width: 180 }}>
                  Project name
                </th>
                <th className="text-center">Due date</th>
                <th className="text-center">Status</th>
                <th className="text-center">Members</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-bold">Calendar Application</td>
                <td className="text-center">14 Feb 2020</td>
                <td>
                  <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={100}
                  />
                  <div className="font-size-sm text-black-50 pt-1">
                    Completed
                  </div>
                </td>
                <td className="text-center">
                  <AvatarGroup className="d-flex justify-content-center">
                    <Avatar alt="..." src={avatar1} />
                    <Avatar alt="..." src={avatar2} />
                    <Avatar alt="..." src={avatar3} />
                    <Avatar alt="..." src={avatar4} />
                    <Tooltip title="Shanelle Wynn • Beck Simpson">
                      <Avatar>+2</Avatar>
                    </Tooltip>
                  </AvatarGroup>
                </td>
                <td className="text-center">
                  <Tooltip arrow title="View Details">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">File Manager</td>
                <td className="text-center">16 Feb 2020</td>
                <td>
                  <LinearProgress value={55} color="primary" />
                  <div className="font-size-sm text-black-50 pt-1">Overdue</div>
                </td>
                <td className="text-center">
                  <AvatarGroup className="d-flex justify-content-center">
                    <Avatar alt="..." src={avatar1} />
                    <Avatar alt="..." src={avatar6} />
                    <Avatar alt="..." src={avatar5} />
                    <Avatar alt="..." src={avatar4} />
                  </AvatarGroup>
                </td>
                <td className="text-center">
                  <Tooltip arrow title="View Details">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">Tasks App</td>
                <td className="text-center">18 Feb 2020</td>
                <td>
                  <LinearProgress value={51} color="secondary" />
                  <div className="font-size-sm text-black-50 pt-1">Pending</div>
                </td>
                <td className="text-center">
                  <AvatarGroup className="d-flex justify-content-center">
                    <Avatar alt="..." src={avatar4} />
                    <Avatar alt="..." src={avatar3} />
                    <Avatar alt="..." src={avatar2} />
                  </AvatarGroup>
                </td>
                <td className="text-center">
                  <Tooltip arrow title="View Details">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">Tickets Management</td>
                <td className="text-center">22 Feb 2020</td>
                <td>
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={76}
                  />
                  <div className="font-size-sm text-black-50 pt-1">
                    In progress
                  </div>
                </td>
                <td className="text-center">
                  <AvatarGroup className="d-flex justify-content-center">
                    <Avatar alt="..." src={avatar4} />
                    <Avatar alt="..." src={avatar7} />
                    <Avatar alt="..." src={avatar1} />
                    <Avatar alt="..." src={avatar2} />
                  </AvatarGroup>
                </td>
                <td className="text-center">
                  <Tooltip arrow title="View Details">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button size="small" variant="outlined" color="secondary">
            View more entries
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
