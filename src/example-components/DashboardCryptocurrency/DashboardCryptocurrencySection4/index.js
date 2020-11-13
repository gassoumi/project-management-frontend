import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Avatar, Card, Button, Tooltip } from '@material-ui/core';

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
        <div className="card-header py-3">
          <div className="card-header--title font-size-lg">Support board</div>
          <div className="card-header--actions">
            <Button size="small" variant="outlined" color="secondary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'plus-circle']}
                  className="text-success"
                />
              </span>
              <span className="btn-wrapper--label">Add ticket</span>
            </Button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover text-nowrap mb-0">
            <thead>
              <tr>
                <th className="bg-white text-left">ID</th>
                <th className="bg-white">Requester</th>
                <th className="bg-white text-left">Subject</th>
                <th className="bg-white">Assignee</th>
                <th className="bg-white text-center">Priority</th>
                <th className="bg-white text-center">Status</th>
                <th className="bg-white text-center">Created date</th>
                <th className="bg-white text-center">Due date</th>
                <th className="bg-white text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-bold">#453</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar alt="..." className="mr-2" src={avatar1} />
                    <div>Shanelle Wynn</div>
                  </div>
                </td>
                <td>When, while the lovely valley teems</td>
                <td className="text-center">
                  <Avatar alt="..." src={avatar2} />
                </td>
                <td className="text-center">
                  <div className="badge bg-neutral-danger text-danger">
                    High
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-dark badge badge-neutral-dark">
                    Closed
                  </div>
                </td>
                <td className="text-center text-muted">12/12/2020</td>
                <td className="text-center text-muted">08/30/2021</td>
                <td className="text-center">
                  <Button size="small" color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#584</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar alt="..." className="mr-2" src={avatar3} />
                    <div>Brody Dixon</div>
                  </div>
                </td>
                <td>I am so happy, my dear friend</td>
                <td className="text-center">
                  <Tooltip arrow title="Arvin Weston">
                    <Avatar alt="Remy Sharp" src={avatar4} />
                  </Tooltip>
                </td>
                <td className="text-center">
                  <div className="text-warning badge badge-neutral-warning">
                    Low
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-success badge badge-neutral-success">
                    Open
                  </div>
                </td>
                <td className="text-center text-muted">06/08/2022</td>
                <td className="text-center text-muted">07/25/2023</td>
                <td className="text-center">
                  <Button size="small" color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#764</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar alt="..." className="mr-2" src={avatar5} />
                    <div>Milton Ayala</div>
                  </div>
                </td>
                <td>His own image, and the breath</td>
                <td className="text-center">
                  <Tooltip arrow title="Mali Rosario">
                    <Avatar alt="Mali Rosario" src={avatar6} />
                  </Tooltip>
                </td>
                <td className="text-center">
                  <div className="text-info badge badge-neutral-info">
                    Medium
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-dark badge badge-neutral-dark">
                    Closed
                  </div>
                </td>
                <td className="text-center text-muted">12/12/2020</td>
                <td className="text-center text-muted">08/30/2021</td>
                <td className="text-center">
                  <Button size="small" color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#453</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar alt="..." className="mr-2" src={avatar1} />
                    <div>Kane Gentry</div>
                  </div>
                </td>
                <td>When I hear the buzz</td>
                <td className="text-center">
                  <Avatar alt="..." className="mr-2" src={avatar7} />
                </td>
                <td className="text-center">
                  <div className="text-warning badge badge-neutral-warning">
                    Low
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-success badge badge-neutral-success">
                    Open
                  </div>
                </td>
                <td className="text-center text-muted">12/12/2020</td>
                <td className="text-center text-muted">08/30/2021</td>
                <td className="text-center">
                  <Button size="small" color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Fragment>
  );
}
