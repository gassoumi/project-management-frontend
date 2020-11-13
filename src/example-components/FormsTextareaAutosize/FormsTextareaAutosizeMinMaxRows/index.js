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
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          className="m-3"
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField
          className="m-3"
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
    </Fragment>
  );
}
