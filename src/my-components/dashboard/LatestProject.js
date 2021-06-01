import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { Card, IconButton, Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarGroup from "@material-ui/lab/AvatarGroup/AvatarGroup";
import { getAvatar } from "../entities/project/ProjectTable";

LatestProject.prototype = {
  rows: PropTypes.array.isRequired
};

export default function LatestProject({ rows }) {
  return (
    <Fragment>
      <Card className="card-box">
        <div className="card-header">
          <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
            Last Projects
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover text-nowrap mb-0">
            <thead>
              <tr>
                <th className="text-left" style={{ width: 180 }}>
                  Project Code
              </th>
                <th className="text-left">
                  Project Name
              </th>
                <th className="text-center">Creation date</th>
                <th className="text-center">Members</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.code}</td>
                  <td className="font-weight-bold">{row.designation}</td>
                  <td className="text-center">{moment(row.created_at).format('LL')}</td>
                  <td className="text-center">
                    {(row.projectUsers && row.projectUsers.length > 0) &&
                      <AvatarGroup className="d-flex justify-content-center">
                        {row.projectUsers.length > 0 &&
                          getAvatar(0, row)}
                        {row.projectUsers.length > 1 &&
                          getAvatar(1, row)}
                        {row.projectUsers.length > 2 &&
                          getAvatar(2, row)}
                        {row.projectUsers.length > 3 &&
                          getAvatar(3, row)}
                        {row.projectUsers.length > 4 &&
                          getAvatar(4, row)}
                      </AvatarGroup>
                    }
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="Consulter">
                      <IconButton
                        component={RouterLink}
                        to={`/project/${row.id}`}
                        size="small" color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button
            component={RouterLink}
            to="/project"
            size="small" variant="outlined" color="secondary">
            See all
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
