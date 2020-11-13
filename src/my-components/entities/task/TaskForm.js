import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useForm, Controller} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';
import {connect} from "react-redux";
import {createTask, updateTask} from "../../../redux";
import AsyncComboBox from '../common/AsyncComboBox';
import {
  getDateMessage,
  getMaxLengthMessage,
  getMinLengthMessage,
  getRequiredMessage
} from '../../utils/validationMessage';

const URL_SPRINT = '/api/activeSprints/';
const URL_USER = '/api/auth/users';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {
    textAlign: 'left',
  },
  buttons: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

// https://codesandbox.io/s/react-hook-form-master-detail-cmklr?file=/src/App.tsx
// "react-hook-form": "^6.0.0",
// https://react-hook-form.com/migrate-v5-to-v6/
// "react-hook-form": "5.5.1",
// https://stackoverflow.com/questions/61393994/how-to-set-a-conditional-default-value-for-a-keyboarddatepicker-with-react-hook

// https://material-ui-pickers.dev/demo/datepicker
// https://stackoverflow.com/questions/7445328/check-if-a-string-is-a-date-value/30870755
function TaskForm(props) {

  const classes = useStyles();

  const {
    handleCancel, task, updateSuccess, isUpdating,
    isNewTask, createTask, updateTask
  } = props;

  const defaultValue = {
    description: task.description || "",
    start_at: task.start_at ? moment(task.start_at).toDate() : null,
    end_at: task.end_at ? moment(task.end_at).toDate() : null,
    sprint: task.sprint || null,
    user: task.user || null,
    status: task.status || "",
  };

  const {
    register, handleSubmit, errors, control, getValues,
    triggerValidation, reset, watch, setValue
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValue,
  });

  const watchStartAt = watch("start_at");
  const watchUser = watch("user", task.user || null);

  const isGreatOrEqualThan = value => {
    const start_at_date = moment(getValues().start_at)
      .toDate();
    const end_at_date = moment(value).toDate();
    return end_at_date >= start_at_date;
  };


  useEffect(() => {
    reset(defaultValue);
  }, [task]);

  useEffect(() => {
    const endAtValue = getValues().end_at;
    if (watchStartAt && endAtValue) {
      triggerValidation("end_at");
    }
  }, [watchStartAt]);

  useEffect(() => {
    setValue('sprint', '');
  }, [watchUser]);

  useEffect(() => {
    if (updateSuccess) {
      handleCancel();
    }
  }, [updateSuccess]);


  const onSubmit = data => {
    const {description, status, start_at, end_at, user, sprint} = data;
    const newTask = {
      description,
      status,
      start_at: moment(start_at).toDate(),
      end_at: moment(end_at).toDate(),
      user: user.id,
      sprint: sprint.id
    };
    console.log(newTask.end_at);
    if (isNewTask) {
      createTask(newTask);
    } else {
      updateTask(task.id, newTask);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form className="p-4 pr-5 pl-5" id="form-task" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              // defaultValue={task.description || ""}
              // margin={"normal"}
              required
              variant="standard"
              label="Description"
              name="description"
              inputRef={register({
                required: getRequiredMessage(),
                maxLength: {
                  value: 200,
                  message: getMaxLengthMessage(200),
                },
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2),
                },
              })}
              fullWidth
              error={!!errors.description}
              helperText={errors.description && errors.description.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="start_at"
              control={control}
              rules={{
                required: getRequiredMessage(),
                validate: {
                  date: value => moment(value).isValid() || getDateMessage()
                }
              }}
              as={
                <KeyboardDatePicker
                  clearLabel="vider"
                  cancelLabel="annuler"
                  clearable
                  fullWidth
                  required
                  error={!!errors.start_at}
                  helperText={errors.start_at && errors.start_at.message}
                  // margin="normal"
                  label="Date début"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="end_at"
              control={control}
              rules={{
                required: getRequiredMessage(),
                validate: {
                  date: value => moment(value).isValid() || getDateMessage(),
                  greatOrEqualThan: value => {
                    return isGreatOrEqualThan(value) || "La date de fin doit etre superieur au date de debut";
                  },
                },
              }}
              // here the magic happens
              // initialFocusedDate={null}
              // defaultValue={null}
              as={
                <KeyboardDatePicker
                  clearLabel="vider"
                  cancelLabel="annuler"
                  clearable
                  fullWidth
                  required
                  error={!!errors.end_at}
                  helperText={errors.end_at && errors.end_at.message}
                  // margin="normal"
                  label="Date fin"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              // margin="normal"
            >
              <AsyncComboBox
                control={control}
                // defaultValue={task.sprint || null}
                errors={errors}
                name="user"
                label="Choisir un responsable"
                optionLabel="username"
                url={URL_USER}
                rules={{required: getRequiredMessage()}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              // margin="normal"
            >
              <AsyncComboBox
                control={control}
                // defaultValue={task.sprint || null}
                disabled={!watchUser}
                errors={errors}
                name="sprint"
                label="Choisir un sprint"
                optionLabel="name"
                url={URL_SPRINT}
                urlParams={watchUser && watchUser.id ? `&user_id=${watchUser.id}` : null}
                rules={{required: getRequiredMessage()}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              required
              error={!!errors.status}
              fullWidth
              // margin="normal"
            >
              <InputLabel id="task-select-label">Statut</InputLabel>
              <Controller
                name="status"
                // defaultValue={""}
                as={
                  <Select
                    labelId="task-select-label"
                  >
                    <MenuItem value="">
                      <em>Choisir un statut</em>
                    </MenuItem>
                    <MenuItem value={"Backlog"}>Backlog</MenuItem>
                    <MenuItem value="A Faire">A Faire</MenuItem>
                    <MenuItem value="En Cours">En Cours</MenuItem>
                    <MenuItem value={"A Verifier"}>A Vérifier</MenuItem>
                    <MenuItem value={"Termine"}>Termine</MenuItem>
                  </Select>
                }
                control={control}
                rules={{required: getRequiredMessage()}}
              />
              {errors.status &&
              <FormHelperText>{errors.status.message}</FormHelperText>
              }
            </FormControl>
          </Grid>
          <Grid container>
            <Grid container justify={"flex-end"} item xs={12}>
              <div className={classes.buttons}>
                <Button
                  disabled={isUpdating}
                  variant="contained"
                  color="primary"
                  className="m-2"
                  startIcon={<SaveIcon/>}
                  type="submit"
                >
                  Enregistrer
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outlined"
                  className="text-github"
                  color="secondary"
                  startIcon={<CancelIcon/>}
                >
                  Annuler
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </MuiPickersUtilsProvider>
  );
}

TaskForm.propTypes = {
  updateSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  isNewTask: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  updateSuccess: state.entity.task.updateSuccess,
  isUpdating: state.entity.task.isUpdating,
});

export default connect(mapStateToProps, {createTask, updateTask})(TaskForm);
