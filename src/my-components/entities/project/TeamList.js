import React, {Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {Card, CardContent} from "@material-ui/core";
import PropTypes from 'prop-types';

TeamList.prototype = {
  items: PropTypes.array.isRequired
};

export default function TeamList({items}) {
  return (
    <>
      <Card className="card-box">
        <div className="card-header">
          <div className="card-header--title font-size-md font-weight-bold py-2">
            Team Scrum
          </div>
        </div>
        <CardContent className="p-3">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <Avatar alt="..." src={item.user.userProfile ? item.user.userProfile.photo : ""} className="mr-2"/>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        {item.user.username}
                      </a>
                      <span className="text-black-50 d-block">
                        {item.classification}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {(index !== items.length - 1) && <Divider className="my-3"/>}
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
