import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fab, Grid, Tooltip} from '@material-ui/core';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export function getColorNoteStatus(value) {
  if (value) {
    return 'success'
  } else {
    return 'danger';
  }
}

export default function NoteList({notes, handleEdit, handleDelete}) {
  return (
    <div className="pt-3">
      <Grid container spacing={4}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <div
              className="card card-box-hover-rise mb-4"
              style={{height: '100%'}}
              // href="#/"
              // onClick={e => e.preventDefault()}
            >
              <div className="card-badges">
                <div className={`badge badge-${getColorNoteStatus(note.ok)} badge-pill`}>
                  {note.ok ? "Done" : "Not Done"}</div>
              </div>
              <div className="card-body card-body-avatar pt-4 d-flex flex-column flex-wrap">
                <h5 className="card-title font-weight-bold font-size-lg">
                  {note.note}
                </h5>

                <ReactMarkdown className="card-text flex-grow-1">
                  {note.comment ? note.comment : "Pas encore de commentaire"}
                </ReactMarkdown>
               
                <div className="card-date mt-2 d-flex align-items-end">
                  <div className="flex-grow-1 align-self-center">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="text-warning mr-1"
                    />
                    <span className="text-warning ">A faire à {moment(note.date).format('L')} </span>
                  </div>
                  <div className="d-flex justify-content-end align-items-end ">
                    <Tooltip arrow title="Modifier">
                      <Fab size="small" color="primary" onClick={() => handleEdit(note.id)} className="m-2">
                        <EditIcon/>
                      </Fab>
                    </Tooltip>
                    <Tooltip arrow title="Supprimer">
                      <Fab size="small" color="secondary" onClick={() => handleDelete(note)} className="m-2 bg-danger">
                        <DeleteIcon/>
                      </Fab>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))
        }
      </Grid>
    </div>
  );
}
