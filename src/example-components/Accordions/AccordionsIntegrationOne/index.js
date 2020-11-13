import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Fab,
  Typography,
  Badge,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function LivePreviewExample() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography>Navigation menu</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <div>
            <div className="bg-composed-wrapper bg-asteroid">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-4">
                <h5 className="mb-1">Navigation</h5>
                <p className="mb-0 opacity-7">This is a composed background</p>
              </div>
            </div>
            <List>
              <ListItem button className="align-items-center d-flex pl-3">
                <FontAwesomeIcon
                  icon={['far', 'user']}
                  className="nav-icon-wrapper text-primary font-size-lg mr-2"
                />
                <span>My profile</span>
              </ListItem>
              <ListItem button className="align-items-center d-flex pl-3">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="nav-icon-wrapper text-info font-size-lg mr-2"
                />
                <span>Notifications</span>
              </ListItem>
              <ListItem button className="align-items-center d-flex pl-3">
                <FontAwesomeIcon
                  icon={['fas', 'award']}
                  className="nav-icon-wrapper text-danger font-size-lg mr-2"
                />
                <span>Awards</span>
                <span className="ml-auto badge badge-danger">29</span>
              </ListItem>
              <ListItem button className="align-items-center d-flex pl-3">
                <FontAwesomeIcon
                  icon={['far', 'calendar-alt']}
                  className="nav-icon-wrapper text-success font-size-lg mr-2"
                />
                <span>Events</span>
                <span className="ml-auto badge badge-info">48</span>
              </ListItem>
              <ListItem button className="align-items-center d-flex pl-3">
                <FontAwesomeIcon
                  icon={['fas', 'sliders-h']}
                  className="nav-icon-wrapper text-warning font-size-lg mr-2"
                />
                <span>Account settings</span>
              </ListItem>
            </List>
            <Divider />
            <div className="card-body d-block text-center">
              <Button size="small" variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'lemon']} />
                </span>
                <span className="btn-wrapper--label">Details</span>
              </Button>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography>List blocks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <Divider />
          <List className="py-0">
            <ListItem className="pt-4 pb-4 d-block">
              <div className="d-flex align-items-center flex-column flex-sm-row">
                <div>
                  <div className="bg-premium-dark text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={['far', 'lightbulb']} />
                  </div>
                </div>
                <div className="pl-0 pl-sm-4">
                  <div className="d-block text-center d-sm-flex align-items-center">
                    <span className="font-size-lg">Business</span>
                    <span className="text-info ml-2 badge badge-neutral-info">
                      New
                    </span>
                  </div>
                  <p className="text-black-50 mb-0">
                    Grow familiar with the countless...
                  </p>
                </div>
                <div className="mt-3 mt-sm-0 ml-sm-auto">
                  <Fab color="secondary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'comment-dots']} />
                    </span>
                  </Fab>
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="pt-4 pb-4 d-block">
              <div className="d-flex align-items-center flex-column flex-sm-row">
                <div>
                  <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                </div>
                <div className="pl-0 pl-sm-4">
                  <div className="d-block text-center d-sm-flex align-items-center">
                    <span className="font-size-lg">Images</span>
                  </div>
                  <p className="text-black-50 mb-0">
                    Absorbed in the exquisite sense...
                  </p>
                </div>
                <div className="mt-3 mt-sm-0 ml-sm-auto">
                  <Fab color="secondary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </span>
                  </Fab>
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="pt-4 pb-4 d-block">
              <div className="d-flex align-items-center flex-column flex-sm-row">
                <div>
                  <div className="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={['fas', 'lemon']} />
                  </div>
                </div>
                <div className="pl-0 pl-sm-4">
                  <div className="d-block text-center d-sm-flex align-items-center">
                    <span className="font-size-lg">Finance</span>
                  </div>
                  <p className="text-black-50 mb-0">
                    A wonderful serenity has taken ...
                  </p>
                </div>
                <div className="mt-3 mt-sm-0 ml-sm-auto">
                  <Fab color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'lemon']} />
                    </span>
                  </Fab>
                </div>
              </div>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography>Alternate navs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <Divider />
          <List className="py-0">
            <ListItem button className="align-box-row">
              <FontAwesomeIcon
                icon={['far', 'file-excel']}
                className="text-success font-size-lg mr-3"
              />
              <div>
                <div>Excel_doc.csv</div>
              </div>
              <div className="ml-auto">
                <FontAwesomeIcon
                  icon={['fas', 'caret-right']}
                  className="text-black-50"
                />
              </div>
            </ListItem>
            <ListItem button className="align-box-row">
              <FontAwesomeIcon
                icon={['far', 'file-archive']}
                className="text-warning font-size-lg mr-3"
              />
              <div>Archive_docs.zip</div>
              <div className="ml-auto">
                <FontAwesomeIcon
                  icon={['fas', 'caret-right']}
                  className="text-black-50"
                />
              </div>
            </ListItem>
            <ListItem button className="align-box-row">
              <div>
                <FontAwesomeIcon
                  icon={['far', 'file-pdf']}
                  className="text-danger font-size-lg mr-3"
                />
                Adobe_file.pdf
                <Badge color="primary" className="ml-2">
                  New
                </Badge>
              </div>
              <div className="ml-auto">
                <FontAwesomeIcon
                  icon={['fas', 'caret-right']}
                  className="text-black-50"
                />
              </div>
            </ListItem>
            <ListItem button className="align-box-row">
              <div>
                <FontAwesomeIcon
                  icon={['far', 'file-word']}
                  className="text-first font-size-lg mr-3"
                />
                Word_file.docx
              </div>
              <div className="ml-auto">
                <FontAwesomeIcon
                  icon={['fas', 'caret-right']}
                  className="text-black-50"
                />
              </div>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
}
