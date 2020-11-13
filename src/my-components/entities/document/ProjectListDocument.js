import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Grid} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

ProjectListDocument.propTypes = {};


function ProjectListDocument(props) {
  return (
    <Fragment>
      <h5 className="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">
        List de projets
      </h5>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'folder-open']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                  <span className="font-size-md">Downloads</span>
                  <span className="text-warning ml-2 badge badge-neutral-warning">
                            OLD
                          </span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>5 files</b>, 15 mb
                </p>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'folder']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                  <span className="font-size-md">Image album</span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>125 files</b>, 564 mb
                </p>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'folder']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                  <span className="font-size-md">Reports</span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>45 files</b>, 345 mb
                </p>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-warning display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'file-excel']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                  <span className="font-size-md">Other files</span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>55 files</b>, 2,3 GB
                </p>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'folder-open']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                  <span className="font-size-md">Websites</span>
                  <span className="ml-2 badge badge-success">New</span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>3 directories</b>, 45,23 GB
                </p>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card card-box btn rounded text-left mb-4 p-3">
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <div>
                <div className="text-center text-danger display-2 d-50 rounded-circle mb-3 mb-sm-2">
                  <FontAwesomeIcon icon={['far', 'folder']}/>
                </div>
              </div>
              <div className="pl-0 pl-sm-3">
                <div className="d-block text-center d-sm-flex align-items-center">
                          <span className="font-size-md text-danger">
                            <b>Overdue</b>
                          </span>
                </div>
                <p className="text-black-50 opacity-8 mb-0">
                  <b>3 files</b>, 34 mb
                </p>
              </div>
            </div>
          </a>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectListDocument;
