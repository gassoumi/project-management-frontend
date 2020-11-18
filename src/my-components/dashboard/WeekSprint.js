import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
import Typography from "@material-ui/core/Typography";
import {getDisplayString} from "../utils";
import {Card} from "@material-ui/core";
import {getColorSprint} from "../entities/sprint/SprintTable";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    "& .MuiListSubheader-root": {
      color: 'black',
    }
  },
  inline: {
    display: 'inline',
  },
  paper: {
    width: '100%',
  },
}));

WeekSprint.prototype = {
  items: PropTypes.array.isRequired
};

export default function WeekSprint({items}) {
  const classes = useStyles();

  return (
    <Card className="card-box">
      <List
        subheader={
          <ListSubheader style={{color: 'black'}} id="nested-list-subheader2" component="div">
            <div className="font-size-lg font-weight-bold">
              Sprint de cette semaine
            </div>
          </ListSubheader>}
      >
        <Divider/>
        {items.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <ListItem>
                <ListItemText
                  primary={item.name}
                  secondary={<React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                    >
                      <>
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-warning mr-1"
                        />
                        <span className="text-warning">
                          {moment(item.desired_at).format('L')}
                          </span>
                      </>
                    </Typography>
                    <br/>
                    <Tooltip title="Nom projet"
                             aria-label="Nom projet">
                      <Typography
                        className={classes.inline}
                        component="span"
                        variant="body1"
                        color="textPrimary"
                      >
                        <Link component={RouterLink} to={`/project/${item.project.id}`}>
                            <span className="text-primary">
                                 {getDisplayString(item.project.designation, 30)}
                            </span>
                        </Link>
                      </Typography>
                    </Tooltip>
                  </React.Fragment>}
                />
                <ListItemSecondaryAction>
                  <h5>
                    <span className={`badge badge-${getColorSprint(item.status)} px-4`}>{item.status}</span>
                  </h5>
                </ListItemSecondaryAction>
              </ListItem>
              {(index !== items.length - 1) && <Divider variant="middle" component="li"/>}
            </Fragment>)
        })}
      </List>
    </Card>
  );
}
