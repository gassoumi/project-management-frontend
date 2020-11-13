import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

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
          <Typography>Latest blog posts</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <Divider />
          <List className="py-0">
            <ListItem className="py-4">
              <div className="d-flex flex-column flex-sm-row align-items-start">
                <div>
                  <Card className="card-transparent mb-3 mb-sm-0">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="card-img-wrapper rounded">
                      <div className="img-wrapper-overlay">
                        <div className="overlay-btn-wrapper">
                          <Fab
                            size="small"
                            color="secondary"
                            className="mx-auto d-flex align-items-center">
                            <FontAwesomeIcon
                              icon={['fas', 'plus-circle']}
                              className="font-size-lg"
                            />
                          </Fab>
                        </div>
                      </div>
                      <img
                        alt="..."
                        className="card-img-top rounded"
                        src={stock3}
                        style={{ width: 160 }}
                      />
                    </a>
                  </Card>
                </div>
                <div className="pl-0 pl-sm-4">
                  <div className="mb-1">
                    <a
                      className="font-size-lg"
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      Meeting minutes
                    </a>
                  </div>
                  <div>
                    <div className="text-info badge badge-neutral-info">
                      Articles
                    </div>
                    <div className="text-danger ml-2 badge badge-neutral-danger">
                      Posts
                    </div>
                  </div>
                  <p className="mb-0 mt-2 text-black-50">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings ...
                  </p>
                </div>
              </div>
            </ListItem>
            <ListItem className="py-4">
              <div className="d-flex flex-column flex-sm-row align-items-start">
                <div>
                  <Card className="card-transparent mb-3 mb-sm-0">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="card-img-wrapper rounded">
                      <div className="img-wrapper-overlay">
                        <div className="overlay-btn-wrapper">
                          <Fab
                            size="small"
                            color="secondary"
                            className="mx-auto d-flex align-items-center">
                            <FontAwesomeIcon
                              icon={['fas', 'plus-circle']}
                              className="font-size-lg"
                            />
                          </Fab>
                        </div>
                      </div>
                      <img
                        alt="..."
                        className="card-img-top rounded"
                        src={stock2}
                        style={{ width: 160 }}
                      />
                    </a>
                  </Card>
                </div>
                <div className="pl-0 pl-sm-4">
                  <div className="mb-1">
                    <a
                      className="font-size-lg"
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      Sales reports for this week
                    </a>
                  </div>
                  <div>
                    <div className="text-success badge badge-neutral-success">
                      Blog
                    </div>
                  </div>
                  <p className="mt-2 text-black-50">
                    Who formed us in his own image, and the breath ...
                  </p>
                </div>
              </div>
            </ListItem>
            <ListItem className="bg-secondary d-block text-center p-3">
              <Tooltip arrow title="Facebook">
                <Button color="default" className="text-facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                </Button>
              </Tooltip>
              <Tooltip arrow title="Dribbble">
                <Button color="default" className="text-dribbble mr-2 ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </span>
                </Button>
              </Tooltip>
              <Tooltip arrow title="Twitter">
                <Button color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography>Chart boxes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <Divider />
          <div className="px-3 pt-3">
            <Grid container spacing={4}>
              <Grid xs={12} sm={4} item>
                <div className="bg-secondary p-3 text-center rounded">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-warning"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">2,345</b>
                    <span className="text-black-50 d-block">users</span>
                  </div>
                </div>
              </Grid>
              <Grid xs={12} sm={4} item>
                <div className="bg-secondary p-3 text-center rounded">
                  <div>
                    <FontAwesomeIcon
                      icon={['fas', 'lemon']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">$3,586</b>
                    <span className="text-black-50 d-block">sales</span>
                  </div>
                </div>
              </Grid>
              <Grid xs={12} sm={4} item>
                <div className="bg-secondary p-3 text-center rounded">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-info"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">$9,693</b>
                    <span className="text-black-50 d-block">revenue</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider className="my-3" />
          <div className="text-center d-flex align-items-center justify-content-center mb-3">
            <Tooltip arrow title="Menu Example">
              <Button
                color="primary"
                variant="outlined"
                className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-lg"
                />
              </Button>
            </Tooltip>
            <Tooltip arrow title="Menu Example">
              <Button
                color="primary"
                variant="outlined"
                className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-lg"
                />
              </Button>
            </Tooltip>
            <Tooltip arrow title="Menu Example">
              <Button
                color="primary"
                variant="outlined"
                className="m-1 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-50 rounded">
                <FontAwesomeIcon
                  icon={['far', 'object-group']}
                  className="font-size-lg"
                />
              </Button>
            </Tooltip>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography>Statistics blocks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="d-block p-0">
          <Divider />
          <div className="grid-menu grid-menu-2col">
            <Grid container spacing={0}>
              <Grid item sm={6}>
                <Button color="primary" className="p-4 w-100">
                  <div className="align-box-row align-items-start">
                    <div className="mr-3">
                      <div className="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'save']} />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-weight-bold">
                        <small className="text-black-50 d-block mb-1 text-uppercase">
                          New Accounts
                        </small>
                        <span className="font-size-xxl mt-1">586,356</span>
                      </div>
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-success"
                        />
                        <span className="text-success px-1">15.4%</span>
                        <span className="text-black-50">increase</span>
                      </div>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xl"
                      />
                    </div>
                  </div>
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button color="primary" className="p-4 w-100">
                  <div className="align-box-row align-items-start">
                    <div className="mr-3">
                      <div className="bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-weight-bold">
                        <small className="text-black-50 d-block mb-1 text-uppercase">
                          Sales
                        </small>
                        <span className="font-size-xxl mt-1">23,274</span>
                      </div>
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-warning"
                        />
                        <span className="text-warning px-1">7.4%</span>
                        <span className="text-black-50">more sales</span>
                      </div>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xl"
                      />
                    </div>
                  </div>
                </Button>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <div className="card-footer d-block text-center">
            <Button
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded">
              <FontAwesomeIcon
                icon={['far', 'comment-dots']}
                className="font-size-lg"
              />
            </Button>
            <Button
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded">
              <FontAwesomeIcon
                icon={['far', 'question-circle']}
                className="font-size-lg"
              />
            </Button>
            <Button
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded">
              <FontAwesomeIcon
                icon={['far', 'lightbulb']}
                className="font-size-lg"
              />
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
}
