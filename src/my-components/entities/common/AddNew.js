import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import {
  InputAdornment,
  Button,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CloseIcon from '@material-ui/icons/Close';

AddNew.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  queryValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  canEdit: PropTypes.bool.isRequired
};

function AddNew({label, count, queryValue, handleInput, handleQuery, handleAdd, buttonLabel, canEdit}) {
  return (
    <div className="d-block p-3 d-md-flex justify-content-between align-items-center text-center text-md-left">
      <div className="d-flex flex-md-row flex-column align-items-center">
        <div className="font-size-lg font-weight-bold">{label}</div>
        <div className="mx-3 d-none d-md-block">
          <div className="divider-v position-relative"/>
          <div className="divider-v position-relative"/>
        </div>
        <span className="text-black-50 font-size-md pr-3">
          {count} au total
        </span>
        <div>
          <TextField
            value={queryValue}
            onChange={(e) => handleInput(e.target.value)}
            margin="dense"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size={"small"}
                    aria-label="toggle password visibility"
                    onClick={() => handleInput('')}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {queryValue !== '' && <CloseIcon style={{fontSize: 15}}/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" color="primary" onClick={handleQuery} className="m-2 ml-3">
            Rechercher
          </Button>
        </div>
      </div>
      {
        canEdit && <div className="d-block d-md-flex align-items-center">
          <Button
            onClick={handleAdd}
            size="medium"
            variant="outlined"
            color="primary"
            className="font-weight-bold px-3">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fas', 'plus-circle']}
              className="text-success"
            />
          </span>
            <span className="btn-wrapper--label"> {buttonLabel}</span>
          </Button>
        </div>
      }
    </div>

  );
}

export default AddNew;
