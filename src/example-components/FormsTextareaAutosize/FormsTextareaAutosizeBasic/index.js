import React, { Fragment } from 'react';

import { TextField } from '@material-ui/core';

export default function LivePreviewExample() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Fragment>
      <div>
        <TextField
          className="m-3"
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
        />
        <TextField
          className="m-3"
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          className="m-3"
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          className="m-3"
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          className="m-3"
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          className="m-3"
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
    </Fragment>
  );
}
