import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DocumentList from './DocumentList';
import DocumentTable from './DocumentTable';
import {
  Grid,
  Fab,
  Box,
  Typography,
  Button,
  List,
  ListItem, Tooltip, IconButton, CardContent, TextField, InputAdornment, TablePagination
} from '@material-ui/core';

import {Selector} from "../index";
import {connect} from "react-redux";
import {clearCacheDocument, fetchDocuments, updateDocument} from "../../../redux/actions";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {getFileExtension, getFileName} from "./DocumentTable";
import queryString from "query-string";
import DeleteDialog from "../common/DeleteDialog";
import Card from "@material-ui/core/Card";
import SearchIcon from '@material-ui/icons/Search';
import {SuspenseLoading} from "../../../Routes";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Pagination from "@material-ui/lab/Pagination";
import Alert from '../common/Alert';


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function getDisplayDocument(documents) {
  return documents.map(document => {
    return {
      ...document,
      fileName: getFileName(document.docFile),
      icon: getFileIcon(document.docFile),
    }
  });
}

function getFileIcon(path) {
  const extension = getFileExtension(path);
  switch (extension) {
    case 'doc':
    case 'dot':
    case 'wbk':
    case 'docx':
    case 'docm':
    case 'dotx':
    case 'dotm':
    case 'docb':
      return {textColor: 'text-first', icon: ['far', 'file-word'], type: 'documents'};
    case 'xls':
    case 'xlt':
    case 'xlm':
    case 'xlsx':
    case 'xlsm':
    case 'xltx':
    case 'xltm':
    case 'xlsb':
    case 'xla':
    case 'xlam':
    case 'xll':
    case 'xlw':
      return {textColor: 'text-warning', icon: ['far', 'file-excel'], type: 'documents'};
    case 'ppt':
    case 'pot':
    case 'pps':
    case 'pptx':
    case 'pptm':
    case 'potx':
    case 'potm':
    case 'ppam':
    case 'ppsx':
    case 'ppsm':
    case 'sldx':
    case 'sldm':
      return {textColor: 'text-info', icon: ['far', 'file-powerpoint'], type: 'documents'};
    case 'pdf':
      return {textColor: 'text-success', icon: ['far', 'file-pdf'], type: 'documents'};
    case 'jpeg':
    case 'jpg':
    case 'png':
    case 'gif':
    case 'tiff':
    case 'psd':
    case 'eps':
    case 'ai':
    case 'indd':
    case 'raw':
      return {textColor: 'text-primary', icon: ['far', 'file-image'], type: 'images'};
    case 'aif':
    case 'cda':
    case 'mid':
    case 'midi':
    case 'mp3':
    case 'mpa':
    case 'ogg':
    case 'wav':
    case 'wpla':
      return {textColor: 'text-dark', icon: ['far', 'file-audio'], type: 'audios'};
    case '7z':
    case 'arj':
    case 'deb':
    case 'pkg':
    case 'rar':
    case 'rpm':
    case 'tar.gz':
    case 'z':
    case 'zip':
      return {textColor: 'text-dark', icon: ['far', 'file-archive'], type: 'archives'};
    case '3g2':
    case '3gp':
    case 'avi':
    case 'flv':
    case 'h264':
    case 'm4v':
    case 'mkv':
    case 'mov':
    case 'mp4':
    case 'mpg':
    case 'mpeg':
    case 'rm':
    case 'swf':
    case 'vob':
    case 'wmv':
      return {textColor: 'text-secondary', icon: ['far', 'file-video'], type: 'videos'};
    default:
      return {textColor: 'text-danger', icon: ['far', 'file-excel'], type: 'divers'};
  }
}


// https://material-ui.com/components/lists/#simple-list
function Document(props) {

  const {
    canEdit, documents, count, clearCacheDocument,
    fetchDocuments, isFetching, pageSize, page, updateDocument, deleteSuccess,
  } = props;

  const [status, setStatus] = useState(queryString.parse(props.location.search).status || "AC");
  const [open, setOpen] = useState(false);
  // document to delete
  const [document, setDocument] = useState({});
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [title, setTitle] = useState('Fichiers Actuels');
  const [query, setQuery] = useState(paginationState.search);
  const [value, setValue] = useState(0);
  const [tri, setTri] = useState('id,asc');

  const handleChangeTri = (event) => {
    const sort = event.target.value;
    setTri(sort);
    if (sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        sort: sortSplit[0],
        order: sortSplit[1],
      })
    }
  };

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  const handleListItemClick = (event, index, title) => {
    setTitle(title);
    if (index === 0) {
      setStatus('AC')
    } else {
      setStatus('EX')
    }
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleQuery = () => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const sortEntities = () => {
    let sort = paginationState.order === 'asc' ? "" : "-";
    fetchDocuments(paginationState.activePage, paginationState.itemsPerPage, `status=${status}`, `${sort}${paginationState.sort}`, paginationState.search);
    let endURL = `?status=${status}&page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (paginationState.search) {
      endURL = `?status=${status}&page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage + 1
    });
  };

  const handleChangePagination = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage
    });
  };

  const handleChangeRowsPerPage = (event) => {
    const rowPerPage = parseInt(event.target.value, 10);
    setPaginationState({
      ...paginationState,
      itemsPerPage: rowPerPage,
      activePage: 1,
    });
  };

  const sort = p => () => {
    const order = paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc';
    setTri(`${p},${order}`);
    setPaginationState({
      ...paginationState,
      order: order,
      sort: p,
    });
  };

  useEffect(() => {
    return () => {
      clearCacheDocument();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search, status]);


  useEffect(() => {
    if (deleteSuccess) {
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [deleteSuccess]);

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
        search,
      });
    } else {
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        search
      });
      setQuery(search);
    }
    setStatus(queryString.parse(props.location.search).status || "AC")
  }, [props.location.search]);


  const createNew = () => {
    props.history.push('/document/create');
  };

  const handleEdit = (id) => {
    props.history.push(`/document/${id}/edit`);
  };

  const handleDelete = (document) => {
    setDocument(document);
    setOpen(true);
  };

  const deleteDocument = document => {
    if (document.status === 'AC') {
      const formData = new FormData();
      formData.append('status', 'EX');
      updateDocument(document.id, formData);
    }
  };

  const handleValue = () => {
    if (value === 0) {
      setValue(1);
    } else {
      setValue(0);
    }
  };
  const getAlert = (
    <div className="d-flex flex-grow-1 justify-content-center">
      <div className="d-flex align-self-center">
        <Alert label="Pas de documents trouvés"/>
      </div>
    </div>
  );

  return (
    <Fragment>
      <DeleteDialog
        title={"Êtes-vous sûr de vouloir de mettre ce document a la liste des documents à périmés"}
        open={open}
        object={document}
        handleClose={() => setOpen(false)}
        deleteObject={deleteDocument}
        label={document.description}
      />
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="d-flex bg-secondary d-lg-none p-4 order-0 justify-content-between align-items-center">
          <Fab onClick={toggleSidebarMenu} size="small" color="primary">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']}/>
          </Fab>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__sm',
            {'layout-sidebar-open': isSidebarMenuOpen}
          )}>
          <div className="p-4">
            <Button
              variant="contained"
              size="small"
              onClick={createNew}
              color="secondary"
              className="w-100">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'upload']}/>
              </span>
              <span className="btn-wrapper--label">Ajouter un document</span>
            </Button>
          </div>
          <PerfectScrollbar className="px-4">
            <List>
              <Typography
                component="div"
                className="d-flex text-uppercase text-black-50 pb-1 align-items-center">
                <div className="font-size-xs">Liste des documents</div>
              </Typography>
              <ListItem
                selected={status === 'AC'}
                onClick={(event) => handleListItemClick(event, 0, 'Fichiers Actuels')}
                button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="mx-auto text-success"
                  />
                </span>
                Fichiers Actuels
              </ListItem>
              <ListItem
                selected={status === 'EX'}
                onClick={(event) => handleListItemClick(event, 1, 'Fichiers périmés')}
                button className="rounded-sm pl-0">
                <span className="nav-link-icon opacity-4">
                  <FontAwesomeIcon
                    icon={['far', 'trash-alt']}
                    className="mx-auto text-danger"
                  />
                </span>
                Fichiers périmés
              </ListItem>
            </List>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main bg-secondary">
          <div>
            <div className="px-5 py-4 bg-light text-center text-xl-left">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={7}>
                  <div>
                    <TextField
                      value={query}
                      onChange={handleInput}
                      margin="dense"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon/>
                          </InputAdornment>
                        )
                      }}
                    />
                    <Button variant="contained" color="primary" onClick={handleQuery} className="m-2 ml-3">
                      Rechercher
                    </Button>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className="d-flex align-items-center justify-content-start justify-content-xl-end">
                  <div className="mx-auto mx-xl-0">
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <FormControl fullWidth size="small" className="m-2" variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">Trier par</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Trier par"
                            value={tri}
                            onChange={handleChangeTri}
                          >
                            <MenuItem value={'id,asc'}>Id : croissant</MenuItem>
                            <MenuItem value={'id,desc'}>Id : décroissant</MenuItem>
                            <MenuItem value={'code,asc'}>Code : croissant</MenuItem>
                            <MenuItem value={'code,desc'}>Code : décroissant</MenuItem>
                            <MenuItem value={'version,asc'}>Version : croissant</MenuItem>
                            <MenuItem value={'version,desc'}>Version : décroissant</MenuItem>
                            <MenuItem value={'docFile,asc'}>Nom : croissant</MenuItem>
                            <MenuItem value={'docFile,desc'}>Nom : décroissant</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <Tooltip arrow title={value !== 0 ? 'Grille' : 'Tableau'}>
                          <Button
                            // variant="outlined"
                            color="inherit"
                            onClick={handleValue}
                            className="text-facebook d-40 p-0 m-2">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={value === 0 ? ['fas', 'th'] : ['fas', 'table']}
                              className="font-size-lg"
                            />
                          </span>
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="divider bg-dark opacity-2"/>
          </div>
          {isFetching ? <SuspenseLoading/> :
            documents.length > 0 ?
              (<PerfectScrollbar>
                <div className="px-5">
                  <h5 className="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">
                    {title}
                  </h5>
                  <Fragment>
                    {value === 0 ?
                      <Fragment>
                        <DocumentList
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          documents={getDisplayDocument(documents)}/>
                      </Fragment>
                      :
                      <div className="example-card-seamless mb-4-spacing">
                        <Card className="card-box mb-4">
                          <div className="card-header pr-2">
                            <div className="card-header--title">Documents status</div>
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
                              <DocumentTable
                                documents={getDisplayDocument(documents)}
                                canEdit={canEdit}
                                sort={sort}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                              />
                            </div>
                          </CardContent>
                          <div className="card-footer p-1 bg-neutral-danger">
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 25]}
                              component="div"
                              count={count}
                              rowsPerPage={pageSize}
                              page={page - 1}
                              onChangePage={handleChangePage}
                              onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                          </div>
                        </Card>
                      </div>}
                  </Fragment>
                </div>
              </PerfectScrollbar>) :
              <div className="d-flex align-items-center flex-grow-1 justify-content-center py-3">
                <Alert label=" Pas de documents trouvés"/>
              </div>
          }
          {value === 0 && !isFetching && documents.length > 0 &&
          <Pagination
            className="d-flex justify-content-center mb-4"
            variant="outlined"
            color="primary"
            shape="rounded"
            count={Math.ceil(count / pageSize)}
            page={page}
            onChange={handleChangePagination}
          />
          }
        </div>
        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </Fragment>
  );
}

Document.prototype = {
  documents: PropTypes.array.isRequired,
  nextPageUrl: PropTypes.string,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired,
  pageSize: PropTypes.number.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  fetchDocuments: PropTypes.func.isRequired,
  updateDocument: PropTypes.func.isRequired,
  clearCacheDocument: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    pagination: {documents},
    entity: {document}
  } = state;
  const listDocument = Selector.getDocumentsPage(state);

  return {
    documents: listDocument,
    nextPageUrl: documents.nextPageUrl,
    page: documents.page,
    count: documents.count,
    isFetching: documents.isFetching,
    canEdit: state.auth.user.userProfile && state.auth.user.userProfile.is_manager,
    pageSize: documents.pageSize,
    deleteSuccess: document.deleteSuccess,
    updateSuccess: document.updateSuccess,
  };
};

export default connect(mapStateToProps, {fetchDocuments, updateDocument, clearCacheDocument})(Document);

