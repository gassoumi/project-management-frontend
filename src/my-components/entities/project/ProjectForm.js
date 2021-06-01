import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ComboBoxUser from "./ComboBoxUser";
import ComboBoxClassification from "./ComboBoxClassification";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useForm } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import { createProject, updateProject, deleteProjectById, clearCacheProject } from "../../../redux/actions";
import { connect } from "react-redux";
import { green, red } from '@material-ui/core/colors';
import CancelIcon from '@material-ui/icons/Cancel';
import { Tooltip } from "@material-ui/core";
import PropTypes from 'prop-types';
import {
  getMaxLengthMessage,
  getMinLengthMessage,
  getRequiredMessage
} from '../../utils/validationMessage';


let id = 0;

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  form: {
    marginTop: theme.spacing(3),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttons: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));


// The following component is Input Component of the user
const UserInput = ({ user, register, addUser, removeUser, errors, displayMinus }) => {
  const userName = `user-${user.user_id}`;
  const classificationName = `class-${user.user_id}`;
  const defaultUsername = user.username || null;
  const defaultClassification = user.classification || null;

  return (
    <>

      <Grid item xs={12} sm={6} md={5}>
        <ComboBoxUser defaultValue={defaultUsername} register={register} name={userName} errors={errors} />
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <ComboBoxClassification defaultValue={defaultClassification} register={register} errors={errors}
          name={classificationName} />
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Tooltip arrow title="Add another user">
          <IconButton type="button" onClick={addUser} aria-label="add">
            <AddCircleIcon style={{ color: green[500] }} />
          </IconButton>
        </Tooltip>
        {displayMinus &&
          <Tooltip arrow title="Remove this user">
            <IconButton color="secondary" type="button" onClick={() => removeUser(user.user_id)}
              aria-label="remove">
              <RemoveCircleIcon style={{ color: red[500] }} />
            </IconButton>
          </Tooltip>
        }
      </Grid>

    </>
  )
};


const ProjectForm = ({
  project, isNew, createProject, updateProject, cancel, updateSuccess, deleteSuccess,
  clearCacheProject, isUpdating
}) => {

  const classes = useStyles();
  const [users, setUsers] = useState([]);


  const defaultValue = {
    code: project.code || "",
    designation: project.designation || "",
    objective: project.objective || "",
  };


  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onChange",
  });

  // initialize input fields
  useEffect(() => {
    reset(defaultValue);
    if (!isNew) {
      // if we have users for this project
      if (project.projectUsers && project.projectUsers.length > 0) {
        const projectUsers = project.projectUsers.map(user => ({
          user_id: id++,
          username: user.username,
          classification: user.classification
        }));
        setUsers(projectUsers);
      } else {
        // this project doesn't have users yet ,we create one userInput for this project
        setUsers([{
          user_id: id++,
          username: "",
          classification: ""
        }]);
      }
    } else {
      setUsers([{
        user_id: id++,
        username: "",
        classification: ""
      }]);
    }

  }, [project]);

  useEffect(() => {
    if (updateSuccess || deleteSuccess) {
      cancel();
      clearCacheProject();
    }
  }, [updateSuccess, deleteSuccess]);


  const addUser = () => {
    const newUsers = users.concat({
      user_id: id++
    });
    setUsers(newUsers);
  };

  const removeUser = (userId) => {
    const newUsers = users.filter(user => user.user_id !== userId);
    setUsers(newUsers);
  };


  const onSubmit = (data) => {
    const { code, designation, objective } = data;
    const projectUsers = users.map(user => {
      const username = data[`user-${user.user_id}`];
      const classification = data[`class-${user.user_id}`];
      if (username && classification) {
        return {
          username,
          classification
        };
      }
      return null;
    }).filter(project => project != null);
    const newProject = {
      code,
      designation,
      objective,
      projectUsers
    };
    if (isNew) {
      createProject(newProject)
    } else {
      updateProject(project.id, newProject);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid className="p-4" container spacing={2}>

        <Grid item xs={12} md={6}>
          <TextField
            defaultValue={project.code || ""}
            required
            variant="outlined"
            label="Project code"
            name="code"
            inputRef={register({
              required: getRequiredMessage(),
              maxLength: {
                value: 50,
                message: getMaxLengthMessage(50),
              },
              minLength: {
                value: 2,
                message: getMinLengthMessage(2),
              },
            })}
            fullWidth
            error={!!errors.code}
            helperText={errors.code && errors.code.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            defaultValue={project.designation || ""}
            required
            variant="outlined"
            label="Designation"
            name="designation"
            inputRef={register({
              required: getRequiredMessage(),
              maxLength: {
                value: 100,
                message: getMaxLengthMessage(100),
              },
              minLength: {
                value: 2,
                message: getMinLengthMessage(2),
              },
            })}
            fullWidth
            error={!!errors.designation}
            helperText={errors.designation && errors.designation.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={project.objective || ""}
            required
            multiline
            rows={5}
            variant="outlined"
            label="Objective"
            name="objective"
            inputRef={register({
              required: getRequiredMessage(),
            })}
            fullWidth
            error={!!errors.objective}
            helperText={errors.objective && errors.objective.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={10}>
            <Typography className="text-center" color="error" variant="h4">
              Team Scrum
            </Typography>
          </Grid>
        </Grid>


        {users.map((user, index) => (
          <UserInput key={user.user_id} user={user} addUser={addUser}
            removeUser={removeUser}
            displayMinus={index !== 0}
            register={register} errors={errors} required />

        )
        )}

        <Grid container>
          <Grid container justify={"flex-end"} item xs={12}>
            <div className={classes.buttons}>
              <Button
                startIcon={<SaveIcon />}
                disabled={isUpdating}
                type="submit"
                variant="contained"
                color="primary">
                Save{isUpdating && '...'}
              </Button>
              <Button
                startIcon={<CancelIcon />}
                onClick={cancel}
                variant="outlined"
                className="text-github"
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </form>

  );

};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  createProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  clearCacheProject: PropTypes.func.isRequired,
  deleteProjectById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  updateSuccess: state.entity.project.updateSuccess,
  deleteSuccess: state.entity.project.deleteSuccess,
  isUpdating: state.entity.project.isUpdating,
});

const mapDispatchToProps = {
  createProject,
  updateProject,
  clearCacheProject,
  deleteProjectById
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
