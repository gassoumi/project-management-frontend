import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Avatar } from "@material-ui/core";
import { getColorTask } from "../task/TaskTable";

TasksProjectTable.prototype = {
  rows: PropTypes.array.isRequired,
};

// TODO 7
// https://github.com/gregnb/mui-datatables#remote-data
function TasksProjectTable({ rows }) {
  return (
    <>
      <table className="text-nowrap mb-0 table table-borderless table-hover">
        <thead>
          <tr>
            <th className="text-left">
              Tache
          </th>
            <th className="text-left">
              Responsable
          </th>
            <th className="text-center">
              Statut
          </th>
            <th className="text-center">
              Date début
          </th>
            <th className="text-center">
              Date fin
          </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(task => (
            <tr key={task.id}>
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
              <td>
                <div className={`badge badge-${getColorTask(task.status)} px-4`}>{task.status}</div>
              </td>
              <td className="text-center">
                {moment(task.start_at).format('L')}
              </td>
              <td className="text-center">
                {moment(task.end_at).format('L')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TasksProjectTable;
