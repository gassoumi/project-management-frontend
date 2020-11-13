// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import axios from 'axios';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Controller} from "react-hook-form";

// https://codesandbox.io/s/react-hook-form-controller-079xx?file=/src/MuiAutoComplete.js
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


// const URL = '/api/auth/users';
const PARAM_SEARCH = "search=";
const DEFAULT_PAGE_SIZE = 100;

// https://www.robinwieruch.de/react-hooks-fetch-data
function ComboBoxUser(props) {
  const {control, name, errors, defaultValue, label} = props;
  const [open, setOpen] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState(defaultValue ? [{...defaultValue}] : []);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let active = true;

    if (!open) {
      return undefined;
    }

    (async () => {
      setLoading(true);
      try {
        await sleep(1e3); // For demo purposes.
        const url = `${URL}?${PARAM_SEARCH}${inputValue}&page_size=${DEFAULT_PAGE_SIZE}`;
        const response = await axios.get(url);
        if (active && response.data && response.data.results) {
          setOptions(response.data.results);
        }
      } catch (err) {
        console.log(err);
      }
      if (active) {
        // you should check if active is true
        // console.log("we still here");
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [inputValue, open]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
      setLoading(false);
    }
  }, [open]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{required: 'this field is required'}}
      // defaultValue={options[0]}
      onChange={([, data]) => data}
      as={
        <Autocomplete
          // onChange={(event, value) => {
          //     setSelectedSprint(value);
          // }}
          onInputChange={(event, newInputValue) => handleInputChange(event, newInputValue)}
          inputValue={inputValue}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => {
            return option.username === value.username
          }}
          getOptionLabel={(option) => {
            return option.username;
          }}
          options={options}
          loading={loading}
          renderInput={(params) => {
            return (
              <TextField
                fullWidth
                {...params}
                label={label}
                required
                error={!!errors[name]}
                helperText={errors[name] && errors[name].message}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20}/> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )
          }}
        />}
    />
  );
}

export default ComboBoxUser
