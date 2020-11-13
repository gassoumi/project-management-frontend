import React, {Fragment} from 'react';

import {CircularProgress, Button} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import {green} from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function LoadingButton(props) {
  const classes = useStyles();
  // const [loading, setLoading] = React.useState(false);
  const {color, classname, variant, title, size, loading, startIcon} = props;

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <Button
          startIcon={startIcon}
          type="submit"
          variant={variant || "contained"}
          color={color || "primary"}
          className={classname}
          disabled={loading}
          size={size || "medium"}
        >
          {title}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress}/>
        )}
      </div>
    </Fragment>
  );
}
