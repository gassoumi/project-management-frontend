import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link as RouterLink} from "react-router-dom";
import {getDisplayString} from "../../utils";
import {getColorProblem} from "../problem/ProblemTable";
import {IconButton, Tooltip} from "@material-ui/core";
import moment from 'moment';

TaskProblemsTable.propTypes = {
  problems: PropTypes.array.isRequired,
};

function TaskProblemsTable({problems}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th>
          ID
        </th>
        <th className="text-left">
          Description
        </th>
        <th className="text-left">
          Cause
        </th>
        <th className="text-left">
          Outils de résolutions
        </th>
        <th className="text-center">
          Statut
        </th>
        <th className="text-center">
          Date Début
        </th>
        <th className="text-center">
          Date fin
        </th>
        <th className="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      {problems.map(problem => (
        <tr key={problem.id}>
          <td>{problem.id}</td>
          <td>
            {getDisplayString(problem.description, 20)}
          </td>
          <td className="text-left">
            {problem.cause}
          </td>
          <td className="text-left">
            {problem.resolutionTools}
          </td>
          <td className="text-center">
            <div className={`badge badge-${getColorProblem(problem.status)} px-4`}>
              {problem.status === "NON_CLOTURE" ? "NON CLOTURE" : "CLOTURE"}
            </div>
          </td>
          <td className="text-center">
            {moment(problem.start_at).format('LL')}
          </td>
          <td className="text-center">
            {moment(problem.end_at).format('LL')}
          </td>
          <td className="text-center">
            <Tooltip arrow title="Consulter">
              <IconButton
                component={RouterLink}
                to={`/problem/${problem.id}`}
                className="text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'eye']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default TaskProblemsTable;
