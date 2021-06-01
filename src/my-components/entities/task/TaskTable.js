import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import { getDisplayString } from "../../utils";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


NoteTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  canEdit: PropTypes.bool.isRequired,
  sort: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  displayStatus: PropTypes.bool.isRequired,
};

export const getColorTask = value => {
  switch (value) {
    case "A Faire":
      return "primary";
    case "En Cours":
      return "info";
    case "A Verifier":
      return "warning";
    case "Termine":
      return "success";
    case "Backlog":
      return "danger";
    default:
      return "warning";
  }
};

export const getTaskCodeColor = (value) => {
  switch (value) {
    case "A Faire":
      return "#5383ff";
    case "En Cours":
      return "#11c5db";
    case "A Verifier":
      return "#f4772e";
    case "Termine":
      return "#1bc943";
    case "Backlog":
      return "#f83245";
    default:
      return "#f4772e";
  }
};


function NoteTable({ tasks, canEdit, sort, handleEdit, handleDelete, displayStatus }) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
        <tr>
          <th className="text-left">
            Project name
        </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('description')}>
            Task <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('user')}>
            Responsible <FontAwesomeIcon icon="sort" />
          </th>
          {
            displayStatus &&
            <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('status')}>
              Statuts <FontAwesomeIcon icon="sort" />
            </th>
          }

          <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('start_at')}>
            Start date <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('end_at')}>
            End date <FontAwesomeIcon icon="sort" />
          </th>
          {canEdit && <th className="text-center">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>
              {task.sprint && task.sprint.project &&
                <Link component={RouterLink} to={`/project/${task.sprint.project.id}`}>
                  <span className="text-primary">
                    {getDisplayString(task.sprint.project.designation, 20)}
                  </span>
                </Link>
              }
            </td>
            <td>
              {task.description}
            </td>
            <td className="text-info">
              {task.user && task.user.username &&
                <div className="d-flex align-items-center">
                  <Avatar
                    src={task.user.userProfile && task.user.userProfile.photo && task.user.userProfile.photo}
                    className="mr-2" />
                  <div>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold text-black"
                    >
                      {task.user.username}
                    </a>
                  </div>
                </div>
              }
            </td>
            {
              displayStatus &&
              <td className="text-center">
                <div className={`badge badge-${getColorTask(task.status)} px-4`}>{task.status}</div>
              </td>
            }
            <td className="text-center">
              {moment(task.start_at).format('L')}
            </td>
            <td className="text-center">
              {moment(task.end_at).format('L')}
            </td>

            <td className="text-center">
              {canEdit &&
                <Tooltip arrow title="Edit">
                  <IconButton
                    onClick={() => handleEdit(task.id)}
                    className="text-primary">
                    <FontAwesomeIcon
                      icon={['fas', 'pen']}
                      className="font-size-sm"
                    />
                  </IconButton>
                </Tooltip>
              }
              <Tooltip arrow title="View">
                <IconButton
                  component={RouterLink}
                  to={`/task/${task.id}`}
                  className="text-primary">
                  <FontAwesomeIcon
                    icon={['fas', 'eye']}
                    className="font-size-sm"
                  />
                </IconButton>
              </Tooltip>
              {canEdit &&
                <Tooltip arrow title="Delete">
                  <IconButton
                    onClick={() => handleDelete(task)}
                    className="text-danger">
                    <FontAwesomeIcon
                      icon={['far', 'trash-alt']}
                      className="font-size-sm"
                    />
                  </IconButton>
                </Tooltip>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NoteTable;
