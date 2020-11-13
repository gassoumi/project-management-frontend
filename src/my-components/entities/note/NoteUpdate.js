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
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import {useForm, Controller} from "react-hook-form";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import {
  getDateMessage,
  getMaxLengthMessage,
  getMinLengthMessage,
  getRequiredMessage
} from '../../utils/validationMessage';


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


function NoteUpdate({
                      open, handleClose, note, isUpdating,
                      createNote, updateNote, isNew,
                    }) {


  const {register, handleSubmit, errors, watch, control} = useForm({
    mode: "onChange",
  });

  const statusInput = watch("ok", note.ok);

  const isDate = value => {
    return moment(value).isValid();
  };

  const onSubmit = data => {

    const newNote = {
      note: data.note,
      comment: data.comment,
      ok: data.ok,
      date: moment(data.date, "YYYY-MM-DDTHH:mm Z").toDate()
    };
    if (isNew) {
      createNote(newNote);
    } else {
      updateNote(note.id, newNote)
    }
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className="bg-light" id="form-dialog-ajout-note">
        {isNew ? "Ajouter une " : "Modifier la "} story
      </DialogTitle>
      <form id="form-note" onSubmit={handleSubmit(onSubmit)} noValidate>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DialogContent dividers>
            {
              false && <TextField
                defaultValue={note.id || ""}
                disabled
                fullWidth
                name="id"
                inputRef={register}
                margin="dense"
                label="Id du Note"
                type="text"
              />
            }
            <TextField
              // variant="outlined"
              // size={"medium"}
              fullWidth
              name="note"
              defaultValue={note.note || ""}
              required
              inputRef={register({
                required: getRequiredMessage(),
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2),
                },
                maxLength: {
                  value: 60,
                  message: getMaxLengthMessage(60),
                },
              })}
              // autoFocus
              margin="dense"
              label="Story"
              autoComplete="disable"
              type="text"
              error={!!errors.note}
              helperText={errors.note && errors.note.message}
            />
            <TextField
              // size={"medium"}
              // variant="outlined"
              multiline
              rows={3}
              fullWidth
              defaultValue={note.comment || ""}
              name="comment"
              required
              inputRef={register}
              margin="dense"
              label="Commentaire"
              autoComplete="disable"
              type="text"
              error={!!errors.comment}
              helperText={errors.comment && errors.comment.message}
            />
            <Controller
              name="date"
              control={control}
              defaultValue={moment(note.date).format('YYYY-MM-DD') ||
              moment().format('YYYY-MM-DD')}
              rules={{
                required: getRequiredMessage(),
                validate: {
                  date: value => isDate(value) || getDateMessage()
                }
              }}
              as={
                <KeyboardDatePicker
                  // size={"medium"}
                  // inputVariant="outlined"
                  clearLabel="vider"
                  cancelLabel="annuler"
                  clearable
                  fullWidth
                  required
                  error={!!errors.date}
                  helperText={errors.date && errors.date.message}
                  margin="normal"
                  label="Date à faire"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />}
            />

            <FormControlLabel control={
              <Switch
                defaultChecked={note.ok}
                name="ok"
                inputRef={register}/>
            } label={statusInput ? "DONE" : "NOT DONE"}/>

          </DialogContent>
        </MuiPickersUtilsProvider>
        <DialogActions>
          <Button
            form="form-note"
            type="submit"
            disabled={isUpdating}
            variant="contained"
            color="primary"
          >
            Enregistrer
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            Annuler
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
}


NoteUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  isNew: PropTypes.bool.isRequired,
  note: PropTypes.object.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};


export default NoteUpdate;
