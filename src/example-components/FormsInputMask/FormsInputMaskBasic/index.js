import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField } from '@material-ui/core';

import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function LivePreviewExample() {
  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320'
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <Fragment>
      <div className="my-5 p-5">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="react-text-mask"
              value={values.textmask}
              onChange={handleChange('textmask')}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: TextMaskCustom
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="react-number-format"
              value={values.numberformat}
              onChange={handleChange('numberformat')}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
