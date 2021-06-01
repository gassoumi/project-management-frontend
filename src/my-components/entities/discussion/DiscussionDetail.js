import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Selector } from "../index";
import { connect } from "react-redux";
import {
  fetchDiscussion, fetchCommentsByDiscussion, createComment,
  clearCacheComment, updateComment, deleteCommentById, fetchTopDiscussions,
} from "../../../redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { SuspenseLoading as Loading } from "../../../Routes";
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import DiscussionDialogForm from "./DiscussionDialogForm";
import DiscussionList from "../../dashboard/DiscussionList";
import Comments from './Comments';
import ReactMarkdown from 'react-markdown';
import Alert from '../common/Alert';
import ElementNotFound from '../../common/ElementNotFound';

// https://stackoverflow.com/questions/23763482/text-not-wrapping-inside-a-div-element
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(1),
    // wordBreak: 'break-all',
    // wordWrap: 'break-word',
    // whiteSpace: 'pre-line',

  },
  comments: {
    paddingLeft: theme.spacing(2),
    // whiteSpace: 'pre-line',
  },
  inputComment: {
    marginTop: theme.spacing(2),
  },
  circularProgress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    justifyContent: 'center'
  },
  buttons: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    // '& > *': {
    //     margin: theme.spacing(1),
    // },
  },
}));


function DiscussionDetail(props) {
  const id = props.match.params.id;
  const {
    isDiscussionLoaded, discussion, fetchDiscussion, createComment, nextPageUrl, page, count,
    fetchCommentsByDiscussion, comments, isFetchingComments, displayEditDiscussionButton, error,
    updateSuccessComment, updateSuccessDiscussion, authenticatedUser, clearCacheComment, isUpdating,
    updateComment, deleteCommentById, deleteSuccessComment, fetchTopDiscussions, topDiscussion,
  } = props;

  const classes = useStyles();

  const [inputComment, setInputComment] = useState("");
  const [pageToFetch, setPageToFetch] = useState(1);
  const [open, setOpen] = useState(false);


  // TODO how to use useState with prevState
  const [loading, setLoading] = React.useState(false);
  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  useEffect(() => {
    clearCacheComment();
    fetchDiscussion(id);
    fetchTopDiscussions(1, 5);
  }, [id]);

  // we fetch discussion first
  useEffect(() => {
    if (isDiscussionLoaded || updateSuccessComment || deleteSuccessComment) {
      fetchCommentsByDiscussion(1, 5, id);
      if (updateSuccessComment) {
        setInputComment('');
      }
    }
  }, [isDiscussionLoaded, updateSuccessComment, deleteSuccessComment]);

  useEffect(() => {
    if (updateSuccessDiscussion) {
      setOpen(false);
    }
  }, [updateSuccessDiscussion]);

  const handleLoadMoreComments = () => {
    if (nextPageUrl != null) {
      setPageToFetch(page + 1);
      fetchCommentsByDiscussion(page + 1, 5, id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputComment) {
      const comment = {
        discussion: id,
        description: inputComment,
      };
      createComment(comment);
    }
  };

  const getProgressElement = () => (
    <div className={classes.circularProgress}>
      <CircularProgress disableShrink />
    </div>
  );

  // throw new Error("hello world");
  if (error) {
    if ((error.status && error.status === 404)) {
      return (
        <>
          {/*<Redirect from={props.location.path} to={'/notFound'}/>*/}
          <ElementNotFound />
          {/*<Route path='*' exact={true} component={PagesError404}/>*/}
        </>
      )
    } else {
      return <Alert label={error} />
    }
  }

  return (
    <Grid container spacing={3}>
      <DiscussionDialogForm
        isUpdating={isUpdating}
        isNew={false}
        discussion={discussion}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <Grid item xs={12} md={8}>
        {!isDiscussionLoaded ? <Loading /> :
          <Paper className={classes.paper} elevation={2}>
            <Grid container item xs={12}>
              <Grid container justify={"flex-start"} item xs={8}>
                <Typography variant={"h5"} gutterBottom={true}>
                  {discussion.object}
                </Typography>
              </Grid>
              {displayEditDiscussionButton &&
                <Grid item xs={4} container justify={"flex-end"}>
                  <Grid item>
                    <Button startIcon={<EditIcon />}
                      onClick={() => setOpen(true)}
                      type="button"
                      variant="contained"
                      color={"secondary"}
                    >
                      Edit
                  </Button>
                  </Grid>
                </Grid>
              }
            </Grid>
            <Typography color={"textSecondary"} paragraph>
              {`${moment(discussion.created_at).format('LL')} 
                                 By ${discussion.user.username}
                                 `}
            </Typography>
            <Divider />
            {/*<Typography*/}
            {/*  className={classes.description} variant={"body1"} paragraph*/}
            {/*  gutterBottom={true}>*/}
            {/*  {discussion.description}*/}
            {/*</Typography>*/}
            <ReactMarkdown className={classes.description}>
              {discussion.description}
            </ReactMarkdown>

            <Divider />
            {
              isFetchingComments && pageToFetch === 1 ?
                getProgressElement() :
                (<>
                  <Typography variant={"h6"} className={"pt-2"} gutterBottom>
                    {`${count} comments`}
                  </Typography>
                  <div className={classes.comments}>
                    <form onSubmit={handleSubmit} className={classes.inputComment} noValidate
                      autoComplete="off">
                      <TextField
                        fullWidth
                        value={inputComment}
                        onChange={(e) => setInputComment(e.target.value)}
                        name="commentInput"
                        placeholder="Add a comment"
                        multiline
                      />
                      <Grid container justify={"flex-end"} item xs={12}>
                        <div className={classes.buttons}>
                          <Button disabled={!inputComment} type="submit"
                            variant="contained"
                            color="primary">
                            Add a comment
                          </Button>
                        </div>
                      </Grid>
                    </form>
                    <Grid item xs={12}>
                      <Comments
                        deleteCommentById={deleteCommentById}
                        idDiscussion={id}
                        updateComment={updateComment}
                        comments={comments}
                        authenticatedUser={authenticatedUser}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {
                        isFetchingComments ? getProgressElement() :
                          (nextPageUrl != null && <Button
                            className="mt-2"
                            fullWidth
                            onClick={handleLoadMoreComments}
                            variant="contained"
                            color="secondary">
                            Load more comments
                          </Button>)
                      }
                    </Grid>
                  </div>
                </>)
            }
          </Paper>}

      </Grid>
      <Grid item xs={12} md={4}>
        <DiscussionList title={'Top Discussions'} items={topDiscussion} />
      </Grid>
    </Grid>
  )

}

DiscussionDetail.propTypes = {
  topDiscussion: PropTypes.array.isRequired,
  isDiscussionLoaded: PropTypes.bool.isRequired,
  discussion: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  displayEditDiscussionButton: PropTypes.bool.isRequired,
  isFetchingComments: PropTypes.bool.isRequired,
  updateSuccessComment: PropTypes.bool.isRequired,
  deleteSuccessComment: PropTypes.bool.isRequired,
  nextPageUrl: PropTypes.string,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  updateSuccessDiscussion: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const {
    pagination: { comments },
  } = state;

  const topDiscussion = Selector.getTopDiscussionPage(state);
  const isLoaded = state.entity.discussion.isLoaded;
  const error = state.entity.discussion.error;
  const discussion = isLoaded ? Selector.getDiscussionById(state, id) : {};
  const listComments = Selector.getCommentsByIdDiscussion(state, id);

  // we don't need to check the state.auth.user.id
  // because this user is already authenticated
  const displayEditDiscussionButton = (discussion && discussion.user && discussion.user.id) ?
    discussion.user.id === state.auth.user.id : false;
  return {
    topDiscussion,
    discussion,
    error,
    isDiscussionLoaded: isLoaded,
    comments: listComments,
    isFetchingComments: comments.isFetching,
    updateSuccessComment: state.entity.comment.updateSuccess,
    deleteSuccessComment: state.entity.comment.deleteSuccess,
    nextPageUrl: comments.nextPageUrl,
    page: comments.page,
    count: comments.count,
    updateSuccessDiscussion: state.entity.discussion.updateSuccess,
    displayEditDiscussionButton,
    authenticatedUser: state.auth.user,
    isUpdating: state.entity.discussion.isUpdating,
  };
};

const mapDispatchToProps = ({
  fetchDiscussion,
  fetchCommentsByDiscussion,
  createComment,
  updateComment,
  deleteCommentById,
  clearCacheComment,
  fetchTopDiscussions,
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionDetail);
