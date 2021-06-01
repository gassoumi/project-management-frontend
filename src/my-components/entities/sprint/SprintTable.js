import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import { getDisplayString } from "../../utils";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

SprintTable.propTypes = {
  sprints: PropTypes.array.isRequired,
  canEdit: PropTypes.bool.isRequired,
  sort: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export const getColorSprint = value => {
  switch (value) {
    case "Planifiè":
      return "success";
    case "En Cours":
      return "info";
    case "Cloturé":
      return "warning";
    case "Archivé":
      return "danger";
    default:
      return "danger";
  }
};


export const getSprintValue = value => {
  switch (value) {
    case "Planifiè":
      return "Planned";
    case "En Cours":
      return "In progress";
    case "Cloturé":
      return "Closing";
    case "Archivé":
      return "Archived";
    default:
      return "value";
  }
};


function SprintTable({ sprints, canEdit, sort, handleEdit, handleDelete }) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
        <tr>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('name')}>
            Sprint name <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('project')}>
            Project <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('desired_at')}>
            Date <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('status')}>
            Status <FontAwesomeIcon icon="sort" />
          </th>
          {canEdit && <th className="text-center">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {sprints.map(sprint => (
          <tr key={sprint.id}>
            <td>
              {sprint.name}
            </td>
            <td className="text-info">
              {(sprint.project && sprint.project.designation && sprint.project.id) &&
                <Link component={RouterLink} to={`/project/${sprint.project.id}`}>
                  <span className="text-primary">
                    {getDisplayString(sprint.project.designation)}
                  </span>
                </Link>}
            </td>
            <td className="text-center">
              {moment(sprint.desired_at).format('LL')}
            </td>
            <td className="text-center">
              <div className={`badge badge-${getColorSprint(sprint.status)} px-4`}>{getSprintValue(sprint.status)}</div>
            </td>
            {canEdit &&
              <td className="text-center">
                <Tooltip arrow title="Edit">
                  <IconButton
                    onClick={() => handleEdit(sprint.id)}
                    className="text-primary">
                    <FontAwesomeIcon
                      icon={['fas', 'pen']}
                      className="font-size-sm"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Delete">
                  <IconButton
                    onClick={() => handleDelete(sprint)}
                    className="text-danger">
                    <FontAwesomeIcon
                      icon={['far', 'trash-alt']}
                      className="font-size-sm"
                    />
                  </IconButton>
                </Tooltip>
              </td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SprintTable;
