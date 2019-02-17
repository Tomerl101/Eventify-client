import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 4,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <CircularProgress className={classes.progress} />
  );
}

export default withStyles(styles)(CircularIndeterminate);