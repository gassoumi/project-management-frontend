import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getDisplayString} from "../../utils";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

DocumentTable.propTypes = {
  documents: PropTypes.array.isRequired,
  canEdit: PropTypes.bool.isRequired,
  sort: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export function getFileName(path) {
  if (typeof path !== "string") {
    return undefined;
  }
  const index = path.lastIndexOf("/");
  if (index > -1) {
    return path.substring(index + 1);
  }
  return path;
}

export function getFileExtension(path) {
  if (typeof path !== "string") {
    return undefined;
  }
  const index = path.lastIndexOf(".");
  if (index > -1) {
    return path.substring(index + 1);
  }
  return null;
}


function DocumentTable({documents, canEdit, sort, handleEdit, handleDelete}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th className="bg-neutral-danger" style={{cursor: 'pointer'}} onClick={sort('id')}>
          ID <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left bg-neutral-danger">
          Projet
        </th>
        <th className="text-left bg-neutral-danger" style={{cursor: 'pointer'}} onClick={sort('code')}>
          Code Document <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left bg-neutral-danger" style={{cursor: 'pointer'}} onClick={sort('docFile')}>
          Nom du document <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left bg-neutral-danger" style={{cursor: 'pointer'}} onClick={sort('version')}>
          Version <FontAwesomeIcon icon="sort"/>
        </th>
        {canEdit && <th className="text-center bg-neutral-danger">Actions</th>}
      </tr>
      </thead>
      <tbody>
      {documents.map(document => (
        <tr key={document.id}>
          <td>{document.id}</td>
          <td className="text-info">
            {(document.task && document.task.sprint && document.task.sprint.project) &&
            <Link component={RouterLink} to={`/project/${document.task.sprint.project.id}`}>
                      <span className="text-primary">
                        {getDisplayString(document.task.sprint.project.designation)}
                      </span>
            </Link>}
          </td>
          <td>
            {document.code}
          </td>
          <td>
            <Link target="_blank" rel="noreferrer" href={document.docFile}>
                <span className="text-primary">
              {getFileName(document.docFile)}
                </span>
            </Link>
          </td>
          <td>
            {document.version}
          </td>
          {canEdit &&
          <td className="text-center">
            <Tooltip arrow title="Modifier">
              <IconButton
                onClick={() => handleEdit(document.id)}
                className="text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'pen']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Supprimer">
              <IconButton
                onClick={() => handleDelete(document)}
                className="text-danger">
                <FontAwesomeIcon
                  icon={['far', 'trash-alt']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </td>}
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default DocumentTable;
