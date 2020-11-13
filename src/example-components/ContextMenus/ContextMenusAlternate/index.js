import React, { Fragment } from 'react';
import {
  Fab,
  Checkbox,
  Card,
  CardContent,
  Button,
  ListItem,
  Tooltip
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const MENU_TYPE = 'SIMPLE';

const attributes = {
  className: 'nav-item'
};

const targets = [
  {
    name: 'Facebook',
    content: (
      <div className="d-flex align-items-center">
        <Tooltip arrow title="View Facebook Profile">
          <Button variant="outlined" className="d-40 p-0 mr-3 text-facebook">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <div>
          <b>Facebook</b>
          <span className="text-black-50 d-block">Social media company</span>
        </div>
      </div>
    )
  },
  {
    name: 'Github',
    content: (
      <div className="d-flex align-items-center">
        <Tooltip arrow title="View details">
          <Button variant="outlined" className="d-40 p-0 mr-3 text-github">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <div>
          <b>Github</b>
          <span className="text-black-50 d-block">Recommended company</span>
        </div>
      </div>
    )
  },
  {
    name: 'Instagram',
    content: (
      <div className="d-flex align-items-center">
        <Tooltip arrow title="View details">
          <Button variant="outlined" className="d-40 p-0 mr-3 text-instagram">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <div>
          <b>Instagram</b>
          <span className="text-black-50 d-block">
            Sharing images since 2000
          </span>
        </div>
      </div>
    )
  }
];

function collect(props) {
  return { name: props.name };
}

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Right click context menu in tables</b>
          </div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <Fab size="small" color="primary">
                <FontAwesomeIcon icon={['fas', 'cog']} spin />
              </Fab>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="position-relative">
            <ContextMenu
              className="dropdown-menu bg-white rounded  dropdown-menu-xl flex-column p-3"
              id={MENU_TYPE}>
              <MenuItem attributes={attributes}>
                <span className="font-weight-bold px-3 pb-2 d-block text-first">
                  Generate reports
                </span>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 1' }}>
                <ListItem button className="rounded-sm">
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'file-pdf']} />
                  </div>
                  <span>Export as PDF</span>
                </ListItem>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 2' }}>
                <ListItem button className="rounded-sm">
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'file-excel']} />
                  </div>
                  <span>Export as Excel</span>
                </ListItem>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 3' }}>
                <ListItem button className="rounded-sm">
                  <span className="text-danger font-weight-bold">Download</span>
                </ListItem>
              </MenuItem>
            </ContextMenu>
          </div>
          <div className="table-responsive">
            <table className="table table-hover text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}></th>
                  <th>Company</th>
                  <th>Date</th>
                  <th className="text-center" style={{ width: '20%' }}>
                    Status
                  </th>
                  <th>Employee</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {targets.map((item, i) => (
                  <ContextMenuTrigger
                    renderTag="tr"
                    name={item.name}
                    id={MENU_TYPE}
                    holdToDisplay={1000}
                    key={i}
                    collect={collect}>
                    <td className="text-center">
                      <Checkbox
                        id="CustomCheckbox"
                        className="align-self-start"
                      />
                    </td>
                    <td>{item.content}</td>
                    <td>
                      <div className="align-box-row">16 September 2020</div>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3 badge badge-warning">
                        Pending
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            Shanelle Wynn
                          </a>
                          <span className="text-black-50 d-block">
                            UI Engineer, Apple Inc.
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className=" px-2 py-0">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </td>
                  </ContextMenuTrigger>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
