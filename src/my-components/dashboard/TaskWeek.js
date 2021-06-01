import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { getDisplayString } from "../utils";
import Link from "@material-ui/core/Link";
import { Avatar, Card } from "@material-ui/core";
import { getColorTask, getTaskValue } from "../entities/task/TaskTable";

WeekTask.prototype = {
  rows: PropTypes.array.isRequired
};

export default function WeekTask({ rows }) {
  return (
    <Fragment>
      <Card className="card-box">
        <div className="card-header">
          <div className="card-header--title font-size-lg  px-1 py-1 font-weight-bold">
            This week's action plan
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless table-hover text-nowrap mb-0">
            <thead>
              <tr>
                <th>Project Name</th>
                <th className="text-left">Task</th>
                <th className="text-left">Responsible</th>
                <th className="text-left">Status</th>
                <th className="text-center">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>
                    <Link component={RouterLink} to={`/project/${row.sprint.project.id}`}>
                      <span className="text-primary">
                        {getDisplayString(row.sprint.project.designation, 20)}
                      </span>
                    </Link>
                  </td>
                  <td className="text-left">
                    {getDisplayString(row.description, 20)}
                  </td>
                  <td className="text-center">
                    {row.user && row.user.username &&
                      <div className="d-flex align-items-center">
                        <Avatar
                          src={row.user.userProfile && row.user.userProfile.photo && row.user.userProfile.photo}
                          className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                          >
                            {row.user.username}
                          </a>
                        </div>
                      </div>
                    }
                  </td>
                  <td className="text-left">
                    <span className={`badge badge-${getColorTask(row.task)}`}>{getTaskValue(row.status)}</span>
                  </td>
                  <td className="text-center">
                    {moment(row.end_at).format('L')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button
            size="small"
            // variant="outlined"
            variant="contained"
            component={RouterLink}
            to="/task" color="primary"
          >
            See all
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
