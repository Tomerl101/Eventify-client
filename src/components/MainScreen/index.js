import React from 'react';
import { inject, observer } from 'mobx-react';
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


class MainScreen extends React.Component {


  getEventsCards = () => {
    const { eventsList } = this.props.store;
    return eventsList.map(e => <Card item={e} key={e._id} />)
  }
  // make loading inside the main component
  render() {
    const { classes, store } = this.props;
    const { isLoading } = store;
    return (
      isLoading ? null :
        <div className={classes.root}>
          <Divider />
          <Row className={classes.row} justify='space-between'>
            <Title />
            <NavButtons />
          </Row>
          <Divider />
          <Grid container justify='center' spacing={Number(40)}>
            {this.getEventsCards()}
          </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(MainScreen)));