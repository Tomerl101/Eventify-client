import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Row from '../common/row';
import Title from './components/Title';
import NavButtons from './components/NavButtons';
import Card from './card';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
    overflow: 'scrollable'
  },
  grow: {
    flexGrow: 1,
  },
  row: { paddingLeft: 65, paddingRight: 65, paddingTop: 25 }
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
        <Row className={classes.row} justify='space-between'>
          <Title />
          <NavButtons />
        </Row>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);