import React, { Fragment } from 'react';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import Example from './example';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </Fragment>
  );
}
