import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NotFound = ({ location }) => (
    <div>
        <Dialog
            open="true"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Page Not Found"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                No match found for the page you are looking
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button color="primary" href="/">
                Go to Home
            </Button>
            </DialogActions>
        </Dialog>
    </div>
);

export default NotFound
