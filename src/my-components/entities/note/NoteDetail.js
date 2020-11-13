import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function NoteDetail(props) {
    const {open, handleClose, note} = props;

    return (
        <div>
            <Dialog fullWidth={true}
                    maxWidth={"sm"} onClose={handleClose} aria-labelledby="customized-dialog-title-note-detail"
                    open={open}>
                <DialogTitle id="customized-dialog-title-note-detail" onClose={handleClose}>
                    {note.note}
                    <Tooltip title="Date à faire">
                        <Typography variant={"caption"} color={"primary"}>
                            {` (${moment(note.date).format('LL')})`}
                        </Typography>
                    </Tooltip>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography color={"error"} gutterBottom>
                        Commentaire
                    </Typography>
                    <Typography gutterBottom>
                        {note.comment ? note.comment : "Pas encore de commentaire"}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
