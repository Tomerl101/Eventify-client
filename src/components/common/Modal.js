import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventForm from './EventForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


class EventModal extends Component {
  handleClose = () => {
    const { setIsModalAddEventOpen } = this.props.store;
    setIsModalAddEventOpen(false);
  }

  render() {
    const { isModalAddEventOpen } = this.props.store;
    const { classes } = this.props;

    return (
      <Dialog
        open={isModalAddEventOpen}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            CREATE NEW EVENT
            </DialogContentText>
          <EventForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            CANCEL
            </Button>
          <Button onClick={this.handleClose} color="primary">
            CREATE
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(EventModal)));

