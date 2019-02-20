import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EventCard from './components/EventCard';
import AddEventCard from './components/AddEventCard';
import Header from './components/Header';
import Loader from '../components/common/Loader';
import EventModal from '../components/common/Modal';
import { styles } from './style';

class EventScreen extends React.Component {
  getEventsCards = () => {
    const { eventsList } = this.props.store;
    return eventsList.map(e => <EventCard item={e} key={e._id} />)
  }

  render() {
    const { classes, store } = this.props;
    const { isLoading } = store;
    return (
      <div className={classes.root}>
        <Header />
        <Grid className={classes.gridStyle} justify='center' container spacing={Number(40)}>
          <AddEventCard />
          {isLoading ? <Loader /> : this.getEventsCards()}
          <EventModal />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(EventScreen)));