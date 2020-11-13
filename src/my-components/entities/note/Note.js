import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import DeleteDialog from "../common/DeleteDialog";
import NoteUpdate from './NoteUpdate'
import NoteTable from "./NoteTable";
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchNotes, deleteNote, clearCacheNote, setTabValueNote, createNote, updateNote} from "../../../redux";
import axios from "axios";
import NoteDetail from './NoteDetail';
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import NoteList from './NoteList';
import {PageTitle} from "../../../layout-components";
import {Box, CardContent, Divider, IconButton, Tab, Tabs, Tooltip, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pagination from '@material-ui/lab/Pagination';
import {SuspenseLoading} from "../../../Routes";
import Alert from '../common/Alert';


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function Note(props) {

  const [isNew, setIsNew] = React.useState(true);
  const [note, setNote] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [noteToDelete, setNoteToDelete] = React.useState({});
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openDetailDialog, setOpenDetailDialog] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [idNote, setIdNote] = React.useState(-1);
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = React.useState(paginationState.search);

  const {isFetching, fetchNotes, deleteNote, notes, pageSize, page, createNote, updateNote, isUpdating, count} = props;


  const handleInput = (value) => {
    setQuery(value);
  };

  const handleQuery = (event) => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const handleChange = (event, newValue) => {
    props.setTabValueNote(newValue);
  };

  const sortEntities = () => {
    let sort = paginationState.order === 'asc' ? "" : "-";
    fetchNotes(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
    let endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (paginationState.search) {
      endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    // fetchNotes();
    return () => {
      props.clearCacheNote();
    }
  }, []);


  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (props.updateSuccess || props.deleteSuccess) {
      setOpen(false);
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [props.deleteSuccess, props.updateSuccess]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page') || 1;
    const sort = params.get('sort');
    const search = params.get('search') || '';
    if (sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        sort: sortSplit[0],
        order: sortSplit[1],
        search
      });
    } else {
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        search
      });
    }
    setQuery(search);
  }, [props.location.search]);

  useEffect(() => {
      let active = true;

      if (idNote === -1) {
        return undefined;
      }
      // setIsLoaded(false);
      axios.get(`/api/notes/${idNote}/`)
        .then(response => {
          if (active) {
            setNote(response.data);
            // setOpen(true);
            setIdNote(-1);
            if (isEdit) {
              setOpen(true);
            } else {
              setOpenDetailDialog(true);
            }
            // setIsLoaded(true);
          }
        })
        .catch(error => console.log(error));

      return () => {
        active = false;
      }
    }, [idNote]
  );

  const createNewNote = () => {
    setNote({});
    setIsNew(true);
    setIdNote(-1);
    setOpen(true);
  };

  const handleEdit = idNote => {
    setIsEdit(true);
    setIsNew(false);
    setIdNote(idNote);
  };

  const handleView = idNote => {
    setIsEdit(false);
    setIdNote(idNote);
  };

  const handleDelete = note => {
    setNoteToDelete(note);
    setOpenDeleteDialog(true);
  };

  const handleChangePagination = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage
    });
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  return (
    <>
      {/*<PageTitle*/}
      {/*  titleHeading="Story"*/}
      {/*  // titleDescription="Building a projects related application? Start from this layout."*/}
      {/*/>*/}
      <NoteDetail
        note={note}
        open={openDetailDialog}
        handleClose={() => setOpenDetailDialog(false)}
      />
      <NoteUpdate
        isUpdating={isUpdating}
        createNote={createNote}
        updateNote={updateNote}
        fetchNotes={fetchNotes}
        isNew={isNew}
        note={note}
        open={open}
        handleClose={() => setOpen(false)}/>
      <DeleteDialog
        object={noteToDelete}
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        deleteObject={deleteNote}
        title="Êtes-vous sûr de vouloir supprimer cette Story?"
        label={noteToDelete.note}
      />
      <Card className="card-box mb-4">
        <div>
          <AddNew
            canEdit
            label="Story"
            count={props.count}
            buttonLabel="Ajouter une story"
            handleAdd={createNewNote}
            handleInput={handleInput}
            handleQuery={handleQuery}
            queryValue={query}
          />
          <Divider/>
          <Tabs
            value={props.value}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            onChange={handleChange}>
            <Tab label="Colonnes de liste"/>
            <Tab label="Tableau"/>
          </Tabs>
        </div>
      </Card>
      {isFetching ? <SuspenseLoading/> :
        (notes && notes.length > 0) ?
          <Fragment>
            <div className="mb-4">
              <TabPanel value={props.value} index={0}>
                <NoteList
                  notes={notes}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </TabPanel>
              <TabPanel value={props.value} index={1}>
                <div className="example-card-seamless mb-4-spacing">
                  <Card className="card-box mb-4">
                    <div className="card-header pr-2">
                      <div className="card-header--title">Story</div>
                      <div className="card-header--actions">
                        <Tooltip arrow title="Refresh">
                          <IconButton size="small" color="primary" className="mr-3">
                            <FontAwesomeIcon icon={['fas', 'cog']} spin/>
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <div className="table-responsive">
                        <NoteTable
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          notes={notes}
                          sort={sort}/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabPanel>
            </div>
            <Pagination
              className="d-flex justify-content-center"
              variant="outlined"
              color="primary"
              shape="rounded"
              count={Math.ceil(count / pageSize)}
              page={page}
              onChange={handleChangePagination}
            />
          </Fragment> :
          <Fragment>
            <Card className="card-box p-2 mb-4">
              <Alert label="Aucun story trouvé"/>
            </Card>
          </Fragment>
      }
    </>
  );
}

Note.propTypes = {
  notes: PropTypes.array.isRequired,
  nextPageUrl: PropTypes.string,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  fetchNotes: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  clearCacheNote: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  setTabValueNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    pagination: {notes},
  } = state;

  return {
    notes: Selector.getNotesPage(state),
    nextPageUrl: notes.nextPageUrl,
    page: notes.page,
    isFetching: notes.isFetching,
    count: notes.count,
    pageSize: notes.pageSize,
    value: state.setting.tabValueNote,
    updateSuccess: state.entity.note.updateSuccess,
    deleteSuccess: state.entity.note.deleteSuccess,
    isUpdating: state.entity.note.isUpdating,
  };
};

const mapDispatchToProps = {
  fetchNotes,
  deleteNote,
  clearCacheNote,
  createNote,
  updateNote,
  setTabValueNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
