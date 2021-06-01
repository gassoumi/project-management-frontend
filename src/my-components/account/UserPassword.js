import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

export default function UserPassword() {
    return (
        <div>
            <MuiAlert className="mb-4" severity="info">
                <div className="d-flex align-items-center align-content-center">
                    <span>
                        <strong className="d-block">User and password to test with!</strong>
                            username : user <br />
                            password : 123456
                        </span>
                </div>
            </MuiAlert>
        </div>
    )
}
