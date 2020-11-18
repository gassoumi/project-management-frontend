import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DeleteDialog(props) {
  const {
    open, title,
    handleClose, deleteObject, object, label
  } = props;

  const handleDelete = () => {
    deleteObject(object);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="text-center p-5">
        <div className="avatar-icon-wrapper rounded-circle m-0">
          <div
            className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="d-flex align-self-center display-3"
            />
          </div>
        </div>
        <h4 className="font-weight-bold mt-4">
          {title}
        </h4>
        <p className="mb-0 font-size-lg text-muted">
          {label}
        </p>
        <div className="pt-4">
          <Button
            onClick={handleClose}
            variant="outlined"
            color="secondary"
            className="mx-1">
            <span className="btn-wrapper--label">Annuler</span>
          </Button>
          <Button
            onClick={handleDelete}
            color="primary"
            variant="contained"
            className="mx-1">
            <span className="btn-wrapper--label">Supprimer</span>
          </Button>
        </div>
      </div>
    </Dialog>
  );
}


DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  deleteObject: PropTypes.func.isRequired,
  object: PropTypes.object,
  label: PropTypes.string,
};

export default DeleteDialog;
