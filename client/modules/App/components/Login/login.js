import React, { PropTypes, Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from 'material-ui';

import styles from './login.css';


export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Log-in</Button>
        <Dialog
					className={styles['login-card']}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log-in</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
						<Button onClick={this.handleClose} color="primary">
              Login
            </Button>
						<div className="login-help">
            <Button onClick={this.handleClose} color="primary">
              Register
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Forgot
            </Button>
						</div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}