import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';


const styles1 = theme => ({
  success: {
    backgroundColor: theme.palette.primary.main,
  },
  msg: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  icon: {
    color: 'white'
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;

  return (
    <SnackbarContent
      className={classes.success}
      aria-describedby="client-snackbar"
      message={<span className={classes.msg} id="message-id">Event Deleted</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default withStyles(styles1)(MySnackbarContent);
