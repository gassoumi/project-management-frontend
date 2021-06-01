/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxClassification({ register, name, errors, defaultValue }) {

  return (
    <Autocomplete
      defaultValue={defaultValue}
      id={name}
      options={classifications2}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField
        fullWidth
        {...params}
        name={name}
        error={!!errors[name]}
        helperText={errors[name] && errors[name].message}
        inputRef={register}
        label="Choose a classification"
        variant="outlined" />}
    />
  );
}

const classifications2 = [
  'Scrum Master',
  'Product Owner',
  'Team Leader',
  'Responsible Development',
  'Responsible',
  'Conception',
  'Executive Assistant',
];

// const classifications = [
//   {title: 'Scrum Master'},
//   {title: 'Project Owner '},
//   {title: 'Team Leader'},
//   {title: 'Responsible development'},
//   {title: 'Responsible'},
//   {title: 'Conception'},
//   {title: 'Executive assistant'},
// ];
