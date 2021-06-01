import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IconButton, List, ListItem, Menu } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import { getDisplayString } from "../../utils";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

ProblemTable.propTypes = {
  problems: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  authenticatedUser: PropTypes.object.isRequired,
};

export const getColorProblem = value => {
  if (value === "NON_CLOTURE") {
    return "danger";
  }
  return "success";
}
  ;

function ProblemRow({ problem, handleEdit, handleDelete, authenticatedUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <tr>
      <td>
        {
          problem.task && problem.task.sprint && problem.task.sprint.project &&
          <Link component={RouterLink}
            to={`/project/${problem.task.sprint.project.id}`}>
            <span className="text-primary">
              {getDisplayString(problem.task.sprint.project.designation, 40)}
            </span>
          </Link>
        }
      </td>
      <td className="text-info">
        {
          problem.task && problem.task.id &&
          <Link
            component={RouterLink}
            to={`/task/${problem.task.id}`}
          >
            <span className="text-primary">
              {problem.task.description}
            </span>
          </Link>
        }
      </td>
      <td>
        {getDisplayString(problem.description, 20)}
      </td>
      <td className="text-center">
        <div className={`badge badge-${getColorProblem(problem.status)} px-4`}>
          {problem.status === "NON_CLOTURE" ? "No Closing" : "Closing"}
        </div>
      </td>
      <td>
        {moment(problem.start_at).format('L')}
      </td>
      <td>
        {moment(problem.end_at).format('L')}
      </td>
      <td className="text-center">
        <IconButton
          aria-controls="userMenu"
          onClick={openMenu}
          color="primary"
          className="app-sidebar-userbox-btn"
          size="medium">
          <FontAwesomeIcon
            className="font-size-sm"
            icon={['fas', 'arrow-right']} />
        </IconButton>
        <Menu
          id="userMenu"
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          classes={{ list: 'p-0' }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <div className="dropdown-menu-right p-0">
            <List className="flex-column">
              {
                problem.task.user && problem.task.user.id &&
                authenticatedUser.id === problem.task.user.id &&
                <ListItem
                  onClick={() => handleEdit(problem.id)}
                  button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['fas', 'pen']} />
                  </div>
                  <span>Edit</span>
                </ListItem>
              }
              <ListItem
                component={RouterLink}
                to={`/problem/${problem.id}`}
                button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['fas', 'eye']} />
                </div>
                <span>View</span>
              </ListItem>
              {
                problem.task.user && problem.task.user.id &&
                authenticatedUser.id === problem.task.user.id &&
                <ListItem
                  onClick={() => handleDelete(problem)}
                  button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                  </div>
                  <span>Delete</span>
                </ListItem>
              }
            </List>
          </div>
        </Menu>
      </td>
    </tr>
  )
}

function ProblemTable({ problems, sort, handleEdit, handleDelete, authenticatedUser }) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
        <tr>
          <th className="text-left" style={{ cursor: 'pointer' }}>
            Project
        </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('task')}>
            Task <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('description')}>
            Description <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-center" style={{ cursor: 'pointer' }} onClick={sort('status')}>
            Status <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('start_at')}>
            Start date  <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-left" style={{ cursor: 'pointer' }} onClick={sort('end_at')}>
            End date <FontAwesomeIcon icon="sort" />
          </th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {problems.map(problem => (
          <Fragment key={problem.id}>
            <ProblemRow
              problem={problem}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              authenticatedUser={authenticatedUser}
            />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default ProblemTable;
