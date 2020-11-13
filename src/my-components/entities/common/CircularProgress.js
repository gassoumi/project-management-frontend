import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        justifyContent: 'center'
    },
}));

function MyCircularProgress(props) {
    const classes = useStyles();
    return (
        <div className={classes.circularProgress}>
            <CircularProgress disableShrink/>
        </div>
    );
}

export default MyCircularProgress;