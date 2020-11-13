import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AsyncComboBox from '../common/AsyncComboBox';
import {connect} from "react-redux";
import {createDocument, updateDocument} from "../../../redux";
import {getFileName} from "./DocumentTable";
import Link from "@material-ui/core/Link";
import clsx from 'clsx';
import {
  getMinLengthMessage,
  getRequiredMessage
} from '../../utils/validationMessage';

const URL_TASK = "/api/tasks/";

DocumentForm.propTypes = {};

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
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

// TODO 9 react hooks
// https://reactjs.org/docs/hooks-reference.html#lazy-initial-state

function DocumentForm(props) {

  const classes = useStyles();

  const {handleCancel, document, updateSuccess, createDocument, updateDocument, isUpdating, isNew} = props;

  const defaultValue = {
    code: document.code || "",
    description: document.description || "",
    version: document.version || "",
    task: document.task || null,
    // the input file is read-only we can't update its value
    docFile: null,
  };

  const {register, handleSubmit, errors, control} =
    useForm({
      mode: "onChange",
      defaultValues: defaultValue,
    });

  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files
  const onSubmit = data => {
    // console.log(data);
    const {code, version, task, docFile} = data;
    const file = docFile[0];
    // console.log(file);
    const formData = new FormData();
    formData.append('code', code);
    formData.append('version', version);
    if (task) {
      formData.append('task', task.id);
    } else {
      formData.append('task', "");
    }
    if (file) {
      formData.append('docFile', file);
    }

    if (isNew) {
      createDocument(formData);
    } else {
      updateDocument(document.id, formData);
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      handleCancel();
    }
  }, [updateSuccess]);


  return (
    <>
      <form id="form-task" className="p-4 pr-5 pl-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              label="Code Document"
              name="code"
              inputRef={register({
                required: getRequiredMessage(),
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
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              label="Version"
              name="version"
              inputRef={register({
                required: getRequiredMessage(),
                minLength: {
                  value: 2,
                  message: getMinLengthMessage(2),
                },
              })}
              fullWidth
              error={!!errors.version}
              helperText={errors.version && errors.version.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              // margin="normal"
            >
              <AsyncComboBox
                control={control}
                errors={errors}
                name="task"
                label="Coisir une tache"
                optionLabel="description"
                url={URL_TASK}
                rules={null}
              />
            </FormControl>
          </Grid>
          {
            !isNew &&
            <Grid item xs={10}>
              {"Fichier actuellement : "}
              <Link target="_blank" rel="noreferrer" href={document.docFile}>
                {getFileName(document.docFile)}
              </Link>
            </Grid>

          }
          <Grid xs={12} item>
            <FormControl
              // margin="normal"
              required
              error={!!errors.docFile}
            >
              <input
                ref={register}
                name="docFile"
                // accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
              />
              <Typography className={classes.title} variant="subtitle1" component="div">
                {isNew ? "Choisr un " : "Changer le "} fichier
              </Typography>

              <label htmlFor="contained-button-file">
                <Button startIcon={<CloudUploadIcon/>} variant="contained" color="secondary"
                        component="span">
                  Télécharger un fichier
                </Button>
              </label>
              {errors.docFile &&
              <FormHelperText>{errors.docFile.message}</FormHelperText>
              }
            </FormControl>
          </Grid>

          <Grid className={classes.buttons} item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SaveIcon/>}
              type="submit"
              disabled={isUpdating}
            >
              Enregistrer
            </Button>
            <Button
              onClick={handleCancel}
              variant="outlined"
              className={clsx("text-github", classes.button)}
              color="secondary"
              startIcon={<CancelIcon/>}
            >
              Annuler
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}


const mapStateToProps = state => ({
  updateSuccess: state.entity.document.updateSuccess,
  isUpdating: state.entity.document.isUpdating,
});

DocumentForm.prototype = {
  updateSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, {createDocument, updateDocument})(DocumentForm);
