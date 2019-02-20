import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventForm from './EventForm';
import { Divider } from '@material-ui/core';

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

  handleCreate = async () => {
    const { setIsPopUpOpen, setIsModalAddEventOpen, createEvent } = this.props.store;
    await createEvent();
    setIsPopUpOpen(true);
    setIsModalAddEventOpen(false);
  }

  render() {
    const { isModalAddEventOpen } = this.props.store;

    return (
      <Dialog
        open={isModalAddEventOpen}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogTitle>
            Create Event
            </DialogTitle>
          <Divider />
          <EventForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
            </Button>
          <Button onClick={this.handleCreate} color="primary">
            Create
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(EventModal)));

