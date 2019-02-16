import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Row from '../common/row';
import Title from './components/Title';
import NavButtons from './components/NavButtons';
import Card from './components/Card';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
    overflow: 'scrollable',
    paddingLeft: 65,
    paddingRight: 65,
  },
  grow: {
  },
  row: { paddingTop: 25 }
})

class PrimarySearchAppBar extends React.Component {


  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Divider />
        <Row className={classes.row} justify='space-between'>
          <Title />
          <NavButtons />
        </Row>
        <Divider />
        <Grid container justify='center' spacing={Number(40)}>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);