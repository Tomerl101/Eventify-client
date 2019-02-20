import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlaylistCard from './components/PlaylistCard';
import Header from './components/Header';
import Loader from '../components/common/Loader';
import Popup from '../components/common/popup';
import { styles } from './style';



class PlaylistsScreen extends React.Component {
  getPlaylistCards = () => {
    const { playlistsList } = this.props.store;
    return playlistsList.map(p => <PlaylistCard item={p} key={p.id} />)
  }

  render() {
    const { classes, store } = this.props;
    const { isLoading } = store;
    return (
      <div className={classes.root}>
        <Header />
        <Grid className={classes.gridStyle} container spacing={Number(40)}>
          {isLoading ? <Loader /> : this.getPlaylistCards()}
          <Popup />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(PlaylistsScreen)));