import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  IconButton,
  Checkbox,
  Badge,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tasks</small>
            <b>Today's list</b>
          </div>
          <div className="card-header--actions">
            <div className="text-warning badge badge-neutral-warning badge-pill">
              New Tasks
            </div>
          </div>
        </div>
        <CardContent className="p-3">
          <div className="task-wrapper">
            <div className="task-item">
              <div className="align-box-row">
                <Checkbox className="align-self-center mr-3" />
                <div>
                  Finish tasks for today
                  <p className="text-black-50 mt-1 mb-0">
                    But I must explain to you how all this mistaken idea.
                  </p>
                </div>
              </div>
            </div>
            <div className="task-item">
              <div className="align-box-row">
                <Checkbox className="align-self-center mr-3" />
                <div>
                  <b>Blinded by desire</b>
                  <p className="text-black-50 mt-1 mb-0">
                    A wonderful serenity has taken possession.
                  </p>
                  <div className="timeline-list mt-3">
                    <div className="timeline-item timeline-item-icon">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon-wrapper bg-danger text-white">
                          <FontAwesomeIcon icon={['far', 'gem']} />
                        </div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1998
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Java exam day
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                        <div className="avatar-wrapper-overlap mt-2 mb-1">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Business investor meeting
                          <span className="text-info ml-2 badge badge-neutral-info">
                            New
                          </span>
                        </h4>
                        <p>
                          Mosaic, the first graphical browser, is introduced to
                          the average consumer.
                        </p>
                        <div className="mt-3">
                          <Button size="small" color="primary">
                            Submit Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="task-item">
              <div className="align-box-row">
                <Checkbox className="align-self-center mr-3" />
                <div className="w-100">
                  World among the stalks
                  <p className="text-black-50 mt-1">
                    Who formed us in his own image, and the breath.
                  </p>
                  <List>
                    <ListItem className="bg-secondary d-flex justify-content-between align-items-center p-4">
                      <div className="w-100">
                        <div className="d-flex flex-wrap justify-content-between mb-2">
                          <small className="line-height-xs text-uppercase text-muted">
                            Nov 12, 11:25am
                          </small>
                          <small className="line-height-xs text-uppercase text-success">
                            Due in 12 days
                          </small>
                        </div>
                        <h6 className="pt-1 pb-1">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            #56 - Deploy new website
                          </a>
                        </h6>
                        <p className="mb-3">This is a dummy text acting ...</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <Badge color="primary" className="pl-3 pr-3">
                            Files ready
                          </Badge>
                          <div>
                            <Button size="small" color="primary">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-sm"
                                />
                              </span>
                              <span className="btn-wrapper--label">Add</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center align-content-center pl-1">
                      <Tooltip
                        arrow
                        title="There are 653 new comments available!"
                        placement="top">
                        <Button size="small" color="primary">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['far', 'comments']} />
                          </span>
                          <span className="btn-wrapper--label ml-1">653</span>
                        </Button>
                      </Tooltip>
                      <div>
                        <small className="text-muted mr-1">(21)</small>
                        <FontAwesomeIcon
                          icon={['fas', 'star']}
                          className="text-warning"
                        />
                        <FontAwesomeIcon
                          icon={['fas', 'star']}
                          className="text-warning"
                        />
                        <FontAwesomeIcon
                          icon={['fas', 'star']}
                          className="text-warning"
                        />
                        <FontAwesomeIcon
                          icon={['fas', 'star']}
                          className="text-warning"
                        />
                        <FontAwesomeIcon
                          icon={['fas', 'star']}
                          className="text-warning"
                        />
                      </div>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3 mb-3">
            <Button color="primary">
              <span>
                View completed tasks <span className="text-muted">(87)</span>
              </span>
            </Button>
          </div>
          <div>
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Add new task..."
            />
          </div>
          <div className="align-box-row mt-3">
            <div className="align-items-center">
              <Tooltip arrow title="Add audio file">
                <IconButton color="default" className="text-success">
                  <FontAwesomeIcon
                    icon={['far', 'file-audio']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Add video file">
                <IconButton color="default" className="text-danger">
                  <FontAwesomeIcon
                    icon={['far', 'file-video']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Upload Documents">
                <IconButton color="default" className="text-info">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
            </div>
            <div className="ml-auto">
              <Button size="small" variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fas', 'plus']}
                    className="font-size-sm"
                  />
                </span>
                <span className="btn-wrapper--label">Create Task</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
