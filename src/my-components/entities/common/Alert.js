import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from "@material-ui/lab/Alert";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


Alert.propTypes = {
  label: PropTypes.string.isRequired
};

function Alert({label}) {
  return (
    <>
      <>
        {/*<MuiAlert*/}
        {/*  variant="outlined"*/}
        {/*  className="alerts-alternate mb-2"*/}
        {/*  color="warning">*/}
        {/*  <div className="d-flex align-items-center align-content-start">*/}
        {/*    <span className="font-size-lg d-block d-40 mr-3 text-center bg-warning text-white rounded-sm">*/}
        {/*      <FontAwesomeIcon icon={['far', 'question-circle']}/>*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <strong className="d-block">Avertissement!</strong> {label}*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</MuiAlert>*/}
      </>
      <MuiAlert className="mb-4" severity="warning">
        <div className="d-flex align-items-center align-content-center">
          <span>
            {/*<strong className="d-block">Avertissement!</strong>*/}
            <strong className="d-block">{label}</strong>
          </span>
        </div>
      </MuiAlert>
    </>
  );
}

export default Alert;
