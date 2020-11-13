import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";


const GreenButton = withStyles((theme) => ({
    root: {
        /*  color: theme.palette.getContrastText(green[500]), */
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

export default GreenButton

