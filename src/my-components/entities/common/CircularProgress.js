import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function MyCircularProgress() {
    return (
        <div className="d-flex flex-fill justify-content-center m-2">
            <CircularProgress disableShrink/>
        </div>
    );
}

export default MyCircularProgress;