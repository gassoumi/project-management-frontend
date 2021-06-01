import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment';
import { useForm, Controller } from "react-hook-form";
import AsyncComboBox from '../common/AsyncComboBox';
import FormHelperText from '@material-ui/core/FormHelperText';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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

const URL_PROJECT = '/api/projects/';

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
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


function SprintUpdate({
  open, handleClose, sprint,
  createSprint, updateSprint, isNew, isUpdating
}) {

  const defaultValue = {
    name: sprint.name || "",
    project: sprint.project || null,
    id: sprint.id || "",
    status: sprint.status || "",
    desired_at: moment(sprint.desired_at).format('YYYY-MM-DD') ||
      moment().format('YYYY-MM-DD')
  };

  const { register, handleSubmit, errors, control, reset } = useForm({
    mode: "onChange",
    defaultValues: defaultValue,
  });

  // https://react-hook-form.com/v5/api/#reset
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    reset(defaultValue);
  }, [sprint]);


  const onSubmit = data => {

    const { name, project, desired_at: date, status } = data;

    const newSprint = {
      name,
      project: project.id,
      status,
      desired_at: moment(date, "YYYY-MM-DDTHH:mm Z").toDate()
    };

    if (isNew) {
      createSprint(newSprint);
    } else {
      updateSprint(sprint.id, newSprint)
    }
  };

  const isDate = value => {
    return moment(value).isValid();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className="bg-light" id="customized-dialog-title">
        {isNew ? "Add a new " : "Edit the "} sprint
      </DialogTitle>
      <form id="form-sprint" onSubmit={handleSubmit(onSubmit)} noValidate>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DialogContent dividers>
            {
              false && <TextField
                disabled
                fullWidth
                // defaultValue={sprint.id || ""}
                name="id"
                inputRef={register}
                margin="dense"
                label="Id du Sprint"
                type="text"
              />
            }
            <TextField
              fullWidth
              // defaultValue={sprint.name || ""}
              name="name"
              required
              inputRef={register({
                required: getRequiredMessage(),
                maxLength: {
                  value: 500,
                  message: getMaxLengthMessage(500)
                },
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2)
                },
              })}
              autoFocus
              margin="dense"
              label="Sprint name"
              autoComplete="disable"
              type="text"
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            />
            <FormControl
              fullWidth
              margin={"dense"}>
              <AsyncComboBox
                control={control}
                errors={errors}
                name="project"
                label="Choose a project"
                optionLabel="designation"
                url={URL_PROJECT}
                rules={{ required: getRequiredMessage() }}
              />
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              required
              error={!!errors.status}
            >
              <InputLabel id="demo-simple-select-label">Statuts</InputLabel>
              <Controller
                name="status"
                // defaultValue={sprint.state || ""}
                control={control}
                rules={{ required: getRequiredMessage() }}
                as={
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value="">
                      <em>Choose a statuts</em>
                    </MenuItem>
                    <MenuItem value="Planifiè">Planifiè</MenuItem>
                    <MenuItem value="En Cours">En Cours</MenuItem>
                    <MenuItem value={"Cloturé"}>Cloturé</MenuItem>
                    <MenuItem value={"Archivé"}>Archivé</MenuItem>
                  </Select>
                }
              />
              {errors.status &&
                <FormHelperText>{errors.status.message}</FormHelperText>
              }
            </FormControl>
            <Controller
              name="desired_at"
              control={control}
              rules={{
                required: getRequiredMessage(),
                validate: {
                  date: value => isDate(value) || getDateMessage()
                }
              }}
              as={
                <KeyboardDatePicker
                  // clearLabel="vider"
                  // cancelLabel="annuler"
                  clearable
                  fullWidth
                  required
                  error={!!errors.desired_at}
                  helperText={errors.desired_at && errors.desired_at.message}
                  margin="dense"
                  label="desired date"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />}
            />
          </DialogContent>
        </MuiPickersUtilsProvider>
        <DialogActions>
          <Button
            form="form-sprint"
            type="submit"
            disabled={isUpdating}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
}


SprintUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  sprint: PropTypes.object.isRequired,
  createSprint: PropTypes.func.isRequired,
  updateSprint: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};


export default SprintUpdate;
