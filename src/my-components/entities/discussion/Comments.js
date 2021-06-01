import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  inputComment: {
    marginTop: theme.spacing(2),
  },
  buttonsEdit: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function EditComment(props) {

  const classes = useStyles();
  const { comment, handleCancelEdit, updateComment, idDiscussion } = props;
  const oldInputComment = comment.description;

  const [inputComment, setInputComment] = useState(comment.description);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputComment) {
      const newComment = {
        discussion: idDiscussion,
        description: inputComment,
      };
      updateComment(comment.id, newComment);
    }
  };

  return (
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
        <div className={classes.buttonsEdit}>
          <Button disabled={!inputComment || oldInputComment === inputComment} type="submit"
            variant="contained"
            color="primary">
            Save
          </Button>
          <Button variant="contained"
            color={"default"}
            onClick={handleCancelEdit}
          >
            Cancel
          </Button>
        </div>
      </Grid>
    </form>
  )
}

EditComment.propTypes = {};

// TODO
// https://codesandbox.io/s/mui-theme-css-hover-example-n8ou5?file=/demo.js:554-576
function Comments(props) {
  const { comments, authenticatedUser, updateComment, idDiscussion, deleteCommentById } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [newComments, setNewComments] = useState(
    // () => {
    //     return comments.map(comment => ({...comment, show: false, edit: false}));
    // }
    []
  );

  useEffect(() => {
    const newArray = comments.map(comment => ({ ...comment, show: false, edit: false }));
    setNewComments(newArray);
  }, [comments]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnMouseEnter = (comment) => {
    const newArray = newComments.map(item => {
      return item.id === comment.id ? { ...item, show: true } : { ...item, show: false };
    });
    setNewComments(newArray);
  };

  const handleOnMouseLeave = () => {
    const newArray = newComments.map(item => ({ ...item, show: false }));
    setNewComments(newArray);
  };

  const handleEdit = (comment) => {
    handleClose();
    const newArray = newComments.map(item => {
      return item.id === comment.id ? { ...item, edit: true } : { ...item, edit: false };
    });
    setNewComments(newArray);
  };

  const handleCancelEdit = () => {
    const newArray = newComments.map(item => ({ ...item, edit: false }));
    setNewComments(newArray);
  };

  const handleDelete = comment => {
    handleClose();
    deleteCommentById(comment);
  };

  const getComment = (comment) => {
    if (comment.edit) {
      return (
        <EditComment
          idDiscussion={idDiscussion}
          updateComment={updateComment}
          key={comment.id}
          comment={comment}
          handleCancelEdit={handleCancelEdit}
        />
      )
    }
    // else
    return (
      <div onMouseEnter={() => handleOnMouseEnter(comment)}
        onMouseLeave={handleOnMouseLeave}
        key={comment.id}>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <div className="d-flex">
              <div className="avatar-icon-wrapper avatar-icon-md mr-3 pt-1">
                <div className="avatar-icon circle">
                  {/* <img alt="..." src={comment.user.userProfile.photo}/> */}
                  <Avatar src={comment.user && comment.user.userProfile &&
                    comment.user.userProfile.photo && comment.user.userProfile.photo || null}>
                    {comment.user.username.charAt(0).toUpperCase()}
                  </Avatar>
                </div>
              </div>
              <div className="d-flex flex-column">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold"
                  title="...">
                  {comment.user.username}
                </a>
                <Typography variant={"caption"} gutterBottom>
                  {moment(comment.modified_at).fromNow()}
                </Typography>
                <Typography variant={"body2"} gutterBottom>
                  {comment.description}
                </Typography>
              </div>
            </div>
          </Grid>
          {
            (authenticatedUser.id === comment.user.id && comment.show) &&
            (
              <Grid container alignItems={"center"} justify={"flex-end"} item xs={1}>
                <Grid item xs={12}>
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleEdit(comment)}>
                      <ListItemIcon>
                        <EditIcon fontSize={"small"} />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(comment)}>
                      <ListItemIcon>
                        <DeleteIcon fontSize={"small"} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </div>
    )
  };


  return (
    <Fragment>
      {newComments.map(comment => getComment(comment))}
    </Fragment>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  authenticatedUser: PropTypes.object.isRequired,
  updateComment: PropTypes.func.isRequired,
  idDiscussion: PropTypes.string.isRequired,
  deleteCommentById: PropTypes.func.isRequired
};

export default Comments;
