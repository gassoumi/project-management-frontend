import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {getDisplayString} from "../utils";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  root: {
    width: '100%',
    "& .MuiListSubheader-root": {
      color: 'black',
    },
    "& .MuiListSubheader-sticky": {
      position: 'inherit',
    }
  },
  paper: {
    width: '100%',
  },
}));

DiscussionList.prototype = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default function DiscussionList({items, title}) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {/*<div className="card-header">*/}
          {/*  <div className="card-header--title font-size-lg font-weight-bold">*/}
          {/*    {title}*/}
          {/*  </div>*/}
          {/*</div>*/}
          <List
            subheader={
              <ListSubheader id="nested-list-subheader2" component="div">
                <div className="font-size-lg font-weight-bold">
                  {title}
                </div>
              </ListSubheader>}
          >
            <Divider/>
            {items.map((item, index) => (
              <React.Fragment key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={item.user && item.user.userProfile &&
                    item.user.userProfile.photo ? item.user.userProfile.photo : ""}>
                      {item.user.username.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link component={RouterLink} to={`/discussion/${item.id}`}>
                        <span className="text-primary">
                        {item.object}
                        </span>
                      </Link>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {item.user.username}
                        </Typography>

                        {` — ${getDisplayString(item.description, 50)}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index !== (items.length - 1) && <Divider variant="inset" component="li"/>}
              </React.Fragment>
            ))
            }
          </List>
        </Paper>
      </div>
    </>
  );
}
