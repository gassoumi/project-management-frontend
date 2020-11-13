import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IconButton, List, ListItem, Menu} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {getDisplayString} from "../../utils";
import {Link as RouterLink} from 'react-router-dom';
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

function ProblemRow({problem, handleEdit, handleDelete, authenticatedUser}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <tr>
      <td>{problem.id}</td>
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
          {problem.status === "NON_CLOTURE" ? "NON CLOTURE" : "CLOTURE"}
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
            icon={['fas', 'arrow-right']}/>
        </IconButton>
        <Menu
          id="userMenu"
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          classes={{list: 'p-0'}}
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
                    <FontAwesomeIcon icon={['fas', 'pen']}/>
                  </div>
                  <span>Modifier</span>
                </ListItem>
              }
              <ListItem
                component={RouterLink}
                to={`/problem/${problem.id}`}
                button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['fas', 'eye']}/>
                </div>
                <span>Consulter</span>
              </ListItem>
              {
                problem.task.user && problem.task.user.id &&
                authenticatedUser.id === problem.task.user.id &&
                <ListItem
                  onClick={() => handleDelete(problem)}
                  button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'trash-alt']}/>
                  </div>
                  <span>Supprimer</span>
                </ListItem>
              }
            </List>
          </div>
        </Menu>
      </td>
    </tr>
  )
}

function ProblemTable({problems, sort, handleEdit, handleDelete, authenticatedUser}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th style={{cursor: 'pointer'}} onClick={sort('id')}>
          ID <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}}>
          Projet
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('task')}>
          Tache <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('description')}>
          Description <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center" style={{cursor: 'pointer'}} onClick={sort('status')}>
          Statut <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('start_at')}>
          Date Debut <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('end_at')}>
          Date fin <FontAwesomeIcon icon="sort"/>
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
          <>
            {/*<tr key={problem.id}>*/}
            {/*  <td>{problem.id}</td>*/}
            {/*  <td>*/}
            {/*    {*/}
            {/*      problem.task && problem.task.sprint && problem.task.sprint.project &&*/}
            {/*      <Link component={RouterLink}*/}
            {/*            to={`/project/${problem.task.sprint.project.id}`}>*/}
            {/*       <span className="text-primary">*/}
            {/*      {getDisplayString(problem.task.sprint.project.designation, 40)}*/}
            {/*       </span>*/}
            {/*      </Link>*/}
            {/*    }*/}
            {/*  </td>*/}
            {/*  <td className="text-info">*/}
            {/*    {*/}
            {/*      problem.task && problem.task.id &&*/}
            {/*      <Link*/}
            {/*        component={RouterLink}*/}
            {/*        to={`/task/${problem.task.id}`}*/}
            {/*      >*/}
            {/*            <span className="text-primary">*/}
            {/*              {problem.task.description}*/}
            {/*            </span>*/}
            {/*      </Link>*/}
            {/*    }*/}
            {/*  </td>*/}
            {/*  <td>*/}
            {/*    {getDisplayString(problem.description, 20)}*/}
            {/*  </td>*/}
            {/*  <td className="text-center">*/}
            {/*    <div className={`badge badge-${getColorProblem(problem.status)} px-4`}>*/}
            {/*      {problem.status === "NON_CLOTURE" ? "NON CLOTURE" : "CLOTURE"}*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*  <td>*/}
            {/*    {moment(problem.start_at).format('L')}*/}
            {/*  </td>*/}
            {/*  <td>*/}
            {/*    {moment(problem.end_at).format('L')}*/}
            {/*  </td>*/}
            {/*  <td className="text-center hover-show-hide-container">*/}
            {/*    <div className="hover-hide-wrapper">*/}
            {/*      <IconButton*/}
            {/*        size="medium"*/}
            {/*        variant="outlined"*/}
            {/*        color="primary">*/}
            {/*        <FontAwesomeIcon*/}
            {/*          className="font-size-sm"*/}
            {/*          icon={['fas', 'arrow-right']}/>*/}
            {/*      </IconButton>*/}
            {/*    </div>*/}
            {/*    <div className="hover-show-wrapper">*/}
            {/*      {*/}
            {/*        problem.task.user && problem.task.user.id && authenticatedUser.id === problem.task.user.id &&*/}
            {/*        <Tooltip arrow title="Modifier">*/}
            {/*          <IconButton*/}
            {/*            onClick={() => handleEdit(problem.id)}*/}
            {/*            className="text-primary">*/}
            {/*            <FontAwesomeIcon*/}
            {/*              icon={['fas', 'pen']}*/}
            {/*              className="font-size-sm"*/}
            {/*            />*/}
            {/*          </IconButton>*/}
            {/*        </Tooltip>*/}
            {/*      }*/}
            {/*      <Tooltip arrow title="Consulter">*/}
            {/*        <IconButton*/}
            {/*          component={RouterLink}*/}
            {/*          to={`/problem/${problem.id}`}*/}
            {/*          className="text-primary">*/}
            {/*          <FontAwesomeIcon*/}
            {/*            icon={['fas', 'eye']}*/}
            {/*            className="font-size-sm"*/}
            {/*          />*/}
            {/*        </IconButton>*/}
            {/*      </Tooltip>*/}
            {/*      {*/}
            {/*        problem.task.user && problem.task.user.id && authenticatedUser.id === problem.task.user.id &&*/}
            {/*        <Tooltip arrow title="Supprimer">*/}
            {/*          <IconButton*/}
            {/*            onClick={() => handleDelete(problem)}*/}
            {/*            className="text-danger">*/}
            {/*            <FontAwesomeIcon*/}
            {/*              icon={['far', 'trash-alt']}*/}
            {/*              className="font-size-sm"*/}
            {/*            />*/}
            {/*          </IconButton>*/}
            {/*        </Tooltip>*/}
            {/*      }*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*</tr>*/}
          </>
        </Fragment>
      ))}
      </tbody>
    </table>
  );
}

export default ProblemTable;
