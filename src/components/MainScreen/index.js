import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './components/Card';
import Header from './components/Header';
import Loader from '../common/Loader';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
    overflow: 'scrollable',
    paddingLeft: 65,
    paddingRight: 65,
  },
  gridStyle: {
    marginTop: 20,
    paddingLeft: 50
  }
})


class MainScreen extends React.Component {
  getEventsCards = () => {
    const { eventsList } = this.props.store;
    return eventsList.map(e => <Card item={e} key={e._id} />)
  }

  render() {
    const { classes, store } = this.props;
    const { isLoading } = store;
    return (
      <div className={classes.root}>
        <Header />
        <Grid className={classes.gridStyle} container spacing={Number(40)}>
          {isLoading ? <Loader /> : this.getEventsCards()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(MainScreen)));