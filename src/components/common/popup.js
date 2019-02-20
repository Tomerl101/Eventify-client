import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarWrapper from './snackBar';


class Popup extends Component {
  handleClose = () => {
    const { setIsPopUpOpen } = this.props.store;
    setIsPopUpOpen(false);
  };

  render() {
    const { store,message } = this.props;
    const { isPopUpOpen } = store;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isPopUpOpen}
        autoHideDuration={2000}
        onClose={this.handleClose}
      >
        <SnackBarWrapper
          onClose={this.handleClose}
          variant="success"
          message={message}
        />
      </Snackbar>
    )
  }
}

export default withStyles()(inject('store')(observer(Popup)));
