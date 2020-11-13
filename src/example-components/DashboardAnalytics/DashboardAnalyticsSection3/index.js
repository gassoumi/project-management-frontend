import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  IconButton,
  Checkbox,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Example table with custom content</b>
          </div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3">
                <FontAwesomeIcon icon={['fas', 'cog']} spin />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive">
            <table className="table mb-0 text-nowrap">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}></th>
                  <th>Company</th>
                  <th>Date</th>
                  <th className="text-center" style={{ width: '20%' }}>
                    Status
                  </th>
                  <th>Employee</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox4"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="View Facebook Profile">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-facebook">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Facebook</b>
                        <span className="text-black-50 d-block">
                          Social media company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">16 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-warning">
                      Pending
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox5"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Github">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-github">
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Github</b>
                        <span className="text-black-50 d-block">
                          Recommended company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row text-danger">
                      <b>17 September 2020</b>
                      <div className="text-info ml-2 badge badge-neutral-info">
                        Due
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success h-auto py-0 px-3">
                      Completed
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox1"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Instagram">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-instagram">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Instagram</b>
                        <span className="text-black-50 d-block">
                          Sharing images since 2000
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">18 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-danger">
                      Declined
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Checkbox
                      id="CustomCheckbox2"
                      className="align-self-start"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Tooltip arrow title="Twitter">
                        <Button
                          color="default"
                          variant="outlined"
                          className="d-40 mr-3 text-twitter">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-lg"
                          />
                        </Button>
                      </Tooltip>
                      <div>
                        <b>Twitter</b>
                        <span className="text-black-50 d-block">
                          140 characters at a time
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">19 September 2020</div>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-info">
                      Review
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Finnlay Haney
                        </a>
                        <span className="text-black-50 d-block">
                          Professional Ingineer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <IconButton size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
