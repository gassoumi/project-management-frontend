import React from 'react';
import {IconButton, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {getDisplayString} from "../../utils";
import {getColorNoteStatus} from './NoteList';
import PropTypes from 'prop-types';

NoteTable.propTypes = {
  notes: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};


function NoteTable({notes, sort, handleEdit, handleDelete}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th style={{cursor: 'pointer'}} onClick={sort('id')}>
          ID <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('note')}>
          Story <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('comment')}>
          Commentaire <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center" style={{cursor: 'pointer'}} onClick={sort('date')}>
          Date <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center" style={{cursor: 'pointer'}} onClick={sort('ok')}>
          Statut <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      {notes.map(note => (
        <tr key={note.id}>
          <td>{note.id}</td>
          <td>
            {getDisplayString(note.note, 40)}
          </td>
          <td>
            {note.comment ? getDisplayString(note.comment, 45) : "Pas encore de commentaires"}
          </td>
          <td className="text-center">
            {moment(note.date).format('LL')}
          </td>
          <td className="text-center">
            <div className={`badge badge-${getColorNoteStatus(note.ok)} px-4`}>
              {note.ok ? "Done" : "Not Done"}
            </div>
          </td>
          <td className="text-center">
            <Tooltip arrow title="Modifier">
              <IconButton
                onClick={() => handleEdit(note.id)}
                className="text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'pen']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Supprimer">
              <IconButton
                onClick={() => handleDelete(note)}
                className="text-danger">
                <FontAwesomeIcon
                  icon={['far', 'trash-alt']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default NoteTable;
