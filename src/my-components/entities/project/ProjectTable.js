import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDisplayString } from "../../utils";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

export const getAvatar = (index, project) => {
  const length = project.projectUsers.length;
  if (index <= 4 || (length - index === 1)) {
    let photo = "";
    if (project.projectUsers[index].user.userProfile && project.projectUsers[index].user.userProfile.photo) {
      photo = project.projectUsers[index].user.userProfile.photo;
    }
    return (
      <Tooltip title={project.projectUsers[index].user.username || ""}>
        <Avatar alt="..." src={photo} />
      </Tooltip>
    )
  } else {
    let title = "";
    let number = 0;
    for (let i = index; i < length; i++) {
      title += project.projectUsers[i].user.username + " ";
      number++;
    }
    return (
      <Tooltip title={title.trim()}>
        <Avatar>+{number}</Avatar>
      </Tooltip>
    );
  }
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  canEdit: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
};

function ProjectTable({ projects, sort, canEdit, handleDelete }) {
  let match = useRouteMatch("");

  return (
    <div className="table-responsive">
      <table className="table table-hover text-nowrap mb-0">
        <thead>
          <tr>
            <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('code')}>
              Project code <FontAwesomeIcon icon={['fas', 'sort']} />
            </th>
            <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('designation')}>
              Project <FontAwesomeIcon icon="sort" />
            </th>
            <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('objective')}>
              Objective <FontAwesomeIcon icon="sort" />
            </th>
            <th className="text-center">
              Members
          </th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.code}</td>
              <td className="text-center font-weight-bold"> {getDisplayString(project.designation, 30)} </td>
              <td className="text-center">{getDisplayString(project.objective, 40)}</td>
              <td className="text-center">
                {(project.projectUsers && project.projectUsers.length > 0) &&
                  <AvatarGroup className="d-flex justify-content-center">
                    {project.projectUsers.length > 0 &&
                      getAvatar(0, project)}
                    {project.projectUsers.length > 1 &&
                      getAvatar(1, project)}
                    {project.projectUsers.length > 2 &&
                      getAvatar(2, project)}
                    {project.projectUsers.length > 3 &&
                      getAvatar(3, project)}
                    {project.projectUsers.length > 4 &&
                      getAvatar(4, project)}
                  </AvatarGroup>
                }
              </td>
              <td className="text-center">
                {canEdit &&
                  <Tooltip arrow title="Edit">
                    <IconButton
                      component={RouterLink}
                      to={`${match.url}/${project.id}/edit`}
                      className="text-primary">
                      <FontAwesomeIcon
                        icon={['fas', 'pen']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>}
                <Tooltip arrow title="View">
                  <IconButton
                    component={RouterLink}
                    to={`${match.url}/${project.id}`}
                    className="text-info">
                    <FontAwesomeIcon
                      icon={['fas', 'eye']}
                      className="font-size-sm"
                    />
                  </IconButton>
                </Tooltip>
                {canEdit &&
                  <Tooltip arrow title="Delete">
                    <IconButton onClick={() => handleDelete(project)} className="text-danger">
                      <FontAwesomeIcon
                        icon={['far', 'trash-alt']}
                        className="font-size-sm"
                      />
                    </IconButton>
                  </Tooltip>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
