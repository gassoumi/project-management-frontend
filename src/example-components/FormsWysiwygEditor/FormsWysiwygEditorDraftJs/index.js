import React, { Fragment, Component } from 'react';

import { TextField } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export default class LivePreviewExample extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <Fragment>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />

        <div className="divider my-4" />

        <TextField
          type="textarea"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </Fragment>
    );
  }
}
