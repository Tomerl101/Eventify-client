import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getPlaylistTracks } from '../../server/getPlaylistTracks';

const styles = theme => ({
  card: {
    width: 215,
    width: 215,
    borderRadius: 1
  },
  media: {
    height: 215,
  }
});


class PlaylistCard extends Component {

  onCardClick = async () => {
    const { id } = this.props.item;
    const tracksList = await getPlaylistTracks(id);
    this.props.store.setTracksList(tracksList.tracks.items);
    this.props.history.push(`/tracks/${id}`);
  }

  render() {
    const { classes, item } = this.props;
    const { images, name: playlistName } = item;
    const { url } = images[0]

    return (
      <Grid item>
        <MuiCard className={classes.card} onClick={this.onCardClick}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={url}
            />
          </CardActionArea>
        </MuiCard>
        <Typography gutterBottom variant="body2" component="p">
          {playlistName}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(inject('store')(observer(PlaylistCard))));