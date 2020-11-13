import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchDiscussions, fetchTopDiscussions, clearCacheDiscussion} from "../../../redux";
import DiscussionDisplay from './DiscussionList';
import Pagination from '@material-ui/lab/Pagination';
import Typography from "@material-ui/core/Typography";
import DiscussionDialogForm from './DiscussionDialogForm';
import Card from "@material-ui/core/Card";
import AddNew from '../common/AddNew';
import {SuspenseLoading} from "../../../Routes";
import DiscussionList from "../../dashboard/DiscussionList";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import Alert from '../common/Alert';


function Discussion(props) {

  const {
    list, count, nextPageUrl, updateSuccess, topDiscussion, clearCacheDiscussion,
    fetchDiscussions, isFetching, pageSize, page, isUpdating, fetchTopDiscussions,
  } = props;

  const [open, setOpen] = useState(false);
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, pageSize), props.location.search)
  );
  const [query, setQuery] = useState(paginationState.search);

  const handleQuery = () => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const handleChange = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage
    });
  };

  const sortEntities = () => {
    fetchDiscussions(paginationState.activePage, paginationState.itemsPerPage, paginationState.search);
    let endURL = `?page=${paginationState.activePage}`;
    if (paginationState.search) {
      endURL = `?page=${paginationState.activePage}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.itemsPerPage, paginationState.search]);

  useEffect(() => {
    fetchTopDiscussions(1, 5);
    return () => {
      clearCacheDiscussion();
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      setOpen(false);
      fetchTopDiscussions(1, 5);
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [updateSuccess]);

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
    }
    setQuery(search);
  }, [props.location.search]);

  return (
    <>
      <DiscussionDialogForm
        isUpdating={isUpdating}
        isNew
        discussion={{}}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <Card className="card-box mb-4">
        <AddNew
          label={"Discussions"}
          queryValue={query}
          handleAdd={() => setOpen(true)}
          count={count}
          buttonLabel="Ajouter une discussion"
          handleInput={(value) => setQuery(value)}
          canEdit={true}
          handleQuery={handleQuery}/>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {isFetching ? <SuspenseLoading/> :
            list.length > 0 ?
              (<Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card className="card-box mb-4">
                    <DiscussionDisplay
                      discussions={list}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <div
                    className="d-block align-items-end  pt-0 pr-3 pl-3 pb-3 d-md-flex justify-content-between text-center text-md-left">
                    <div className="d-flex align-self-center flex-column align-items-center m-1">
                      <Typography
                        className="text-body"
                        variant={"body1"}
                      >
                        {`Affichage ${count === 0 ? 0 : (page - 1) * pageSize + 1}
                                                -${nextPageUrl == null ? count : page * pageSize}
                                                 De ${count} Discussion(s)`}
                      </Typography>
                    </div>
                    <div className="d-block d-flex flex-column align-items-center">
                      <Pagination
                        variant="outlined"
                        color="primary"
                        shape="rounded"
                        count={Math.ceil(count / pageSize)}
                        page={page}
                        onChange={handleChange}/>
                    </div>
                  </div>
                </Grid>
              </Grid>) :
              <Alert label="Pas de discussions trouvées"/>
          }
        </Grid>
        <Grid item xs={12} md={4}>
          <DiscussionList title={'Top Discussions'} items={topDiscussion}/>
        </Grid>
      </Grid>
    </>
  );
}

Discussion.propTypes = {
  topDiscussion: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  nextPageUrl: PropTypes.string,
  fetchDiscussions: PropTypes.func.isRequired,
  fetchTopDiscussions: PropTypes.func.isRequired,
  clearCacheDiscussion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    pagination: {discussions},
  } = state;
  const listDiscussion = Selector.getDiscussionsPage(state);
  const topDiscussion = Selector.getTopDiscussionPage(state);
  console.log(topDiscussion);
  return {
    topDiscussion,
    list: listDiscussion,
    nextPageUrl: discussions.nextPageUrl,
    page: discussions.page,
    count: discussions.count,
    pageSize: discussions.pageSize,
    updateSuccess: state.entity.discussion.updateSuccess,
    isUpdating: state.entity.discussion.isUpdating,
    isFetching: discussions.isFetching,
  };
};

export default connect(mapStateToProps, {fetchDiscussions, fetchTopDiscussions, clearCacheDiscussion})(Discussion);

