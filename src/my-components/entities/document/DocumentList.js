import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, Fab, Grid, IconButton, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment';

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


function DocumentList({documents, handleEdit, handleDelete}) {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {documents.map(document => (
          <Grid key={document.id} item xs={12} md={6} lg={4}>
            <Card className="card-box mb-4">
              <CardContent className="p-3">
                <div className="card-img-wrapper hover-show-hide-container">
                  <div className="card-badges card-badges-top hover-hide-wrapper">
                    <Fab color="primary" size="small">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-v']}/>
                    </Fab>
                  </div>
                  <div className="card-badges card-badges-top hover-show-wrapper">
                    <Tooltip arrow title="Modifier">
                      <IconButton
                        onClick={() => handleEdit(document.id)}
                        className="bg-white text-first d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'pen']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Supprimer">
                      <IconButton
                        onClick={() => handleDelete(document)}
                        className="bg-white text-danger d-40 rounded-circle p-0 ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <div
                    className="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                    <FontAwesomeIcon
                      icon={document.icon.icon}
                      className={`display-2 ${document.icon.textColor} mx-auto`}
                    />
                  </div>
                  <a href="#/" onClick={e => e.preventDefault()}>
                    <b>{document.fileName}</b>
                  </a>
                  <div>
                    <small className="d-block text-black-50 pb-2">
                      {`version : ${document.version}`}
                    </small>
                    <small className="opacity-6">
                      Ajouté le:{' '}
                      <span className="text-black-50">{moment(document.created_at).format('L')}</span>
                    </small>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default DocumentList;
