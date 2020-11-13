import React, {Component} from 'react';
import {toast} from 'react-toastify';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getDisplayString} from "../utils";

class Alerts extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {error, message} = this.props;
    if (prevProps.error !== error) {
      // if (error.msg.name) {
      //     toast.error(`Name : ${error.msg.name.join()}`);
      // }
      // if (error.msg.email) {
      //     toast.error(`Email : ${error.msg.email.join()}`);
      // }
      // if (error.msg.message) {
      //     toast.error(`Email : ${error.msg.message.join()}`);
      // }
      // if (error.msg.username) {
      //     toast.error(error.msg.username.join());
      // }
      // if (error.msg.non_field_errors) {
      //     toast.error(error.msg.non_field_errors.join());
      // }
      // if (error.msg.designation) {
      //     toast.error(`Designation : ${error.msg.designation.join()}`);
      // }
      if (error.msg.detail) {
        toast.error(error.msg.detail);
      }
      // if (error.msg.code_project) {
      //     toast.error(`Code project : ${error.msg.code_project.join()}`);
      // }
      else if (Object.keys(error.msg).length > 0) {
        const key = Object.keys(error.msg)[0];
        if (Array.isArray(error.msg[key])) {
          toast.error(`${key} : ${error.msg[key].join()}`);
          // toast.error(`${error.msg[key].join()}`);
        }
      }
    }
    if (message !== prevProps.message) {
      if (message.passwordNotMatch) {
        toast.error(message.passwordNotMatch);
      }
      if (message.deleted) {
        toast.success(getDisplayString(message.deleted, 200));
      }
      if (message.added) {
        toast.success(getDisplayString(message.added, 200));
      }
      if (message.updated) {
        toast.success(getDisplayString(message.updated, 200));
      }
    }
  }

  render() {
    return (
      <React.Fragment/>
    );
  }
}

Alerts.propTypes = {
  error: PropTypes.object,
  message: PropTypes.object
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(Alerts);
