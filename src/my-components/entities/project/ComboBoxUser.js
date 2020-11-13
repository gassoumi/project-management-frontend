// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import axios from 'axios';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const URL = '/api/auth/users';
const PARAM_SEARCH = "search=";

function ComboBoxUser(props) {
  const {register, name, errors, defaultValue} = props;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');


  React.useEffect(() => {
    let active = true;

    if (!open) {
      return undefined;
    }

    (async () => {
      try {
        setLoading(true);
        await sleep(1e3); // For demo purposes.
        const url = `${URL}?${PARAM_SEARCH}${inputValue}`;
        const response = await axios.get(url);
        if (active && response.data && response.data.results) {
          setOptions(response.data.results);
        }
      } catch (err) {
        console.log(err);
      } finally {
        if (active) {
          setLoading(false);
        }
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
    <Autocomplete
      defaultValue={defaultValue}
      onInputChange={(event, newInputValue) => handleInputChange(event, newInputValue)}
      inputValue={inputValue}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.username === value.username || defaultValue}
      getOptionLabel={(option) => option.username || defaultValue}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          label="Choisir un utilisateur"
          variant="outlined"
          name={name}
          inputRef={register}
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
      )}
    />
  );
}

export default ComboBoxUser;
