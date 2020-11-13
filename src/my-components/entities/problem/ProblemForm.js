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
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';
import {connect} from "react-redux";
import {createProblem, updateProblem, clearCacheProblem} from "../../../redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import AsyncComboBox from "../common/AsyncComboBox";
import {
  getDateMessage,
  getMinLengthMessage,
  getRequiredMessage
} from '../../utils/validationMessage';

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

  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const URL_TASK = "/api/userTasks/";

function ProblemForm(props) {

  const classes = useStyles();

  const {
    handleCancel, problem, updateSuccess, disablePickTask, isUpdating,
    isNewProblem, createProblem, updateProblem, clearCacheProblem
  } = props;

  const defaultValue = {
    description: problem.description || "",
    cause: problem.cause || "",
    resolutionTools: problem.resolutionTools || "",
    start_at: problem.start_at ? moment(problem.start_at).toDate() : null,
    end_at: problem.end_at ? moment(problem.end_at).toDate() : null,
    status: problem.status || "",
    task: problem.task || null,
  };

  const {
    register, handleSubmit, errors, control, getValues,
    triggerValidation, reset, watch
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValue,
  });

  const watchStartAt = watch("start_at");

  const isGreatOrEqualThan = value => {
    const start_at_date = moment(getValues().start_at)
      .toDate();
    const end_at_date = moment(value).toDate();
    return end_at_date >= start_at_date;
  };


  useEffect(() => {
    reset(defaultValue);
  }, [problem]);

  useEffect(() => {
    const endAtValue = getValues().end_at;
    if (watchStartAt && endAtValue) {
      triggerValidation("end_at");
    }
  }, [watchStartAt]);

  useEffect(() => {
    if (updateSuccess) {
      handleCancel();
      clearCacheProblem();
    }
  }, [updateSuccess]);


  const onSubmit = data => {
    const {description, resolutionTools, start_at, end_at, cause, status, task} = data;
    const newProblem = {
      description,
      resolutionTools,
      start_at: moment(start_at).toDate(),
      end_at: moment(end_at).toDate(),
      task: task.id,
      cause,
      status
    };
    console.log(newProblem);
    if (isNewProblem) {
      createProblem(newProblem);
    } else {
      updateProblem(problem.id, newProblem);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form className="p-4" id="form-task" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              // defaultValue={task.description || ""}
              // margin={"normal"}
              required
              multiline
              rows={5}
              variant="outlined"
              label="Description"
              name="description"
              inputRef={register({
                required: getRequiredMessage(),
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
          <Grid item xs={12}>
            <TextField
              // defaultValue={task.description || ""}
              // margin={"normal"}
              required
              multiline
              rows={5}
              variant="outlined"
              label="Cause"
              name="cause"
              inputRef={register({
                required: getRequiredMessage(),
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2),
                },
              })}
              fullWidth
              error={!!errors.cause}
              helperText={errors.cause && errors.cause.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // defaultValue={task.description || ""}
              // margin={"normal"}
              variant="outlined"
              required
              label="Outils de résolution"
              name="resolutionTools"
              inputRef={register({
                required: getRequiredMessage(),
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2),
                },
              })}
              fullWidth
              error={!!errors.resolutionTools}
              helperText={errors.resolutionTools && errors.resolutionTools.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              required
              error={!!errors.status}
              fullWidth
              variant="outlined">
              <InputLabel id="demo-simple-select-outlined-statut">Statut</InputLabel>
              <Controller
                name="status"
                // defaultValue={""}
                as={
                  <Select
                    labelId="demo-simple-select-outlined-statut"
                    id="demo-simple-select-outlined"
                    label="Statut"
                  >
                    <MenuItem value="">
                      <em>Choisir un statut</em>
                    </MenuItem>
                    <MenuItem value="CLOTURE">Cloturé</MenuItem>
                    <MenuItem value="NON_CLOTURE">Non Cloturé</MenuItem>
                  </Select>}
                control={control}
                rules={{required: getRequiredMessage()}}
              />
              {errors.status &&
              <FormHelperText>{errors.status.message}</FormHelperText>
              }
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
            >
              <AsyncComboBox
                variant="outlined"
                disabled={disablePickTask}
                control={control}
                errors={errors}
                name="task"
                label="Coisir une tache"
                optionLabel="description"
                url={URL_TASK}
                rules={{required: getRequiredMessage(),}}
              />
            </FormControl>
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
                  inputVariant="outlined"
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
                  inputVariant="outlined"
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
          <Grid container>
            <Grid container justify={"flex-end"} item xs={12}>
              <div className={classes.buttons}>
                <Button
                  disabled={isUpdating}
                  variant="contained"
                  color="primary"
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

ProblemForm.propTypes = {
  updateSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  createProblem: PropTypes.func.isRequired,
  updateProblem: PropTypes.func.isRequired,
  clearCacheProblem: PropTypes.func.isRequired,
  isNewProblem: PropTypes.bool.isRequired,
  problem: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  disablePickTask: PropTypes.bool,
};

const mapStateToProps = state => ({
  updateSuccess: state.entity.problem.updateSuccess,
  isUpdating: state.entity.problem.isUpdating,
});

export default connect(mapStateToProps, {createProblem, updateProblem, clearCacheProblem})(ProblemForm);
