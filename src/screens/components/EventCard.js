import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router'
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getEventPlaylists } from '../../server/getEventPlaylists';

const styles = theme => ({
  card: {
    width: 230,
    // minHeight: 220
  },
  media: {
    height: 220,
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.light,
    height: 69
  },
});


class EventCard extends Component {

  onCardClick = async () => {
    const { _id } = this.props.item;
    const playlistsList = await getEventPlaylists(_id);
    this.props.store.setPlaylistsList(playlistsList);
    this.props.history.push(`/playlists/${_id}`);
  }

  render() {
    const { classes, item, time } = this.props;
    const { event_img: imageUrl, event_name: eventName } = item;
    return (
      <Grid item>
        <Fade in={true} timeout={time * 1500}>
          <MuiCard className={classes.card} onClick={this.onCardClick}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageUrl}
                title={eventName}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6">
                  {eventName}
                </Typography>
                <Typography component="p">
                  this is my amazing event playlist
          </Typography>
              </CardContent>
            </CardActionArea>
          </MuiCard>
        </Fade>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(inject('store')(observer(EventCard))));