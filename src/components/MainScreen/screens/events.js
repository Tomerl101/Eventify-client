import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import Header from '../components/Header';
import Loader from '../../common/Loader';
import { styles } from '../style';


class EventScreen extends React.Component {
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

export default withStyles(styles)(inject('store')(observer(EventScreen)));