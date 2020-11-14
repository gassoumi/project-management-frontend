import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from "@material-ui/lab/Alert";


Alert.propTypes = {
  label: PropTypes.string.isRequired
};

function Alert({label}) {
  return (
      <MuiAlert className="mb-4" severity="warning">
        <div className="d-flex align-items-center align-content-center">
          <span>
            <strong className="d-block">{label}</strong>
          </span>
        </div>
      </MuiAlert>
  );
}

export default Alert;
