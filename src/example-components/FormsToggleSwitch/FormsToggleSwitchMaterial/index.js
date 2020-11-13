import React, { Fragment } from 'react';

import { Switch, FormControlLabel } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';

export default function LivePreviewExample() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <Switch
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Switch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Switch
            value="checkedC"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Switch
            disabled
            value="checkedD"
            inputProps={{ 'aria-label': 'disabled checkbox' }}
          />
          <Switch
            disabled
            checked
            value="checkedE"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Switch
            defaultChecked
            value="checkedF"
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
        </div>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center">
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel
            control={<Switch value="checkedC" />}
            label="Uncontrolled"
          />
          <FormControlLabel
            disabled
            control={<Switch value="checkedD" />}
            label="Disabled"
          />
          <FormControlLabel
            disabled
            control={<Switch checked value="checkedE" />}
            label="Disabled"
          />
        </FormGroup>
      </div>

      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch size="small" checked={checked} onChange={toggleChecked} />
            }
            label="Small"
          />
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
            label="Normal"
          />
        </FormGroup>
      </div>
    </Fragment>
  );
}
