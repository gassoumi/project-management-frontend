import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, Tooltip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import moment from 'moment';
import { getDisplayString } from "../../utils";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

function DiscussionList({ discussions }) {
  return (
    <List>
      {discussions.map((discussion, index) => (
        <Fragment key={discussion.id}>
          <ListItem className="py-4 d-block">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <Card className="card-transparent mb-3 mb-sm-0">
                    <Tooltip arrow title={discussion.user.username}>
                      {/* <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge"/>
              
                        <div className="avatar-icon">
                          <img
                            alt="..."
                            src={discussion.user && discussion.user.userProfile && discussion.user.userProfile.photo || null}/>
                        </div>
                      </a> */}
                      <Avatar src={discussion.user && discussion.user.userProfile &&
                        discussion.user.userProfile.photo && discussion.user.userProfile.photo || null}>
                        {discussion.user.username.charAt(0).toUpperCase()}
                      </Avatar>
                    </Tooltip>
                  </Card>
                </div>
                <div className="pl-3 pl-sm-4">
                  <Link component={RouterLink} to={`/discussion/${discussion.id}`}>
                    <b className="font-weight-bold font-size-lg text-primary">
                      {discussion.object}
                    </b>
                  </Link>
                  <p className="text-black-50 mb-0">
                    {getDisplayString(discussion.description, 200)}
                  </p>
                  <small className="text-black-50 pt-1 d-block">
                    Créée le : <b className="text-first">
                      {moment(discussion.created_at).format('LL')}
                    </b>
                  </small>
                </div>
              </div>
            </div>
          </ListItem>
          {index < discussions.length - 1 && <Divider variant="middle" />}
        </Fragment>
      ))}
    </List>
  );
}

DiscussionList.propTypes = {
  discussions: PropTypes.array.isRequired,
};

export default DiscussionList;
